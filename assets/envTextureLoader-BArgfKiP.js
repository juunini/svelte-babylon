const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./rgbdDecode.fragment-DmcVS10L.js","./create-runtime-stories-ChL5sEf5.js","./props-CDwtXEPn.js","./index-client-0IVJ1HVs.js","./iframe-BnamMGfJ.js","./index-D-8MO0q_.js","./index-BHYIh-Xd.js","./_commonjsHelpers-Cpj98o6Y.js","./helperFunctions-CGCS89Zh.js","./rgbdDecode.fragment-KMSc-2Hz.js","./helperFunctions-C2WQODNS.js"])))=>i.map(i=>d[i]);
import{_ as I}from"./iframe-BnamMGfJ.js";import{o as D,T as S,s as B,P as U,I as z,B as G,a as V,V as d}from"./create-runtime-stories-ChL5sEf5.js";import"./dumpTools-CP4mh-BI.js";import"../sb-preview/runtime.js";import"./props-CDwtXEPn.js";import"./index-client-0IVJ1HVs.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./_commonjsHelpers-Cpj98o6Y.js";const C="image/png",F=2,M=[134,22,135,150,246,214,150,54];function k(e){const a=new DataView(e.buffer,e.byteOffset,e.byteLength);let t=0;for(let l=0;l<M.length;l++)if(a.getUint8(t++)!==M[l])return D.Error("Not a babylon environment map"),null;let r="",o=0;for(;o=a.getUint8(t++);)r+=String.fromCharCode(o);let n=JSON.parse(r);return n=R(n),n.specular&&(n.specular.specularDataPosition=t,n.specular.lodGenerationScale=n.specular.lodGenerationScale||.8),n}function R(e){if(e.version>F)throw new Error(`Unsupported babylon environment map version "${e.version}". Latest supported version is "${F}".`);return e.version===2||(e={...e,version:2,imageType:C}),e}function E(e,a){a=R(a);const t=a.specular;let r=Math.log2(a.width);if(r=Math.round(r)+1,t.mipmaps.length!==6*r)throw new Error(`Unsupported specular mipmaps number "${t.mipmaps.length}"`);const o=new Array(r);for(let n=0;n<r;n++){o[n]=new Array(6);for(let l=0;l<6;l++){const i=t.mipmaps[n*6+l];o[n][l]=new Uint8Array(e.buffer,e.byteOffset+t.specularDataPosition+i.position,i.length)}}return o}function H(e,a,t){t=R(t);const r=t.specular;if(!r)return Promise.resolve();e._lodGenerationScale=r.lodGenerationScale;const o=E(a,t);return P(e,o,t.imageType)}function O(e,a,t,r,o,n,l,i,y,T,h){return new Promise((g,v)=>{if(t){const s=a.createTexture(null,!0,!0,null,1,null,p=>{v(p)},e);r==null||r.onEffectCreatedObservable.addOnce(p=>{p.executeWhenCompiled(()=>{r.externalTextureSamplerBinding=!0,r.onApply=u=>{u._bindTexture("textureSampler",s),u.setFloat2("scale",1,a._features.needsInvertingBitmap&&e instanceof ImageBitmap?-1:1)},a.scenes.length&&(a.scenes[0].postProcessManager.directRender([r],T,!0,n,l),a.restoreDefaultFramebuffer(),s.dispose(),URL.revokeObjectURL(o),g())})})}else{if(a._uploadImageToTexture(h,e,n,l),i){const s=y[l];s&&a._uploadImageToTexture(s._texture,e,n,0)}g()}})}async function P(e,a,t=C){if(!S.IsExponentOfTwo(e.width))throw new Error("Texture size must be a power of two");const r=B(e.width)+1,o=e.getEngine();let n=!1,l=!1,i=null,y=null,T=null;const h=o.getCaps();e.format=5,e.type=0,e.generateMipMaps=!0,e._cachedAnisotropicFilteringLevel=null,o.updateTextureSamplingMode(3,e),h.textureLOD?o._features.supportRenderAndCopyToLodForFloatTextures?h.textureHalfFloatRender&&h.textureHalfFloatLinearFiltering?(n=!0,e.type=2):h.textureFloatRender&&h.textureFloatLinearFiltering&&(n=!0,e.type=1):n=!1:(n=!1,l=!0,T={});let g=0;if(n)o.isWebGPU?(g=1,await I(()=>import("./rgbdDecode.fragment-DmcVS10L.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url)):await I(()=>import("./rgbdDecode.fragment-KMSc-2Hz.js"),__vite__mapDeps([9,1,2,3,4,5,6,7,10]),import.meta.url),i=new U("rgbdDecode","rgbdDecode",null,null,1,null,3,o,!1,void 0,e.type,void 0,null,!1,void 0,g),e._isRGBD=!1,e.invertY=!1,y=o.createRenderTargetCubeTexture(e.width,{generateDepthBuffer:!1,generateMipMaps:!0,generateStencilBuffer:!1,samplingMode:3,type:e.type,format:5});else if(e._isRGBD=!0,e.invertY=!0,l){const p=e._lodGenerationScale,u=e._lodGenerationOffset;for(let c=0;c<3;c++){const w=1-c/2,f=u,L=(r-1)*p+u,A=f+(L-f)*w,x=Math.round(Math.min(Math.max(A,0),L)),b=new z(o,2);b.isCube=!0,b.invertY=!0,b.generateMipMaps=!1,o.updateTextureSamplingMode(2,b);const _=new G(null);switch(_._isCube=!0,_._texture=b,T[x]=_,c){case 0:e._lodTextureLow=_;break;case 1:e._lodTextureMid=_;break;case 2:e._lodTextureHigh=_;break}}}const v=[];for(let s=0;s<a.length;s++)for(let p=0;p<6;p++){const u=a[s][p],c=new Blob([u],{type:t}),m=URL.createObjectURL(c);let w;if(o._features.forceBitmapOverHTMLImageElement)w=o.createImageBitmap(c,{premultiplyAlpha:"none"}).then(f=>O(f,o,n,i,m,p,s,l,T,y,e));else{const f=new Image;f.src=m,w=new Promise((L,A)=>{f.onload=()=>{O(f,o,n,i,m,p,s,l,T,y,e).then(()=>L()).catch(x=>{A(x)})},f.onerror=x=>{A(x)}})}v.push(w)}if(a.length<r){let s;const p=Math.pow(2,r-1-a.length),u=p*p*4;switch(e.type){case 0:{s=new Uint8Array(u);break}case 2:{s=new Uint16Array(u);break}case 1:{s=new Float32Array(u);break}}for(let c=a.length;c<r;c++)for(let m=0;m<6;m++)o._uploadArrayBufferViewToTexture(e,s,m,c)}return Promise.all(v).then(()=>{y&&(o._releaseTexture(e),y._swapAndDie(e)),i&&i.dispose(),l&&(e._lodTextureHigh&&e._lodTextureHigh._texture&&(e._lodTextureHigh._texture.isReady=!0),e._lodTextureMid&&e._lodTextureMid._texture&&(e._lodTextureMid._texture.isReady=!0),e._lodTextureLow&&e._lodTextureLow._texture&&(e._lodTextureLow._texture.isReady=!0))})}function N(e,a){a=R(a);const t=a.irradiance;if(!t)return;const r=new V;d.FromArrayToRef(t.x,0,r.x),d.FromArrayToRef(t.y,0,r.y),d.FromArrayToRef(t.z,0,r.z),d.FromArrayToRef(t.xx,0,r.xx),d.FromArrayToRef(t.yy,0,r.yy),d.FromArrayToRef(t.zz,0,r.zz),d.FromArrayToRef(t.yz,0,r.yz),d.FromArrayToRef(t.zx,0,r.zx),d.FromArrayToRef(t.xy,0,r.xy),e._sphericalPolynomial=r}class Z{constructor(){this.supportCascades=!1}loadCubeData(a,t,r,o,n){if(Array.isArray(a))return;const l=k(a);if(l){t.width=l.width,t.height=l.width;try{N(t,l),H(t,a,l).then(()=>{t.isReady=!0,t.onLoadedObservable.notifyObservers(t),t.onLoadedObservable.clear(),o&&o()},i=>{n==null||n("Can not upload environment levels",i)})}catch(i){n==null||n("Can not upload environment file",i)}}else n&&n("Can not parse the environment file",null)}loadData(){throw".env not supported in 2d."}}export{Z as _ENVTextureLoader};
