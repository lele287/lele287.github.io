define(["exports","./RuntimeError-346a3079","./when-4bbc8319","./ComponentDatatype-f194c48b"],(function(e,n,i,d){"use strict";var t=d.CesiumMath.EPSILON10;e.arrayRemoveDuplicates=function(e,d,f,r){if(n.Check.defined("equalsEpsilon",d),i.defined(e)){f=i.defaultValue(f,!1);var u,a=i.defined(r),s=e.length;if(s<2)return e;var l,c,h=e[0],o=0,p=-1;for(u=1;u<s;++u)d(h,l=e[u],t)?(i.defined(c)||(c=e.slice(0,u),o=u-1,p=0),a&&r.push(u)):(i.defined(c)&&(c.push(l),o=u,a&&(p=r.length)),h=l);return f&&d(e[0],e[s-1],t)&&(a&&(i.defined(c)?r.splice(p,0,o):r.push(s-1)),i.defined(c)?c.length-=1:c=e.slice(0,-1)),i.defined(c)?c:e}}}));
//# sourceMappingURL=arrayRemoveDuplicates-cf5c3227.js.map
