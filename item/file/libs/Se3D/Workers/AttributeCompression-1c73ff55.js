var _0x3a1a7a=_0x5c25;function _0x5c25(r,t){var a=_0x5209();return(_0x5c25=function(r,t){return a[r-=445]})(r,t)}function _0x5209(){var r=["Cartesian4","17517YVcVpD","toSNorm","shift","octDecodeFloat","dequantize","vec4","2305188obrXVr","push","octUnpack","INT","Matrix2","CesiumMath","2410345rbBAXW","1308336AHiXTp","octEncodeInRange","1120KvmVKE","132qsVlOF","Matrix3","exports","785560DFtmoz","MAT4","8VveyTa","defined","getMathType","octEncode","VEC3","9yxDhIo","9uWUnWS","VEC2","./when-f722c55d","1385MixjJZ","24230PasHNj","zigZagDeltaDecode","./RuntimeError-4cdb4c83","BYTE","9083624ovIonI","7051002iMoqhy","octPackFloat","95763KkSAbB","MAT2","68pJMjEw","vec2","_0x219cba","117pVLNin","7155nrzcXA","fromSNorm","5844GbVVof","mat4","Cartesian2","Cartesian3","getGlslType","floor","366737IfxCQT","decompressTextureCoordinates","octDecodeInRange","MAT3","octPack","712126QhUfgw","./ComponentDatatype-43a8509c","96865nyNIMV","628792LZuJkT","3942RNZqtd","24cuKegm","33YdciXz","AttributeCompression","UNSIGNED_INT","VEC4","1077286ZvubVg","max","mat3","738412dlAMWG","abs","octEncodeToCartesian4","signNotZero","8792496HtsyKv","octEncodeFloat","getNumberOfComponents"];return(_0x5209=function(){return r})()}(function(r,t){for(var a=_0x5c25,e=_0x5209();;)try{if(116076===-parseInt(a(452))/1*(parseInt(a(453))/2)+-parseInt(a(515))/3*(parseInt(a(477))/4)+-parseInt(a(496))/5*(parseInt(a(499))/6)+-parseInt(a(489))/7+-parseInt(a(497))/8+parseInt(a(463))/9*(-parseInt(a(456))/10)+-parseInt(a(500))/11*(-parseInt(a(521))/12))break;e.push(e.shift())}catch(r){e.push(e.shift())}})(),define([_0x3a1a7a(455),"./Matrix2-f88ee68f",_0x3a1a7a(495),_0x3a1a7a(470),_0x3a1a7a(466)],(function(r,t,a,e,n){"use strict";var c=_0x3a1a7a,o=u;function s(){var r=_0x5c25,t=["23024fPwhmY","VEC2",r(449),r(462),r(478),"SCALAR",r(475),r(450),r(468),r(487),r(460),r(513),"MAT2",r(504),"freeze",r(480),r(484),r(467),r(503),r(506),r(492),r(483),r(457),r(458)];return(s=function(){return t})()}function u(r,t){var a=s();return(u=function(r,t){return a[r-=422]})(r,t)}!function(r,t){for(var a=_0x5c25,e=u,n=r();;)try{if(358347===-parseInt(e(437))/1+parseInt(e(426))/2+parseInt(e(443))/3+-parseInt(e(434))/4*(-parseInt(e(430))/5)+-parseInt(e(444))/6+-parseInt(e(439))/7*(parseInt(e(436))/8)+-parseInt(e(428))/9*(parseInt(e(445))/10))break;n.push(n[a(517)]())}catch(r){n[a(522)](n[a(517)]())}}(s);var i={SCALAR:o(442),VEC2:o(438),VEC3:o(440),VEC4:c(503),MAT2:o(425),MAT3:o(433),MAT4:o(435)};i[o(423)]=function(r){var a=c,e=o;switch(r){case i[e(442)]:return Number;case i[a(465)]:return t[a(485)];case i[a(462)]:return t.Cartesian3;case i[e(431)]:return t[a(514)];case i[a(476)]:return t[a(447)];case i[e(433)]:return t[a(454)];case i[e(435)]:return t.Matrix4}},i[o(424)]=function(r){var t=o;switch(r){case i[t(442)]:return 1;case i[t(438)]:return 2;case i[t(440)]:return 3;case i[t(431)]:case i[t(425)]:return 4;case i[t(433)]:return 9;case i[t(435)]:return 16}},i[o(422)]=function(r){var t=c,a=o;switch(r){case i[a(442)]:return"float";case i[a(438)]:return a(441);case i[a(440)]:return"vec3";case i[a(431)]:return t(520);case i[a(425)]:return"mat2";case i[a(433)]:return a(432);case i[a(435)]:return a(429)}};var f=Object[o(427)](i),p=C;function x(){var r=c,t=["compressTextureCoordinates",r(491),r(498),r(474),"octDecodeFromCartesian4",r(471),r(510),r(451),r(505),r(481),r(511),r(507),r(445),r(494),r(512),"SHORT",r(473),r(472),"length",r(516),"abs","octDecode","UNSIGNED_BYTE","10zUTGWl","octEncode",r(490),"normalize",r(464),r(469),"48568dWwYWz",r(482),r(502),r(488)];return(x=function(){return t})()}!function(r,t){for(var a=C,e=r();;)try{if(706526===parseInt(a(277))/1+-parseInt(a(294))/2*(-parseInt(a(275))/3)+-parseInt(a(292))/4+-parseInt(a(290))/5*(-parseInt(a(283))/6)+-parseInt(a(264))/7+-parseInt(a(265))/8+parseInt(a(291))/9*(parseInt(a(271))/10))break;e.push(e.shift())}catch(r){e.push(e.shift())}}(x);var h=1/256,I={};I[c(451)]=function(r,t,e){var n=c,o=C;if(e.x=r.x/(Math[n(508)](r.x)+Math[o(268)](r.y)+Math[o(268)](r.z)),e.y=r.y/(Math[n(508)](r.x)+Math[o(268)](r.y)+Math[o(268)](r.z)),r.z<0){var s=e.x,u=e.y;e.x=(1-Math[o(268)](u))*a.CesiumMath[o(287)](s),e.y=(1-Math[o(268)](s))*a[n(448)][o(287)](u)}return e.x=a[n(448)][o(267)](e.x,t),e.y=a[n(448)][o(267)](e.y,t),e},I.octEncode=function(r,t){return I[C(288)](r,255,t)};var v=new t.Cartesian2,M=new Uint8Array(1);function y(r){return M[0]=r,M[0]}I[c(509)]=function(r,t){return I[C(288)](r,65535,v),t.x=y(v.x*h),t.y=y(v.x),t.z=y(v.y*h),t.w=y(v.y),t},I[p(282)]=function(r,e,n,o){var s=c,u=p;if(o.x=a[s(448)][u(278)](r,n),o.y=a[s(448)][u(278)](e,n),o.z=1-(Math.abs(o.x)+Math[u(268)](o.y)),o.z<0){var i=o.x;o.x=(1-Math.abs(o.y))*a[s(448)][u(287)](i),o.y=(1-Math[u(268)](i))*a.CesiumMath[u(287)](o.y)}return t[s(486)][u(274)](o,o)},I[p(269)]=function(r,t,a){return I[p(282)](r,t,255,a)},I[p(285)]=function(r,t){var a=c,e=256*r.x+r.y,n=256*r.z+r.w;return I[a(491)](e,n,65535,t)},I[p(284)]=function(r){return 256*r.x+r.y};var d=new(t[c(485)]);function b(r){return r>>1^-(1&r)}function C(r,t){var a=x();return(C=function(r,t){return a[r-=263]})(r,t)}I[p(295)]=function(r){var t=p;return I[c(461)](r,d),I[t(284)](d)},I[c(518)]=function(r,t){var a=r/256,e=Math[p(280)](a),n=256*(a-e);return I.octDecode(e,n,t)},I[c(493)]=function(r,t,a,e){var n=p,c=I[n(295)](r),o=I[n(295)](t),s=I[n(272)](a,d);return e.x=65536*s.x+c,e.y=65536*s.y+o,e},I[p(293)]=function(r,t,a,e){var n=c,o=p,s=r.x/65536,u=Math[o(280)](s),i=65536*(s-u);s=r.y/65536;var f=Math[n(488)](s),x=65536*(s-f);I.octDecodeFloat(i,t),I.octDecodeFloat(x,a),I[o(269)](u,f,e)},I[p(281)]=function(r){return 4096*(4095*r.x|0)+(4095*r.y|0)},I[p(273)]=function(r,t){var a=r/4096,e=Math[p(280)](a);return t.x=e/4095,t.y=(r-4096*e)/4095,t},I[p(276)]=function(r,t,a){for(var e=c,o=r[p(266)],s=0,u=0,i=0,f=0;f<o;++f)s+=b(r[f]),u+=b(t[f]),r[f]=s,t[f]=u,n[e(459)](a)&&(i+=b(a[f]),a[f]=i)},I[c(519)]=function(r,t,e,n){var o,s=c,u=p,i=f[s(513)](e);switch(t){case a[s(479)][u(286)]:o=127;break;case a[s(479)][u(270)]:o=255;break;case a[s(479)][u(263)]:o=32767;break;case a._0x219cba.UNSIGNED_SHORT:o=65535;break;case a._0x219cba[s(446)]:o=2147483647;break;case a[s(479)][u(279)]:o=4294967295}for(var x=new Float32Array(n*i),h=0;h<n;h++)for(var I=0;I<i;I++){var v=h*i+I;x[v]=Math[u(289)](r[v]/o,-1)}return x},r[c(501)]=I}));
