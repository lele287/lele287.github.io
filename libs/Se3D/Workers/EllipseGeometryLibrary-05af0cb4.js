function _0x3220(){var r=["9PpmOiK","130umjTtu","add","scaleToGeodeticSurface","magnitude","./Transforms-9a1c2cbf","Matrix3","exports","lerp","296359kyjeOf","sin","2329504DUgXNb","4890jsNfXj","206gNmrrZ","normalize","multiplyByScalar","299590MwjJyn","1179OPyZcx","7406rtMwLy","positions","geodeticSurfaceNormal","479963ScThQm","fromAxisAngle","fromQuaternion","CesiumMath","shift","Quaternion","cos","Cartesian3","./ComponentDatatype-10345775","PI_OVER_TWO","1470556FspnrP","clone","814725BaTPRC","522481CcxPAu","sqrt","EllipseGeometryLibrary","2wfGtvM","fromArray","12808uHdibF","495qrEfBY","center","235EGjAEZ","ellipsoid","3507760mcFUQa","2465134niyMuo","rotation","semiMinorAxis","cross","791880hiCMxe","raisePositionsToHeight","numPts","20058CyXHJn","granularity","length","semiMajorAxis","abs","17025zMOXSq","UNIT_Z","push","./Matrix2-98ba41c2"];return(_0x3220=function(){return r})()}function _0x3ddf(r,t){var n=_0x3220();return(_0x3ddf=function(r,t){return n[r-=332]})(r,t)}var _0x3909d2=_0x3ddf;(function(r,t){for(var n=_0x3ddf,a=_0x3220();;)try{if(569589===-parseInt(n(378))/1+parseInt(n(357))/2*(-parseInt(n(340))/3)+parseInt(n(332))/4+parseInt(n(388))/5+-parseInt(n(356))/6*(parseInt(n(362))/7)+parseInt(n(355))/8*(parseInt(n(344))/9)+-parseInt(n(360))/10*(-parseInt(n(384))/11))break;a.push(a.shift())}catch(r){a.push(a.shift())}})(),define([_0x3909d2(351),_0x3909d2(343),_0x3909d2(373),_0x3909d2(349)],(function(r,t,n,a){"use strict";var e=_0x3909d2,i=s;function s(r,t){var n=y();return(s=function(r,t){return n[r-=280]})(r,t)}!function(r,t){for(var n=_0x3ddf,a=s,e=r();;)try{if(209684===parseInt(a(286))/1+-parseInt(a(309))/2*(parseInt(a(302))/3)+-parseInt(a(306))/4+-parseInt(a(284))/5*(parseInt(a(305))/6)+parseInt(a(317))/7+-parseInt(a(285))/8*(parseInt(a(293))/9)+-parseInt(a(312))/10*(-parseInt(a(307))/11))break;e[n(342)](e[n(369)]())}catch(r){e[n(342)](e[n(369)]())}}(y);var o={},u=new(t[e(372)]),f=new(t[e(372)]),x=new(a[e(370)]),c=new t.Matrix3;function p(r,n,i,o,p,y,h,d,I,v){var M=e,m=s,l=r+n;t[M(372)][m(282)](o,Math[m(296)](l),u),t[M(372)][m(282)](i,Math[m(288)](l),f),t[M(372)][m(297)](u,f,u);var _=Math[m(296)](r);_*=_;var z=Math[M(354)](r);z*=z;var w=y/Math[m(283)](h*_+p*z)/d;return a.Quaternion[m(294)](u,w,x),t[M(350)][m(303)](x,c),t[M(350)][m(304)](c,I,v),t.Cartesian3[m(299)](v,v),t[M(372)][m(282)](v,d,v),v}function y(){var r=e,t=[r(376),r(359),r(379),r(386),r(383),r(353),"computeEllipsePositions","sin",r(382),r(385),"outerPositions",r(363),r(361),r(366),r(337),r(371),r(346),r(391),r(358),"ceil","extrudedHeight",r(377),r(367),"multiplyByVector",r(335),r(375),r(365),r(334),r(381),r(364),r(338),r(345),r(390),r(348),r(392),r(352),r(389),"PI_OVER_TWO",r(339),r(336)];return(y=function(){return t})()}var h=new t.Cartesian3,d=new(t[e(372)]),I=new(t[e(372)]),v=new(t[e(372)]);o[e(333)]=function(r,n,a){for(var i=e,o=s,u=n[i(387)],f=n.height,x=n[o(301)],c=a?r[o(295)]/3*2:r[o(295)]/3,p=new Float64Array(3*c),y=r[i(337)],M=a?y:0,m=0;m<y;m+=3){var l=m+1,_=m+2,z=t[i(372)][o(289)](r,m,h);u[i(347)](z,z);var w=t[i(372)][o(281)](z,d),C=u[o(310)](z,v),P=t[i(372)][o(282)](C,f,I);t.Cartesian3[i(346)](z,P,z),a&&(t[i(372)][o(282)](C,x,P),t[i(372)][o(297)](w,P,w),p[m+M]=w.x,p[l+M]=w.y,p[_+M]=w.z),p[m]=z.x,p[l]=z.y,p[_]=z.z}return p};var M=new(t[e(372)]),m=new(t[e(372)]),l=new(t[e(372)]);o[i(287)]=function(r,a,s){var o=e,u=i,f=r[u(298)],x=r[u(311)],c=r[u(313)],y=r[u(290)],v=8*r[u(280)],_=f*f,z=x*x,w=x*f,C=t[o(372)][u(314)](y),P=t[o(372)][o(358)](y,M),g=t.Cartesian3[u(315)](t[o(372)][o(341)],y,m);g=t[o(372)][o(358)](g,g);var A=t[o(372)][u(315)](P,g,l),T=1+Math[u(300)](n.CesiumMath[u(318)]/v),b=n.CesiumMath[u(318)]/(T-1),O=n[o(368)][u(318)]-T*b;O<0&&(T-=Math[u(300)](Math[u(319)](O)/b));var j,E,N,Q,S,B=a?new Array(3*(T*(T+2)*2)):void 0,F=0,G=h,H=d,X=4*T*3,Z=X-1,k=0,q=s?new Array(X):void 0;for(G=p(O=n[o(368)][u(318)],c,A,g,_,w,z,C,P,G),a&&(B[F++]=G.x,B[F++]=G.y,B[F++]=G.z),s&&(q[Z--]=G.z,q[Z--]=G.y,q[Z--]=G.x),O=n.CesiumMath[u(318)]-b,j=1;j<T+1;++j){if(G=p(O,c,A,g,_,w,z,C,P,G),H=p(Math.PI-O,c,A,g,_,w,z,C,P,H),a){for(B[F++]=G.x,B[F++]=G.y,B[F++]=G.z,N=2*j+2,E=1;E<N-1;++E)Q=E/(N-1),S=t[o(372)][u(316)](G,H,Q,I),B[F++]=S.x,B[F++]=S.y,B[F++]=S.z;B[F++]=H.x,B[F++]=H.y,B[F++]=H.z}s&&(q[Z--]=G.z,q[Z--]=G.y,q[Z--]=G.x,q[k++]=H.x,q[k++]=H.y,q[k++]=H.z),O=n[o(368)][u(318)]-(j+1)*b}for(j=T;j>1;--j){if(G=p(-(O=n[o(368)][u(318)]-(j-1)*b),c,A,g,_,w,z,C,P,G),H=p(O+Math.PI,c,A,g,_,w,z,C,P,H),a){for(B[F++]=G.x,B[F++]=G.y,B[F++]=G.z,N=2*(j-1)+2,E=1;E<N-1;++E)Q=E/(N-1),S=t[o(372)][o(352)](G,H,Q,I),B[F++]=S.x,B[F++]=S.y,B[F++]=S.z;B[F++]=H.x,B[F++]=H.y,B[F++]=H.z}s&&(q[Z--]=G.z,q[Z--]=G.y,q[Z--]=G.x,q[k++]=H.x,q[k++]=H.y,q[k++]=H.z)}G=p(-(O=n[o(368)][o(374)]),c,A,g,_,w,z,C,P,G);var R={};return a&&(B[F++]=G.x,B[F++]=G.y,B[F++]=G.z,R[u(292)]=B,R[u(308)]=T),s&&(q[Z--]=G.z,q[Z--]=G.y,q[Z--]=G.x,R[u(291)]=q),R},r[e(380)]=o}));
