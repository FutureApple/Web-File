"use strict";!function(){function e(e,t,n){return Number(e.getAttribute(t))||n}document.addEventListener("touchmove",function(e){e.preventDefault()});var t=document.getElementById("ribbon"),n={zIndex:e(t,"zIndex",-1),alpha:e(t,"alpha",.6),ribbon_width:e(t,"size",90)},o=document.createElement("canvas"),i="opacity:".concat(n.alpha,";position:fixed;top:0;left:0;z-index:").concat(n.zIndex);o.style.cssText=i,document.getElementsByTagName("body")[0].appendChild(o);var a,c,d,l=o,r=l.getContext("2d"),u=window.devicePixelRatio||1,h=n.ribbon_width,s=Math,x=0,m=2*s.PI,f=s.cos,y=s.random;function b(){for(a=window.innerWidth,c=window.innerHeight,l.width=a*u,l.height=c*u,r.clearRect(0,0,a,c),d=[{x:0,y:.7*c+h},{x:0,y:.7*c-h}];d[1].x<a+h;)g(d[0],d[1])}function g(e,t){r.beginPath(),r.moveTo(e.x,e.y),r.lineTo(t.x,t.y);var n=t.x+(2*y()-.25)*h,o=function e(t){var n=t+(2*y()-1.1)*h;return c<n||n<0?e(t):n}(t.y);r.lineTo(n,o),r.closePath();for(var i=(127*f(x-=m/-50)+128<<16|127*f(x+m/3)+128<<8|127*f(x+m/3*2)+128).toString(16);i.length<6;)i="0"+i;r.fillStyle="#"+i,r.fill(),d[0]=d[1],d[1]={x:n,y:o}}r.scale(u,u),r.globalAlpha=n.alpha,document.onclick=b,document.ontouchstart=b,(window.onresize=b)()}();