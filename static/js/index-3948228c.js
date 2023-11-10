import"./modulepreload-polyfill-3cfb730f.js";/**!
 * @author zhangxinxu(.com)
 * @description 基于SVG feDisplacementMap滤镜实现的任意元素点击水波效果
 * @link http://www.zhangxinxu.com/wordpress/?p=6626
 * @license MIT 保留这段注释和说明
 */var k=function(){var i=document.createElement("canvas");if(i.getContext){var r=i.getContext("2d"),n=512,s=512,o=250,h=100,a=o-h;i.width=n,i.height=s;var b=function(g,l,u,d){for(var p=2*Math.PI/d.length,c=0,f=null,v=null,m=null,e=0;e<d.length;e++){v=d[e],m=d[(e+1)%d.length];var w=g+Math.cos(c)*u,y=g+Math.cos(c+p)*u,M=l+Math.sin(c)*u,S=l+Math.sin(c+p)*u;r.beginPath(),f=r.createLinearGradient(w,M,y,S),f.addColorStop(0,v),f.addColorStop(1,m),r.strokeStyle=f,r.arc(g,l,u,c,c+p),r.lineWidth=o-h,r.stroke(),r.closePath(),c+=p}};r.beginPath(),r.arc(n/2,s/2,o,0,Math.PI*2),r.fillStyle="#7f7f7f",r.fill(),b(n/2,s/2,h+a/2,["rgb(255,0,0)","rgb(0, 255, 0)","rgb(255,0,0)","rgb(0, 255, 0)"]);var t=r.createRadialGradient(n/2,s/2,h,n/2,s/2,o);return t.addColorStop(0,"rgba(127,127,127,1)"),t.addColorStop(17/a,"rgba(115,115,115,.8)"),t.addColorStop(25/a,"rgba(115,115,115,0.1)"),t.addColorStop(28/a,"rgba(115,115,115,0.1)"),t.addColorStop(37/a,"rgba(115,104,104,.8)"),t.addColorStop(43/a,"rgba(115,104,104,1)"),t.addColorStop(44/a,"rgba(127,127,127,1)"),t.addColorStop(50/a,"rgba(127,127,127,.6)"),t.addColorStop(54/a,"rgba(127,127,127,0)"),t.addColorStop(61/a,"rgba(0,0,0,0)"),t.addColorStop(67/a,"rgba(0,0,0,1)"),t.addColorStop(78/a,"rgba(0,0,0,1)"),t.addColorStop(88/a,"rgba(0,0,0,0)"),t.addColorStop(100/a,"rgba(0,0,0,0)"),t.addColorStop(108/a,"rgba(0,0,0,1)"),t.addColorStop(117/a,"rgba(0,0,0,1)"),t.addColorStop(136/a,"rgba(0,0,0,0)"),t.addColorStop(1,"rgba(0,0,0,0)"),r.beginPath(),r.arc(n/2,s/2,o,0,Math.PI*2),r.fillStyle=t,r.fill(),i.toDataURL()}}();window.Tween||(window.Tween={});Tween.Linear||(Tween.Linear=function(i,r,n,s){return n*i/s+r});Math.animation||(Math.animation=function(i,r,n,s,o){var h=function(e){return typeof e=="function"},a=function(e){return typeof e=="number"},b=function(e){return typeof e=="string"},t=function(e){if(a(e))return e;if(b(e)){if(/\d+m?s$/.test(e))return/ms/.test(e)?1*e.replace("ms",""):1e3*e.replace("s","");if(/^\d+$/.test(e))return+e}return-1},g=window.Tween,l={duration:300,easing:"Linear",callback:function(){}},u=function(e){h(e)?l.callback=e:t(e)!=-1?l.duration=t(e):b(e)&&(l.easing=e)};u(n),u(s),u(o),window.requestAnimationFrame||(requestAnimationFrame=function(e){return setTimeout(e,17)});var d=0,p=Math.ceil(l.duration/17),c=null;l.easing=l.easing.slice(0,1).toUpperCase()+l.easing.slice(1);var f=l.easing.split("."),v;f.length==1?v=g[f[0]]:f.length==2&&(v=g[f[0]]&&g[f[0]][f[1]]);var m=function(){var e=v(d,i,r-i,p);d++,d<=p?(l.callback(e),c=requestAnimationFrame(m)):l.callback(r,!0)};return m(),function(){return c}});var C=null,A=function(i){if(!(!i||!history.pushState)){var r=navigator.userAgent;if(/Safari|iPhone/i.test(r)&&/chrome/i.test(r)==!1){window.console&&console.info("Safari support but bug, so avoid!");return}if(typeof i=="string"){[].slice.call(document.querySelectorAll(i)).forEach(function(t){A(t)});return}var n="filterRipple",s=document.getElementById(n);s||document.body.insertAdjacentHTML("afterbegin",'<svg style="position:absolute;height:0;clip:rect(0 0 0 0);"><defs><filter id="'+n+'"><feImage xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="'+k+'" x="0" y="0" width="512" height="512" result="ripple"></feImage><feDisplacementMap xChannelSelector="G" yChannelSelector="R" color-interpolation-filters="sRGB" in="SourceGraphic" in2="ripple" scale="0"></feDisplacementMap><feComposite operator="in" in2="ripple"></feComposite><feComposite in2="SourceGraphic"></feComposite></filter></defs></svg>');var o=document.querySelector("#"+n+" feImage"),h=document.querySelector("#"+n+" feDisplacementMap"),a=null,b=null;i.addEventListener("click",function(t){a&&cancelAnimationFrame(a()),b&&cancelAnimationFrame(b()),C&&C!=this&&(C.style.filter=""),i.style.filter="url(#"+n+")";var g=i.offsetWidth,l=i.offsetHeight,u=t.clientX,d=t.clientY,p=i.getBoundingClientRect(),c=p.left,f=p.top,v=u-c,m=d-f;o.setAttribute("x",v),o.setAttribute("y",m),o.setAttribute("width",0),o.setAttribute("height",0);var e=Math.min(512,Math.max(g,l)*2),w=30*e/512,y=2e3*e/512,M=2100*e/512;b=Math.animation(w,0,y,function(S){h.setAttribute("scale",S)}),a=Math.animation(0,e,M,function(S,x){o.setAttribute("x",v-S/2),o.setAttribute("y",m-S/2),o.setAttribute("width",S),o.setAttribute("height",S),x&&(i.style.filter="")}),C=this})}};A(document.querySelector("body"));
