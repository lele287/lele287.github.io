var _0xc0b290=_0x2932;function _0x41d6(){var r=["11212MrBwiN","10hIOGpe","20isaRCV","sin","raisePositionsToHeight","ceil","./ComponentDatatype-a49202e7","push","positions","PI_OVER_TWO","227709kfzFGT","outerPositions","geodeticSurfaceNormal","computeEllipsePositions","cos","fromQuaternion","5677104XytOzF","add","22McxXPp","8HzWDRc","Quaternion","scaleToGeodeticSurface","16fVZmqa","18668388MMbnWl","11483811KKsYTE","8155QngrRd","8exTaqR","cross","rotation","1301895NgEznp","height","1231680nwduzN","shift","abs","1087120eyeyEu","2QveOej","granularity","extrudedHeight","Cartesian3","1233hgNuqQ","lerp","semiMajorAxis","UNIT_Z","EllipseGeometryLibrary","Matrix3","CesiumMath","exports","ellipsoid","24002ywfnbk","multiplyByVector","1455355tIKpYB","./Matrix2-7f37d0c5","3034526Ouodvm","6162AliswV","clone","normalize","706391NtSkzL","numPts","center","16ZaGqpq","multiplyByScalar"];return(_0x41d6=function(){return r})()}function _0x2932(r,a){var t=_0x41d6();return(_0x2932=function(r,a){return t[r-=301]})(r,a)}(function(r,a){for(var t=_0x2932,e=_0x41d6();;)try{if(200128===parseInt(t(361))/1*(parseInt(t(348))/2)+parseInt(t(323))/3*(-parseInt(t(335))/4)+-parseInt(t(347))/5+-parseInt(t(344))/6+-parseInt(t(308))/7*(-parseInt(t(339))/8)+-parseInt(t(342))/9*(parseInt(t(314))/10)+parseInt(t(331))/11*(parseInt(t(329))/12))break;e.push(e.shift())}catch(r){e.push(e.shift())}})(),define([_0xc0b290(359),_0xc0b290(303),_0xc0b290(319),"./Transforms-2eeb1bbe"],(function(r,a,t,e){"use strict";var n=_0xc0b290,i=y;function s(){var r=_0x2932,a=[r(304),r(330),r(350),r(311),r(326),r(338),r(307),r(301),r(321),r(305),"length",r(324),"fromArray",r(313),r(341),r(322),r(346),"fromAxisAngle",r(310),r(315),r(316),r(309),r(336),"39443Uexquf",r(312),r(325),r(306),"magnitude",r(353),r(354),"cross",r(332),r(302),r(318),r(352),r(337),r(360),r(327),r(355)];return(s=function(){return a})()}!function(r,a){for(var t=_0x2932,e=y,n=r();;)try{if(675157===parseInt(e(330))/1*(parseInt(e(310))/2)+-parseInt(e(302))/3*(-parseInt(e(320))/4)+parseInt(e(339))/5+parseInt(e(316))/6*(parseInt(e(312))/7)+parseInt(e(338))/8*(-parseInt(e(303))/9)+-parseInt(e(326))/10*(-parseInt(e(307))/11)+-parseInt(e(329))/12)break;n.push(n[t(345)]())}catch(r){n[t(320)](n.shift())}}(s);var o={},u=new a.Cartesian3,p=new(a[n(351)]),c=new(e[n(333)]),f=new(a[n(357)]);function x(r,t,i,s,o,x,h,I,l,v){var z=n,m=y,M=r+t;a[z(351)][m(331)](s,Math[m(305)](M),u),a[z(351)].multiplyByScalar(i,Math[m(327)](M),p),a.Cartesian3[m(308)](u,p,u);var d=Math[m(305)](r);d*=d;var C=Math[m(327)](r);C*=C;var w=x/Math.sqrt(h*d+o*C)/I;return e[z(333)][m(324)](u,w,c),a[z(357)][z(328)](c,f),a[z(357)][m(314)](f,l,v),a[z(351)][m(313)](v,v),a.Cartesian3[m(331)](v,I,v),v}function y(r,a){var t=s();return(y=function(r,a){return t[r-=301]})(r,a)}var h=new(a[n(351)]),I=new a.Cartesian3,l=new a.Cartesian3,v=new a.Cartesian3;o[n(317)]=function(r,t,e){for(var i=n,s=y,o=t[s(304)],u=t[i(343)],p=t[s(309)],c=e?r[s(317)]/3*2:r[s(317)]/3,f=new Float64Array(3*c),x=r[s(317)],z=e?x:0,m=0;m<x;m+=3){var M=m+1,d=m+2,C=a[i(351)][s(319)](r,m,h);o[i(334)](C,C);var w=a.Cartesian3[s(333)](C,I),_=o[s(332)](C,v),b=a.Cartesian3[i(312)](_,u,l);a[i(351)][s(308)](C,b,C),e&&(a.Cartesian3[s(331)](_,p,b),a[i(351)][s(308)](w,b,w),f[m+z]=w.x,f[M+z]=w.y,f[d+z]=w.z),f[m]=C.x,f[M]=C.y,f[d]=C.z}return f};var z=new(a[n(351)]),m=new a.Cartesian3,M=new a.Cartesian3;o[i(311)]=function(r,e,s){var o=n,u=i,p=r.semiMinorAxis,c=r[u(336)],f=r[u(321)],y=r[u(325)],v=8*r[o(349)],d=p*p,C=c*c,w=c*p,_=a[o(351)][u(334)](y),b=a[o(351)][o(307)](y,z),g=a[o(351)][o(340)](a[o(351)][u(306)],y,m);g=a[o(351)][u(313)](g,g);var A=a[o(351)][u(337)](b,g,M),P=1+Math[u(301)](t.CesiumMath[u(322)]/v),T=t[o(358)][u(322)]/(P-1),q=t[o(358)][u(322)]-P*T;q<0&&(P-=Math[u(301)](Math[u(323)](q)/T));var N,E,O,k,B,G=e?new Array(3*(P*(P+2)*2)):void 0,Q=0,R=h,S=I,V=4*P*3,F=V-1,H=0,K=s?new Array(V):void 0;for(R=x(q=t.CesiumMath[u(322)],f,A,g,d,w,C,_,b,R),e&&(G[Q++]=R.x,G[Q++]=R.y,G[Q++]=R.z),s&&(K[F--]=R.z,K[F--]=R.y,K[F--]=R.x),q=t[o(358)][u(322)]-T,N=1;N<P+1;++N){if(R=x(q,f,A,g,d,w,C,_,b,R),S=x(Math.PI-q,f,A,g,d,w,C,_,b,S),e){for(G[Q++]=R.x,G[Q++]=R.y,G[Q++]=R.z,O=2*N+2,E=1;E<O-1;++E)k=E/(O-1),B=a[o(351)][u(335)](R,S,k,l),G[Q++]=B.x,G[Q++]=B.y,G[Q++]=B.z;G[Q++]=S.x,G[Q++]=S.y,G[Q++]=S.z}s&&(K[F--]=R.z,K[F--]=R.y,K[F--]=R.x,K[H++]=S.x,K[H++]=S.y,K[H++]=S.z),q=t[o(358)][o(322)]-(N+1)*T}for(N=P;N>1;--N){if(R=x(-(q=t.CesiumMath[o(322)]-(N-1)*T),f,A,g,d,w,C,_,b,R),S=x(q+Math.PI,f,A,g,d,w,C,_,b,S),e){for(G[Q++]=R.x,G[Q++]=R.y,G[Q++]=R.z,O=2*(N-1)+2,E=1;E<O-1;++E)k=E/(O-1),B=a.Cartesian3.lerp(R,S,k,l),G[Q++]=B.x,G[Q++]=B.y,G[Q++]=B.z;G[Q++]=S.x,G[Q++]=S.y,G[Q++]=S.z}s&&(K[F--]=R.z,K[F--]=R.y,K[F--]=R.x,K[H++]=S.x,K[H++]=S.y,K[H++]=S.z)}R=x(-(q=t[o(358)][o(322)]),f,A,g,d,w,C,_,b,R);var W={};return e&&(G[Q++]=R.x,G[Q++]=R.y,G[Q++]=R.z,W[u(315)]=G,W[u(328)]=P),s&&(K[F--]=R.z,K[F--]=R.y,K[F--]=R.x,W[u(318)]=K),W},r[n(356)]=o}));
