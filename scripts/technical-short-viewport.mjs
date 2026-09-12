import { chromium } from 'playwright';
import assert from 'node:assert/strict';
const browser=await chromium.launch({headless:true});
try{for(const viewport of [{width:1280,height:633},{width:390,height:600},{width:1440,height:1000}]){
 const page=await browser.newPage({viewport});await page.goto(process.argv[2],{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
 const boxes=await page.evaluate(()=>({h1:document.querySelector('h1').getBoundingClientRect().toJSON(),header:document.querySelector('header').getBoundingClientRect().toJSON()}));
 console.log(viewport,boxes);assert.ok(boxes.h1.top>=boxes.header.bottom,'H1 must not disappear behind fixed header at short viewport');await page.close();
}}finally{await browser.close();}
