function _0x1fe8(t,n){var e=_0x5340();return(_0x1fe8=function(t,n){return e[t-=132]})(t,n)}function _0x5340(){var t=["67872GHmfXm","./Plane-92dd17bc","negate","_ellipsoid","246407AaFkpp","302010qXIthF","normal","defined","./RuntimeError-956ad011","27CKlKHC","exports","prototype","clone","./AxisAlignedBoundingBox-b948fae6","55510ylNZMC","./when-d119b9c3","normalize","321865GSUAzB","_yAxis","12UNAhId","defineProperties","add","scaleToGeodeticSurface","6233447XGDwpE","Cartesian2","IntersectionTests","Ray","6bMoRPa","1146870bTyiSQ","AxisAlignedBoundingBox","292472wTahlQ","6zCXeBs","_origin","center","length","EllipsoidTangentPlane","rayPlane","307645BmjSkB","dot","./IntersectionTests-437a3360","origin","push","12aZqRIN","fromPointNormal","projectPointsOntoEllipsoid","1142615AXYANU","16oAeqHW","direction","fromCartesian4","Cartesian4","Matrix4","shift","199743pvkiFY","./Transforms-33f392f7","32IHqrRe","_xAxis","projectPointOntoPlane","Cartesian3","defaultValue","432422xGSyGc"];return(_0x5340=function(){return t})()}var _0x5b8b2f=_0x1fe8;(function(t,n){for(var e=_0x1fe8,r=_0x5340();;)try{if(125258===-parseInt(e(169))/1+-parseInt(e(168))/2+parseInt(e(161))/3*(parseInt(e(151))/4)+parseInt(e(154))/5*(parseInt(e(136))/6)+-parseInt(e(173))/7*(parseInt(e(163))/8)+parseInt(e(137))/9+-parseInt(e(183))/10)break;r.push(r.shift())}catch(t){r.push(r.shift())}})(),define([_0x5b8b2f(179),_0x5b8b2f(182),"./Matrix2-7eaeeb18",_0x5b8b2f(177),_0x5b8b2f(184),_0x5b8b2f(148),_0x5b8b2f(170),_0x5b8b2f(162)],(function(t,n,e,r,i,a,s,o){"use strict";var f=_0x5b8b2f,c=u;function u(t,n){var e=p();return(u=function(t,n){return e[t-=173]})(t,n)}function p(){var t=_0x1fe8,n=[t(175),t(172),t(156),t(164),"projectPointsToNearestOnPlane",t(190),t(181),t(139),"subtract","492010taMfPl",t(171),t(153),"714791xfwbUL",t(140),"getColumn","projectPointOntoEllipsoid","scaleToGeocentricSurface",t(152),t(188),"projectPointToNearestOnPlane",t(180),t(132),"fromPoints","_plane",t(189),t(165),t(146),t(145),t(142),t(147),"eastNorthUpToFixedFrame",t(186),t(178),t(191),t(149),t(174),t(185),"projectPointsOntoPlane",t(141),t(155),t(187),"length",t(157),"multiplyByScalar"];return(p=function(){return n})()}!function(t,n){for(var e=_0x1fe8,r=u,i=t();;)try{if(226312===parseInt(r(187))/1+parseInt(r(196))/2+parseInt(r(174))/3*(-parseInt(r(212))/4)+-parseInt(r(192))/5*(-parseInt(r(179))/6)+parseInt(r(173))/7*(parseInt(r(200))/8)+-parseInt(r(193))/9*(-parseInt(r(214))/10)+-parseInt(r(182))/11)break;i[e(150)](i[e(160)]())}catch(t){i[e(150)](i.shift())}}(p);var h=new(e[f(158)]);function l(t,n){var r=f,a=u;t=(n=i[r(167)](n,e.Ellipsoid.WGS84))[a(194)](t);var c=o.Transforms[a(191)](t,n);this[a(206)]=n,this[a(199)]=t,this[a(208)]=e[r(166)][r(157)](e[r(159)][a(175)](c,0,h)),this[a(201)]=e[r(166)][a(203)](e[r(159)][a(175)](c,1,h));var p=e[r(166)][a(203)](e[r(159)][a(175)](c,2,h));this[a(184)]=s.Plane[a(178)](t,p)}Object[c(185)](l[c(181)],{ellipsoid:{get:function(){return this[c(206)]}},origin:{get:function(){return this[f(141)]}},plane:{get:function(){return this[c(184)]}},xAxis:{get:function(){return this[f(164)]}},yAxis:{get:function(){return this._yAxis}},zAxis:{get:function(){var t=f;return this[c(184)][t(175)]}}});var x=new(n[f(138)]);l[c(183)]=function(t,e){var r=c;return new l(n[f(138)][r(183)](t,x)[r(189)],e)};var v=new(a[f(135)]),d=new e.Cartesian3;l[c(181)][c(186)]=function(t,n){var r=f,s=c,o=v;o[s(195)]=t,e[r(166)][s(197)](t,o.direction);var u=a.IntersectionTests[s(188)](o,this[s(184)],d);if(!i[r(176)](u)&&(e[r(166)][s(215)](o[s(207)],o[s(207)]),u=a[r(134)][r(145)](o,this[s(184)],d)),i[r(176)](u)){var p=e.Cartesian3[s(213)](u,this[s(199)],u),h=e[r(166)][s(190)](this[r(164)],p),l=e.Cartesian3[s(190)](this[s(201)],p);return i[r(176)](n)?(n.x=h,n.y=l,n):new(e[r(133)])(h,l)}},l[c(181)][c(198)]=function(t,n){var e=f,r=c;!i[e(176)](n)&&(n=[]);for(var a=0,s=t[r(202)],o=0;o<s;o++){var u=this[r(186)](t[o],n[a]);i.defined(u)&&(n[a]=u,a++)}return n[e(143)]=a,n},l[c(181)].projectPointToNearestOnPlane=function(t,n){var r=f,s=c;!i[r(176)](n)&&(n=new e.Cartesian2);var o=v;o[s(195)]=t,e[r(166)][s(211)](this[s(184)][s(205)],o[s(207)]);var u=a.IntersectionTests[s(188)](o,this[s(184)],d);!i[r(176)](u)&&(e[r(166)][s(215)](o[s(207)],o[r(156)]),u=a.IntersectionTests[s(188)](o,this[s(184)],d));var p=e[r(166)][s(213)](u,this[r(141)],u),h=e[r(166)][r(147)](this[r(164)],p),l=e.Cartesian3.dot(this[s(201)],p);return n.x=h,n.y=l,n},l[c(181)][c(209)]=function(t,n){var e=c;!i[f(176)](n)&&(n=[]);var r=t[e(202)];n.length=r;for(var a=0;a<r;a++)n[a]=this[e(180)](t[a],n[a]);return n};var I=new e.Cartesian3;l[c(181)][c(176)]=function(t,n){var r=f,a=c;!i[r(176)](n)&&(n=new(e[r(166)]));var s=this[a(206)],o=this[a(199)],u=this[a(208)],p=this[a(201)],h=I;return e.Cartesian3[a(204)](u,t.x,h),n=e[r(166)][r(190)](o,h,n),e[r(166)][a(204)](p,t.y,h),e.Cartesian3[a(210)](n,h,n),s[a(177)](n,n),n},l[c(181)][c(216)]=function(t,n){var e=f,r=c,a=t[r(202)];i[e(176)](n)?n[r(202)]=a:n=new Array(a);for(var s=0;s<a;++s)n[s]=this.projectPointOntoEllipsoid(t[s],n[s]);return n},t[f(144)]=l}));
