import json, pathlib, sys, requests
from bs4 import BeautifulSoup
base=sys.argv[1].rstrip('/'); out=pathlib.Path(sys.argv[2]); results=[]
for path in ['/login','/studio','/work','/shinobi-missing-route-technical-qa','/blog/shinobi-missing-route-technical-qa','/seo-services/shinobi-missing-route-technical-qa','/industries/shinobi-missing-route-technical-qa','/development/shinobi-missing-route-technical-qa','/cases/shinobi-missing-route-technical-qa','/api/auth/get-session']:
 if path in ['/studio','/work']:
  alias=requests.get(base+path+'?utm_source=qa',allow_redirects=False,timeout=60)
  assert alias.status_code==301 and alias.headers.get('location')==('/about' if path=='/studio' else '/seo-services')+'?utm_source=qa',path
  results.append(dict(path=path,status=alias.status_code,location=alias.headers.get('location'))); continue
 r=requests.get(base+path,timeout=60); soup=BeautifulSoup(r.text,'html.parser'); robots=[n.get('content') for n in soup.select('meta[name="robots"]')];canonical=[n.get('href') for n in soup.select('link[rel="canonical"]')]
 results.append(dict(path=path,status=r.status_code,final=r.url,robots=robots,canonical=canonical))
 if 'missing-route' in path: assert r.status_code==404,path
 elif path.startswith('/api/'): assert r.status_code==200 and r.headers.get('content-type','').startswith('application/json'),path
 else: assert r.status_code==200 and robots==['noindex, follow'] and not canonical,path
out.write_text(json.dumps(results,indent=2));print(json.dumps(results,indent=2))
