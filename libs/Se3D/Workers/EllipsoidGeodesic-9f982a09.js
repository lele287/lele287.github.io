var _0xe34c4d=_0x23fb;function _0x1b2a(){var t=["tan","_endHeading","setEndPoints","cosineSquaredAlpha","TWO_PI","Cartographic","267608igUXQk","cartographicToCartesian","defineProperties","_distance","356461FRKCZC","_end","7503507BupXLj","push","441CedaCL","prototype","asin","CesiumMath","sineAlpha","24rFsdjJ","112740VppXEJ","336677gjaACj","1kGEgYv","./RuntimeError-97a25661","height","EllipsoidGeodesic","75010IsELIi","abs","sin","sineSquaredAlpha","_start","defined","214459MlXnMT","longitude","u2Over4","u8Over256","4qZTyek","sineU","_constants","sqrt","distanceRatio","./ComponentDatatype-914b1154","Ellipsoid","tanU","interpolateUsingFraction","u4Over16","_ellipsoid","minimumRadius","atan","7674TNOBhE","52JWaVme","_uSquared","clone","WGS84","40tkoxnt","378GwAMMU","cosineU","./when-067a7035","./Matrix2-2761f047","33YWfaLd","42736elccpp","normalize","atan2","27RfNnEb","u6Over64","sineHeading","Cartesian3","1865530QSGSHn","_startHeading","defaultValue","maximumRadius"];return(_0x1b2a=function(){return t})()}function _0x23fb(t,a){var n=_0x1b2a();return(_0x23fb=function(t,a){return n[t-=311]})(t,a)}(function(t,a){for(var n=_0x23fb,e=_0x1b2a();;)try{if(236242===-parseInt(n(321))/1+parseInt(n(360))/2*(-parseInt(n(374))/3)+-parseInt(n(347))/4*(-parseInt(n(378))/5)+-parseInt(n(330))/6*(parseInt(n(343))/7)+parseInt(n(317))/8+-parseInt(n(366))/9*(-parseInt(n(337))/10)+parseInt(n(370))/11*(parseInt(n(331))/12))break;e.push(e.shift())}catch(t){e.push(e.shift())}})(),define(["exports",_0xe34c4d(369),_0xe34c4d(334),_0xe34c4d(368),_0xe34c4d(352)],(function(t,a,n,e,i){"use strict";var r=_0xe34c4d;function s(t,a){var n=u();return(s=function(t,a){return n[t-=196]})(t,a)}var h=s;function u(){var t=_0x23fb,a=[t(375),"_distance",t(333),"sqrt",t(325),"interpolateUsingSurfaceDistance",t(357),t(314),"37908kcKmpy",t(341),t(344),"sigma","latitude",t(349),t(372),"1292624NgBCEI",t(371),t(365),t(332),t(376),"atan2",t(351),t(364),t(326),"height","7650455EqfhGS",t(323),"87861CejSOL",t(315),"atan",t(361),t(379),t(348),"cosineU",t(322),t(311),"minimumRadius",t(340),"cosineHeading",t(329),t(362),t(339),t(381),t(312),t(346),"cosineAlpha","cos",t(327),t(345)];return(u=function(){return a})()}function o(t,a,n,e,i,r,s){var h,u,o=(h=t)*(u=n)*(4+h*(4-3*u))/16;return(1-o)*t*a*(e+o*i*(s+o*r*(2*s*s-1)))}!function(t,a){for(var n=_0x23fb,e=s,i=t();;)try{if(795967===parseInt(e(230))/1*(parseInt(e(243))/2)+parseInt(e(206))/3*(parseInt(e(209))/4)+-parseInt(e(204))/5+parseInt(e(236))/6+parseInt(e(232))/7*(parseInt(e(244))/8)+parseInt(e(205))/9+parseInt(e(196))/10*(parseInt(e(197))/11))break;i[n(324)](i.shift())}catch(t){i[n(324)](i.shift())}}(u);var c=new(a[r(377)]),f=new a.Cartesian3;function p(t,n,e,h){var u,p,M,d,_,v,I,g,l,x,b,m,C,E,S,O,U,w,H,k,q,R,j,y,A,G,L,T=r,F=s;a.Cartesian3[F(242)](h[T(318)](n,f),c),a.Cartesian3[F(242)](h[T(318)](e,f),f),function(t,a,n,e,r,h,u){var c,f,p,M,d,_=_0x23fb,v=s,I=(a-n)/a,g=h-e,l=Math[v(208)]((1-I)*Math[v(214)](r)),x=Math[v(208)]((1-I)*Math[_(311)](u)),b=Math[v(225)](l),m=Math[v(220)](l),C=Math.cos(x),E=Math[_(339)](x),S=b*C,O=b*E,U=m*E,w=m*C,H=g,k=i[_(328)][v(207)],q=Math[v(225)](H),R=Math[v(220)](H);do{q=Math[v(225)](H),R=Math[v(220)](H);var j,y=O-w*q;p=Math[v(231)](C*C*R*R+y*y),f=U+S*q,c=Math[_(373)](p,f),0===p?(j=0,M=1):M=1-(j=S*R/p)*j,k=H,d=f-2*U/M,!isFinite(d)&&(d=0),H=g+o(I,j,M,c,p,f,d)}while(Math[_(338)](H-k)>i.CesiumMath.EPSILON12);var A=M*(a*a-n*n)/(n*n),G=A*(256+A*(A*(74-47*A)-128))/1024,L=d*d,T=n*(1+A*(4096+A*(A*(320-175*A)-768))/16384)*(c-G*p*(d+G*(f*(2*L-1)-G*d*(4*p*p-3)*(4*L-3)/6)/4)),F=Math.atan2(C*R,O-w*q),N=Math[_(373)](b*R,O*q-w);t[_(320)]=T,t[v(210)]=F,t[v(222)]=N,t[_(362)]=A}(t,h[F(221)],h[F(215)],n[F(238)],n[F(240)],e[F(238)],e[F(240)]),t[F(237)]=a[T(316)][T(363)](n,t[T(341)]),t[F(213)]=a[T(316)][T(363)](e,t[F(213)]),t[F(237)][F(203)]=0,t[F(213)][F(203)]=0,p=_0x23fb,d=(u=t)[(M=s)(219)],_=u[M(234)][M(221)],v=u[M(234)][p(358)],I=(_-v)/_,g=Math[M(225)](u[M(210)]),l=Math[M(220)](u[M(210)]),x=(1-I)*Math.tan(u[M(237)][M(240)]),b=1/Math[p(350)](1+x*x),m=b*x,C=Math[p(373)](x,g),O=1-(S=(E=b*l)*E),U=Math[M(231)](O),y=1-3*(w=d/4)+35*(H=w*w)/4,A=1-5*w,G=(R=1+w-3*H/4+5*(k=H*w)/4-175*(q=H*H)/64)*C-(j=1-w+15*H/8-35*k/8)*Math[M(220)](2*C)*w/2-y*Math[M(220)](4*C)*H/16-A*Math[p(339)](6*C)*k/48-5*Math[p(339)](8*C)*q/512,(L=u[M(241)]).a=_,L.b=v,L.f=I,L[M(217)]=g,L[M(198)]=l,L[p(354)]=x,L[p(367)]=b,L.sineU=m,L[M(239)]=C,L[M(218)]=E,L[M(216)]=S,L[M(235)]=O,L[M(224)]=U,L[M(227)]=w,L[p(356)]=H,L[M(228)]=k,L[p(346)]=q,L.a0=R,L.a1=j,L.a2=y,L.a3=A,L[M(200)]=G}function M(t,n,i){var h=r,u=s,o=e[h(380)](i,a[h(353)][u(201)]);this[u(234)]=o,this[u(237)]=new(a[h(316)]),this[h(322)]=new(a[h(316)]),this[u(241)]={},this._startHeading=void 0,this[u(222)]=void 0,this[u(229)]=void 0,this[u(219)]=void 0,e[h(342)](t)&&e[h(342)](n)&&p(this,t,n,o)}Object[r(319)](M[h(202)],{ellipsoid:{get:function(){return this[h(234)]}},surfaceDistance:{get:function(){return this[h(229)]}},start:{get:function(){return this[h(237)]}},end:{get:function(){return this[h(213)]}},startHeading:{get:function(){return this[h(210)]}},endHeading:{get:function(){return this[h(222)]}}}),M[r(326)][r(313)]=function(t,a){p(this,t,a,this[h(234)])},M[h(202)][r(355)]=function(t,a){var n=h;return this[n(233)](this[n(229)]*t,a)},M[h(202)][h(233)]=function(t,n){var i=r,s=h,u=this[i(349)],c=u[s(200)]+t/u.b,f=Math.cos(2*c),p=Math[s(225)](4*c),M=Math[s(225)](6*c),d=Math[i(339)](2*c),_=Math[s(220)](4*c),v=Math[s(220)](6*c),I=Math[s(220)](8*c),g=c*c,l=c*g,x=u[s(223)],b=u[s(227)],m=u[s(228)],C=u[i(356)],E=2*l*x*f/3+c*(1-b+7*C/4-15*m/4+579*x/64-(C-15*m/4+187*x/16)*f-(5*m/4-115*x/16)*p-29*x*M/16)+(b/2-C+71*m/32-85*x/16)*d+(5*C/16-5*m/4+383*x/96)*_-g*((m-11*x/2)*d+5*x*_/2)+(29*m/96-29*x/16)*v+539*x*I/1536,S=Math[s(226)](Math[s(220)](E)*u[s(224)]),O=Math[i(359)](u.a/u.b*Math[i(311)](S));E-=u[s(239)];var U=Math[s(225)](2*u[s(239)]+E),w=Math[s(220)](E),H=Math[s(225)](E),k=u[s(212)]*H,q=u[s(211)]*w,R=Math[s(199)](w*u[s(198)],k-q*u[s(217)])-o(u.f,u[s(218)],u[s(235)],E,w,H,U);return e[i(342)](n)?(n[i(344)]=this[s(237)][s(238)]+R,n[s(240)]=O,n[i(335)]=0,n):new(a[i(316)])(this[s(237)][s(238)]+R,O,0)},t[r(336)]=M}));
