function _0x505c(r,t){var a=_0x428c();return(_0x505c=function(r,t){return a[r-=416]})(r,t)}var _0x10b863=_0x505c;function _0x428c(){var r=["CesiumMath","36421zGaEum","2512437URvYcf","extrudedHeight","40aAUEuK","abs","902130vHYyxo","multiplyByScalar","numPts","25646115LrxwHh","scaleToGeodeticSurface","2744012ZQCRPm","geodeticSurfaceNormal","computeEllipsePositions","add","4224580Anxltg","height","Quaternion","133NLHMIV","sin","center","lerp","EllipseGeometryLibrary","push","normalize","length","36MBrxPQ","fromArray","./Matrix2-7eaeeb18","ceil","./Transforms-33f392f7","Matrix3","3kuOajh","96BPmcCN","10118420SDylKD","raisePositionsToHeight","PI_OVER_TWO","1556910RVDLhJ","./ComponentDatatype-c51bb597","313187VJsQpi","sqrt","2OgFoTx","7fKQlUd","multiplyByVector","ellipsoid","UNIT_Z","granularity","164014hrkGfp","565195TAESmW","magnitude","fromQuaternion","cos","3223280gjETNA","shift","outerPositions","2700968byJNxx","Cartesian3"];return(_0x428c=function(){return r})()}(function(r,t){for(var a=_0x505c,n=_0x428c();;)try{if(563815===-parseInt(a(418))/1*(parseInt(a(420))/2)+-parseInt(a(468))/3*(-parseInt(a(447))/4)+-parseInt(a(442))/5+parseInt(a(469))/6*(-parseInt(a(437))/7)+-parseInt(a(440))/8*(parseInt(a(416))/9)+-parseInt(a(470))/10+parseInt(a(445))/11)break;n.push(n.shift())}catch(r){n.push(n.shift())}})(),define(["exports",_0x10b863(464),_0x10b863(417),_0x10b863(466)],(function(r,t,a,n){"use strict";var e=_0x10b863,i=o;function s(){var r=_0x505c,t=[r(426),r(441),r(449),"sin","semiMajorAxis",r(433),"rotation",r(452),r(419),r(456),"cos",r(471),r(444),"ceil","positions",r(431),r(434),r(424),r(460),r(462),r(446),r(429),r(427),r(443),"79890YUomib",r(450),"fromAxisAngle",r(472),r(448),r(421),r(451),r(439),r(461),r(423),"cross",r(457),r(454),r(438)];return(s=function(){return t})()}function o(r,t){var a=s();return(o=function(r,t){return a[r-=158]})(r,t)}!function(r,t){for(var a=_0x505c,n=o,e=r();;)try{if(433824===parseInt(n(159))/1*(parseInt(n(168))/2)+parseInt(n(167))/3+parseInt(n(184))/4+-parseInt(n(190))/5+parseInt(n(192))/6*(-parseInt(n(166))/7)+parseInt(n(183))/8+parseInt(n(187))/9*(-parseInt(n(160))/10))break;e[a(459)](e[a(432)]())}catch(r){e.push(e.shift())}}(s);var c={},x=new(t[e(435)]),u=new t.Cartesian3,f=new(n[e(453)]),p=new t.Matrix3;function y(r,a,i,s,c,y,h,l,v,I){var m=e,M=o,z=r+a;t[m(435)][M(191)](s,Math[m(430)](z),x),t.Cartesian3[M(191)](i,Math[M(171)](z),u),t[m(435)][m(450)](x,u,x);var _=Math[M(178)](r);_*=_;var w=Math[m(455)](r);w*=w;var b=y/Math[M(176)](h*_+c*w)/l;return n[m(453)][M(194)](x,b,f),t[m(467)][M(189)](f,p),t.Matrix3[m(422)](p,v,I),t[m(435)][M(186)](I,I),t[m(435)][M(191)](I,l,I),I}var h=new t.Cartesian3,l=new(t[e(435)]),v=new t.Cartesian3,I=new(t[e(435)]);c[i(179)]=function(r,a,n){for(var s=e,o=i,c=a[o(163)],x=a[o(175)],u=a[o(161)],f=n?r[o(162)]/3*2:r[o(162)]/3,p=new Float64Array(3*f),y=r[o(162)],m=n?y:0,M=0;M<y;M+=3){var z=M+1,_=M+2,w=t[s(435)][s(463)](r,M,h);c[o(188)](w,w);var b=t.Cartesian3.clone(w,l),C=c[o(158)](w,I),d=t[s(435)][o(191)](C,x,v);t[s(435)][o(193)](w,d,w),n&&(t[s(435)][o(191)](C,u,d),t.Cartesian3[s(450)](b,d,b),p[M+m]=b.x,p[z+m]=b.y,p[_+m]=b.z),p[M]=w.x,p[z]=w.y,p[_]=w.z}return p};var m=new(t[e(435)]),M=new(t[e(435)]),z=new(t[e(435)]);c[i(170)]=function(r,n,s){var o=e,c=i,x=r.semiMinorAxis,u=r[c(172)],f=r[c(174)],p=r[c(177)],I=8*r[o(425)],_=x*x,w=u*u,b=u*x,C=t[o(435)][o(428)](p),d=t[o(435)][o(460)](p,m),A=t.Cartesian3[c(164)](t[o(435)][c(185)],p,M);A=t[o(435)][c(186)](A,A);var g=t[o(435)][c(164)](d,A,z),P=1+Math[o(465)](a[o(436)][o(472)]/I),T=a[o(436)][c(195)]/(P-1),E=a[o(436)][c(195)]-P*T;E<0&&(P-=Math[c(181)](Math[c(169)](E)/T));var N,Q,H,S,U,V=n?new Array(3*(P*(P+2)*2)):void 0,k=0,B=h,D=l,G=4*P*3,L=G-1,O=0,R=s?new Array(G):void 0;for(B=y(E=a[o(436)][c(195)],f,g,A,_,b,w,C,d,B),n&&(V[k++]=B.x,V[k++]=B.y,V[k++]=B.z),s&&(R[L--]=B.z,R[L--]=B.y,R[L--]=B.x),E=a[o(436)][c(195)]-T,N=1;N<P+1;++N){if(B=y(E,f,g,A,_,b,w,C,d,B),D=y(Math.PI-E,f,g,A,_,b,w,C,d,D),n){for(V[k++]=B.x,V[k++]=B.y,V[k++]=B.z,H=2*N+2,Q=1;Q<H-1;++Q)S=Q/(H-1),U=t[o(435)][c(165)](B,D,S,v),V[k++]=U.x,V[k++]=U.y,V[k++]=U.z;V[k++]=D.x,V[k++]=D.y,V[k++]=D.z}s&&(R[L--]=B.z,R[L--]=B.y,R[L--]=B.x,R[O++]=D.x,R[O++]=D.y,R[O++]=D.z),E=a[o(436)][c(195)]-(N+1)*T}for(N=P;N>1;--N){if(B=y(-(E=a[o(436)][o(472)]-(N-1)*T),f,g,A,_,b,w,C,d,B),D=y(E+Math.PI,f,g,A,_,b,w,C,d,D),n){for(V[k++]=B.x,V[k++]=B.y,V[k++]=B.z,H=2*(N-1)+2,Q=1;Q<H-1;++Q)S=Q/(H-1),U=t.Cartesian3.lerp(B,D,S,v),V[k++]=U.x,V[k++]=U.y,V[k++]=U.z;V[k++]=D.x,V[k++]=D.y,V[k++]=D.z}s&&(R[L--]=B.z,R[L--]=B.y,R[L--]=B.x,R[O++]=D.x,R[O++]=D.y,R[O++]=D.z)}B=y(-(E=a[o(436)][c(195)]),f,g,A,_,b,w,C,d,B);var j={};return n&&(V[k++]=B.x,V[k++]=B.y,V[k++]=B.z,j[c(182)]=V,j[c(180)]=P),s&&(R[L--]=B.z,R[L--]=B.y,R[L--]=B.x,j[c(173)]=R),j},r[e(458)]=c}));
