import{i as d,a as u,t as v}from"./props-CDwtXEPn.js";import{p as b,f as g,a as f,s}from"./index-client-0IVJ1HVs.js";import{c as _,C as S,E as $,S as j,F as C,V as o,H as w,d as B}from"./create-runtime-stories-BdDSBu7q.js";import{G as E,S as O}from"./Sphere-HGFXMffe.js";import"./iframe-oeH-Nnzw.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./_commonjsHelpers-Cpj98o6Y.js";const P={title:"tips/Physics",tags:["autodocs"]},{Story:V}=B();var F=v("<!> <!> <!> <!>",1);function r(a,p){b(p,!1),d(),V(a,{name:"Docs",parameters:{docs:{source:{language:"html",code:`<script lang="ts">
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
    <BabylonScene physics>
      <BabylonFreeCamera position={new Vector3(0, 5, -10)} />
      <BabylonHemisphericLight direction={new Vector3(0, 1, 0)} intensity={0.7} />
      <BabylonGround
        options={{ width: 6, height: 6 }}
        physics
        physicsOptions={{ mass: 0, restitution: 0.5 }}
      />
      <BabylonSphere
        options={{ diameter: 2, segments: 32 }}
        position={{ x: 0, y: 5, z: 0 }}
        physics
        physicsOptions={{ mass: 1, restitution: 0.5 }}
      />
    </BabylonScene>
  </BabylonEngine>
</Canvas>`}},__svelteCsf:{rawCode:`<Canvas style="width: 100%;">
  <Engine>
    <Scene physics>
      <FreeCamera position={new Vector3(0, 5, -10)} />
      <HemisphericLight direction={new Vector3(0, 1, 0)} intensity={0.7} />
      <Ground
        physics
        physicsOptions={{ mass: 0, restitution: 0.5 }}
        options={{ width: 6, height: 6 }}
      />
      <Sphere
        physics
        physicsOptions={{ mass: 1, restitution: 0.5 }}
        options={{ diameter: 2, segments: 32 }}
        position={{ x: 0, y: 5, z: 0 }}
      />
    </Scene>
  </Engine>
</Canvas>`}},children:(l,H)=>{S(l,{style:"width: 100%;",children:(c,x)=>{$(c,{children:(m,L)=>{j(m,{physics:!0,children:(h,D)=>{var e=F(),t=g(e);C(t,{position:new o(0,5,-10)});var n=s(t,2);w(n,{direction:new o(0,1,0),intensity:.7});var i=s(n,2);E(i,{physics:!0,physicsOptions:{mass:0,restitution:.5},options:{width:6,height:6}});var y=s(i,2);O(y,{physics:!0,physicsOptions:{mass:1,restitution:.5},options:{diameter:2,segments:32},position:{x:0,y:5,z:0}}),u(h,e)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),f()}r.__docgen={version:3,name:"Physics.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const G=_(r,P),N=["Docs"],Q=G.Docs;export{Q as Docs,N as __namedExportsOrder,P as default};
