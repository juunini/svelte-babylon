import{M as z,b,V as w,c as I,d as Q,e as p,f as F,g as D,h as B,E,T as N}from"./create-runtime-stories-BkZzGcfe.js";z._GroundMeshParser=(s,i)=>Z.Parse(s,i);class Z extends z{constructor(i,e){super(i,e),this.generateOctree=!1}getClassName(){return"GroundMesh"}get subdivisions(){return Math.min(this._subdivisionsX,this._subdivisionsY)}get subdivisionsX(){return this._subdivisionsX}get subdivisionsY(){return this._subdivisionsY}optimize(i,e=32){this._subdivisionsX=i,this._subdivisionsY=i,this.subdivide(i);const t=this;t.createOrUpdateSubmeshesOctree&&t.createOrUpdateSubmeshesOctree(e)}getHeightAtCoordinates(i,e){const t=this.getWorldMatrix(),a=b.Matrix[5];t.invertToRef(a);const n=b.Vector3[8];if(w.TransformCoordinatesFromFloatsToRef(i,0,e,a,n),i=n.x,e=n.z,i<this._minX||i>=this._maxX||e<=this._minZ||e>this._maxZ)return this.position.y;(!this._heightQuads||this._heightQuads.length==0)&&(this._initHeightQuads(),this._computeHeightQuads());const r=this._getFacetAt(i,e),c=-(r.x*i+r.z*e+r.w)/r.y;return w.TransformCoordinatesFromFloatsToRef(0,c,0,t,n),n.y}getNormalAtCoordinates(i,e){const t=new w(0,1,0);return this.getNormalAtCoordinatesToRef(i,e,t),t}getNormalAtCoordinatesToRef(i,e,t){const a=this.getWorldMatrix(),n=b.Matrix[5];a.invertToRef(n);const r=b.Vector3[8];if(w.TransformCoordinatesFromFloatsToRef(i,0,e,n,r),i=r.x,e=r.z,i<this._minX||i>this._maxX||e<this._minZ||e>this._maxZ)return this;(!this._heightQuads||this._heightQuads.length==0)&&(this._initHeightQuads(),this._computeHeightQuads());const c=this._getFacetAt(i,e);return w.TransformNormalFromFloatsToRef(c.x,c.y,c.z,a,t),this}updateCoordinateHeights(){return(!this._heightQuads||this._heightQuads.length==0)&&this._initHeightQuads(),this._computeHeightQuads(),this}_getFacetAt(i,e){const t=Math.floor((i+this._maxX)*this._subdivisionsX/this._width),a=Math.floor(-(e+this._maxZ)*this._subdivisionsY/this._height+this._subdivisionsY),n=this._heightQuads[a*this._subdivisionsX+t];let r;return e<n.slope.x*i+n.slope.y?r=n.facet1:r=n.facet2,r}_initHeightQuads(){const i=this._subdivisionsX,e=this._subdivisionsY;this._heightQuads=new Array;for(let t=0;t<e;t++)for(let a=0;a<i;a++){const n={slope:I.Zero(),facet1:new Q(0,0,0,0),facet2:new Q(0,0,0,0)};this._heightQuads[t*i+a]=n}return this}_computeHeightQuads(){const i=this.getVerticesData(p.PositionKind);if(!i)return this;const e=b.Vector3[3],t=b.Vector3[2],a=b.Vector3[1],n=b.Vector3[0],r=b.Vector3[4],c=b.Vector3[5],g=b.Vector3[6],d=b.Vector3[7],m=b.Vector3[8];let h=0,u=0,o=0,f=0,v=0,x=0,l=0;const _=this._subdivisionsX,y=this._subdivisionsY;for(let X=0;X<y;X++)for(let V=0;V<_;V++){h=V*3,u=X*(_+1)*3,o=(X+1)*(_+1)*3,e.x=i[u+h],e.y=i[u+h+1],e.z=i[u+h+2],t.x=i[u+h+3],t.y=i[u+h+4],t.z=i[u+h+5],a.x=i[o+h],a.y=i[o+h+1],a.z=i[o+h+2],n.x=i[o+h+3],n.y=i[o+h+4],n.z=i[o+h+5],f=(n.z-e.z)/(n.x-e.x),v=e.z-f*e.x,t.subtractToRef(e,r),a.subtractToRef(e,c),n.subtractToRef(e,g),w.CrossToRef(g,c,d),w.CrossToRef(r,g,m),d.normalize(),m.normalize(),x=-(d.x*e.x+d.y*e.y+d.z*e.z),l=-(m.x*t.x+m.y*t.y+m.z*t.z);const H=this._heightQuads[X*_+V];H.slope.copyFromFloats(f,v),H.facet1.copyFromFloats(d.x,d.y,d.z,x),H.facet2.copyFromFloats(m.x,m.y,m.z,l)}return this}serialize(i){super.serialize(i),i.subdivisionsX=this._subdivisionsX,i.subdivisionsY=this._subdivisionsY,i.minX=this._minX,i.maxX=this._maxX,i.minZ=this._minZ,i.maxZ=this._maxZ,i.width=this._width,i.height=this._height}static Parse(i,e){const t=new Z(i.name,e);return t._subdivisionsX=i.subdivisionsX||1,t._subdivisionsY=i.subdivisionsY||1,t._minX=i.minX,t._maxX=i.maxX,t._minZ=i.minZ,t._maxZ=i.maxZ,t._width=i.width,t._height=i.height,t}}function G(s){const i=[],e=[],t=[],a=[];let n,r;const c=s.width||s.size||1,g=s.height||s.size||1,d=(s.subdivisionsX||s.subdivisions||1)|0,m=(s.subdivisionsY||s.subdivisions||1)|0;for(n=0;n<=m;n++)for(r=0;r<=d;r++){const u=new w(r*c/d-c/2,0,(m-n)*g/m-g/2),o=new w(0,1,0);e.push(u.x,u.y,u.z),t.push(o.x,o.y,o.z),a.push(r/d,1-n/m)}for(n=0;n<m;n++)for(r=0;r<d;r++)i.push(r+1+(n+1)*(d+1)),i.push(r+1+n*(d+1)),i.push(r+n*(d+1)),i.push(r+(n+1)*(d+1)),i.push(r+1+(n+1)*(d+1)),i.push(r+n*(d+1));const h=new F;return h.indices=i,h.positions=e,h.normals=t,h.uvs=a,h}function M(s){const i=s.xmin!==void 0&&s.xmin!==null?s.xmin:-1,e=s.zmin!==void 0&&s.zmin!==null?s.zmin:-1,t=s.xmax!==void 0&&s.xmax!==null?s.xmax:1,a=s.zmax!==void 0&&s.zmax!==null?s.zmax:1,n=s.subdivisions||{w:1,h:1},r=s.precision||{w:1,h:1},c=[],g=[],d=[],m=[];let h,u,o,f;n.h=n.h<1?1:n.h,n.w=n.w<1?1:n.w,r.w=r.w<1?1:r.w,r.h=r.h<1?1:r.h;const v={w:(t-i)/n.w,h:(a-e)/n.h};function x(_,y,X,V){const H=g.length/3,R=r.w+1;for(h=0;h<r.h;h++)for(u=0;u<r.w;u++){const T=[H+u+h*R,H+(u+1)+h*R,H+(u+1)+(h+1)*R,H+u+(h+1)*R];c.push(T[1]),c.push(T[2]),c.push(T[3]),c.push(T[0]),c.push(T[1]),c.push(T[3])}const C=w.Zero(),Y=new w(0,1,0);for(h=0;h<=r.h;h++)for(C.z=h*(V-y)/r.h+y,u=0;u<=r.w;u++)C.x=u*(X-_)/r.w+_,C.y=0,g.push(C.x,C.y,C.z),d.push(Y.x,Y.y,Y.z),m.push(u/r.w,h/r.h)}for(o=0;o<n.h;o++)for(f=0;f<n.w;f++)x(i+f*v.w,e+o*v.h,i+(f+1)*v.w,e+(o+1)*v.h);const l=new F;return l.indices=c,l.positions=g,l.normals=d,l.uvs=m,l}function A(s){const i=[],e=[],t=[],a=[];let n,r;const c=s.colorFilter||new D(.3,.59,.11),g=s.alphaFilter||0;let d=!1;if(s.minHeight>s.maxHeight){d=!0;const h=s.maxHeight;s.maxHeight=s.minHeight,s.minHeight=h}for(n=0;n<=s.subdivisions;n++)for(r=0;r<=s.subdivisions;r++){const h=new w(r*s.width/s.subdivisions-s.width/2,0,(s.subdivisions-n)*s.height/s.subdivisions-s.height/2),u=(h.x+s.width/2)/s.width*(s.bufferWidth-1)|0,o=(1-(h.z+s.height/2)/s.height)*(s.bufferHeight-1)|0,f=(u+o*s.bufferWidth)*4;let v=s.buffer[f]/255,x=s.buffer[f+1]/255,l=s.buffer[f+2]/255;const _=s.buffer[f+3]/255;d&&(v=1-v,x=1-x,l=1-l);const y=v*c.r+x*c.g+l*c.b;_>=g?h.y=s.minHeight+(s.maxHeight-s.minHeight)*y:h.y=s.minHeight-B,s.heightBuffer&&(s.heightBuffer[n*(s.subdivisions+1)+r]=h.y),e.push(h.x,h.y,h.z),t.push(0,0,0),a.push(r/s.subdivisions,1-n/s.subdivisions)}for(n=0;n<s.subdivisions;n++)for(r=0;r<s.subdivisions;r++){const h=r+1+(n+1)*(s.subdivisions+1),u=r+1+n*(s.subdivisions+1),o=r+n*(s.subdivisions+1),f=r+(n+1)*(s.subdivisions+1),v=e[h*3+1]>=s.minHeight,x=e[u*3+1]>=s.minHeight,l=e[o*3+1]>=s.minHeight;v&&x&&l&&(i.push(h),i.push(u),i.push(o)),e[f*3+1]>=s.minHeight&&v&&l&&(i.push(f),i.push(h),i.push(o))}F.ComputeNormals(e,i,t);const m=new F;return m.indices=i,m.positions=e,m.normals=t,m.uvs=a,m}function W(s,i={},e){const t=new Z(s,e);return t._setReady(!1),t._subdivisionsX=i.subdivisionsX||i.subdivisions||1,t._subdivisionsY=i.subdivisionsY||i.subdivisions||1,t._width=i.width||1,t._height=i.height||1,t._maxX=t._width/2,t._maxZ=t._height/2,t._minX=-t._maxX,t._minZ=-t._maxZ,G(i).applyToMesh(t,i.updatable),t._setReady(!0),t}function P(s,i,e=null){const t=new z(s,e);return M(i).applyToMesh(t,i.updatable),t}function S(s,i,e={},t=null){const a=e.width||10,n=e.height||10,r=e.subdivisions||1,c=e.minHeight||0,g=e.maxHeight||1,d=e.colorFilter||new D(.3,.59,.11),m=e.alphaFilter||0,h=e.updatable,u=e.onReady;t=t||E.LastCreatedScene;const o=new Z(s,t);o._subdivisionsX=r,o._subdivisionsY=r,o._width=a,o._height=n,o._maxX=o._width/2,o._maxZ=o._height/2,o._minX=-o._maxX,o._minZ=-o._maxZ,o._setReady(!1);let f;e.passHeightBufferInCallback&&(f=new Float32Array((r+1)*(r+1)));const v=(x,l,_)=>{A({width:a,height:n,subdivisions:r,minHeight:c,maxHeight:g,colorFilter:d,buffer:x,bufferWidth:l,bufferHeight:_,alphaFilter:m,heightBuffer:f}).applyToMesh(o,h),u&&u(o,f),o._setReady(!0)};if(typeof i=="string"){const x=l=>{const _=l.width,y=l.height;if(t.isDisposed)return;const X=t==null?void 0:t.getEngine().resizeImageBitmap(l,_,y);v(X,_,y)};N.LoadImage(i,x,e.onError?e.onError:()=>{},t.offlineProvider)}else v(i.data,i.width,i.height);return o}F.CreateGround=G;F.CreateTiledGround=M;F.CreateGroundFromHeightMap=A;z.CreateGround=(s,i,e,t,a,n)=>W(s,{width:i,height:e,subdivisions:t,updatable:n},a);z.CreateTiledGround=(s,i,e,t,a,n,r,c,g)=>P(s,{xmin:i,zmin:e,xmax:t,zmax:a,subdivisions:n,precision:r,updatable:g},c);z.CreateGroundFromHeightMap=(s,i,e,t,a,n,r,c,g,d,m)=>S(s,i,{width:e,height:t,subdivisions:a,minHeight:n,maxHeight:r,updatable:g,onReady:d,alphaFilter:m},c);export{W as C};
