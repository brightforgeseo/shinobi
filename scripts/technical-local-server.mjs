import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import handler from '../.netlify/functions-internal/server/server.mjs';
const types={'.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.jpg':'image/jpeg','.mp4':'video/mp4','.woff2':'font/woff2'};
http.createServer(async(req,res)=>{
 try {
 const url=new URL(req.url,'http://127.0.0.1:8187');
 const file=path.join(process.cwd(),'dist',url.pathname);
 if(fs.existsSync(file)&&fs.statSync(file).isFile()) {res.setHeader('content-type',types[path.extname(file)]||'application/octet-stream');fs.createReadStream(file).pipe(res);return;}
 const response=await handler(new Request(url,{method:req.method,headers:req.headers}),{});
 res.writeHead(response.status,Object.fromEntries(response.headers));res.end(Buffer.from(await response.arrayBuffer()));
 }catch(e){console.error(e);res.writeHead(500);res.end(String(e));}
}).listen(8187,'127.0.0.1',()=>console.log('READY 8187 compiled Netlify handler'));
