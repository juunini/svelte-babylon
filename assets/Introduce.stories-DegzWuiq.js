import{i as f,a as r,t as c}from"./props-CDwtXEPn.js";import{p as j,f as a,a as _,s as e}from"./index-client-0IVJ1HVs.js";import{c as S,C,E as w,S as $,F as B,V as l,H as E,d as I}from"./create-runtime-stories-BdDSBu7q.js";import{G as V,S as F}from"./Sphere-HGFXMffe.js";import"./iframe-oeH-Nnzw.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./_commonjsHelpers-Cpj98o6Y.js";const G={title:"Introduce",tags:["autodocs"]},{Story:H}=I();var L=c("<!> <!> <!> <!>",1),x=c(`<!> <h1>@juunini/svelte-babylonjs</h1> <h2>Caution</h2> <blockquote><p>❗ This is WIP and not ready for production use.</p></blockquote> <h2>Introduction</h2> Easily create 3D scenes with Babylon.js in Svelte. <h2>Usage</h2> <p>Click under <code>Show code</code> button or to see category</p> <h2>Installation</h2> <code><pre>
npm install @juunini/svelte-babylonjs
yarn add @juunini/svelte-babylonjs
pnpm add @juunini/svelte-babylonjs
bun add @juunini/svelte-babylonjs
  </pre></code> <h2>License</h2> MIT`,1);function p(d,m){j(m,!1),f();var n=x(),u=a(n);H(u,{name:"Docs",parameters:{docs:{source:{language:"html",code:`<script lang="ts">
  import { Vector3 } from '@babylonjs/core/Maths/math.vector';

  import Canvas from '@juunini/svelte-babylonjs/Canvas.svelte';
  import BabylonEngine from '@juunini/svelte-babylonjs/engine/Engine.svelte';
  import BabylonScene from '@juunini/svelte-babylonjs/Scene.svelte';
  import BabylonFreeCamera from '@juunini/svelte-babylonjs/camera/FreeCamera.svelte';
  import BabylonGround from '@juunini/svelte-babylonjs/mesh/Ground.svelte';
  import BabylonHemisphericLight from '@juunini/svelte-babylonjs/light/HemisphericLight.svelte';
  import BabylonSphere from '@juunini/svelte-babylonjs/mesh/Sphere.svelte';
<\/script>

<Canvas style="width: 100%;">
  <BabylonEngine>
    <BabylonScene>
      <BabylonFreeCamera position={new Vector3(0, 5, -10)} />
      <BabylonHemisphericLight direction={new Vector3(0, 1, 0)} intensity={0.7} />
      <BabylonGround options={{ width: 6, height: 6 }} />
      <BabylonSphere options={{ diameter: 2, segments: 32 }} position={{ x: 0, y: 1, z: 0 }} />
    </BabylonScene>
  </BabylonEngine>
</Canvas>`}},__svelteCsf:{rawCode:`<Canvas style="width: 100%;">
  <Engine>
    <Scene>
      <FreeCamera position={new Vector3(0, 5, -10)} />
      <HemisphericLight direction={new Vector3(0, 1, 0)} intensity={0.7} />
      <Ground options={{ width: 6, height: 6 }} />
      <Sphere options={{ diameter: 2, segments: 32 }} position={{ x: 0, y: 1, z: 0 }} />
    </Scene>
  </Engine>
</Canvas>`}},children:(h,P)=>{C(h,{style:"width: 100%;",children:(b,k)=>{w(b,{children:(y,z)=>{$(y,{children:(v,M)=>{var o=L(),t=a(o);B(t,{position:new l(0,5,-10)});var s=e(t,2);E(s,{direction:new l(0,1,0),intensity:.7});var i=e(s,2);V(i,{options:{width:6,height:6}});var g=e(i,2);F(g,{options:{diameter:2,segments:32},position:{x:0,y:1,z:0}}),r(v,o)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),r(d,n),_()}p.__docgen={version:3,name:"Introduce.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const D=S(p,G),N=["Docs"],Q=D.Docs;export{Q as Docs,N as __namedExportsOrder,G as default};
