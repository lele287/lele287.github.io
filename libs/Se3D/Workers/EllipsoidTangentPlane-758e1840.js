var _0x167265=_0x2724;function _0x2724(t,n){var r=_0x554a();return(_0x2724=function(t,n){return r[t-=470]})(t,n)}function _0x554a(){var t=["projectPointOntoPlane","18mYPJie","normal","20tssYCf","Transforms","./Matrix2-7f37d0c5","fromCartesian4","subtract","2930320KAfUgZ","dot","AxisAlignedBoundingBox","prototype","origin","fromPoints","1052UayCnh","add","15156816LJjUWA","clone","3276273XlnYrH","38059sCJHtO","_xAxis","push","negate","172172hfVdbA","projectPointsOntoPlane","Matrix4","601548JliWii","./Transforms-2eeb1bbe","./AxisAlignedBoundingBox-c78328db","./IntersectionTests-65967291","./Plane-7b7abf5e","defineProperties","shift","defined","13595xlERWt","EllipsoidTangentPlane","_ellipsoid","833364bLpViP","rayPlane","229yrRAsV","Plane","direction","3348800HWvFWw","6vJbdEJ","_yAxis","length","center","1414203KiLEnP","exports","projectPointOntoEllipsoid","normalize","Cartesian2","4052kVwuOI","1318030GxJvRn","scaleToGeocentricSurface","multiplyByScalar","getColumn","_origin","200QaTVzv","scaleToGeodeticSurface","Ray","WGS84","projectPointsOntoEllipsoid","33142HBGsha","Cartesian4","Cartesian3"];return(_0x554a=function(){return t})()}(function(t,n){for(var r=_0x2724,e=_0x554a();;)try{if(300524===-parseInt(r(524))/1*(parseInt(r(471))/2)+parseInt(r(486))/3*(-parseInt(r(508))/4)+parseInt(r(472))/5*(-parseInt(r(528))/6)+parseInt(r(504))/7*(parseInt(r(477))/8)+-parseInt(r(522))/9*(-parseInt(r(488))/10)+-parseInt(r(503))/11+parseInt(r(501))/12)break;e.push(e.shift())}catch(t){e.push(e.shift())}})(),define([_0x167265(533),_0x167265(513),_0x167265(490),"./RuntimeError-68e09892","./when-f6761ff4",_0x167265(514),_0x167265(515),_0x167265(512)],(function(t,n,r,e,i,a,s,o){"use strict";var u=_0x167265,c=f;function f(t,n){var r=p();return(f=function(t,n){return r[t-=277]})(t,n)}function p(){var t=_0x2724,n=[t(492),t(519),t(511),t(475),t(473),t(535),t(478),t(496),"direction",t(480),"_plane","eastNorthUpToFixedFrame",t(500),"_ellipsoid",t(502),t(482),"3877494qoghRI",t(530),t(523),t(485),"_origin",t(493),t(527),t(532),"projectPointsToNearestOnPlane","negate",t(487),t(498),"_xAxis",t(531),t(529),t(497),t(494),t(481),"projectPointToNearestOnPlane",t(491),t(474),t(509),t(499)];return(p=function(){return n})()}!function(t,n){for(var r=_0x2724,e=f,i=t();;)try{if(717752===parseInt(e(291))/1+parseInt(e(283))/2+parseInt(e(309))/3+-parseInt(e(306))/4*(parseInt(e(308))/5)+parseInt(e(284))/6+-parseInt(e(290))/7+-parseInt(e(289))/8)break;i[r(506)](i.shift())}catch(t){i[r(506)](i[r(517)]())}}(p);var l=new(r[u(483)]);function h(t,n){var e=u,a=f;t=(n=i.defaultValue(n,r.Ellipsoid[a(277)]))[a(313)](t);var c=o[e(489)][a(279)](t,n);this[e(521)]=n,this[e(476)]=t,this[a(296)]=r[e(484)][a(303)](r.Matrix4[a(310)](c,0,l)),this[a(298)]=r.Cartesian3[e(491)](r[e(510)][a(310)](c,1,l));var p=r[e(484)][a(303)](r[e(510)][e(475)](c,2,l));this[a(278)]=s[e(525)].fromPointNormal(t,p)}Object[u(516)](h[u(496)],{ellipsoid:{get:function(){return this[f(281)]}},origin:{get:function(){return this[f(288)]}},plane:{get:function(){return this[f(278)]}},xAxis:{get:function(){return this[f(296)]}},yAxis:{get:function(){return this[f(298)]}},zAxis:{get:function(){var t=f;return this[t(278)][t(294)]}}});var x=new(n[u(495)]);h[c(295)]=function(t,r){var e=c;return new h(n[u(495)][e(295)](t,x)[e(297)],r)};var v=new(a[u(479)]),d=new(r[u(484)]);h[c(314)][c(287)]=function(t,n){var e=u,s=c,o=v;o[e(497)]=t,r[e(484)][s(312)](t,o[e(526)]);var f=a.IntersectionTests[e(523)](o,this[s(278)],d);if(!i[e(518)](f)&&(r.Cartesian3[s(293)](o[e(526)],o[s(315)]),f=a.IntersectionTests.rayPlane(o,this._plane,d)),i[e(518)](f)){var p=r[e(484)][s(307)](f,this[s(288)],f),l=r[e(484)][s(300)](this[s(296)],p),h=r[e(484)][s(300)](this[s(298)],p);return i[e(518)](n)?(n.x=l,n.y=h,n):new(r[e(470)])(l,h)}},h[c(314)][c(305)]=function(t,n){var r=u,e=c;!i.defined(n)&&(n=[]);for(var a=0,s=t[e(285)],o=0;o<s;o++){var f=this[r(485)](t[o],n[a]);i.defined(f)&&(n[a]=f,a++)}return n[e(285)]=a,n},h[c(314)].projectPointToNearestOnPlane=function(t,n){var e=u,s=c;!i[e(518)](n)&&(n=new(r[e(470)]));var o=v;o[s(299)]=t,r[e(484)][s(282)](this[s(278)][s(294)],o[e(526)]);var f=a.IntersectionTests[s(286)](o,this[s(278)],d);!i.defined(f)&&(r.Cartesian3[e(507)](o[e(526)],o[s(315)]),f=a.IntersectionTests.rayPlane(o,this[s(278)],d));var p=r[e(484)][s(307)](f,this[s(288)],f),l=r[e(484)][s(300)](this[e(505)],p),h=r.Cartesian3[s(300)](this[s(298)],p);return n.x=l,n.y=h,n},h[c(314)][c(292)]=function(t,n){var r=c;!i[u(518)](n)&&(n=[]);var e=t[r(285)];n[r(285)]=e;for(var a=0;a<e;a++)n[a]=this[r(302)](t[a],n[a]);return n};var I=new(r[u(484)]);h[c(314)][u(534)]=function(t,n){var e=u,a=c;!i[e(518)](n)&&(n=new(r[e(484)]));var s=this[a(281)],o=this[a(288)],f=this[a(296)],p=this[a(298)],l=I;return r.Cartesian3[a(304)](f,t.x,l),n=r[e(484)][a(280)](o,l,n),r[e(484)][e(474)](p,t.y,l),r[e(484)][a(280)](n,l,n),s[a(311)](n,n),n},h[c(314)][c(301)]=function(t,n){var r=u,e=c,a=t[e(285)];i[r(518)](n)?n[e(285)]=a:n=new Array(a);for(var s=0;s<a;++s)n[s]=this.projectPointOntoEllipsoid(t[s],n[s]);return n},t[u(520)]=h}));
