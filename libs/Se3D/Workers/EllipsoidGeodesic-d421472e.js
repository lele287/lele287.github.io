function _0x5a32(){var t=["latitude","defined","sineSquaredAlpha","defineProperties","_ellipsoid","./when-f6761ff4","821850LgQicc","Cartographic","cartographicToCartesian","shift","sineHeading","atan","u4Over16","8uJtvma","1982520ARpDAn","9133327jLfmMX","2405640ARfzHJ","_constants","sqrt","u8Over256","Cartesian3","longitude","_start","1131501ifpyNa","sigma","8MkonZw","1mvnXva","cosineHeading","minimumRadius","WGS84","clone","cosineAlpha","535024sVvjvU","cos","maximumRadius","./RuntimeError-68e09892","_endHeading","sineAlpha","130666wtSlWw","2mGmrct","asin","_uSquared","6tVBjGm","75390pQHgcp","prototype","tan","_startHeading","283149rDuqdf","interpolateUsingSurfaceDistance","4155090Rkotub","sin","cosineU","224355QNdzcL","u6Over64","CesiumMath","TWO_PI","sineU","2913220eumebu","height","tanU","1549793jiKmms","./ComponentDatatype-a49202e7","EllipsoidGeodesic","EPSILON12","defaultValue","normalize","16DeeHoc","push","setEndPoints","exports","abs"];return(_0x5a32=function(){return t})()}var _0x216e88=_0x228a;function _0x228a(t,a){var n=_0x5a32();return(_0x228a=function(t,a){return n[t-=271]})(t,a)}(function(t,a){for(var n=_0x228a,e=_0x5a32();;)try{if(822063===-parseInt(n(309))/1*(parseInt(n(340))/2)+-parseInt(n(306))/3*(-parseInt(n(278))/4)+-parseInt(n(299))/5+parseInt(n(297))/6+-parseInt(n(298))/7*(-parseInt(n(308))/8)+parseInt(n(330))/9+-parseInt(n(332))/10)break;e.push(e.shift())}catch(t){e.push(e.shift())}})(),define([_0x216e88(281),"./Matrix2-7f37d0c5",_0x216e88(318),_0x216e88(288),_0x216e88(273)],(function(t,a,n,e,i){"use strict";var r=_0x216e88,s=o;function h(){var t=_0x228a,a=[t(329),t(322),t(275),"592749aWgcSE",t(295),t(286),t(320),t(283),t(323),t(272),t(313),"_distance",t(326),t(289),t(328),"1606jTVRqu",t(317),"cosineSquaredAlpha",t(277),t(341),t(315),t(312),t(301),t(325),t(331),t(310),t(304),"cosineU","sigma",t(333),t(327),"sineU",t(302),t(280),"atan2",t(321),t(293),t(296),"cosineAlpha","_ellipsoid",t(324),"_end",t(316),t(294),t(319),"distanceRatio","u2Over4",t(335),"minimumRadius",t(336),t(338),t(300),"_start",t(271),t(291),t(282)];return(h=function(){return a})()}function u(t,a,n,e,i,r,s){var h,u,o=(h=t)*(u=n)*(4+h*(4-3*u))/16;return(1-o)*t*a*(e+o*i*(s+o*r*(2*s*s-1)))}function o(t,a){var n=h();return(o=function(t,a){return n[t-=149]})(t,a)}!function(t,a){for(var n=_0x228a,e=o,i=t();;)try{if(587445===-parseInt(e(199))/1*(parseInt(e(165))/2)+-parseInt(e(177))/3+parseInt(e(184))/4+parseInt(e(155))/5*(parseInt(e(187))/6)+parseInt(e(173))/7*(-parseInt(e(201))/8)+-parseInt(e(167))/9+-parseInt(e(176))/10*(-parseInt(e(179))/11))break;i.push(i[n(292)]())}catch(t){i[n(279)](i[n(292)]())}}(h);var c=new a.Cartesian3,p=new a.Cartesian3;function f(t,n,e,r){var s,h,f,M,d,_,v,g,l,x,m,I,C,w,H,b,R,A,S,U,O,j,q,D,E,y,k,G=_0x228a,L=o;a.Cartesian3[L(182)](r[L(162)](n,p),c),a[G(303)][L(182)](r[L(162)](e,p),p),function(t,a,n,e,r,s,h){var c,p,f,M,d,_=_0x228a,v=o,g=(a-n)/a,l=s-e,x=Math[v(151)]((1-g)*Math[_(328)](r)),m=Math[v(151)]((1-g)*Math[v(178)](h)),I=Math[v(150)](x),C=Math[v(193)](x),w=Math[v(150)](m),H=Math[v(193)](m),b=I*w,R=I*H,A=C*H,S=C*w,U=l,O=i[_(337)][v(158)],j=Math[v(150)](U),q=Math[v(193)](U);do{j=Math[v(150)](U),q=Math[v(193)](U);var D,E=R-S*j;f=Math[v(186)](w*w*q*q+E*E),p=A+b*j,c=Math[v(198)](f,p),0===f?(D=0,M=1):M=1-(D=b*q/f)*D,O=U,d=p-2*A/M,!isFinite(d)&&(d=0),U=l+u(g,D,M,c,f,p,d)}while(Math[v(163)](U-O)>i[_(337)][v(166)]);var y=M*(a*a-n*n)/(n*n),k=y*(256+y*(y*(74-47*y)-128))/1024,G=d*d,L=n*(1+y*(4096+y*(y*(320-175*y)-768))/16384)*(c-k*f*(d+k*(p*(2*G-1)-k*d*(4*f*f-3)*(4*G-3)/6)/4)),P=Math[v(198)](w*q,R-S*j),V=Math[v(198)](I*q,R*j-S);t[v(175)]=L,t._startHeading=P,t[_(319)]=V,t[v(204)]=y}(t,r[L(180)],r[L(156)],n[L(190)],n[L(171)],e[G(304)],e[L(171)]),t[G(305)]=a[G(290)][L(174)](n,t[L(160)]),t[L(149)]=a.Cartographic[L(174)](e,t[L(149)]),t[L(160)][L(183)]=0,t[L(149)][L(183)]=0,h=_0x228a,M=(s=t)[(f=o)(204)],d=s[f(203)][f(180)],_=s[f(203)][h(311)],v=(d-_)/d,g=Math[f(150)](s[f(164)]),l=Math[f(193)](s[h(329)]),x=(1-v)*Math[f(178)](s[f(160)][h(283)]),m=1/Math[f(186)](1+x*x),I=m*x,C=Math[f(198)](x,g),b=1-(H=(w=m*l)*w),R=Math[f(186)](b),D=1-3*(A=M/4)+35*(S=A*A)/4,E=1-5*A,y=(j=1+A-3*S/4+5*(U=S*A)/4-175*(O=S*S)/64)*C-(q=1-A+15*S/8-35*U/8)*Math[f(193)](2*C)*A/2-D*Math[f(193)](4*C)*S/16-E*Math[f(193)](6*C)*U/48-5*Math[f(193)](8*C)*O/512,(k=s[h(300)]).a=d,k.b=_,k.f=v,k[f(189)]=g,k[h(293)]=l,k[f(161)]=x,k[f(191)]=m,k[h(339)]=I,k[f(192)]=C,k[f(170)]=w,k[h(285)]=H,k[f(181)]=b,k[h(314)]=R,k[f(154)]=A,k[f(168)]=S,k[h(336)]=U,k[f(196)]=O,k.a0=j,k.a1=q,k.a2=D,k.a3=E,k[f(153)]=y}function M(t,n,i){var r=_0x228a,s=o,h=e[r(276)](i,a.Ellipsoid[s(185)]);this[r(287)]=h,this[s(160)]=new a.Cartographic,this._end=new a.Cartographic,this[s(159)]={},this[s(164)]=void 0,this[s(152)]=void 0,this[s(175)]=void 0,this[s(204)]=void 0,e[r(284)](t)&&e.defined(n)&&f(this,t,n,h)}Object[s(169)](M[s(194)],{ellipsoid:{get:function(){return this[_0x228a(287)]}},surfaceDistance:{get:function(){return this[s(175)]}},start:{get:function(){return this[s(160)]}},end:{get:function(){return this[s(149)]}},startHeading:{get:function(){return this[s(164)]}},endHeading:{get:function(){return this[s(152)]}}}),M[s(194)][s(197)]=function(t,a){f(this,t,a,this[s(203)])},M[s(194)].interpolateUsingFraction=function(t,a){var n=s;return this[n(188)](this[n(175)]*t,a)},M[s(194)][s(188)]=function(t,n){var i=_0x228a,r=s,h=this[r(159)],o=h[r(153)]+t/h.b,c=Math[r(150)](2*o),p=Math[r(150)](4*o),f=Math[i(316)](6*o),M=Math.sin(2*o),d=Math[r(193)](4*o),_=Math[r(193)](6*o),v=Math[r(193)](8*o),g=o*o,l=o*g,x=h[r(196)],m=h[r(154)],I=h[r(157)],C=h[r(168)],w=2*l*x*c/3+o*(1-m+7*C/4-15*I/4+579*x/64-(C-15*I/4+187*x/16)*c-(5*I/4-115*x/16)*p-29*x*f/16)+(m/2-C+71*I/32-85*x/16)*M+(5*C/16-5*I/4+383*x/96)*d-g*((I-11*x/2)*M+5*x*d/2)+(29*I/96-29*x/16)*_+539*x*v/1536,H=Math[r(172)](Math[r(193)](w)*h[r(202)]),b=Math[r(151)](h.a/h.b*Math.tan(H));w-=h[i(307)];var R=Math.cos(2*h[r(192)]+w),A=Math.sin(w),S=Math[r(150)](w),U=h[i(334)]*S,O=h[r(195)]*A,j=Math[r(198)](A*h[r(200)],U-O*h[r(189)])-u(h.f,h[i(320)],h[r(181)],w,A,S,R);return e[i(284)](n)?(n[r(190)]=this[r(160)][r(190)]+j,n[r(171)]=b,n[i(341)]=0,n):new a.Cartographic(this._start.longitude+j,b,0)},t[r(274)]=M}));
