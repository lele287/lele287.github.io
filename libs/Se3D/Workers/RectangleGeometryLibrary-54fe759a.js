function _0x71ad(n,t){var r=_0x4a3b();return(_0x71ad=function(n,t){return r[n-=342]})(n,t)}var _0x59496=_0x71ad;function _0x4a3b(){var n=["granYCos","latitude","Cartographic","stWest","push","15mIKYGE","24708105VllneK","project","TWO_PI","lonScalar","7JtQOYW","Matrix2","center","longitude","339052fqjucQ","./Transforms-54f6ea02","4269280QiHysk","nwCorner","1772330fVMgzA","stSouth","2256462ZbMMHn","south","computeOptions","15346MXbeep","Cartesian3","216594GJrXBP","boundingRectangle","2915983YLGzNN","3078qniOWw","cos","min","defined","multiplyByVector","west","radiiSquared","clone","exports","RectangleGeometryLibrary","stNwCorner","east","90KWAfeN","granYSin","6606950ooqpeQ","granXCos","stGranYCos","CesiumMath","unproject","granXSin","add","north","6627960IXUOVu","95550IhbDVD","ceil","./when-e77510ce","stGranXSin","stGranYSin","880rZtHHa","subtract","12KchjKy","5455832wtdAjz","sqrt","shift","Rectangle","stGranXCos","max","./RuntimeError-e442c34b","northwest","GeographicProjection"];return(_0x4a3b=function(){return n})()}(function(n,t){for(var r=_0x71ad,a=_0x4a3b();;)try{if(740390===-parseInt(r(403))/1*(-parseInt(r(353))/2)+-parseInt(r(355))/3+-parseInt(r(388))/4*(-parseInt(r(348))/5)+parseInt(r(381))/6+parseInt(r(357))/7+-parseInt(r(380))/8+-parseInt(r(358))/9*(-parseInt(r(386))/10))break;a.push(a.shift())}catch(n){a.push(a.shift())}})(),define([_0x59496(366),"./Matrix2-66dcd2c4",_0x59496(383),_0x59496(395),_0x59496(345),"./ComponentDatatype-ebc9e744"],(function(n,t,r,a,e,o){"use strict";var s=_0x59496,i=_;!function(n,t){for(var r=_0x71ad,a=_,e=n();;)try{if(858331===-parseInt(a(349))/1+parseInt(a(345))/2*(-parseInt(a(362))/3)+parseInt(a(340))/4+-parseInt(a(377))/5+parseInt(a(346))/6+-parseInt(a(339))/7*(parseInt(a(364))/8)+parseInt(a(368))/9)break;e[r(402)](e[r(391)]())}catch(n){e[r(402)](e[r(391)]())}}(C);var u=Math[i(356)],c=Math[i(348)],h=Math[s(390)],p={computePosition:function(n,t,a,e,o,p,f){var g=s,I=i,x=t[I(363)],d=n[I(351)],v=n[g(356)],C=d[I(354)]-n[I(338)]*e+o*n[g(377)],_=u(C),l=c(C),M=x.z*l,w=d[g(343)]+e*n[I(344)]+o*n[g(373)],b=_*u(w),y=_*c(w),S=x.x*b,m=x.y*y,X=h(S*b+m*y+M*l);if(p.x=S/X,p.y=m/X,p.z=M/X,a){var Y=n[I(343)];r[g(361)](Y)?(C=Y[I(354)]-n[g(374)]*e+o*n[g(384)],w=Y[I(367)]+e*n[g(385)]+o*n[I(378)],f.x=(w-n[I(352)])*n[I(375)],f.y=(C-n[I(372)])*n[I(357)]):(f.x=(w-v[I(373)])*n[g(407)],f.y=(C-v[I(369)])*n[I(357)])}}},f=new(t[s(409)]),g=new(t[s(354)]),I=new(t[s(400)]),x=new(t[s(354)]),d=new(e[s(397)]);function v(n,r,a,e,o,u,c){var h=s,p=i,I=Math[h(359)](r),v=e*I,C=a*I,_=Math[p(348)](r),l=e*_,M=a*_;g=d[p(361)](n,g),g=t.Cartesian3[p(360)](g,x,g);var w=t[h(409)][p(355)](r,f);g=t[h(409)][p(347)](w,g,g),g=t[h(354)][p(342)](g,x,g),u-=1,c-=1;var b=(n=d[h(376)](g,n))[p(354)],y=b+u*M,S=b-v*c,m=b-v*c+u*M,X=Math[h(394)](b,y,S,m),Y=Math[p(337)](b,y,S,m),G=n[p(367)],R=G+u*C,O=G+c*l,V=G+c*l+u*C;return{north:X,south:Y,east:Math[p(370)](G,R,O,V),west:Math[p(337)](G,R,O,V),granYCos:v,granYSin:l,granXCos:C,granXSin:M,nwCorner:n}}function C(){var n=s,t=[n(379),n(374),n(387),n(405),n(370),n(364),n(389),n(406),n(342),"longitude",n(404),"south",n(394),n(369),n(349),"west","granXCos",n(407),n(382),n(372),n(393),n(360),n(398),n(408),n(346),n(396),n(378),n(368),n(371),"65866oAuFGt",n(350),n(362),"sin",n(344),n(365),n(347),n(401),n(377),n(399),"fromRotation",n(359),"latScalar"];return(C=function(){return t})()}function _(n,t){var r=C();return(_=function(n,t){return r[n-=337]})(n,t)}p[s(352)]=function(n,r,a,e,u,c,h){var p=s,f=i,g=n[p(369)],C=n[f(373)],_=n[f(358)],l=n[p(351)],M=!1,w=!1;_===o[p(375)].PI_OVER_TWO&&(M=!0),l===-o[p(375)].PI_OVER_TWO&&(w=!0);var b,y,S,m,X,Y=_-l;S=(X=C>g?o[p(375)][f(365)]-C+g:g-C)/((b=Math[f(376)](X/r)+1)-1),m=Y/((y=Math[f(376)](Y/r)+1)-1);var G=t[p(392)][f(341)](n,c),R=t.Rectangle[f(366)](n,I);(0!==a||0!==e)&&(R[p(343)]<G[f(367)]&&(R[f(367)]+=o[p(375)][f(365)]),x=d[f(361)](R,x));var O=m,V=S,W=t[p(392)][f(350)](n,u),j={granYCos:O,granYSin:0,granXCos:V,granXSin:0,nwCorner:G,boundingRectangle:W,width:b,height:y,northCap:M,southCap:w};if(0!==a){var P=v(G,a,S,m,0,b,y);_=P[f(358)],l=P[f(369)],g=P[f(371)],C=P[f(373)],j[f(338)]=P[f(338)],j[f(344)]=P[f(344)],j[f(374)]=P[p(373)],j[f(353)]=P[f(353)],W[p(379)]=_,W[f(369)]=l,W[f(371)]=g,W[p(363)]=C}if(0!==e){a-=e;var q=t.Rectangle[f(341)](W,h),z=v(q,a,S,m,0,b,y);j[f(359)]=z[p(398)],j[p(393)]=z[f(374)],j.stGranYSin=z[f(344)],j[p(384)]=z[f(353)],j[f(343)]=q,j[p(401)]=z[f(373)],j[f(372)]=z[f(369)]}return j},n[s(367)]=p}));
