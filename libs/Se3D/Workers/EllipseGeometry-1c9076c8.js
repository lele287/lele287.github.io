define(["exports","./GeometryOffsetAttribute-6a692b56","./Transforms-86b6fa28","./Matrix2-91d5b6af","./RuntimeError-346a3079","./ComponentDatatype-f194c48b","./when-4bbc8319","./EllipseGeometryLibrary-c30b4a37","./GeometryAttribute-e0d0d297","./GeometryAttributes-7827a6c2","./GeometryInstance-a3cff41c","./GeometryPipeline-e3097c85","./IndexDatatype-ee69f1fd","./VertexFormat-f9c1a155"],(function(e,t,r,a,i,n,o,s,u,l,m,p,c,y){"use strict";var d=new a.Cartesian3,f=new a.Cartesian3,h=new a.Cartesian3,A=new a.Cartesian3,x=new a.Cartesian2,g=new a.Matrix3,b=new a.Matrix3,v=new r.Quaternion,_=new a.Cartesian3,C=new a.Cartesian3,w=new a.Cartesian3,M=new a.Cartographic,E=new a.Cartesian3,I=new a.Cartesian2,T=new a.Cartesian2;function G(e,i,m){var p=i.vertexFormat,c=i.center,y=i.semiMajorAxis,A=i.semiMinorAxis,G=i.ellipsoid,N=i.stRotation,P=m?e.length/3*2:e.length/3,F=i.shadowVolume,D=p.st?new Float32Array(2*P):void 0,V=p.normal?new Float32Array(3*P):void 0,O=p.tangent?new Float32Array(3*P):void 0,S=p.bitangent?new Float32Array(3*P):void 0,L=F?new Float32Array(3*P):void 0,R=0,j=_,k=C,z=w,B=new r.GeographicProjection(G),Y=B.project(G.cartesianToCartographic(c,M),E),H=G.scaleToGeodeticSurface(c,d);G.geodeticSurfaceNormal(H,H);var U=g,Q=b;if(0!==N){var W=r.Quaternion.fromAxisAngle(H,N,v);U=a.Matrix3.fromQuaternion(W,U),W=r.Quaternion.fromAxisAngle(H,-N,v),Q=a.Matrix3.fromQuaternion(W,Q)}else U=a.Matrix3.clone(a.Matrix3.IDENTITY,U),Q=a.Matrix3.clone(a.Matrix3.IDENTITY,Q);for(var q=a.Cartesian2.fromElements(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,I),J=a.Cartesian2.fromElements(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,T),Z=e.length,K=m?Z:0,X=K/3*2,$=0;$<Z;$+=3){var ee=$+1,te=$+2,re=a.Cartesian3.fromArray(e,$,d);if(p.st){var ae=a.Matrix3.multiplyByVector(U,re,f),ie=B.project(G.cartesianToCartographic(ae,M),h);a.Cartesian3.subtract(ie,Y,ie),x.x=(ie.x+y)/(2*y),x.y=(ie.y+A)/(2*A),q.x=Math.min(x.x,q.x),q.y=Math.min(x.y,q.y),J.x=Math.max(x.x,J.x),J.y=Math.max(x.y,J.y),m&&(D[R+X]=x.x,D[R+1+X]=x.y),D[R++]=x.x,D[R++]=x.y}(p.normal||p.tangent||p.bitangent||F)&&(j=G.geodeticSurfaceNormal(re,j),F&&(L[$+K]=-j.x,L[ee+K]=-j.y,L[te+K]=-j.z),(p.normal||p.tangent||p.bitangent)&&((p.tangent||p.bitangent)&&(k=a.Cartesian3.normalize(a.Cartesian3.cross(a.Cartesian3.UNIT_Z,j,k),k),a.Matrix3.multiplyByVector(Q,k,k)),p.normal&&(V[$]=j.x,V[ee]=j.y,V[te]=j.z,m&&(V[$+K]=-j.x,V[ee+K]=-j.y,V[te+K]=-j.z)),p.tangent&&(O[$]=k.x,O[ee]=k.y,O[te]=k.z,m&&(O[$+K]=-k.x,O[ee+K]=-k.y,O[te+K]=-k.z)),p.bitangent&&(z=a.Cartesian3.normalize(a.Cartesian3.cross(j,k,z),z),S[$]=z.x,S[ee]=z.y,S[te]=z.z,m&&(S[$+K]=z.x,S[ee+K]=z.y,S[te+K]=z.z))))}if(p.st){Z=D.length;for(var ne=0;ne<Z;ne+=2)D[ne]=(D[ne]-q.x)/(J.x-q.x),D[ne+1]=(D[ne+1]-q.y)/(J.y-q.y)}var oe=new l.GeometryAttributes;if(p.position){var se=s.EllipseGeometryLibrary.raisePositionsToHeight(e,i,m);oe.position=new u.GeometryAttribute({componentDatatype:n.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:se})}if(p.st&&(oe.st=new u.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:D})),p.normal&&(oe.normal=new u.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:V})),p.tangent&&(oe.tangent=new u.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:O})),p.bitangent&&(oe.bitangent=new u.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:S})),F&&(oe.extrudeDirection=new u.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:L})),m&&o.defined(i.offsetAttribute)){var ue=new Uint8Array(P);if(i.offsetAttribute===t.GeometryOffsetAttribute.TOP)ue=t.arrayFill(ue,1,0,P/2);else{var le=i.offsetAttribute===t.GeometryOffsetAttribute.NONE?0:1;ue=t.arrayFill(ue,le)}oe.applyOffset=new u.GeometryAttribute({componentDatatype:n.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:ue})}return oe}function N(e){var t,r,a,i,n,o=new Array(e*(e+1)*12-6),s=0;for(t=0,a=1,i=0;i<3;i++)o[s++]=a++,o[s++]=t,o[s++]=a;for(i=2;i<e+1;++i){for(a=i*(i+1)-1,t=(i-1)*i-1,o[s++]=a++,o[s++]=t,o[s++]=a,r=2*i,n=0;n<r-1;++n)o[s++]=a,o[s++]=t++,o[s++]=t,o[s++]=a++,o[s++]=t,o[s++]=a;o[s++]=a++,o[s++]=t,o[s++]=a}for(r=2*e,++a,++t,i=0;i<r-1;++i)o[s++]=a,o[s++]=t++,o[s++]=t,o[s++]=a++,o[s++]=t,o[s++]=a;for(o[s++]=a,o[s++]=t++,o[s++]=t,o[s++]=a++,o[s++]=t++,o[s++]=t,++t,i=e-1;i>1;--i){for(o[s++]=t++,o[s++]=t,o[s++]=a,r=2*i,n=0;n<r-1;++n)o[s++]=a,o[s++]=t++,o[s++]=t,o[s++]=a++,o[s++]=t,o[s++]=a;o[s++]=t++,o[s++]=t++,o[s++]=a++}for(i=0;i<3;i++)o[s++]=t++,o[s++]=t,o[s++]=a;return o}var P=new a.Cartesian3;var F=new r.BoundingSphere,D=new r.BoundingSphere;function V(e){var i=e.center,y=e.ellipsoid,b=e.semiMajorAxis,P=a.Cartesian3.multiplyByScalar(y.geodeticSurfaceNormal(i,d),e.height,d);F.center=a.Cartesian3.add(i,P,F.center),F.radius=b,P=a.Cartesian3.multiplyByScalar(y.geodeticSurfaceNormal(i,P),e.extrudedHeight,P),D.center=a.Cartesian3.add(i,P,D.center),D.radius=b;var V=s.EllipseGeometryLibrary.computeEllipsePositions(e,!0,!0),O=V.positions,S=V.numPts,L=V.outerPositions,R=r.BoundingSphere.union(F,D),j=G(O,e,!0),k=N(S),z=k.length;k.length=2*z;for(var B=O.length/3,Y=0;Y<z;Y+=3)k[Y+z]=k[Y+2]+B,k[Y+1+z]=k[Y+1]+B,k[Y+2+z]=k[Y]+B;var H=c.IndexDatatype.createTypedArray(2*B/3,k),U=new u.Geometry({attributes:j,indices:H,primitiveType:u.PrimitiveType.TRIANGLES}),Q=function(e,i){var s=i.vertexFormat,m=i.center,p=i.semiMajorAxis,c=i.semiMinorAxis,y=i.ellipsoid,b=i.height,G=i.extrudedHeight,N=i.stRotation,P=e.length/3*2,F=new Float64Array(3*P),D=s.st?new Float32Array(2*P):void 0,V=s.normal?new Float32Array(3*P):void 0,O=s.tangent?new Float32Array(3*P):void 0,S=s.bitangent?new Float32Array(3*P):void 0,L=i.shadowVolume,R=L?new Float32Array(3*P):void 0,j=0,k=_,z=C,B=w,Y=new r.GeographicProjection(y),H=Y.project(y.cartesianToCartographic(m,M),E),U=y.scaleToGeodeticSurface(m,d);y.geodeticSurfaceNormal(U,U);for(var Q=r.Quaternion.fromAxisAngle(U,N,v),W=a.Matrix3.fromQuaternion(Q,g),q=a.Cartesian2.fromElements(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,I),J=a.Cartesian2.fromElements(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,T),Z=e.length,K=Z/3*2,X=0;X<Z;X+=3){var $,ee=X+1,te=X+2,re=a.Cartesian3.fromArray(e,X,d);if(s.st){var ae=a.Matrix3.multiplyByVector(W,re,f),ie=Y.project(y.cartesianToCartographic(ae,M),h);a.Cartesian3.subtract(ie,H,ie),x.x=(ie.x+p)/(2*p),x.y=(ie.y+c)/(2*c),q.x=Math.min(x.x,q.x),q.y=Math.min(x.y,q.y),J.x=Math.max(x.x,J.x),J.y=Math.max(x.y,J.y),D[j+K]=x.x,D[j+1+K]=x.y,D[j++]=x.x,D[j++]=x.y}re=y.scaleToGeodeticSurface(re,re),$=a.Cartesian3.clone(re,f),k=y.geodeticSurfaceNormal(re,k),L&&(R[X+Z]=-k.x,R[ee+Z]=-k.y,R[te+Z]=-k.z);var ne=a.Cartesian3.multiplyByScalar(k,b,A);if(re=a.Cartesian3.add(re,ne,re),ne=a.Cartesian3.multiplyByScalar(k,G,ne),$=a.Cartesian3.add($,ne,$),s.position&&(F[X+Z]=$.x,F[ee+Z]=$.y,F[te+Z]=$.z,F[X]=re.x,F[ee]=re.y,F[te]=re.z),s.normal||s.tangent||s.bitangent){B=a.Cartesian3.clone(k,B);var oe=a.Cartesian3.fromArray(e,(X+3)%Z,A);a.Cartesian3.subtract(oe,re,oe);var se=a.Cartesian3.subtract($,re,h);k=a.Cartesian3.normalize(a.Cartesian3.cross(se,oe,k),k),s.normal&&(V[X]=k.x,V[ee]=k.y,V[te]=k.z,V[X+Z]=k.x,V[ee+Z]=k.y,V[te+Z]=k.z),s.tangent&&(z=a.Cartesian3.normalize(a.Cartesian3.cross(B,k,z),z),O[X]=z.x,O[ee]=z.y,O[te]=z.z,O[X+Z]=z.x,O[X+1+Z]=z.y,O[X+2+Z]=z.z),s.bitangent&&(S[X]=B.x,S[ee]=B.y,S[te]=B.z,S[X+Z]=B.x,S[ee+Z]=B.y,S[te+Z]=B.z)}}if(s.st){Z=D.length;for(var ue=0;ue<Z;ue+=2)D[ue]=(D[ue]-q.x)/(J.x-q.x),D[ue+1]=(D[ue+1]-q.y)/(J.y-q.y)}var le=new l.GeometryAttributes;if(s.position&&(le.position=new u.GeometryAttribute({componentDatatype:n.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:F})),s.st&&(le.st=new u.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:D})),s.normal&&(le.normal=new u.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:V})),s.tangent&&(le.tangent=new u.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:O})),s.bitangent&&(le.bitangent=new u.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:S})),L&&(le.extrudeDirection=new u.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:R})),o.defined(i.offsetAttribute)){var me=new Uint8Array(P);if(i.offsetAttribute===t.GeometryOffsetAttribute.TOP)me=t.arrayFill(me,1,0,P/2);else{var pe=i.offsetAttribute===t.GeometryOffsetAttribute.NONE?0:1;me=t.arrayFill(me,pe)}le.applyOffset=new u.GeometryAttribute({componentDatatype:n.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:me})}return le}(L,e);k=function(e){for(var t=e.length/3,r=c.IndexDatatype.createTypedArray(t,6*t),a=0,i=0;i<t;i++){var n=i,o=i+t,s=(n+1)%t,u=s+t;r[a++]=n,r[a++]=o,r[a++]=s,r[a++]=s,r[a++]=o,r[a++]=u}return r}(L);var W=c.IndexDatatype.createTypedArray(2*L.length/3,k),q=new u.Geometry({attributes:Q,indices:W,primitiveType:u.PrimitiveType.TRIANGLES}),J=p.GeometryPipeline.combineInstances([new m.GeometryInstance({geometry:U}),new m.GeometryInstance({geometry:q})]);return{boundingSphere:R,attributes:J[0].attributes,indices:J[0].indices}}function O(e,t,r,i,o,u,l){for(var m=s.EllipseGeometryLibrary.computeEllipsePositions({center:e,semiMajorAxis:t,semiMinorAxis:r,rotation:i,granularity:o},!1,!0).outerPositions,p=m.length/3,c=new Array(p),y=0;y<p;++y)c[y]=a.Cartesian3.fromArray(m,3*y);var d=a.Rectangle.fromCartesianArray(c,u,l);return d.width>n.CesiumMath.PI&&(d.north=d.north>0?n.CesiumMath.PI_OVER_TWO-n.CesiumMath.EPSILON7:d.north,d.south=d.south<0?n.CesiumMath.EPSILON7-n.CesiumMath.PI_OVER_TWO:d.south,d.east=n.CesiumMath.PI,d.west=-n.CesiumMath.PI),d}function S(e){var t=(e=o.defaultValue(e,o.defaultValue.EMPTY_OBJECT)).center,r=o.defaultValue(e.ellipsoid,a.Ellipsoid.WGS84),s=e.semiMajorAxis,u=e.semiMinorAxis,l=o.defaultValue(e.granularity,n.CesiumMath.RADIANS_PER_DEGREE),m=o.defaultValue(e.vertexFormat,y.VertexFormat.DEFAULT);if(i.Check.defined("options.center",t),i.Check.typeOf.number("options.semiMajorAxis",s),i.Check.typeOf.number("options.semiMinorAxis",u),s<u)throw new i.DeveloperError("semiMajorAxis must be greater than or equal to the semiMinorAxis.");if(l<=0)throw new i.DeveloperError("granularity must be greater than zero.");var p=o.defaultValue(e.height,0),c=o.defaultValue(e.extrudedHeight,p);this._center=a.Cartesian3.clone(t),this._semiMajorAxis=s,this._semiMinorAxis=u,this._ellipsoid=a.Ellipsoid.clone(r),this._rotation=o.defaultValue(e.rotation,0),this._stRotation=o.defaultValue(e.stRotation,0),this._height=Math.max(c,p),this._granularity=l,this._vertexFormat=y.VertexFormat.clone(m),this._extrudedHeight=Math.min(c,p),this._shadowVolume=o.defaultValue(e.shadowVolume,!1),this._workerName="createEllipseGeometry",this._offsetAttribute=e.offsetAttribute,this._rectangle=void 0,this._textureCoordinateRotationPoints=void 0}S.packedLength=a.Cartesian3.packedLength+a.Ellipsoid.packedLength+y.VertexFormat.packedLength+9,S.pack=function(e,t,r){return i.Check.defined("value",e),i.Check.defined("array",t),r=o.defaultValue(r,0),a.Cartesian3.pack(e._center,t,r),r+=a.Cartesian3.packedLength,a.Ellipsoid.pack(e._ellipsoid,t,r),r+=a.Ellipsoid.packedLength,y.VertexFormat.pack(e._vertexFormat,t,r),r+=y.VertexFormat.packedLength,t[r++]=e._semiMajorAxis,t[r++]=e._semiMinorAxis,t[r++]=e._rotation,t[r++]=e._stRotation,t[r++]=e._height,t[r++]=e._granularity,t[r++]=e._extrudedHeight,t[r++]=e._shadowVolume?1:0,t[r]=o.defaultValue(e._offsetAttribute,-1),t};var L=new a.Cartesian3,R=new a.Ellipsoid,j=new y.VertexFormat,k={center:L,ellipsoid:R,vertexFormat:j,semiMajorAxis:void 0,semiMinorAxis:void 0,rotation:void 0,stRotation:void 0,height:void 0,granularity:void 0,extrudedHeight:void 0,shadowVolume:void 0,offsetAttribute:void 0};S.unpack=function(e,t,r){i.Check.defined("array",e),t=o.defaultValue(t,0);var n=a.Cartesian3.unpack(e,t,L);t+=a.Cartesian3.packedLength;var s=a.Ellipsoid.unpack(e,t,R);t+=a.Ellipsoid.packedLength;var u=y.VertexFormat.unpack(e,t,j);t+=y.VertexFormat.packedLength;var l=e[t++],m=e[t++],p=e[t++],c=e[t++],d=e[t++],f=e[t++],h=e[t++],A=1===e[t++],x=e[t];return o.defined(r)?(r._center=a.Cartesian3.clone(n,r._center),r._ellipsoid=a.Ellipsoid.clone(s,r._ellipsoid),r._vertexFormat=y.VertexFormat.clone(u,r._vertexFormat),r._semiMajorAxis=l,r._semiMinorAxis=m,r._rotation=p,r._stRotation=c,r._height=d,r._granularity=f,r._extrudedHeight=h,r._shadowVolume=A,r._offsetAttribute=-1===x?void 0:x,r):(k.height=d,k.extrudedHeight=h,k.granularity=f,k.stRotation=c,k.rotation=p,k.semiMajorAxis=l,k.semiMinorAxis=m,k.shadowVolume=A,k.offsetAttribute=-1===x?void 0:x,new S(k))},S.computeRectangle=function(e,t){var r=(e=o.defaultValue(e,o.defaultValue.EMPTY_OBJECT)).center,s=o.defaultValue(e.ellipsoid,a.Ellipsoid.WGS84),u=e.semiMajorAxis,l=e.semiMinorAxis,m=o.defaultValue(e.granularity,n.CesiumMath.RADIANS_PER_DEGREE),p=o.defaultValue(e.rotation,0);if(i.Check.defined("options.center",r),i.Check.typeOf.number("options.semiMajorAxis",u),i.Check.typeOf.number("options.semiMinorAxis",l),u<l)throw new i.DeveloperError("semiMajorAxis must be greater than or equal to the semiMinorAxis.");if(m<=0)throw new i.DeveloperError("granularity must be greater than zero.");return O(r,u,l,p,m,s,t)},S.createGeometry=function(e){if(!(e._semiMajorAxis<=0||e._semiMinorAxis<=0)){var i=e._height,l=e._extrudedHeight,m=!n.CesiumMath.equalsEpsilon(i,l,0,n.CesiumMath.EPSILON2);e._center=e._ellipsoid.scaleToGeodeticSurface(e._center,e._center);var p,y={center:e._center,semiMajorAxis:e._semiMajorAxis,semiMinorAxis:e._semiMinorAxis,ellipsoid:e._ellipsoid,rotation:e._rotation,height:i,granularity:e._granularity,vertexFormat:e._vertexFormat,stRotation:e._stRotation};if(m)y.extrudedHeight=l,y.shadowVolume=e._shadowVolume,y.offsetAttribute=e._offsetAttribute,p=V(y);else if(p=function(e){var t=e.center;P=a.Cartesian3.multiplyByScalar(e.ellipsoid.geodeticSurfaceNormal(t,P),e.height,P),P=a.Cartesian3.add(t,P,P);var i=new r.BoundingSphere(P,e.semiMajorAxis),n=s.EllipseGeometryLibrary.computeEllipsePositions(e,!0,!1),o=n.positions,u=n.numPts,l=G(o,e,!1),m=N(u);return{boundingSphere:i,attributes:l,indices:m=c.IndexDatatype.createTypedArray(o.length/3,m)}}(y),o.defined(e._offsetAttribute)){var d=p.attributes.position.values.length,f=new Uint8Array(d/3),h=e._offsetAttribute===t.GeometryOffsetAttribute.NONE?0:1;t.arrayFill(f,h),p.attributes.applyOffset=new u.GeometryAttribute({componentDatatype:n.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:f})}return new u.Geometry({attributes:p.attributes,indices:p.indices,primitiveType:u.PrimitiveType.TRIANGLES,boundingSphere:p.boundingSphere,offsetAttribute:e._offsetAttribute})}},S.createShadowVolume=function(e,t,r){var a=e._granularity,i=e._ellipsoid,n=t(a,i),o=r(a,i);return new S({center:e._center,semiMajorAxis:e._semiMajorAxis,semiMinorAxis:e._semiMinorAxis,ellipsoid:i,rotation:e._rotation,stRotation:e._stRotation,granularity:a,extrudedHeight:n,height:o,vertexFormat:y.VertexFormat.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(S.prototype,{rectangle:{get:function(){return o.defined(this._rectangle)||(this._rectangle=O(this._center,this._semiMajorAxis,this._semiMinorAxis,this._rotation,this._granularity,this._ellipsoid)),this._rectangle}},textureCoordinateRotationPoints:{get:function(){return o.defined(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=function(e){var t=-e._stRotation;if(0===t)return[0,0,0,1,1,0];for(var r=s.EllipseGeometryLibrary.computeEllipsePositions({center:e._center,semiMajorAxis:e._semiMajorAxis,semiMinorAxis:e._semiMinorAxis,rotation:e._rotation,granularity:e._granularity},!1,!0).outerPositions,i=r.length/3,n=new Array(i),o=0;o<i;++o)n[o]=a.Cartesian3.fromArray(r,3*o);var l=e._ellipsoid,m=e.rectangle;return u.Geometry._textureCoordinateRotationPoints(n,t,l,m)}(this)),this._textureCoordinateRotationPoints}}}),e.EllipseGeometry=S}));
//# sourceMappingURL=EllipseGeometry-1c9076c8.js.map
