var _0x496d0c=_0x593e;function _0x593e(n,t){var r=_0x24c1();return(_0x593e=function(n,t){return r[n-=338]})(n,t)}function _0x24c1(){var n=["./Transforms-2eeb1bbe","max","packedLength","579715JzuPYS","./when-f6761ff4","shift","INTERSECTING","2728724GfAiki","intersect","equals","963456jXswCB","54vDSuQC","defined","height","project","468511WBycmz","618495MjzDDt","Cartographic","OUTSIDE","6429120YCOdMo","push","2218077gdsfbL","width","4175374zoXahZ","3494901jbJOeU","min","Rectangle","2BgbklI","southwest","defaultValue","expand","./Matrix2-7f37d0c5","812628tcbFAT","fromRectangle","2940579qDeUBU","northeast","2fUiuKl","13141288WoxGHp","25ojpcak","16wwYbLw","fromPoints","length","30692349Xnxplh","BoundingRectangle"];return(_0x24c1=function(){return n})()}(function(n,t){for(var r=_0x593e,e=_0x24c1();;)try{if(791642===parseInt(r(359))/1+parseInt(r(339))/2*(parseInt(r(380))/3)+parseInt(r(344))/4*(-parseInt(r(350))/5)+-parseInt(r(366))/6+-parseInt(r(379))/7*(-parseInt(r(351))/8)+-parseInt(r(346))/9+-parseInt(r(375))/10)break;e.push(e.shift())}catch(n){e.push(e.shift())}})(),define(["exports",_0x496d0c(343),"./RuntimeError-68e09892",_0x496d0c(360),_0x496d0c(356)],(function(n,t,r,e,a){"use strict";var i=_0x496d0c,u=c;function c(n,t){var r=f();return(c=function(n,t){return r[n-=123]})(n,t)}function f(){var n=_0x593e,t=[n(377),n(357),"subtract",n(381),n(372),n(364),n(363),n(352),n(362),"4190074szZwkD",n(374),n(353),"width",n(342),n(340),n(370),n(371),"union","pack","10OFgzdX",n(365),n(369),n(349),"clone",n(367),"prototype",n(354),n(348)];return(f=function(){return t})()}function x(n,t,r,a){var i=_0x593e,u=c;this.x=e[i(341)](n,0),this.y=e[i(341)](t,0),this[u(124)]=e[i(341)](r,0),this[u(133)]=e.defaultValue(a,0)}!function(n,t){for(var r=_0x593e,e=c,a=n();;)try{if(841558===-parseInt(e(128))/1+parseInt(e(139))/2*(parseInt(e(140))/3)+-parseInt(e(146))/4+parseInt(e(144))/5*(-parseInt(e(136))/6)+parseInt(e(149))/7+-parseInt(e(134))/8+parseInt(e(138))/9*(parseInt(e(131))/10))break;a[r(376)](a[r(361)]())}catch(n){a[r(376)](a[r(361)]())}}(f),x[i(358)]=4,x[u(130)]=function(n,t,r){var a=i,c=u;return r=e[a(341)](r,0),t[r++]=n.x,t[r++]=n.y,t[r++]=n[c(124)],t[r]=n[a(369)],t},x.unpack=function(n,t,r){var a=i,c=u;return t=e[a(341)](t,0),!e[a(368)](r)&&(r=new x),r.x=n[t++],r.y=n[t++],r[c(124)]=n[t++],r[a(369)]=n[t],r},x[u(147)]=function(n,t){var r=i,a=u;if(!e.defined(t)&&(t=new x),!e[r(368)](n)||0===n[a(123)])return t.x=0,t.y=0,t.width=0,t[a(133)]=0,t;for(var c=n[a(123)],f=n[0].x,o=n[0].y,s=n[0].x,h=n[0].y,p=1;p<c;p++){var y=n[p],d=y.x,v=y.y;f=Math[a(143)](d,f),s=Math[a(141)](d,s),o=Math[r(381)](v,o),h=Math[a(141)](v,h)}return t.x=f,t.y=o,t[a(124)]=s-f,t[a(133)]=h-o,t};var o=new a.GeographicProjection,s=new t.Cartographic,h=new(t[i(373)]);x[i(345)]=function(n,r,a){var c=i,f=u;if(!e.defined(a)&&(a=new x),!e[c(368)](n))return a.x=0,a.y=0,a[f(124)]=0,a.height=0,a;var p=(r=e[c(341)](r,o))[f(127)](t.Rectangle[f(126)](n,s)),y=r[f(127)](t[c(338)][c(347)](n,h));return t.Cartesian2[f(142)](y,p,y),a.x=p.x,a.y=p.y,a[f(124)]=y.x,a[f(133)]=y.y,a},x[u(135)]=function(n,t){var r=i,a=u;if(e[r(368)](n))return e.defined(t)?(t.x=n.x,t.y=n.y,t[r(378)]=n[a(124)],t[a(133)]=n[a(133)],t):new x(n.x,n.y,n[a(124)],n[r(369)])},x[u(129)]=function(n,t,r){var a=i,c=u;!e[a(368)](r)&&(r=new x);var f=Math.min(n.x,t.x),o=Math[c(143)](n.y,t.y),s=Math[c(141)](n.x+n[c(124)],t.x+t[c(124)]),h=Math[c(141)](n.y+n[a(369)],t.y+t[a(369)]);return r.x=f,r.y=o,r[c(124)]=s-f,r[c(133)]=h-o,r},x[u(125)]=function(n,t,r){var e=u;r=x[e(135)](n,r);var a=t.x-r.x,i=t.y-r.y;return a>r[e(124)]?r[e(124)]=a:a<0&&(r[e(124)]-=a,r.x=t.x),i>r[e(133)]?r[e(133)]=i:i<0&&(r[e(133)]-=i,r.y=t.y),r},x[i(364)]=function(n,t){var r=i,e=u,c=n.x,f=n.y,x=t.x,o=t.y;return c>x+t[r(378)]||c+n.width<x||f+n.height<o||f>o+t[e(133)]?a._0x3edd19[e(150)]:a._0x3edd19[e(148)]},x[i(365)]=function(n,t){var r=i,a=u;return n===t||e[r(368)](n)&&e[r(368)](t)&&n.x===t.x&&n.y===t.y&&n[a(124)]===t[a(124)]&&n[r(369)]===t[a(133)]},x[u(137)][u(135)]=function(n){return x[u(135)](this,n)},x[u(137)][u(145)]=function(n){return x[u(145)](this,n)},x[u(137)][i(365)]=function(n){return x[u(132)](this,n)},n[i(355)]=x}));
