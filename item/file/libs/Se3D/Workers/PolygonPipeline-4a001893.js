function _0x5414(){var r=["RADIANS_PER_DEGREE","length","537126tFgxjz","height","_0x49518d","2050310smvSQn","1426296EGRLqZ","shift","28172952LFaaES","CCW","16865840dlIMWH","min","defined","sort","28WEELih","1399746vWSZHZ","11335220ymqpzh","_0x1c7f6b","32luierd","4353858TztCfW","Cartesian3","CLOCKWISE","surfaceDistance","./WebGLConstants-2dad06bf","prev","validate","computeArea2D","3951BatJZG","pop","maximumRadius","defaultValue","2458833JXPpeT","4uBIdXN","nextZ","455HVkZKb","chordLength","default","542507OZmWmS","packArray","1141884lAMqXi","normalize","vertices","subtract","2453145edcvuN","./GeometryAttribute-1e181289","620652fXCdQh","fromRadians","168760nZIJCD","abs","Geometry","steiner","exports","GeometryAttribute","2352176edAxgA","cartesianToCartographic","1wrBqJh","multiplyByScalar","_0x1397ff","CesiumMath","COUNTER_CLOCKWISE","push","magnitudeSquared","computeWindingOrder2D","5147598QaKigb","max","3529251pvWSrN","Cartographic","setEndPoints","WGS84","432610kddClv","3493920HZPSUw","./Matrix2-98ba41c2","2171058JTdXyl","longitude","6eEgvoX","./ComponentDatatype-10345775","geodeticSurfaceNormal","prevZ","fromArray","add","EllipsoidRhumbLine","deviation","5HxTuOy","2438994CDQcnL","latitude","567406mHJNVc","./when-32eb8218","next","DOUBLE","PolygonPipeline","computeRhumbLineSubdivision","computeSubdivision","./RuntimeError-ff0a0fa5"];return(_0x5414=function(){return r})()}var _0x148e60=_0x152c;function _0x152c(r,n){var t=_0x5414();return(_0x152c=function(r,n){return t[r-=213]})(r,n)}(function(r,n){for(var t=_0x152c,e=_0x5414();;)try{if(443627===parseInt(t(226))/1+parseInt(t(295))/2+parseInt(t(265))/3+parseInt(t(289))/4+parseInt(t(227))/5+parseInt(t(252))/6*(parseInt(t(264))/7)+-parseInt(t(260))/8)break;e.push(e.shift())}catch(r){e.push(e.shift())}})(),define([_0x148e60(301),_0x148e60(228),_0x148e60(249),_0x148e60(232),_0x148e60(243),"./EllipsoidRhumbLine-47847af6",_0x148e60(294),_0x148e60(273)],(function(r,n,t,e,a,i,u,o){"use strict";var f=_0x148e60,x=k;!function(r,n){for(var t=_0x152c,e=k,a=r();;)try{if(324394===parseInt(e(197))/1+parseInt(e(187))/2*(-parseInt(e(198))/3)+parseInt(e(195))/4*(parseInt(e(178))/5)+-parseInt(e(183))/6+parseInt(e(188))/7*(parseInt(e(182))/8)+parseInt(e(181))/9+-parseInt(e(194))/10)break;a[t(217)](a[t(257)]())}catch(r){a[t(217)](a.shift())}}(l);var c=v,s=v;function v(r,n,t){var e=k;t=t||2;var a,i,u,o,f,x,c,s=n&&n[e(185)],v=s?n[0]*t:r[e(185)],l=y(r,0,v,t,!0),d=[];if(!l||l[e(176)]===l[e(199)])return d;if(s&&(l=function(r,n,t,e){var a,i,u,o=k,f=[];for(a=0,i=n[_0x152c(251)];a<i;a++)(u=y(r,n[a]*e,a<i-1?n[a+1]*e:r[o(185)],e,!1))===u[o(176)]&&(u[o(186)]=!0),f[o(184)](g(u));for(f[o(191)](C),a=0;a<f[o(185)];a++)t=p(t=w(f[a],t),t[o(176)]);return t}(r,n,l,t)),r[e(185)]>80*t){a=u=r[0],i=o=r[1];for(var _=t;_<v;_+=t)(f=r[_])<a&&(a=f),(x=r[_+1])<i&&(i=x),f>u&&(u=f),x>o&&(o=x);c=0!==(c=Math[e(200)](u-a,o-i))?1/c:0}return h(l,d,t,a,i,c),d}function y(r,n,t,e,a){var i,u,o=_0x152c,f=k;if(a===Z(r,n,t,e)>0)for(i=n;i<t;i+=e)u=T(i,r[i],r[i+1],u);else for(i=t-e;i>=n;i-=e)u=T(i,r[i],r[i+1],u);return u&&S(u,u[f(176)])&&(D(u),u=u[o(244)]),u}function p(r,n){var t=k;if(!r)return r;n||(n=r);var e,a=r;do{if(e=!1,a.steiner||!S(a,a[t(176)])&&0!==E(a[t(199)],a,a[t(176)]))a=a[t(176)];else{if(D(a),(a=n=a[t(199)])===a[t(176)])break;e=!0}}while(e||a!==n);return n}function h(r,n,t,e,a,i,u){var o=_0x152c,f=k;if(r){!u&&i&&function(r,n,t,e){var a=_0x152c,i=k,u=r;do{null===u.z&&(u.z=b(u.x,u.y,n,t,e)),u[i(193)]=u[i(199)],u[a(283)]=u[i(176)],u=u[i(176)]}while(u!==r);u[i(193)][i(177)]=null,u[i(193)]=null,function(r){var n,t,e,a,i,u,o,f,x=_0x152c,c=k,s=1;do{for(t=r,r=null,i=null,u=0;t;){for(u++,e=t,o=0,n=0;n<s&&(o++,e=e[x(283)]);n++);for(f=s;o>0||f>0&&e;)0!==o&&(0===f||!e||t.z<=e.z)?(a=t,t=t[c(177)],o--):(a=e,e=e[c(177)],f--),i?i[c(177)]=a:r=a,a[c(193)]=i,i=a;t=e}i[c(177)]=null,s*=2}while(u>1)}(u)}(r,e,a,i);for(var x,c,s=r;r[f(199)]!==r[f(176)];)if(x=r[f(199)],c=r[f(176)],i?_(r,e,a,i):d(r))n[f(184)](x.i/t),n[f(184)](r.i/t),n[o(217)](c.i/t),D(r),r=c[f(176)],s=c[o(244)];else if((r=c)===s){u?1===u?h(r=I(p(r),n,t),n,t,e,a,i,2):2===u&&m(r,n,t,e,a,i):h(p(r),n,t,e,a,i,1);break}}}function l(){var r=_0x152c,n=[r(251),r(300),"354JAqqsx",r(287),"holes",r(298),r(263),r(291),"prevZ","5282960JEpzwa",r(282),r(238),r(242),r(277),r(274),r(221),r(244),r(283),"890465pvTsLC","flatten",r(286),r(222),r(268),r(229),r(217)];return(l=function(){return n})()}function d(r){var n=_0x152c,t=k,e=r[t(199)],a=r,i=r[t(176)];if(E(e,a,i)>=0)return!1;for(var u=r[t(176)][n(244)];u!==r[t(199)];){if(z(e.x,e.y,a.x,a.y,i.x,i.y,u.x,u.y)&&E(u[t(199)],u,u[t(176)])>=0)return!1;u=u[t(176)]}return!0}function _(r,n,t,e){var a=_0x152c,i=k,u=r[i(199)],o=r,f=r[i(176)];if(E(u,o,f)>=0)return!1;for(var x=u.x<o.x?u.x<f.x?u.x:f.x:o.x<f.x?o.x:f.x,c=u.y<o.y?u.y<f.y?u.y:f.y:o.y<f.y?o.y:f.y,s=u.x>o.x?u.x>f.x?u.x:f.x:o.x>f.x?o.x:f.x,v=u.y>o.y?u.y>f.y?u.y:f.y:o.y>f.y?o.y:f.y,y=b(x,c,n,t,e),p=b(s,v,n,t,e),h=r[i(193)],l=r[i(177)];h&&h.z>=y&&l&&l.z<=p;){if(h!==r[a(274)]&&h!==r[a(244)]&&z(u.x,u.y,o.x,o.y,f.x,f.y,h.x,h.y)&&E(h[a(274)],h,h.next)>=0)return!1;if(h=h[a(234)],l!==r[i(199)]&&l!==r[a(244)]&&z(u.x,u.y,o.x,o.y,f.x,f.y,l.x,l.y)&&E(l[i(199)],l,l[i(176)])>=0)return!1;l=l[a(283)]}for(;h&&h.z>=y;){if(h!==r[i(199)]&&h!==r[i(176)]&&z(u.x,u.y,o.x,o.y,f.x,f.y,h.x,h.y)&&E(h[i(199)],h,h[i(176)])>=0)return!1;h=h[i(193)]}for(;l&&l.z<=p;){if(l!==r[i(199)]&&l!==r[i(176)]&&z(u.x,u.y,o.x,o.y,f.x,f.y,l.x,l.y)&&E(l[i(199)],l,l[i(176)])>=0)return!1;l=l[i(177)]}return!0}function I(r,n,t){var e=_0x152c,a=k,i=r;do{var u=i[a(199)],o=i[e(244)][a(176)];!S(u,o)&&L(u,i,i[a(176)],o)&&R(u,o)&&R(o,u)&&(n[a(184)](u.i/t),n[a(184)](i.i/t),n[a(184)](o.i/t),D(i),D(i[a(176)]),i=r=o),i=i[e(244)]}while(i!==r);return p(i)}function m(r,n,t,e,a,i){var u,o,f,x,c=_0x152c,s=k,v=r;do{for(var y=v[s(176)][c(244)];y!==v[s(199)];){if(v.i!==y.i&&(o=y,f=void 0,x=void 0,f=_0x152c,(u=v)[(x=k)(176)].i!==o.i&&u[x(199)].i!==o.i&&!function(r,n){var t=k,e=r;do{if(e.i!==r.i&&e[t(176)].i!==r.i&&e.i!==n.i&&e[t(176)].i!==n.i&&L(e,e[t(176)],r,n))return!0;e=e[t(176)]}while(e!==r);return!1}(u,o)&&(R(u,o)&&R(o,u)&&function(r,n){var t=_0x152c,e=k,a=r,i=!1,u=(r.x+n.x)/2,o=(r.y+n.y)/2;do{a.y>o!=a[e(176)].y>o&&a[t(244)].y!==a.y&&u<(a[e(176)].x-a.x)*(o-a.y)/(a[t(244)].y-a.y)+a.x&&(i=!i),a=a[e(176)]}while(a!==r);return i}(u,o)&&(E(u[x(199)],u,o[x(199)])||E(u,o[f(274)],o))||S(u,o)&&E(u[x(199)],u,u[x(176)])>0&&E(o[x(199)],o,o[x(176)])>0))){var l=G(v,y);return v=p(v,v[s(176)]),l=p(l,l[s(176)]),h(v,n,t,e,a,i),void h(l,n,t,e,a,i)}y=y[s(176)]}v=v[s(176)]}while(v!==r)}function C(r,n){return r.x-n.x}function w(r,n){var t=_0x152c,e=k,a=function(r,n){var t,e=_0x152c,a=k,i=n,u=r.x,o=r.y,f=-1/0;do{if(o<=i.y&&o>=i[a(176)].y&&i[a(176)].y!==i.y){var x=i.x+(o-i.y)*(i[e(244)].x-i.x)/(i[a(176)].y-i.y);if(x<=u&&x>f){if(f=x,x===u){if(o===i.y)return i;if(o===i[a(176)].y)return i[a(176)]}t=i.x<i.next.x?i:i[e(244)]}}i=i[a(176)]}while(i!==n);if(!t)return null;if(u===f)return t;var c,s=t,v=t.x,y=t.y,p=1/0;i=t;do{u>=i.x&&i.x>=v&&u!==i.x&&z(o<y?u:f,o,v,y,o<y?f:u,o,i.x,i.y)&&(c=Math[e(298)](o-i.y)/(u-i.x),R(i,r)&&(c<p||c===p&&(i.x>t.x||i.x===t.x&&M(t,i)))&&(t=i,p=c)),i=i[a(176)]}while(i!==s);return t}(r,n);if(!a)return n;var i=G(a,r),u=p(a,a[e(176)]);return p(i,i[t(244)]),n===a?u:n}function M(r,n){var t=_0x152c,e=k;return E(r[e(199)],r,n[e(199)])<0&&E(n[t(244)],r,r[e(176)])<0}function b(r,n,t,e,a){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=32767*(r-t)*a)|r<<8))|r<<4))|r<<2))|r<<1))|(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=32767*(n-e)*a)|n<<8))|n<<4))|n<<2))|n<<1))<<1}function g(r){var n=k,t=r,e=r;do{(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t[n(176)]}while(t!==r);return e}function z(r,n,t,e,a,i,u,o){return(a-u)*(n-o)-(r-u)*(i-o)>=0&&(r-u)*(e-o)-(t-u)*(n-o)>=0&&(t-u)*(i-o)-(a-u)*(e-o)>=0}function E(r,n,t){return(n.y-r.y)*(t.x-n.x)-(n.x-r.x)*(t.y-n.y)}function S(r,n){return r.x===n.x&&r.y===n.y}function L(r,n,t,e){var a=W(E(r,n,t)),i=W(E(r,n,e)),u=W(E(t,e,r)),o=W(E(t,e,n));return a!==i&&u!==o||(!(0!==a||!A(r,t,n))||(!(0!==i||!A(r,e,n))||(!(0!==u||!A(t,r,e))||!(0!==o||!A(t,n,e)))))}function A(r,n,t){var e=_0x152c,a=k;return n.x<=Math[a(200)](r.x,t.x)&&n.x>=Math[e(261)](r.x,t.x)&&n.y<=Math[a(200)](r.y,t.y)&&n.y>=Math[e(261)](r.y,t.y)}function W(r){return r>0?1:r<0?-1:0}function R(r,n){var t=k;return E(r[_0x152c(274)],r,r[t(176)])<0?E(r,n,r[t(176)])>=0&&E(r,r[t(199)],n)>=0:E(r,n,r[t(199)])<0||E(r,r[t(176)],n)<0}function G(r,n){var t=_0x152c,e=k,a=new O(r.i,r.x,r.y),i=new O(n.i,n.x,n.y),u=r[e(176)],o=n[e(199)];return r[t(244)]=n,n[e(199)]=r,a[t(244)]=u,u[t(274)]=a,i[e(176)]=a,a[e(199)]=i,o[e(176)]=i,i[e(199)]=o,i}function T(r,n,t,e){var a=_0x152c,i=k,u=new O(r,n,t);return e?(u.next=e[a(244)],u[i(199)]=e,e[a(244)][i(199)]=u,e[i(176)]=u):(u[i(199)]=u,u[i(176)]=u),u}function k(r,n){var t=l();return(k=function(r,n){return t[r-=176]})(r,n)}function D(r){var n=_0x152c,t=k;r[t(176)][t(199)]=r[t(199)],r[n(274)][t(176)]=r[n(244)],r[t(193)]&&(r[t(193)][n(283)]=r[t(177)]),r[t(177)]&&(r[t(177)][t(193)]=r[t(193)])}function O(r,n,t){var e=k;this.i=r,this.x=n,this.y=t,this[e(199)]=null,this[e(176)]=null,this.z=null,this[e(193)]=null,this[e(177)]=null,this[e(186)]=!1}function Z(r,n,t,e){for(var a=0,i=n,u=t-e;i<t;i+=e)a+=(r[u]-r[i])*(r[i+1]+r[u+1]),u=i;return a}v[x(196)]=function(r,n,t,e){var a=_0x152c,i=x,u=n&&n[i(185)],o=u?n[0]*t:r[i(185)],f=Math[i(190)](Z(r,0,o,t));if(u)for(var c=0,s=n[i(185)];c<s;c++){var v=n[c]*t,y=c<s-1?n[c+1]*t:r[a(251)];f-=Math[i(190)](Z(r,v,y,t))}var p=0;for(c=0;c<e[i(185)];c+=3){var h=e[c]*t,l=e[c+1]*t,d=e[c+2]*t;p+=Math[a(298)]((r[h]-r[d])*(r[l+1]-r[h+1])-(r[h]-r[l])*(r[d+1]-r[h+1]))}return 0===f&&0===p?0:Math[a(298)]((p-f)/f)},v[x(179)]=function(r){for(var n=x,t=r[0][0].length,e={vertices:[],holes:[],dimensions:t},a=0,i=0;i<r[n(185)];i++){for(var u=0;u<r[i][n(185)];u++)for(var o=0;o<t;o++)e[n(192)][n(184)](r[i][u][o]);i>0&&(a+=r[i-1][n(185)],e[n(189)].push(a))}return e},c[x(180)]=s;var N=P;!function(r,n){for(var t=_0x152c,e=P,a=r();;)try{if(773380===parseInt(e(286))/1+-parseInt(e(288))/2+-parseInt(e(278))/3+-parseInt(e(289))/4+parseInt(e(277))/5*(-parseInt(e(276))/6)+-parseInt(e(281))/7*(-parseInt(e(285))/8)+parseInt(e(283))/9)break;a[t(217)](a[t(257)]())}catch(r){a[t(217)](a.shift())}}(J);var q={CLOCKWISE:o[f(214)].CW,COUNTER_CLOCKWISE:o[f(214)][N(287)]};function J(){var r=f,n=["5190972UpQkIW",r(220),r(239),r(240),r(271),"freeze","42NiUSeC",r(275),r(258),r(216),r(256),"425747kofzBp",r(259),"1767486sffGVx"];return(J=function(){return n})()}function P(r,n){var t=J();return(P=function(r,n){return t[r-=276]})(r,n)}q[N(282)]=function(r){var n=N;return r===q[n(279)]||r===q[n(284)]};var U=Object[N(280)](q),H=B;function V(){var r=f,n=[r(269),r(304),r(285),r(225),r(303),r(292),"interpolateUsingFraction",r(288),"magnitudeSquared",r(296),r(247),r(293),r(245),r(281),r(253),"min",r(305),"triangulate","slice","latitude",r(217),r(250),r(266),r(219),r(276),r(231),"TRIANGLES",r(230),r(233),r(216),r(297),r(236),r(224),r(213),r(255),r(221),r(279),"fromArray",r(290),"scaleToGeodeticSurface",r(251),r(284),"scaleToGeodeticHeight",r(272),r(278)];return(V=function(){return n})()}function B(r,n){var t=V();return(B=function(r,n){return t[r-=369]})(r,n)}!function(r,n){for(var t=f,e=B,a=r();;)try{if(736718===parseInt(e(374))/1*(-parseInt(e(392))/2)+parseInt(e(371))/3+-parseInt(e(407))/4+-parseInt(e(369))/5*(parseInt(e(383))/6)+-parseInt(e(399))/7*(-parseInt(e(388))/8)+-parseInt(e(403))/9+parseInt(e(380))/10)break;a[t(217)](a[t(257)]())}catch(r){a[t(217)](a[t(257)]())}}(V);var K=new(n[f(270)]),X=new(n[f(270)]),Q={};Q[H(382)]=function(r){for(var n=r[H(398)],t=0,e=n-1,a=0;a<n;e=a++){var i=r[e],u=r[a];t+=i.x*u.y-u.x*i.y}return.5*t},Q[H(381)]=function(r){var n=f,t=H;return Q[t(382)](r)>0?U[t(387)]:U[n(271)]},Q[H(375)]=function(r,t){var e=H,a=n.Cartesian2[e(410)](r);return c(a,t,2)};var F=new(n[f(270)]),j=new(n[f(270)]),Y=new n.Cartesian3,$=new n.Cartesian3,rr=new n.Cartesian3,nr=new(n[f(270)]),tr=new(n[f(270)]);Q[f(248)]=function(r,t,i,o){var x=f,c=H;o=a.defaultValue(o,e[x(215)][c(379)]);var s,v=i[c(376)](0),y=t[c(398)],p=new Array(3*y),h=0;for(s=0;s<y;s++){var l=t[s];p[h++]=l.x,p[h++]=l.y,p[h++]=l.z}for(var d=[],_={},I=r[c(394)],m=e[x(215)][c(405)](o,I),C=m*m;v[c(398)]>0;){var w,M,b=v[c(402)](),g=v[x(278)](),z=v[c(402)](),E=n[x(270)][c(395)](p,3*z,F),S=n[x(270)][c(395)](p,3*g,j),L=n.Cartesian3[c(395)](p,3*b,Y),A=n[x(270)][c(391)](n.Cartesian3[x(290)](E,$),I,$),W=n[x(270)][x(213)](n[x(270)][c(396)](S,rr),I,rr),R=n[x(270)][x(213)](n[x(270)][c(396)](L,nr),I,nr),G=n[x(270)][x(218)](n.Cartesian3[c(408)](A,W,tr)),T=n.Cartesian3[c(411)](n[x(270)][x(292)](W,R,tr)),k=n.Cartesian3[c(411)](n[x(270)].subtract(R,A,tr)),D=Math[c(393)](G,T,k);D>C?G===D?(s=_[w=Math[c(373)](z,g)+" "+Math[x(221)](z,g)],!a[x(262)](s)&&(M=n[x(270)][c(389)](E,S,tr),n[x(270)][x(213)](M,.5,M),p[c(378)](M.x,M.y,M.z),s=p[c(398)]/3-1,_[w]=s),v[x(217)](z,s,b),v[c(378)](s,g,b)):T===D?(s=_[w=Math[x(261)](g,b)+" "+Math[x(221)](g,b)],!a[x(262)](s)&&(M=n[x(270)][x(236)](S,L,tr),n[x(270)][c(391)](M,.5,M),p[x(217)](M.x,M.y,M.z),s=p[c(398)]/3-1,_[w]=s),v[c(378)](g,s,z),v[c(378)](s,b,z)):k===D&&(s=_[w=Math[c(373)](b,z)+" "+Math[c(393)](b,z)],!a[x(262)](s)&&(M=n.Cartesian3[x(236)](L,E,tr),n.Cartesian3[c(391)](M,.5,M),p[c(378)](M.x,M.y,M.z),s=p[c(398)]/3-1,_[w]=s),v[c(378)](b,s,g),v[c(378)](s,z,g)):(d[x(217)](z),d[c(378)](g),d[c(378)](b))}return new(u[x(299)])({attributes:{position:new(u[x(302)])({componentDatatype:e[x(267)][c(370)],componentsPerAttribute:3,values:p})},indices:d,primitiveType:u._0x49518d[c(384)]})};var er=new(n[f(223)]),ar=new n.Cartographic,ir=new n.Cartographic,ur=new n.Cartographic;Q[H(413)]=function(r,t,o,x){var c=f,s=H;x=a.defaultValue(x,e.CesiumMath[s(379)]);var v,y=o[s(376)](0),p=t[c(251)],h=new Array(3*p),l=0;for(v=0;v<p;v++){var d=t[v];h[l++]=d.x,h[l++]=d.y,h[l++]=d.z}for(var _=[],I={},m=r[s(394)],C=e.CesiumMath.chordLength(x,m),w=new(i[c(237)])(void 0,void 0,r),M=new(i[c(237)])(void 0,void 0,r),b=new i.EllipsoidRhumbLine(void 0,void 0,r);y[s(398)]>0;){var g=y.pop(),z=y[s(402)](),E=y[c(278)](),S=n[c(270)][s(395)](h,3*E,F),L=n[c(270)][c(235)](h,3*z,j),A=n[c(270)][s(395)](h,3*g,Y),W=r[s(404)](S,er),R=r[c(304)](L,ar),G=r[s(404)](A,ir);w[s(390)](W,R);var T=w[s(401)];M[c(224)](R,G);var k=M[s(401)];b[s(390)](G,W);var D,O,Z,N,q=b[c(272)],J=Math[s(393)](T,k,q);J>C?T===J?(v=I[D=Math.min(E,z)+" "+Math[s(393)](E,z)],!a[c(262)](v)&&(O=w[s(409)](.5,ur),Z=.5*(W[s(372)]+R[s(372)]),N=n[c(270)][c(296)](O[s(385)],O[c(241)],Z,r,tr),h[s(378)](N.x,N.y,N.z),v=h[c(251)]/3-1,I[D]=v),y[s(378)](E,v,g),y[s(378)](v,z,g)):k===J?(v=I[D=Math[c(261)](z,g)+" "+Math[s(393)](z,g)],!a.defined(v)&&(O=M.interpolateUsingFraction(.5,ur),Z=.5*(R[c(253)]+G[s(372)]),N=n[c(270)][s(412)](O[s(385)],O[s(377)],Z,r,tr),h[c(217)](N.x,N.y,N.z),v=h[c(251)]/3-1,I[D]=v),y[s(378)](z,v,E),y[s(378)](v,g,E)):q===J&&(v=I[D=Math[s(373)](g,E)+" "+Math[s(393)](g,E)],!a[c(262)](v)&&(O=b[s(409)](.5,ur),Z=.5*(G[s(372)]+W[s(372)]),N=n[c(270)][s(412)](O.longitude,O[c(241)],Z,r,tr),h[s(378)](N.x,N.y,N.z),v=h[s(398)]/3-1,I[D]=v),y[c(217)](g,v,z),y[s(378)](v,E,z)):(_[c(217)](E),_.push(z),_[s(378)](g))}return new u.Geometry({attributes:{position:new(u[c(302)])({componentDatatype:e[c(267)][s(370)],componentsPerAttribute:3,values:h})},indices:_,primitiveType:u[c(254)][s(384)]})},Q[H(400)]=function(r,t,e,i){var u=f,o=H;e=a[u(280)](e,n.Ellipsoid[o(406)]);var x=K,c=X;if(t=a.defaultValue(t,0),i=a[u(280)](i,!0),a[u(262)](r))for(var s=r[u(251)],v=0;v<s;v+=3)n[u(270)][u(235)](r,v,c),i&&(c=e[o(397)](c,c)),0!==t&&(x=e[o(386)](c,x),n.Cartesian3[o(391)](x,t,x),n[u(270)][o(389)](c,x,c)),r[v]=c.x,r[v+1]=c.y,r[v+2]=c.z;return r},r[f(246)]=Q,r._0x1a93dc=U}));
