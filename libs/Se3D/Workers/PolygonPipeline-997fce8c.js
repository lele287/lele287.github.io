var _0x3ea77c=_0x9327;function _0x9327(r,n){var t=_0x17be();return(_0x9327=function(r,n){return t[r-=499]})(r,n)}function _0x17be(){var r=["computeWindingOrder2D","min","sort","prev","8mJoztO","./WebGLConstants-0af6f6cf","CCW","height","packArray","959tsUsUJ","shift","4792864KMqmJl","nextZ","triangulate","interpolateUsingFraction","15IyTSTF","32862fmJrue","2743884ewwAGE","85440KXXbLf","3MlARrs","DOUBLE","17397060FDPBGF","multiplyByScalar","./when-067a7035","CLOCKWISE","next","vertices","./EllipsoidRhumbLine-3262bf58","_0x126311","./RuntimeError-97a25661","./ComponentDatatype-914b1154","65hAwotA","5828889JzONJe","fromRadians","2073822RgCqeg","exports","_0x521f4f","magnitudeSquared","64VrGpAf","length","294402afIxQu","Cartographic","EllipsoidRhumbLine","defined","normalize","5736006GHcORw","maximumRadius","holes","push","3420mjphLN","442932OGXXAZ","_0xf9e8e3","abs","setEndPoints","slice","pop","7iAKqIs","2428803qLbXaX","./GeometryAttribute-179ea980","prevZ","subtract","default","21bwvfsh","105039OXkoSf","computeArea2D","1037052SdraAO","validate","849206lBajog","cartesianToCartographic","latitude","149991pZUmzN","GeometryAttribute","1996WZWHWF","geodeticSurfaceNormal","2dfvJQg","TRIANGLES","286870nBOnyu","COUNTER_CLOCKWISE","longitude","Geometry","Cartesian3","10gBqfhr","fromArray","defaultValue","456318nzJDXP","computeSubdivision","WGS84","7139112MLTwXi","22103653hurOcX","14ryfNqG","add","RADIANS_PER_DEGREE","1vAjBCj","2814515KwgTmB","flatten","max","299836aeSKdp","8nWBKEp","PolygonPipeline","Ellipsoid","CesiumMath","Cartesian2","freeze"];return(_0x17be=function(){return r})()}(function(r,n){for(var t=_0x9327,e=_0x17be();;)try{if(463221===parseInt(t(581))/1+parseInt(t(505))/2*(parseInt(t(595))/3)+-parseInt(t(583))/4*(-parseInt(t(526))/5)+-parseInt(t(551))/6*(parseInt(t(600))/7)+parseInt(t(515))/8*(-parseInt(t(568))/9)+parseInt(t(592))/10*(parseInt(t(501))/11)+-parseInt(t(561))/12*(parseInt(t(542))/13))break;e.push(e.shift())}catch(r){e.push(e.shift())}})(),define([_0x3ea77c(546),"./Matrix2-2761f047",_0x3ea77c(540),_0x3ea77c(541),_0x3ea77c(534),_0x3ea77c(538),_0x3ea77c(569),_0x3ea77c(516)],(function(r,n,t,e,a,i,u,o){"use strict";var f=_0x3ea77c,x=v;!function(r,n){for(var t=_0x9327,e=v,a=r();;)try{if(720416===-parseInt(e(302))/1*(parseInt(e(289))/2)+-parseInt(e(298))/3+parseInt(e(297))/4+parseInt(e(304))/5+-parseInt(e(294))/6*(-parseInt(e(288))/7)+-parseInt(e(303))/8*(parseInt(e(290))/9)+-parseInt(e(291))/10)break;a[t(559)](a[t(521)]())}catch(r){a[t(559)](a.shift())}}(K);var s=y,c=y;function y(r,n,t){var e=_0x9327,a=v;t=t||2;var i,u,o,f,x,s,c,y=n&&n[e(550)],d=y?n[0]*t:r[e(550)],I=p(r,0,d,t,!0),m=[];if(!I||I[a(283)]===I[a(296)])return m;if(y&&(I=function(r,n,t,e){var a,i,u,o=v,f=[];for(a=0,i=n[o(282)];a<i;a++)(u=p(r,n[a]*e,a<i-1?n[a+1]*e:r.length,e,!1))===u[o(283)]&&(u[o(292)]=!0),f[o(281)](E(u));for(f[o(285)](w),a=0;a<f[o(282)];a++)t=h(t=b(f[a],t),t[o(283)]);return t}(r,n,I,t)),r[a(282)]>80*t){i=o=r[0],u=f=r[1];for(var _=t;_<d;_+=t)(x=r[_])<i&&(i=x),(s=r[_+1])<u&&(u=s),x>o&&(o=x),s>f&&(f=s);c=0!==(c=Math[a(287)](o-i,f-u))?1/c:0}return l(I,m,t,i,u,c),m}function v(r,n){var t=K();return(v=function(r,n){return t[r-=281]})(r,n)}function p(r,n,t,e,a){var i,u;if(a===Z(r,n,t,e)>0)for(i=n;i<t;i+=e)u=D(i,r[i],r[i+1],u);else for(i=t-e;i>=n;i-=e)u=D(i,r[i],r[i+1],u);return u&&A(u,u.next)&&(W(u),u=u.next),u}function h(r,n){var t=_0x9327,e=v;if(!r)return r;n||(n=r);var a,i=r;do{if(a=!1,i.steiner||!A(i,i.next)&&0!==z(i[t(514)],i,i[e(283)]))i=i[e(283)];else{if(W(i),(i=n=i[t(514)])===i[t(536)])break;a=!0}}while(a||i!==n);return n}function l(r,n,t,e,a,i,u){var o=_0x9327,f=v;if(r){!u&&i&&function(r,n,t,e){var a=v,i=r;do{null===i.z&&(i.z=M(i.x,i.y,n,t,e)),i.prevZ=i.prev,i[a(301)]=i[a(283)],i=i[a(283)]}while(i!==r);i[a(295)][a(301)]=null,i[a(295)]=null,function(r){var n,t,e,a,i,u,o,f,x=_0x9327,s=v,c=1;do{for(t=r,r=null,i=null,u=0;t;){for(u++,e=t,o=0,n=0;n<c&&(o++,e=e[s(301)]);n++);for(f=c;o>0||f>0&&e;)0!==o&&(0===f||!e||t.z<=e.z)?(a=t,t=t[x(523)],o--):(a=e,e=e[s(301)],f--),i?i[s(301)]=a:r=a,a[s(295)]=i,i=a;t=e}i[s(301)]=null,c*=2}while(u>1)}(i)}(r,e,a,i);for(var x,s,c=r;r[o(514)]!==r[f(283)];)if(x=r[f(296)],s=r[f(283)],i?I(r,e,a,i):d(r))n[o(559)](x.i/t),n[o(559)](r.i/t),n[f(281)](s.i/t),W(r),r=s[f(283)],c=s[f(283)];else if((r=s)===c){u?1===u?l(r=m(h(r),n,t),n,t,e,a,i,2):2===u&&_(r,n,t,e,a,i):l(h(r),n,t,e,a,i,1);break}}}function d(r){var n=v,t=r[n(296)],e=r,a=r.next;if(z(t,e,a)>=0)return!1;for(var i=r[n(283)][n(283)];i!==r[n(296)];){if(g(t.x,t.y,e.x,e.y,a.x,a.y,i.x,i.y)&&z(i[n(296)],i,i[n(283)])>=0)return!1;i=i[n(283)]}return!0}function I(r,n,t,e){var a=_0x9327,i=v,u=r[i(296)],o=r,f=r[i(283)];if(z(u,o,f)>=0)return!1;for(var x=u.x<o.x?u.x<f.x?u.x:f.x:o.x<f.x?o.x:f.x,s=u.y<o.y?u.y<f.y?u.y:f.y:o.y<f.y?o.y:f.y,c=u.x>o.x?u.x>f.x?u.x:f.x:o.x>f.x?o.x:f.x,y=u.y>o.y?u.y>f.y?u.y:f.y:o.y>f.y?o.y:f.y,p=M(x,s,n,t,e),h=M(c,y,n,t,e),l=r[i(295)],d=r.nextZ;l&&l.z>=p&&d&&d.z<=h;){if(l!==r[i(296)]&&l!==r[i(283)]&&g(u.x,u.y,o.x,o.y,f.x,f.y,l.x,l.y)&&z(l[i(296)],l,l.next)>=0)return!1;if(l=l[a(570)],d!==r[i(296)]&&d!==r[i(283)]&&g(u.x,u.y,o.x,o.y,f.x,f.y,d.x,d.y)&&z(d[i(296)],d,d.next)>=0)return!1;d=d[a(523)]}for(;l&&l.z>=p;){if(l!==r[i(296)]&&l!==r[i(283)]&&g(u.x,u.y,o.x,o.y,f.x,f.y,l.x,l.y)&&z(l[i(296)],l,l[i(283)])>=0)return!1;l=l[i(295)]}for(;d&&d.z<=h;){if(d!==r[i(296)]&&d!==r[i(283)]&&g(u.x,u.y,o.x,o.y,f.x,f.y,d.x,d.y)&&z(d[a(514)],d,d[a(536)])>=0)return!1;d=d[a(523)]}return!0}function m(r,n,t){var e=_0x9327,a=v,i=r;do{var u=i[a(296)],o=i.next.next;!A(u,o)&&L(u,i,i[e(536)],o)&&G(u,o)&&G(o,u)&&(n[e(559)](u.i/t),n.push(i.i/t),n[a(281)](o.i/t),W(i),W(i[a(283)]),i=r=o),i=i.next}while(i!==r);return h(i)}function _(r,n,t,e,a,i){var u,o,f,x,s=_0x9327,c=v,y=r;do{for(var p=y[c(283)][c(283)];p!==y[s(514)];){if(y.i!==p.i&&(o=p,f=void 0,x=void 0,f=_0x9327,(u=y)[(x=v)(283)].i!==o.i&&u[f(514)].i!==o.i&&!function(r,n){var t=_0x9327,e=v,a=r;do{if(a.i!==r.i&&a[e(283)].i!==r.i&&a.i!==n.i&&a[e(283)].i!==n.i&&L(a,a[t(536)],r,n))return!0;a=a[e(283)]}while(a!==r);return!1}(u,o)&&(G(u,o)&&G(o,u)&&function(r,n){var t=_0x9327,e=v,a=r,i=!1,u=(r.x+n.x)/2,o=(r.y+n.y)/2;do{a.y>o!=a[e(283)].y>o&&a[t(536)].y!==a.y&&u<(a[e(283)].x-a.x)*(o-a.y)/(a[e(283)].y-a.y)+a.x&&(i=!i),a=a[e(283)]}while(a!==r);return i}(u,o)&&(z(u[x(296)],u,o[x(296)])||z(u,o[x(296)],o))||A(u,o)&&z(u[x(296)],u,u[x(283)])>0&&z(o[x(296)],o,o[x(283)])>0))){var d=O(y,p);return y=h(y,y[c(283)]),d=h(d,d[c(283)]),l(y,n,t,e,a,i),void l(d,n,t,e,a,i)}p=p[c(283)]}y=y[c(283)]}while(y!==r)}function w(r,n){return r.x-n.x}function b(r,n){var t=v,e=function(r,n){var t,e=_0x9327,a=v,i=n,u=r.x,o=r.y,f=-1/0;do{if(o<=i.y&&o>=i[a(283)].y&&i[e(536)].y!==i.y){var x=i.x+(o-i.y)*(i[e(536)].x-i.x)/(i[a(283)].y-i.y);if(x<=u&&x>f){if(f=x,x===u){if(o===i.y)return i;if(o===i[a(283)].y)return i[a(283)]}t=i.x<i[a(283)].x?i:i[a(283)]}}i=i[a(283)]}while(i!==n);if(!t)return null;if(u===f)return t;var s,c=t,y=t.x,p=t.y,h=1/0;i=t;do{u>=i.x&&i.x>=y&&u!==i.x&&g(o<p?u:f,o,y,p,o<p?f:u,o,i.x,i.y)&&(s=Math[a(299)](o-i.y)/(u-i.x),G(i,r)&&(s<h||s===h&&(i.x>t.x||i.x===t.x&&C(t,i)))&&(t=i,h=s)),i=i[a(283)]}while(i!==c);return t}(r,n);if(!e)return n;var a=O(e,r),i=h(e,e[t(283)]);return h(a,a[t(283)]),n===e?i:n}function C(r,n){var t=v;return z(r[t(296)],r,n[t(296)])<0&&z(n[t(283)],r,r[t(283)])<0}function M(r,n,t,e,a){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=32767*(r-t)*a)|r<<8))|r<<4))|r<<2))|r<<1))|(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=32767*(n-e)*a)|n<<8))|n<<4))|n<<2))|n<<1))<<1}function E(r){var n=v,t=r,e=r;do{(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t[n(283)]}while(t!==r);return e}function g(r,n,t,e,a,i,u,o){return(a-u)*(n-o)-(r-u)*(i-o)>=0&&(r-u)*(e-o)-(t-u)*(n-o)>=0&&(t-u)*(i-o)-(a-u)*(e-o)>=0}function z(r,n,t){return(n.y-r.y)*(t.x-n.x)-(n.x-r.x)*(t.y-n.y)}function A(r,n){return r.x===n.x&&r.y===n.y}function L(r,n,t,e){var a=S(z(r,n,t)),i=S(z(r,n,e)),u=S(z(t,e,r)),o=S(z(t,e,n));return a!==i&&u!==o||(!(0!==a||!R(r,t,n))||(!(0!==i||!R(r,e,n))||(!(0!==u||!R(t,r,e))||!(0!==o||!R(t,n,e)))))}function R(r,n,t){var e=_0x9327,a=v;return n.x<=Math.max(r.x,t.x)&&n.x>=Math[a(286)](r.x,t.x)&&n.y<=Math[a(287)](r.y,t.y)&&n.y>=Math[e(512)](r.y,t.y)}function S(r){return r>0?1:r<0?-1:0}function G(r,n){var t=v;return z(r[t(296)],r,r[t(283)])<0?z(r,n,r[t(283)])>=0&&z(r,r[t(296)],n)>=0:z(r,n,r[t(296)])<0||z(r,r[t(283)],n)<0}function O(r,n){var t=_0x9327,e=v,a=new q(r.i,r.x,r.y),i=new q(n.i,n.x,n.y),u=r[e(283)],o=n[e(296)];return r[t(536)]=n,n[e(296)]=r,a[e(283)]=u,u[t(514)]=a,i[t(536)]=a,a[e(296)]=i,o[e(283)]=i,i[e(296)]=o,i}function D(r,n,t,e){var a=v,i=new q(r,n,t);return e?(i[a(283)]=e[a(283)],i[a(296)]=e,e[a(283)][a(296)]=i,e[a(283)]=i):(i[a(296)]=i,i[a(283)]=i),i}function W(r){var n=_0x9327,t=v;r[n(536)][t(296)]=r[t(296)],r[n(514)].next=r[n(536)],r[t(295)]&&(r.prevZ[t(301)]=r.nextZ),r[t(301)]&&(r[t(301)][t(295)]=r[t(295)])}function q(r,n,t){var e=v;this.i=r,this.x=n,this.y=t,this[e(296)]=null,this[e(283)]=null,this.z=null,this[e(295)]=null,this[e(301)]=null,this[e(292)]=!1}function Z(r,n,t,e){for(var a=0,i=n,u=t-e;i<t;i+=e)a+=(r[u]-r[i])*(r[i+1]+r[u+1]),u=i;return a}function K(){var r=f,n=["1ZNqLxP",r(549),"6984880LKVCIa","push",r(550),"next",r(537),r(513),"min","max",r(567),r(587),"37134qPpEYG",r(532),"steiner",r(572),r(556),"prevZ",r(514),r(522),r(528),"abs","deviation","nextZ"];return(K=function(){return n})()}y[x(300)]=function(r,n,t,e){var a=_0x9327,i=x,u=n&&n.length,o=u?n[0]*t:r[i(282)],f=Math[i(299)](Z(r,0,o,t));if(u)for(var s=0,c=n[i(282)];s<c;s++){var y=n[s]*t,v=s<c-1?n[s+1]*t:r[i(282)];f-=Math[i(299)](Z(r,y,v,t))}var p=0;for(s=0;s<e[i(282)];s+=3){var h=e[s]*t,l=e[s+1]*t,d=e[s+2]*t;p+=Math[i(299)]((r[h]-r[d])*(r[l+1]-r[h+1])-(r[h]-r[l])*(r[d+1]-r[h+1]))}return 0===f&&0===p?0:Math[a(563)]((p-f)/f)},y[f(502)]=function(r){for(var n=f,t=x,e=r[0][0][t(282)],a={vertices:[],holes:[],dimensions:e},i=0,u=0;u<r[t(282)];u++){for(var o=0;o<r[u][t(282)];o++)for(var s=0;s<e;s++)a[t(284)][t(281)](r[u][o][s]);u>0&&(i+=r[u-1][n(550)],a[n(558)][t(281)](i))}return a},s[x(293)]=c;var P=T;function T(r,n){var t=N();return(T=function(r,n){return t[r-=331]})(r,n)}!function(r,n){for(var t=f,e=T,a=r();;)try{if(640380===parseInt(e(332))/1*(-parseInt(e(340))/2)+parseInt(e(331))/3*(parseInt(e(339))/4)+parseInt(e(333))/5+-parseInt(e(337))/6*(parseInt(e(335))/7)+parseInt(e(342))/8+parseInt(e(344))/9*(parseInt(e(338))/10)+parseInt(e(341))/11)break;a[t(559)](a[t(521)]())}catch(r){a[t(559)](a[t(521)]())}}(N);var B={CLOCKWISE:o[f(539)].CW,COUNTER_CLOCKWISE:o._0x126311[P(334)]};function N(){var r=f,n=[r(535),"1388886LqZJIr","210rFMmlK",r(504),r(578),r(543),r(598),r(588),r(574),r(577),r(510),r(530),r(500),r(529),r(517),r(573)];return(N=function(){return n})()}B[P(345)]=function(r){var n=P;return r===B[n(336)]||r===B[n(343)]};var k=Object[P(346)](B),X=V;function J(){var r=f,n=[r(588),r(520),r(555),"min",r(533),"magnitudeSquared",r(518),r(601),r(593),r(560),r(545),r(557),r(519),r(524),"scaleToGeodeticSurface",r(531),"computeRhumbLineSubdivision",r(566),"10743112WLLkGi",r(576),r(565),r(535),r(559),r(527),"surfaceDistance",r(586),"scaleToGeodeticHeight",r(544),"15MMzbUQ","chordLength",r(511),"latitude",r(575),r(579),r(589),r(564),"6038720oEjqID",r(599),r(550),r(597),"subtract","9fMCkqn",r(584),r(585),r(503)];return(J=function(){return n})()}!function(r,n){for(var t=f,e=V,a=r();;)try{if(723076===-parseInt(e(428))/1+parseInt(e(462))/2*(parseInt(e(429))/3)+parseInt(e(438))/4*(-parseInt(e(447))/5)+-parseInt(e(442))/6*(-parseInt(e(465))/7)+parseInt(e(437))/8*(-parseInt(e(460))/9)+-parseInt(e(455))/10+parseInt(e(456))/11)break;a.push(a.shift())}catch(r){a[t(559)](a[t(521)]())}}(J);var U=new(n[f(591)]),j=new(n[f(591)]),F={};function V(r,n){var t=J();return(V=function(r,n){return t[r-=427]})(r,n)}F[X(451)]=function(r){for(var n=r.length,t=0,e=n-1,a=0;a<n;e=a++){var i=r[e],u=r[a];t+=i.x*u.y-u.x*i.y}return.5*t},F[X(449)]=function(r){var n=X;return F.computeArea2D(r)>0?k[n(464)]:k[n(440)]},F[X(432)]=function(r,t){var e=X,a=n[f(509)][e(431)](r);return s(a,t,2)};var H=new n.Cartesian3,Q=new(n[f(591)]),Y=new n.Cartesian3,$=new(n[f(591)]),rr=new(n[f(591)]),nr=new n.Cartesian3,tr=new(n[f(591)]);F[f(596)]=function(r,t,i,o){var x=f,s=X;o=a[x(594)](o,e.CesiumMath[x(499)]);var c,y=i[s(439)](0),v=t[s(457)],p=new Array(3*v),h=0;for(c=0;c<v;c++){var l=t[c];p[h++]=l.x,p[h++]=l.y,p[h++]=l.z}for(var d=[],I={},m=r[s(430)],_=e[x(508)][s(448)](o,m),w=_*_;y[s(457)]>0;){var b,C,M=y[s(436)](),E=y[s(436)](),g=y[x(566)](),z=n[x(591)][s(427)](p,3*g,H),A=n.Cartesian3[s(427)](p,3*E,Q),L=n[x(591)][s(427)](p,3*M,Y),R=n[x(591)].multiplyByScalar(n[x(591)][s(466)](z,$),m,$),S=n[x(591)][x(533)](n[x(591)][s(466)](A,rr),m,rr),G=n[x(591)][x(533)](n[x(591)][s(466)](L,nr),m,nr),O=n[x(591)][x(548)](n[x(591)][s(459)](R,S,tr)),D=n.Cartesian3[s(469)](n[x(591)][x(571)](S,G,tr)),W=n[x(591)][s(469)](n.Cartesian3[x(571)](G,R,tr)),q=Math[s(463)](O,D,W);q>w?O===q?(c=I[b=Math[s(467)](g,E)+" "+Math[s(463)](g,E)],!a[x(554)](c)&&(C=n[x(591)][s(471)](z,A,tr),n[x(591)][s(468)](C,.5,C),p[s(441)](C.x,C.y,C.z),c=p[s(457)]/3-1,I[b]=c),y[s(441)](g,c,M),y[s(441)](c,E,M)):D===q?(c=I[b=Math[x(512)](E,M)+" "+Math[s(463)](E,M)],!a[x(554)](c)&&(C=n[x(591)][x(601)](A,L,tr),n[x(591)].multiplyByScalar(C,.5,C),p[x(559)](C.x,C.y,C.z),c=p[s(457)]/3-1,I[b]=c),y[s(441)](E,c,g),y[x(559)](c,M,g)):W===q&&(c=I[b=Math[s(467)](M,g)+" "+Math[s(463)](M,g)],!a[x(554)](c)&&(C=n[x(591)][s(471)](L,z,tr),n.Cartesian3[s(468)](C,.5,C),p[x(559)](C.x,C.y,C.z),c=p[s(457)]/3-1,I[b]=c),y.push(M,c,E),y[s(441)](c,g,E)):(d[s(441)](g),d[x(559)](E),d[x(559)](M))}return new(u[x(590)])({attributes:{position:new(u[x(582)])({componentDatatype:e._0x48532e[s(434)],componentsPerAttribute:3,values:p})},indices:d,primitiveType:u[x(562)][s(444)]})};var er=new(n[f(552)]),ar=new(n[f(552)]),ir=new n.Cartographic,ur=new(n[f(552)]);F[X(435)]=function(r,t,o,x){var s=f,c=X;x=a[s(594)](x,e[s(508)].RADIANS_PER_DEGREE);var y,v=o[c(439)](0),p=t[s(550)],h=new Array(3*p),l=0;for(y=0;y<p;y++){var d=t[y];h[l++]=d.x,h[l++]=d.y,h[l++]=d.z}for(var I=[],m={},_=r.maximumRadius,w=e[s(508)][c(448)](x,_),b=new i.EllipsoidRhumbLine(void 0,void 0,r),C=new(i[s(553)])(void 0,void 0,r),M=new i.EllipsoidRhumbLine(void 0,void 0,r);v[c(457)]>0;){var E=v[c(436)](),g=v[c(436)](),z=v[s(566)](),A=n[s(591)][c(427)](h,3*z,H),L=n[s(591)][c(427)](h,3*g,Q),R=n[s(591)][c(427)](h,3*E,Y),S=r[c(452)](A,er),G=r[c(452)](L,ar),O=r[c(452)](R,ir);b[s(564)](S,G);var D=b[c(443)];C[c(454)](G,O);var W=C[c(443)];M.setEndPoints(O,S);var q,Z,K,P,T=M[c(443)],B=Math[s(503)](D,W,T);B>w?D===B?(y=m[q=Math[c(467)](z,g)+" "+Math[c(463)](z,g)],!a[s(554)](y)&&(Z=b[s(525)](.5,ur),K=.5*(S[s(518)]+G[s(518)]),P=n[s(591)][s(544)](Z[c(453)],Z[c(450)],K,r,tr),h[s(559)](P.x,P.y,P.z),y=h[c(457)]/3-1,m[q]=y),v[c(441)](z,y,E),v[c(441)](y,g,E)):W===B?(y=m[q=Math[s(512)](g,E)+" "+Math[c(463)](g,E)],!a.defined(y)&&(Z=C[s(525)](.5,ur),K=.5*(G[c(470)]+O.height),P=n[s(591)][c(446)](Z[c(453)],Z[s(580)],K,r,tr),h[c(441)](P.x,P.y,P.z),y=h[c(457)]/3-1,m[q]=y),v[c(441)](g,y,z),v[c(441)](y,E,z)):T===B&&(y=m[q=Math.min(E,z)+" "+Math[c(463)](E,z)],!a[s(554)](y)&&(Z=M[s(525)](.5,ur),K=.5*(O[s(518)]+S[c(470)]),P=n[s(591)][c(446)](Z[c(453)],Z.latitude,K,r,tr),h[c(441)](P.x,P.y,P.z),y=h[c(457)]/3-1,m[q]=y),v[c(441)](E,y,g),v[c(441)](y,z,g)):(I[c(441)](z),I[c(441)](g),I[c(441)](E))}return new(u[s(590)])({attributes:{position:new(u[s(582)])({componentDatatype:e._0x48532e[c(434)],componentsPerAttribute:3,values:h})},indices:I,primitiveType:u[s(562)][c(444)]})},F[X(445)]=function(r,t,e,i){var u=f,o=X;e=a[u(594)](e,n[u(507)][o(458)]);var x=U,s=j;if(t=a[u(594)](t,0),i=a.defaultValue(i,!0),a[u(554)](r))for(var c=r[o(457)],y=0;y<c;y+=3)n[u(591)][o(427)](r,y,s),i&&(s=e[o(433)](s,s)),0!==t&&(x=e[o(461)](s,x),n[u(591)][o(468)](x,t,x),n.Cartesian3[o(471)](s,x,s)),r[y]=s.x,r[y+1]=s.y,r[y+2]=s.z;return r},r[f(506)]=F,r[f(547)]=k}));
