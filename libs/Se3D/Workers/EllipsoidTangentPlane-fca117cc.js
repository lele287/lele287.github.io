var _0x587ff0=_0x2282;function _0x2282(n,t){var r=_0x53d4();return(_0x2282=function(n,t){return r[n-=293]})(n,t)}function _0x53d4(){var n=["4216MmEhbz","2820285qAvvnS","8439804aLdkBd","scaleToGeocentricSurface","rayPlane","clone","center","add","multiplyByScalar","3bZscgn","1753830jWHnZO","projectPointOntoEllipsoid","shift","exports","10fIsLMH","./when-dc8b2a85","projectPointToNearestOnPlane","projectPointOntoPlane","Cartesian4","_xAxis","2985648vmukuf","projectPointsOntoEllipsoid","38929540roMHll","1186156NLIKsE","defineProperties","defined","_yAxis","Matrix4","AxisAlignedBoundingBox","14QwSdsw","./AxisAlignedBoundingBox-297ff2e2","IntersectionTests","length","_plane","270yrijvc","2312352nqbmiw","EllipsoidTangentPlane","119055MLdNNX","WGS84","./Transforms-3e5b5dc6","normal","Ellipsoid","Cartesian2","getColumn","953789pyperB","defaultValue","projectPointsOntoPlane","direction","_ellipsoid","_origin","10570FOuiar","push","normalize","Cartesian3","./IntersectionTests-0efe7925","fromPoints","projectPointsToNearestOnPlane","prototype","203045YMBcEe","negate","eastNorthUpToFixedFrame","1709008fLvAye","Ray"];return(_0x53d4=function(){return n})()}(function(n,t){for(var r=_0x2282,e=_0x53d4();;)try{if(545632===parseInt(r(322))/1+parseInt(r(351))/2+parseInt(r(350))/3*(parseInt(r(339))/4)+parseInt(r(315))/5*(parseInt(r(312))/6)+parseInt(r(328))/7*(parseInt(r(341))/8)+parseInt(r(342))/9+-parseInt(r(300))/10)break;e.push(e.shift())}catch(n){e.push(e.shift())}})(),define([_0x587ff0(354),_0x587ff0(308),"./Matrix2-29bed3bf","./RuntimeError-1450c8fa",_0x587ff0(293),_0x587ff0(332),"./Plane-a1789bca",_0x587ff0(317)],(function(n,t,r,e,i,a,s,o){"use strict";var f=_0x587ff0;function u(){var n=_0x2282,t=[n(355),n(307),"multiplyByScalar","origin",n(304),n(318),n(333),"168sqwtNy",n(316),n(310),n(335),"scaleToGeodeticSurface",n(297),n(321),n(336),n(294),n(352),"fromPointNormal","115485OgYhgH",n(324),n(313),"_origin",n(348),n(298),"direction",n(337),n(330),n(343),n(345),n(311),n(299),"dot","fromCartesian4",n(295),"38230xshYSO",n(301),n(326)];return(u=function(){return t})()}var c=x;!function(n,t){for(var r=_0x2282,e=x,i=n();;)try{if(218183===-parseInt(e(273))/1+-parseInt(e(260))/2*(-parseInt(e(277))/3)+-parseInt(e(257))/4+parseInt(e(256))/5*(parseInt(e(266))/6)+-parseInt(e(242))/7+-parseInt(e(245))/8+parseInt(e(249))/9*(parseInt(e(259))/10))break;i[r(329)](i[r(353)]())}catch(n){i[r(329)](i[r(353)]())}}(u);var p=new(r[f(296)]);function l(n,t){var e=f,a=x;n=(t=i[e(323)](t,r[e(319)][a(267)]))[a(270)](n);var u=o.Transforms[e(338)](n,t);this[a(258)]=t,this[e(327)]=n,this[a(271)]=r[e(331)][a(254)](r[e(305)][a(272)](u,0,p)),this[a(263)]=r[e(331)][a(254)](r[e(305)][a(272)](u,1,p));var c=r.Cartesian3[a(254)](r[e(305)][a(272)](u,2,p));this[a(251)]=s.Plane[a(276)](n,c)}Object[f(302)](l[c(269)],{ellipsoid:{get:function(){return this[c(258)]}},origin:{get:function(){return this[c(243)]}},plane:{get:function(){return this[c(251)]}},xAxis:{get:function(){return this[c(271)]}},yAxis:{get:function(){return this[c(263)]}},zAxis:{get:function(){var n=c;return this[n(251)][n(264)]}}});var h=new t.AxisAlignedBoundingBox;l[c(265)]=function(n,r){var e=f,i=c;return new l(t[e(306)][i(265)](n,h)[e(347)],r)};var d=new(a[f(340)]),v=new(r[f(331)]);function x(n,t){var r=u();return(x=function(n,t){return r[n-=242]})(n,t)}l[c(269)][c(255)]=function(n,t){var e=f,s=c,o=d;o[s(262)]=n,r.Cartesian3[s(248)](n,o[s(246)]);var u=a[e(309)][s(250)](o,this[s(251)],v);if(!i[e(303)](u)&&(r.Cartesian3[s(247)](o[e(325)],o.direction),u=a[e(309)][s(250)](o,this[s(251)],v)),i[e(303)](u)){var p=r.Cartesian3.subtract(u,this[s(243)],u),l=r.Cartesian3[s(253)](this[e(297)],p),h=r[e(331)][s(253)](this[s(263)],p);return i.defined(t)?(t.x=l,t.y=h,t):new r.Cartesian2(l,h)}},l[c(269)][c(278)]=function(n,t){var r=f,e=c;!i.defined(t)&&(t=[]);for(var a=0,s=n[e(268)],o=0;o<s;o++){var u=this[e(255)](n[o],t[a]);i[r(303)](u)&&(t[a]=u,a++)}return t[e(268)]=a,t},l[c(269)][c(274)]=function(n,t){var e=f,s=c;!i[e(303)](t)&&(t=new(r[e(320)]));var o=d;o[s(262)]=n,r[e(331)][e(346)](this[e(311)][e(318)],o[s(246)]);var u=a[e(309)][s(250)](o,this[s(251)],v);!i[e(303)](u)&&(r.Cartesian3[e(337)](o[s(246)],o[s(246)]),u=a[e(309)][s(250)](o,this[s(251)],v));var p=r[e(331)].subtract(u,this[s(243)],u),l=r[e(331)][s(253)](this[s(271)],p),h=r[e(331)][s(253)](this[s(263)],p);return t.x=l,t.y=h,t},l.prototype[f(334)]=function(n,t){var r=f,e=c;!i[r(303)](t)&&(t=[]);var a=n[e(268)];t[e(268)]=a;for(var s=0;s<a;s++)t[s]=this[r(294)](n[s],t[s]);return t};var I=new(r[f(331)]);l[f(335)].projectPointOntoEllipsoid=function(n,t){var e=f,a=c;!i[e(303)](t)&&(t=new(r[e(331)]));var s=this._ellipsoid,o=this[e(327)],u=this[a(271)],p=this[a(263)],l=I;return r[e(331)][e(349)](u,n.x,l),t=r[e(331)][e(348)](o,l,t),r[e(331)][a(261)](p,n.y,l),r[e(331)][a(244)](t,l,t),s[e(344)](t,t),t},l[c(269)][c(252)]=function(n,t){var r=f,e=c,a=n[r(310)];i[r(303)](t)?t[e(268)]=a:t=new Array(a);for(var s=0;s<a;++s)t[s]=this[e(275)](n[s],t[s]);return t},n[f(314)]=l}));
