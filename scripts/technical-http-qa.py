"""Read-only all-route SEO crawl. BASE and OUT are CLI arguments."""
import concurrent.futures, collections, json, pathlib, sys, time, urllib.parse
import requests
from bs4 import BeautifulSoup
base=sys.argv[1].rstrip('/')
out=pathlib.Path(sys.argv[2]); out.mkdir(parents=True,exist_ok=True)
def get(path):
    start=time.monotonic(); r=requests.get(urllib.parse.urljoin(base+'/',path),timeout=60)
    return r,round(time.monotonic()-start,3)
sitemap,_=get('/sitemap.xml'); robots,_=get('/robots.txt')
assert sitemap.status_code==200, f'sitemap status {sitemap.status_code}'
paths=sorted(set(urllib.parse.urlsplit(x.text).path for x in BeautifulSoup(sitemap.text,'xml').find_all('loc')))
assert paths
rows=[]; targets=set()
def crawl(path):
 r,seconds=get(path); soup=BeautifulSoup(r.text,'html.parser'); head=soup.head
 def meta(key):
  return [x.get('content') for x in soup.select(f'meta[name="{key}"],meta[property="{key}"]')]
 canonical=[x.get('href') for x in soup.select('link[rel="canonical"]')]
 title=soup.title.get_text() if soup.title else None
 description=meta('description'); h1=[x.get_text(' ',strip=True) for x in soup.select('h1')]
 graphs=[json.loads(x.string or x.get_text()) for x in soup.select('script[type="application/ld+json"]')]
 errors=[]
 for condition,name in [(r.status_code==200,'status'),(canonical==['https://shinobiseo.com'+path],'canonical'),(len(h1)==1,'one H1'),(bool(title),'title'),(len(description)==1 and bool(description[0]),'description'),(meta('robots')==['index, follow'],'robots'),(meta('og:url')==canonical,'og:url'),(meta('og:title')==[title],'og:title'),(meta('twitter:title')==[title],'twitter:title'),(meta('og:description')==description,'og:description'),(meta('twitter:description')==description,'twitter:description'),(len(graphs)==1,'one graph')]:
  if not condition: errors.append(name)
 bodytext=soup.body.get_text(' ',strip=True) if soup.body else ''
 for graph in graphs:
  for node in graph.get('@graph',[]):
   if node.get('@type')=='FAQPage':
    for q in node['mainEntity']:
     if q['name'] not in bodytext or q['acceptedAnswer']['text'] not in bodytext: errors.append('FAQ not visible')
   if node.get('@type')=='Article' and node['headline'] not in h1: errors.append('article headline')
 if path=='/' and (not head or [x.get('content') for x in head.select('meta[name="google-site-verification"]')]!=['oMcrKoNHGoaMhLUcbbfnAo918wSq0rVuQqD4qv5BajI']): errors.append('GSC head token')
 urls=[]
 for node,attr in [('a','href'),('img','src'),('script','src'),('link','href'),('video','src'),('source','src'),('video','poster')]:
  for el in soup.select(f'{node}[{attr}]'):
   value=el.get(attr); u=urllib.parse.urlsplit(urllib.parse.urljoin(base+path,value))
   if u.hostname in ['shinobiseo.com','shinobiseo.netlify.app',urllib.parse.urlsplit(base).hostname]:
    urls.append(urllib.parse.urlunsplit((u.scheme,u.netloc,u.path,u.query,'')))
 (out/(path.strip('/').replace('/','__') or 'home')).with_suffix('.html').write_text(r.text)
 return dict(path=path,status=r.status_code,seconds=seconds,title=title,description=description,canonical=canonical,h1=h1,robots=meta('robots'),graphs=graphs,urls=urls,errors=errors,article_sha=[x.get('data-article-sha256') for x in soup.select('[data-article-sha256]')])
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
 for row in pool.map(crawl,paths): rows.append(row); targets.update(row['urls'])
pageurls={base+p for p in paths}
def target(url):
 try:
  r=requests.get(url,timeout=60,stream=True); result=dict(url=url,status=r.status_code,final=r.url,content_type=r.headers.get('content-type'),bytes=r.headers.get('content-length')); r.close(); return result
 except Exception as e: return dict(url=url,status=0,error=str(e))
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool: links=list(pool.map(target, sorted(targets-pageurls)))
duplicates={k:v for k,v in collections.Counter(r['title'] for r in rows).items() if v>1}
result=dict(base=base,paths=paths,count=len(paths),robots_status=robots.status_code,robots=robots.text,rows=rows,targets=links,duplicate_titles=duplicates,failed_pages=[r['path'] for r in rows if r['errors']],failed_targets=[r for r in links if r['status']>=400 or r['status']==0])
(out/'results.json').write_text(json.dumps(result,indent=2));print(json.dumps({k:result[k] for k in ['count','failed_pages','failed_targets','duplicate_titles']},indent=2))
assert not result['failed_pages'] and not result['failed_targets'] and not duplicates
