var _0x9d92da=_0x2c05;function _0x580f(){var r=["center","clone","semiMajorAxis","raisePositionsToHeight","Quaternion","add","numPts","positions","cos","push","9387168VvWFVg","1994718ERgjWg","5041208iUEBWN","granularity","exports","lerp","26591kCxIQK","extrudedHeight","10380936BdKgOK","Matrix3","CesiumMath","46TaMRLR","4751824KeMKay","multiplyByVector","shift","outerPositions","length","Cartesian3","fromArray","36arTfMF","sin","5wvPfaq","magnitude","./Matrix2-29bed3bf","scaleToGeodeticSurface","./ComponentDatatype-f60f8546","normalize","sqrt","1016145HBjVPa","2633680AOBCEC","3120555eXAkmy","multiplyByScalar","290IGRctl","227520UbkSEO","computeEllipsePositions","ceil","5992259hHsqve","semiMinorAxis"];return(_0x580f=function(){return r})()}function _0x2c05(r,a){var t=_0x580f();return(_0x2c05=function(r,a){return t[r-=283]})(r,a)}(function(r,a){for(var t=_0x2c05,e=_0x580f();;)try{if(687347===-parseInt(t(307))/1*(-parseInt(t(312))/2)+parseInt(t(283))/3+parseInt(t(313))/4+parseInt(t(329))/5*(parseInt(t(320))/6)+-parseInt(t(301))/7+-parseInt(t(309))/8+-parseInt(t(286))/9*(parseInt(t(285))/10))break;e.push(e.shift())}catch(r){e.push(e.shift())}})(),define([_0x9d92da(305),_0x9d92da(324),_0x9d92da(326),"./Transforms-3e5b5dc6"],(function(r,a,t,e){"use strict";var n=_0x9d92da,i=o;function s(){var r=_0x2c05,a=[r(292),r(308),"cross",r(294),r(327),r(314),r(323),r(296),r(302),r(325),"fromAxisAngle",r(290),"fromQuaternion",r(299),"UNIT_Z",r(293),r(284),"rotation",r(288),r(289),"geodeticSurfaceNormal","5846379bgTpgE",r(306),"1077908iipjoL",r(297),r(317),r(298),r(316),r(287),r(321),"737dtcwuj",r(319),r(303),"6NwdznF",r(328),r(322),"9AMlmdD","PI_OVER_TWO",r(291),"2010puecmk",r(330)];return(s=function(){return a})()}function o(r,a){var t=s();return(o=function(r,a){return t[r-=205]})(r,a)}!function(r,a){for(var t=_0x2c05,e=o,n=r();;)try{if(486559===parseInt(e(239))/1*(-parseInt(e(207))/2)+parseInt(e(242))/3*(parseInt(e(232))/4)+-parseInt(e(244))/5*(parseInt(e(217))/6)+parseInt(e(228))/7+-parseInt(e(241))/8*(parseInt(e(245))/9)+parseInt(e(208))/10+parseInt(e(230))/11)break;n[t(300)](n[t(315)]())}catch(r){n[t(300)](n.shift())}}(s);var u={},f=new(a[n(318)]),c=new a.Cartesian3,x=new(e[n(295)]),p=new(a[n(310)]);function y(r,t,i,s,u,y,h,I,d,v){var l=n,m=o,M=r+t;a[l(318)][l(284)](s,Math[m(222)](M),f),a.Cartesian3[m(225)](i,Math[m(238)](M),c),a[l(318)][m(216)](f,c,f);var C=Math[m(222)](r);C*=C;var _=Math[l(321)](r);_*=_;var z=y/Math[m(243)](h*C+u*_)/I;return e[l(295)][m(219)](f,z,x),a[l(310)][m(221)](x,p),a[l(310)][m(214)](p,d,v),a[l(318)][m(213)](v,v),a.Cartesian3[l(284)](v,I,v),v}var h=new(a[n(318)]),I=new a.Cartesian3,d=new(a[n(318)]),v=new(a[n(318)]);u[i(212)]=function(r,t,e){for(var s=n,o=i,u=t.ellipsoid,f=t.height,c=t[o(210)],x=e?r[o(234)]/3*2:r[o(234)]/3,p=new Float64Array(3*x),y=r[o(234)],l=e?y:0,m=0;m<y;m+=3){var M=m+1,C=m+2,_=a[s(318)][o(240)](r,m,h);u[o(218)](_,_);var z=a[s(318)][o(209)](_,I),w=u[o(229)](_,v),g=a[s(318)][s(284)](w,f,d);a.Cartesian3[o(216)](_,g,_),e&&(a[s(318)][o(225)](w,c,g),a[s(318)][o(216)](z,g,z),p[m+l]=z.x,p[M+l]=z.y,p[C+l]=z.z),p[m]=_.x,p[M]=_.y,p[C]=_.z}return p};var l=new a.Cartesian3,m=new a.Cartesian3,M=new(a[n(318)]);u[i(237)]=function(r,e,s){var o=n,u=i,f=r[u(220)],c=r[u(224)],x=r[u(226)],p=r[u(206)],v=8*r[o(304)],C=f*f,_=c*c,z=c*f,w=a[o(318)][u(215)](p),g=a.Cartesian3[o(327)](p,l),A=a.Cartesian3[u(211)](a[o(318)][u(223)],p,m);A=a[o(318)][u(213)](A,A);var P=a.Cartesian3[u(211)](g,A,M),b=1+Math[u(227)](t[o(311)][u(205)]/v),E=t.CesiumMath.PI_OVER_TWO/(b-1),T=t[o(311)][u(205)]-b*E;T<0&&(b-=Math[o(288)](Math.abs(T)/E));var O,k,B,R,V,j=e?new Array(3*(b*(b+2)*2)):void 0,K=0,W=h,F=I,H=4*b*3,N=H-1,S=0,q=s?new Array(H):void 0;for(W=y(T=t[o(311)][u(205)],x,P,A,C,z,_,w,g,W),e&&(j[K++]=W.x,j[K++]=W.y,j[K++]=W.z),s&&(q[N--]=W.z,q[N--]=W.y,q[N--]=W.x),T=t[o(311)][u(205)]-E,O=1;O<b+1;++O){if(W=y(T,x,P,A,C,z,_,w,g,W),F=y(Math.PI-T,x,P,A,C,z,_,w,g,F),e){for(j[K++]=W.x,j[K++]=W.y,j[K++]=W.z,B=2*O+2,k=1;k<B-1;++k)R=k/(B-1),V=a[o(318)][u(231)](W,F,R,d),j[K++]=V.x,j[K++]=V.y,j[K++]=V.z;j[K++]=F.x,j[K++]=F.y,j[K++]=F.z}s&&(q[N--]=W.z,q[N--]=W.y,q[N--]=W.x,q[S++]=F.x,q[S++]=F.y,q[S++]=F.z),T=t.CesiumMath[u(205)]-(O+1)*E}for(O=b;O>1;--O){if(W=y(-(T=t.CesiumMath[u(205)]-(O-1)*E),x,P,A,C,z,_,w,g,W),F=y(T+Math.PI,x,P,A,C,z,_,w,g,F),e){for(j[K++]=W.x,j[K++]=W.y,j[K++]=W.z,B=2*(O-1)+2,k=1;k<B-1;++k)R=k/(B-1),V=a[o(318)][u(231)](W,F,R,d),j[K++]=V.x,j[K++]=V.y,j[K++]=V.z;j[K++]=F.x,j[K++]=F.y,j[K++]=F.z}s&&(q[N--]=W.z,q[N--]=W.y,q[N--]=W.x,q[S++]=F.x,q[S++]=F.y,q[S++]=F.z)}W=y(-(T=t.CesiumMath[u(205)]),x,P,A,C,z,_,w,g,W);var G={};return e&&(j[K++]=W.x,j[K++]=W.y,j[K++]=W.z,G[u(235)]=j,G[u(233)]=b),s&&(q[N--]=W.z,q[N--]=W.y,q[N--]=W.x,G[u(236)]=q),G},r.EllipseGeometryLibrary=u}));
