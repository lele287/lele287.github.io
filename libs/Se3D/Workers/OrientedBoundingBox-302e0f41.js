var _0x596e73=_0x4b01;function _0x1a03(){var a=["magnitude","_0x577a4a","Cartographic","normal","EllipsoidTangentPlane","pack","OUTSIDE","5230547IteNpl","abs","zAxis","fromRectangle","multiplyByScale","UNIT_Z","plane","4103BkHAIx","min","COLUMN1ROW2","packedLength","add","divideByScalar","1quUMQF","./ComponentDatatype-f60f8546","2060iXDwUs","Cartesian3","west","CesiumMath","isOccluded","8735811EfPGdF","cartographicToCartesian","multiplyByScalar","dot","projectPointToNearestOnPlane","clone","WGS84","center","prototype","halfAxes","13318208CSzzQr","COLUMN2ROW2","8piaMBG","fromOrientedBoundingBox","Rectangle","POSITIVE_INFINITY","COLUMN1ROW1","COLUMN0ROW1","UNIT_Y","INSIDE","383118zeYsrY","ZERO","subtract","2953490hDhFNO","exports","MAX_VALUE","2423340CoGHSj","computePlaneDistances","UNIT_X","longitude","COLUMN0ROW2","north","PI_OVER_TWO","8sjPhdL","multiplyByVector","./Plane-a1789bca","fromRadians","width","COLUMN1ROW0","EPSILON3","fromPoints","equals","NEGATIVE_INFINITY","intersectPlane","1192893awNURo","getColumn","cross","start","max","stop","defined","south","height","origin","BoundingSphere","Plane","length","OrientedBoundingBox","664CgNKfj","setColumn","Ellipsoid","3453985NktcqI","Cartesian2","COLUMN2ROW0","INTERSECTING","unpack","normalize","2719488anpMHG","2360274Onobxo","Interval","computeEigenDecomposition","east","Matrix3","shift","COLUMN2ROW1","447049YYioTr","defaultValue","EPSILON10"];return(_0x1a03=function(){return a})()}function _0x4b01(a,n){var e=_0x1a03();return(_0x4b01=function(a,n){return e[a-=385]})(a,n)}(function(a,n){for(var e=_0x4b01,t=_0x1a03();;)try{if(743149===parseInt(e(440))/1+parseInt(e(388))/2+parseInt(e(409))/3*(-parseInt(e(398))/4)+parseInt(e(391))/5+-parseInt(e(432))/6+parseInt(e(470))/7+-parseInt(e(480))/8)break;t.push(t.shift())}catch(a){t.push(t.shift())}})(),define([_0x596e73(389),"./Transforms-3e5b5dc6","./Matrix2-29bed3bf","./RuntimeError-1450c8fa","./when-dc8b2a85","./EllipsoidTangentPlane-fca117cc",_0x596e73(464),_0x596e73(400)],(function(a,n,e,t,r,i,s,u){"use strict";var o=_0x596e73;function c(a,n){var e=h();return(c=function(a,n){return e[a-=456]})(a,n)}function h(){var a=_0x4b01,n=["UNIT_X",a(430),a(446),a(399),a(407),a(433),a(386),"yAxis","latitude",a(443),a(483),"halfAxes","distanceSquaredTo",a(396),"pack",a(489),a(428),"equalsEpsilon",a(473),"getPointDistance",a(478),a(397),"29781nKZysq",a(471),"xAxis",a(457),a(486),a(387),a(426),a(456),a(465),a(472),a(482),a(402),"setColumn",a(405),a(463),a(454),"south",a(429),a(467),a(423),a(439),"clone",a(412),a(385),a(488),"center",a(413),a(408),a(410),a(455),"fromPointNormal",a(417),a(431),a(469),a(411),a(442),a(476),a(404),a(394),a(461),a(421),a(390),a(395),a(435),a(436),"446052pTNIKY",a(474),a(462),a(453),a(481),a(459),a(458),a(460),a(401),a(414),"distance","abs",a(392),a(450),a(418),"unitary","equals","COLUMN0ROW0"];return(h=function(){return n})()}var f=c;function C(a,n){var t=_0x4b01,i=c;this[i(516)]=e[t(466)][i(512)](r[t(441)](a,e[t(466)][i(475)])),this[t(479)]=e.Matrix3[t(475)](r[t(441)](n,e[t(437)][i(475)]))}!function(a,n){for(var e=_0x4b01,t=c,r=a();;)try{if(390609===parseInt(t(505))/1*(parseInt(t(514))/2)+-parseInt(t(536))/3*(-parseInt(t(501))/4)+parseInt(t(497))/5+-parseInt(t(474))/6+-parseInt(t(464))/7+-parseInt(t(510))/8*(-parseInt(t(491))/9)+parseInt(t(499))/10*(parseInt(t(494))/11))break;r.push(r.shift())}catch(a){r.push(r[e(438)]())}}(h),C[f(458)]=e.Cartesian3[f(458)]+e[o(437)][f(458)],C[o(448)]=function(a,n,t){var i=o,s=f;return t=r.defaultValue(t,0),e[i(466)][s(483)](a[s(516)],n,t),e[i(437)][s(483)](a[s(480)],n,t+e[i(466)][s(458)]),n},C[f(470)]=function(a,n,t){var i=o,s=f;return n=r.defaultValue(n,0),!r.defined(t)&&(t=new C),e[i(466)][s(470)](a,n,t[i(477)]),e.Matrix3[s(470)](a,n+e[i(466)][s(458)],t[s(480)]),t};var l=new e.Cartesian3,x=new(e[o(466)]),p=new(e[o(466)]),M=new e.Cartesian3,w=new(e[o(466)]),v=new(e[o(466)]),d=new(e[o(437)]),I={unitary:new(e[o(437)]),diagonal:new(e[o(437)])};C[f(504)]=function(a,n){var t=o,i=f;if(!r.defined(n)&&(n=new C),!r.defined(a)||0===a[i(531)])return n[i(480)]=e[t(437)][t(386)],n[i(516)]=e[t(466)].ZERO,n;var s,u=a[i(531)],c=e[t(466)].clone(a[0],l);for(s=1;s<u;s++)e.Cartesian3[i(530)](c,a[s],c);var h=1/u;e.Cartesian3[i(500)](c,h,c);var N,m=0,O=0,y=0,b=0,_=0,g=0;for(s=0;s<u;s++)m+=(N=e.Cartesian3[i(496)](a[s],c,x)).x*N.x,O+=N.x*N.y,y+=N.x*N.z,b+=N.y*N.y,_+=N.y*N.z,g+=N.z*N.z;m*=h,O*=h,y*=h,b*=h,_*=h,g*=h;var P=d;P[0]=m,P[1]=O,P[2]=y,P[3]=O,P[4]=b,P[5]=_,P[6]=y,P[7]=_,P[8]=g;var z=e.Matrix3[i(534)](P,I),E=e.Matrix3[i(512)](z[i(466)],n[i(480)]),T=e.Matrix3[i(519)](E,0,M),R=e[t(437)][i(519)](E,1,w),U=e[t(437)][i(519)](E,2,v),S=-Number[i(532)],L=-Number[i(532)],B=-Number[t(390)],W=Number[t(390)],V=Number[i(532)],A=Number[t(390)];for(s=0;s<u;s++)N=a[s],S=Math[i(517)](e.Cartesian3[i(487)](T,N),S),L=Math[t(413)](e[t(466)][t(473)](R,N),L),B=Math.max(e[t(466)][t(473)](U,N),B),W=Math[i(457)](e[t(466)][i(487)](T,N),W),V=Math[i(457)](e.Cartesian3[i(487)](R,N),V),A=Math[t(458)](e[t(466)][t(473)](U,N),A);T=e[t(466)][i(500)](T,.5*(W+S),T),R=e.Cartesian3[i(500)](R,.5*(V+L),R),U=e.Cartesian3[i(500)](U,.5*(A+B),U);var k=e[t(466)][i(530)](T,R,n[i(516)]);e.Cartesian3[i(530)](k,U,k);var D=p;return D.x=S-W,D.y=L-V,D.z=B-A,e.Cartesian3[t(472)](D,.5,D),e[t(437)][i(506)](n[t(479)],D,n[t(479)]),n};var N=new(e[o(466)]),m=new(e[o(466)]);function O(a,n,t,i,s,u,c,h,l,x,p){var M=o,w=f;!r[M(415)](p)&&(p=new C);var v=p[w(480)];e.Matrix3[M(424)](v,0,n,v),e.Matrix3[w(503)](v,1,t,v),e[M(437)][w(503)](v,2,i,v);var d=N;d.x=(s+u)/2,d.y=(c+h)/2,d.z=(l+x)/2;var I=m;I.x=(u-s)/2,I.y=(h-c)/2,I.z=(x-l)/2;var O=p[w(516)];return d=e[M(437)][w(472)](v,d,d),e[M(466)][w(530)](a,d,O),e[M(437)][M(454)](v,I,v),p}var y=new(e[o(445)]),b=new(e[o(466)]),_=new(e[o(445)]),g=new(e[o(445)]),P=new(e[o(445)]),z=new(e[o(445)]),E=new(e[o(445)]),T=new e.Cartesian3,R=new(e[o(466)]),U=new e.Cartesian3,S=new(e[o(466)]),L=new(e[o(466)]),B=new(e[o(427)]),W=new(e[o(427)]),V=new(e[o(427)]),A=new(e[o(427)]),k=new(e[o(427)]),D=new(e[o(466)]),Y=new(e[o(466)]),q=new(e[o(466)]),G=new e.Cartesian3,j=new(e[o(427)]),F=new e.Cartesian3,X=new(e[o(466)]),Z=new(e[o(466)]),H=new(u[o(420)])(e[o(466)][f(469)],0);C[f(539)]=function(a,n,t,c,h){var C,l,x,p,M,w,v,d=o,I=f;if(n=r[d(441)](n,0),t=r.defaultValue(t,0),c=r[d(441)](c,e[d(425)][I(527)]),a[I(502)]<=s[d(468)].PI){var N=e[d(484)][I(516)](a,y),m=c[d(471)](N,b),K=new(i[d(447)])(m,c);v=K[I(498)];var Q=N[I(529)],J=a[I(507)]<0&&a[I(482)]>0?0:N[I(477)],$=e.Cartographic[I(459)](Q,a[I(482)],t,_),aa=e[d(445)][I(459)](a[I(509)],a[I(482)],t,g),na=e[d(445)][d(401)](a[d(467)],J,t,P),ea=e.Cartographic[d(401)](a[I(509)],a[d(416)],t,z),ta=e.Cartographic[I(459)](Q,a[I(507)],t,E),ra=c[d(471)]($,T),ia=c[I(492)](aa,R),sa=c[I(492)](na,U),ua=c[I(492)](ea,S),oa=c[I(492)](ta,L),ca=K[d(474)](ra,B),ha=K[I(537)](ia,W),fa=K[d(474)](sa,V),Ca=K[I(537)](ua,A),la=K[d(474)](oa,k);return l=-(C=Math[I(457)](ha.x,fa.x,Ca.x)),p=Math[I(517)](ha.y,ca.y),x=Math[I(457)](Ca.y,la.y),aa.height=ea[I(522)]=n,ia=c[I(492)](aa,R),ua=c[I(492)](ea,S),M=Math[I(457)](u[d(420)][I(488)](v,ia),u[d(420)][I(488)](v,ua)),w=t,O(K[I(465)],K[I(493)],K[I(476)],K[d(452)],C,l,x,p,M,w,h)}var xa=a[I(507)]>0,pa=a[I(482)]<0,Ma=xa?a[I(507)]:pa?a[I(482)]:0,wa=e[d(484)][I(516)](a,y)[I(529)],va=e.Cartesian3[I(459)](wa,Ma,t,c,D);va.z=0;var da=Math[I(462)](va.x)<s[d(468)].EPSILON10&&Math[I(462)](va.y)<s.CesiumMath[I(526)]?e[d(466)][I(469)]:e[d(466)][I(523)](va,Y),Ia=e[d(466)][I(520)],Na=e[d(466)][d(411)](da,Ia,q);v=u[d(420)][I(521)](va,da,H);var ma=e[d(466)][I(459)](wa+s[d(468)][I(490)],Ma,t,c,G);C=-(l=e[d(466)][I(487)](u[d(420)].projectPointOntoPlane(v,ma,j),Na)),p=e[d(466)][I(459)](0,a[I(482)],pa?n:t,c,F).z,x=e[d(466)].fromRadians(0,a[I(507)],xa?n:t,c,X).z;var Oa=e[d(466)][d(401)](a[I(535)],Ma,t,c,Z);return O(va,Na,Ia,da,C,l,x,p,M=u.Plane[I(488)](v,Oa),w=0,h)},C[f(512)]=function(a,n){var t=o,i=f;if(r.defined(a))return r[t(415)](n)?(e[t(466)][i(512)](a[t(477)],n[t(477)]),e[t(437)].clone(a[i(480)],n[i(480)]),n):new C(a[i(516)],a[t(479)])},C[f(518)]=function(a,t){var r=o,i=f,s=a[i(516)],u=t[i(471)],c=a[i(480)],h=u.x,C=u.y,l=u.z,x=Math[i(462)](h*c[e[r(437)][i(468)]]+C*c[e[r(437)][r(487)]]+l*c[e[r(437)][i(533)]])+Math[r(451)](h*c[e[r(437)][r(403)]]+C*c[e[r(437)][i(495)]]+l*c[e[r(437)][i(456)]])+Math[r(451)](h*c[e[r(437)][i(485)]]+C*c[e[r(437)][i(511)]]+l*c[e.Matrix3[i(540)]]),p=e.Cartesian3[i(487)](u,s)+t[i(461)];return p<=-x?n._0x577a4a[r(449)]:p>=x?n[r(444)][i(484)]:n[r(444)][i(508)]};var K=new e.Cartesian3,Q=new(e[o(466)]),J=new(e[o(466)]),$=new(e[o(466)]),aa=new(e[o(466)]),na=new(e[o(466)]);C[f(481)]=function(a,n){var t=o,r=f,i=e[t(466)][r(496)](n,a[r(516)],N),u=a[r(480)],c=e[t(437)][r(519)](u,0,K),h=e.Matrix3[r(519)](u,1,Q),C=e.Matrix3[r(519)](u,2,J),l=e[t(466)][r(478)](c),x=e[t(466)][t(443)](h),p=e.Cartesian3[r(478)](C),M=!0,w=!0,v=!0;l>0?e.Cartesian3[t(462)](c,l,c):M=!1,x>0?e[t(466)][r(538)](h,x,h):w=!1,p>0?e[t(466)][t(462)](C,p,C):v=!1;var d,I,m,O=!M+!w+!v;if(1===O){var y=c;d=h,I=C,w?!v&&(y=C,I=c):(y=h,d=c),m=e[t(466)][r(525)](d,I,aa),y===c?c=m:y===h?h=m:y===C&&(C=m)}else if(2===O){d=c,w?d=h:v&&(d=C);var b=e[t(466)][r(515)];b[r(486)](d,s[t(468)][r(528)])&&(b=e[t(466)][t(393)]),I=e.Cartesian3[r(525)](d,b,$),e[t(466)][r(523)](I,I),m=e[t(466)][t(411)](d,I,aa),e[t(466)][r(523)](m,m),d===c?(h=I,C=m):d===h?(C=I,c=m):d===C&&(c=I,h=m)}else 3===O&&(c=e.Cartesian3[t(393)],h=e[t(466)][r(515)],C=e[t(466)][r(520)]);var _=na;_.x=e[t(466)][r(487)](i,c),_.y=e[t(466)][t(473)](i,h),_.z=e[t(466)][r(487)](i,C);var g,P=0;return _.x<-l?P+=(g=_.x+l)*g:_.x>l&&(P+=(g=_.x-l)*g),_.y<-x?P+=(g=_.y+x)*g:_.y>x&&(P+=(g=_.y-x)*g),_.z<-p?P+=(g=_.z+p)*g:_.z>p&&(P+=(g=_.z-p)*g),P};var ea=new(e[o(466)]),ta=new(e[o(466)]);C[o(392)]=function(a,t,i,s){var u=o,c=f;!r.defined(s)&&(s=new(n[u(434)]));var h=Number[u(485)],C=Number[c(473)],l=a[c(516)],x=a[c(480)],p=e[u(437)][u(410)](x,0,K),M=e[u(437)][c(519)](x,1,Q),w=e[u(437)][u(410)](x,2,J),v=e[u(466)][c(530)](p,M,ea);e.Cartesian3[c(530)](v,w,v),e[u(466)][u(461)](v,l,v);var d=e[u(466)][c(496)](v,t,ta),I=e.Cartesian3[c(487)](i,d);return h=Math[c(457)](I,h),C=Math[c(517)](I,C),e[u(466)][u(461)](l,p,v),e.Cartesian3[c(530)](v,M,v),e.Cartesian3[u(387)](v,w,v),e.Cartesian3[c(496)](v,t,d),I=e[u(466)][u(473)](i,d),h=Math[c(457)](I,h),C=Math[c(517)](I,C),e.Cartesian3[c(530)](l,p,v),e[u(466)][c(496)](v,M,v),e[u(466)][c(530)](v,w,v),e[u(466)][u(387)](v,t,d),I=e[u(466)][c(487)](i,d),h=Math[c(457)](I,h),C=Math[c(517)](I,C),e[u(466)][c(530)](l,p,v),e.Cartesian3[c(496)](v,M,v),e.Cartesian3[c(496)](v,w,v),e[u(466)][c(496)](v,t,d),I=e.Cartesian3[c(487)](i,d),h=Math[c(457)](I,h),C=Math[c(517)](I,C),e[u(466)][c(496)](l,p,v),e.Cartesian3[c(530)](v,M,v),e[u(466)][c(530)](v,w,v),e[u(466)][c(496)](v,t,d),I=e[u(466)][u(473)](i,d),h=Math[u(458)](I,h),C=Math[u(413)](I,C),e[u(466)][c(496)](l,p,v),e.Cartesian3[c(530)](v,M,v),e[u(466)][u(387)](v,w,v),e[u(466)][c(496)](v,t,d),I=e[u(466)][c(487)](i,d),h=Math[c(457)](I,h),C=Math[c(517)](I,C),e[u(466)][c(496)](l,p,v),e[u(466)][u(387)](v,M,v),e.Cartesian3[c(530)](v,w,v),e.Cartesian3[c(496)](v,t,d),I=e.Cartesian3[c(487)](i,d),h=Math[c(457)](I,h),C=Math[c(517)](I,C),e[u(466)][c(496)](l,p,v),e[u(466)][c(496)](v,M,v),e[u(466)][u(387)](v,w,v),e[u(466)][c(496)](v,t,d),I=e[u(466)].dot(i,d),h=Math[c(457)](I,h),C=Math[u(413)](I,C),s[c(513)]=h,s[c(460)]=C,s};var ra=new(n[o(419)]);C[f(524)]=function(a,e){var t=f,r=n.BoundingSphere[t(479)](a,ra);return!e.isBoundingSphereVisible(r)},C[f(489)][o(408)]=function(a){return C.intersectPlane(this,a)},C[f(489)][f(481)]=function(a){return C[f(481)](this,a)},C[f(489)][f(463)]=function(a,n,e){return C[o(392)](this,a,n,e)},C[f(489)][f(524)]=function(a){return C[o(469)](this,a)},C[f(467)]=function(a,n){var t=o,i=f;return a===n||r[t(415)](a)&&r[t(415)](n)&&e[t(466)][i(467)](a[t(477)],n[i(516)])&&e[t(437)][i(467)](a[i(480)],n[i(480)])},C[f(489)][f(512)]=function(a){return C[f(512)](this,a)},C[f(489)][o(406)]=function(a){return C[f(467)](this,a)},a[o(422)]=C}));
