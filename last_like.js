/*
 * last_like.js
 * Copyright (C) 2020 root <root@hawks-vision>
 *
 * Distributed under terms of the MIT license.
 */
var k=document.querySelectorAll('div[data-testid="unlike"]').length;
console.log(k);
var t=setInterval(pageScroll,3000);


function pageScroll(){
if(k==0)
{
console.log(window.pageYOffset);
window.scrollTo({top:window.pageYOffset+1000,left:0,behavior:'auto'});
k=document.querySelectorAll('div[data-testid="unlike"]').length;
console.log(k)
}else{
var loc=document.querySelectorAll('div[data-testid="unlike"]')[0];
  loc.scrollIntoView();
  console.log(loc)
clearInterval(t);
}
}
