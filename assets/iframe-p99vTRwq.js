const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Introduce.stories-CgNtfY41.js","./props-CDwtXEPn.js","./index-client-0IVJ1HVs.js","./create-runtime-stories-CMkdhrdB.js","./index-D-8MO0q_.js","./index-BHYIh-Xd.js","./_commonjsHelpers-Cpj98o6Y.js","./SpotLight-BMOF3Bl1.js","./Box.stories-Bkcxr2hV.js","./FreeCamera-DQnrkUYb.js","./Capsule.stories-D7VROR2t.js","./Cylinder.stories-D9BMe1iY.js","./DashedLine.stories-vp73Guiu.js","./Disc.stories-BDzjF75F.js","./ExtrudePolygon.stories-BJbcUcXI.js","./Physics.stories-DIiEBrJK.js","./entry-preview-BoG5hnCs.js","./index-DrFu-skq.js","./entry-preview-docs-CczlI_S8.js","./preview-uuU2DjvO.js","./v4-CQkTLCs1.js","./preview-D0N1Y6iQ.js","./preview-D77C14du.js","./preview-BWzBA1C2.js"])))=>i.map(i=>d[i]);
import"../sb-preview/runtime.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&m(i)}).observe(document,{childList:!0,subtree:!0});function l(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(r){if(r.ep)return;r.ep=!0;const o=l(r);fetch(r.href,o)}})();const R="modulepreload",L=function(t,_){return new URL(t,_).href},d={},e=function(_,l,m){let r=Promise.resolve();if(l&&l.length>0){const i=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),O=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.allSettled(l.map(n=>{if(n=L(n,m),n in d)return;d[n]=!0;const u=n.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(!!m)for(let a=i.length-1;a>=0;a--){const E=i[a];if(E.href===n&&(!u||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${f}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":R,u||(c.as="script"),c.crossOrigin="",c.href=n,O&&c.setAttribute("nonce",O),document.head.appendChild(c),u)return new Promise((a,E)=>{c.addEventListener("load",a),c.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${n}`)))})}))}function o(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return r.then(i=>{for(const s of i||[])s.status==="rejected"&&o(s.reason);return _().catch(o)})},{createBrowserChannel:T}=__STORYBOOK_MODULE_CHANNELS__,{addons:P}=__STORYBOOK_MODULE_PREVIEW_API__,p=T({page:"preview"});P.setChannel(p);window.__STORYBOOK_ADDONS_CHANNEL__=p;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=p);const v={"./src/stories/Introduce.stories.svelte":async()=>e(()=>import("./Introduce.stories-CgNtfY41.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url),"./src/stories/Introduce.stories.svelte":async()=>e(()=>import("./Introduce.stories-CgNtfY41.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url),"./src/stories/mesh/Box.stories.svelte":async()=>e(()=>import("./Box.stories-Bkcxr2hV.js"),__vite__mapDeps([8,1,2,3,4,5,6,9]),import.meta.url),"./src/stories/mesh/Capsule.stories.svelte":async()=>e(()=>import("./Capsule.stories-D7VROR2t.js"),__vite__mapDeps([10,1,2,3,4,5,6,9]),import.meta.url),"./src/stories/mesh/Cylinder.stories.svelte":async()=>e(()=>import("./Cylinder.stories-D9BMe1iY.js"),__vite__mapDeps([11,1,2,3,4,5,6,9]),import.meta.url),"./src/stories/mesh/DashedLine.stories.svelte":async()=>e(()=>import("./DashedLine.stories-vp73Guiu.js"),__vite__mapDeps([12,1,2,3,4,5,6,9]),import.meta.url),"./src/stories/mesh/Disc.stories.svelte":async()=>e(()=>import("./Disc.stories-BDzjF75F.js"),__vite__mapDeps([13,1,2,3,4,5,6,9]),import.meta.url),"./src/stories/mesh/ExtrudePolygon.stories.svelte":async()=>e(()=>import("./ExtrudePolygon.stories-BJbcUcXI.js"),__vite__mapDeps([14,1,2,3,4,5,6,9]),import.meta.url),"./src/stories/tips/Physics.stories.svelte":async()=>e(()=>import("./Physics.stories-DIiEBrJK.js"),__vite__mapDeps([15,1,2,3,4,5,6,7]),import.meta.url)};async function y(t){return v[t]()}const{composeConfigs:I,PreviewWeb:D,ClientApi:A}=__STORYBOOK_MODULE_PREVIEW_API__,V=async(t=[])=>{const _=await Promise.all([t[0]??e(()=>import("./entry-preview-BoG5hnCs.js"),__vite__mapDeps([16,1,2,6,17]),import.meta.url),t[1]??e(()=>import("./entry-preview-docs-CczlI_S8.js"),__vite__mapDeps([18,5,6]),import.meta.url),t[2]??e(()=>import("./preview-uuU2DjvO.js"),__vite__mapDeps([19,20,2]),import.meta.url),t[3]??e(()=>import("./preview-Ctr99X7u.js"),[],import.meta.url),t[4]??e(()=>import("./preview-D0N1Y6iQ.js"),__vite__mapDeps([21,20]),import.meta.url),t[5]??e(()=>import("./preview-D77C14du.js"),__vite__mapDeps([22,17]),import.meta.url),t[6]??e(()=>import("./preview-DFmD0pui.js"),[],import.meta.url),t[7]??e(()=>import("./preview-CFgKly6U.js"),[],import.meta.url),t[8]??e(()=>import("./preview-BWzBA1C2.js"),__vite__mapDeps([23,17]),import.meta.url),t[9]??e(()=>import("./preview-DGUiP6tS.js"),[],import.meta.url),t[10]??e(()=>import("./preview-IWz6v7r5.js"),[],import.meta.url),t[11]??e(()=>import("./preview-CIRcjyVj.js"),[],import.meta.url)]);return I(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new D(y,V);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{e as _};
