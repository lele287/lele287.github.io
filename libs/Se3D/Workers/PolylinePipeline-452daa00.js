var _0x2c1388=_0x7caa;function _0x50ec(){var r=["./EllipsoidGeodesic-d421472e","maximumRadius","max","positions","Ellipsoid","negate","isArray","normalize","2504852GuqkTX","chordLength","pow","pack","granularity","6530364sFwcGd","./when-f6761ff4","longitude","173538YXzrOX","Plane","./IntersectionTests-65967291","EllipsoidRhumbLine","fromPointNormal","275704rkajkI","numberOfPointsRhumbLine","18054829KUqqRT","ellipsoid","4sRKZfF","numberOfPoints","geodeticSurfaceNormal","generateArc","13871sYyJhL","970eYEcKC","getPointDistance","112xmkdjW","height","ceil","surfaceDistance","generateRhumbArc","cartographicToCartesian","Cartographic","Matrix4","extractHeights","cartesianToCartographic","UNIT_X","length","shift","67016HRDQuM","1851rzkLcl","10PwEFUv","EllipsoidGeodesic","inverseTransformation","clone","generateCartesianRhumbArc","101815sGPKAn","28eVlrSN","minDistance","scaleToGeodeticSurface","308874CKujWh","ZERO","defaultValue","12IrdFEw","./Plane-7b7abf5e","PolylinePipeline","exports","CesiumMath","defined","add","lineSegmentPlane","636zITtjf","918039defvDX","setEndPoints","2692oyjKsl","RADIANS_PER_DEGREE","Cartesian3","multiplyByPoint","push","./Matrix2-7f37d0c5","interpolateUsingSurfaceDistance","11187NqPSjT","WGS84","./ComponentDatatype-a49202e7","5ICVIXv","294bisXqK"];return(_0x50ec=function(){return r})()}function _0x7caa(r,a){var e=_0x50ec();return(_0x7caa=function(r,a){return e[r-=350]})(r,a)}(function(r,a){for(var e=_0x7caa,n=_0x50ec();;)try{if(562242===-parseInt(e(426))/1+-parseInt(e(430))/2*(parseInt(e(391))/3)+parseInt(e(413))/4*(parseInt(e(403))/5)+parseInt(e(404))/6*(-parseInt(e(375))/7)+parseInt(e(355))/8*(parseInt(e(421))/9)+parseInt(e(353))/10*(-parseInt(e(352))/11)+-parseInt(e(382))/12*(-parseInt(e(428))/13))break;n.push(n.shift())}catch(r){n.push(n.shift())}})(),define([_0x2c1388(385),_0x2c1388(398),_0x2c1388(419),"./RuntimeError-68e09892",_0x2c1388(405),"./EllipsoidRhumbLine-176fe6de",_0x2c1388(423),_0x2c1388(402),_0x2c1388(383)],(function(r,a,e,n,t,i,s,o,c){"use strict";var u=_0x2c1388,f=p;function v(){var r=_0x7caa,a=["unpack","UNIT_X",r(415),r(357),"multiplyByPointAsVector",r(392),r(425),"clone",r(359),r(400),r(350),"distance",r(414),r(399),r(370),"multiplyByScalar","latitude",r(372),r(431),"50ibDXSl","length",r(397),"105DXFYsV",r(354),r(364),r(407),r(377),r(417),r(360),r(429),"wrapLongitude",r(420),"185601riWrrZ",r(406),"5909530xsozad",r(368),r(369),r(410),r(418),"pack","generateCartesianArc",r(401),r(394),"equals",r(351),r(408),r(358),r(393),r(380),r(376),r(379),"isArray",r(390),"sqrt",r(427),"height",r(378),r(363),"IDENTITY",r(388),r(374)];return(v=function(){return a})()}function p(r,a){var e=v();return(p=function(r,a){return e[r-=158]})(r,a)}!function(r,a){for(var e=_0x7caa,n=p,t=r();;)try{if(392923===parseInt(n(168))/1*(-parseInt(n(208))/2)+parseInt(n(195))/3*(parseInt(n(206))/4)+parseInt(n(178))/5*(parseInt(n(209))/6)+parseInt(n(181))/7*(parseInt(n(194))/8)+parseInt(n(197))/9*(-parseInt(n(173))/10)+-parseInt(n(193))/11+parseInt(n(211))/12*(parseInt(n(191))/13))break;t.push(t[e(367)]())}catch(r){t[e(397)](t.shift())}}(v);var l={};l[f(177)]=function(r,e,n){var t=f,i=a[_0x7caa(395)][t(170)](r,e);return Math[t(162)](i/n)},l[f(213)]=function(r,a,e){var n=_0x7caa,t=f,i=Math[t(161)](r[n(420)]-a[t(190)],2)+Math[t(161)](r[t(175)]-a[t(175)],2);return Math[t(184)](1,Math[t(162)](Math[t(212)](i/(e*e))))};var h=new(a[u(361)]);l[f(216)]=function(r,a){for(var e=u,n=r[e(366)],t=new Array(n),i=0;i<n;i++){var s=r[i];t[i]=a[e(364)](s,h).height}return t};var I=new(a[u(362)]),d=new(a[u(395)]),x=new(a[u(395)]),w=new(c[u(422)])(a[u(395)][f(160)],0),g=new(a[u(395)]),C=new(c[u(422)])(a.Cartesian3.UNIT_X,0),m=new a.Cartesian3,_=new(a[u(395)]),y=[];function T(r,a,e){var n,t=y;if(t[f(179)]=r,a===e){for(n=0;n<r;n++)t[n]=a;return t}var i=(e-a)/r;for(n=0;n<r;n++){var s=a+n*i;t[n]=s}return t}var P=new(a[u(361)]),E=new a.Cartographic,A=new(a[u(395)]),b=new a.Cartesian3,M=new a.Cartesian3,R=new(t[u(371)]),D=new i.EllipsoidRhumbLine;function S(r,e,n,t,i,s,o,c){var v=u,p=f,h=t[p(215)](r,b),I=t[p(215)](e,M),d=l.numberOfPoints(r,e,n),x=t.cartesianToCartographic(h,P),w=t.cartesianToCartographic(I,E),g=T(d,i,s);R.setEndPoints(x,w);var C=R[p(205)]/d,m=c;x[p(214)]=i;var _=t[p(187)](x,A);a[v(395)][p(198)](_,o,m),m+=3;for(var y=1;y<d;y++){var D=R[p(172)](y*C,E);D[p(214)]=g[y],_=t[v(360)](D,A),a[v(395)][v(416)](_,o,m),m+=3}return m}function X(r,e,n,t,s,o,c,v){var p=u,h=f,I=t.cartesianToCartographic(r,P),d=t[p(364)](e,E),x=l[p(427)](I,d,n);I[h(214)]=0,d[h(214)]=0;var w=T(x,s,o);!D[p(429)][h(202)](t)&&(D=new(i[p(424)])(void 0,void 0,t)),D[h(164)](I,d);var g=D[h(205)]/x,C=v;I[h(214)]=s;var m=t[h(187)](I,A);a.Cartesian3[h(198)](m,c,C),C+=3;for(var _=1;_<x;_++){var y=D[h(172)](_*g,E);y[h(214)]=w[_],m=t.cartographicToCartesian(y,A),a[p(395)][h(198)](m,c,C),C+=3}return C}l[f(189)]=function(r,n){var t=u,i=f,o=[],v=[];if(e[t(387)](r)&&r[i(179)]>0){n=e[t(381)](n,a.Matrix4[i(217)]);var p=a.Matrix4[i(176)](n,I),l=a[t(362)][t(396)](p,a[t(395)][i(207)],d),h=a[t(395)][t(412)](a.Matrix4[i(163)](p,a.Cartesian3.UNIT_Y,x),x),y=c[t(422)][i(165)](l,h,w),T=a[t(395)][t(412)](a[t(362)][i(163)](p,a[t(395)][t(365)],g),g),P=c[t(422)][i(165)](l,T,C),E=1;o[i(180)](a[t(395)][i(166)](r[0]));for(var A=o[0],b=r[i(179)],M=1;M<b;++M){var R=r[M];if(c[t(422)][i(182)](P,A)<0||c.Plane[i(182)](P,R)<0){var D=s.IntersectionTests[t(389)](A,R,y,m);if(e[t(387)](D)){var S=a.Cartesian3[i(174)](h,5e-9,_);c[t(422)][i(182)](y,A)<0&&a[t(395)][i(196)](S,S),o[i(180)](a[t(395)][i(218)](D,S,new(a[t(395)]))),v[i(180)](E+1),a[t(395)][i(196)](S,S),o[i(180)](a[t(395)][i(218)](D,S,new a.Cartesian3)),E=1}}o[i(180)](a[t(395)][t(373)](r[M])),E++,A=R}v[i(180)](E)}return{positions:o,lengths:v}},l[f(203)]=function(r){var n=u,t=f;!e.defined(r)&&(r={});var i=r[t(204)],s=i[t(179)],c=e[n(381)](r[t(188)],a[n(409)].WGS84),v=e[n(381)](r[t(214)],0),p=Array[n(411)](v);if(s<1)return[];if(1===s){var h=c[t(215)](i[0],b);if(0!==(v=p?v[0]:v)){var I=c[t(169)](h,A);a[n(395)][t(174)](I,v,I),a[n(395)][t(218)](h,I,h)}return[h.x,h.y,h.z]}var d=r[t(185)];if(!e[n(387)](d)){var x=e[n(381)](r[t(186)],o[n(386)][t(201)]);d=o.CesiumMath[t(171)](x,c[t(192)])}var w,g=0;for(w=0;w<s-1;w++)g+=l[t(177)](i[w],i[w+1],d);var C=3*(g+1),m=new Array(C),_=0;for(w=0;w<s-1;w++){_=S(i[w],i[w+1],d,c,p?v[w]:v,p?v[w+1]:v,m,_)}y[t(179)]=0;var T=i[s-1],E=c[t(183)](T,P);E[t(214)]=p?v[s-1]:v;var M=c[n(360)](E,A);return a.Cartesian3[t(198)](M,m,C-3),m};var k=new(a[u(361)]),N=new a.Cartographic;l[f(167)]=function(r){var n=u,t=f;!e[n(387)](r)&&(r={});var i=r[t(204)],s=i.length,c=e[n(381)](r[t(188)],a[n(409)][t(200)]),v=e[n(381)](r[n(356)],0),p=Array[t(210)](v);if(s<1)return[];if(1===s){var h=c[t(215)](i[0],b);if(0!==(v=p?v[0]:v)){var I=c[t(169)](h,A);a[n(395)][t(174)](I,v,I),a[n(395)][n(388)](h,I,h)}return[h.x,h.y,h.z]}var d,x,w=e.defaultValue(r[t(186)],o.CesiumMath[n(394)]),g=0,C=c[t(183)](i[0],k);for(d=0;d<s-1;d++)x=c[t(183)](i[d+1],N),g+=l[t(213)](C,x,w),C=a[n(361)][t(166)](x,k);var m=3*(g+1),_=new Array(m),T=0;for(d=0;d<s-1;d++){T=X(i[d],i[d+1],w,c,p?v[d]:v,p?v[d+1]:v,_,T)}y[t(179)]=0;var E=i[s-1],M=c[t(183)](E,P);M[t(214)]=p?v[s-1]:v;var R=c[t(187)](M,A);return a[n(395)][t(198)](R,_,m-3),_},l[f(199)]=function(r){for(var e=f,n=l[e(203)](r),t=n[e(179)]/3,i=new Array(t),s=0;s<t;s++)i[s]=a.Cartesian3[e(159)](n,3*s);return i},l[f(158)]=function(r){for(var e=u,n=f,t=l[n(167)](r),i=t[e(366)]/3,s=new Array(i),o=0;o<i;o++)s[o]=a.Cartesian3[n(159)](t,3*o);return s},r[u(384)]=l}));
