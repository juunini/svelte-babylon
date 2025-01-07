import{i as v,a as x,t as z}from"./props-CDwtXEPn.js";import{p as f,f as w,a as I,s as t}from"./index-client-0IVJ1HVs.js";import{c as _,C as b,E as P,S,A as $,H as j,V as l,d as A}from"./create-runtime-stories-DQMLDbyL.js";import{G as e,S as C}from"./Sphere-Cnk1QqYN.js";import"./iframe-Cn89D-On.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./_commonjsHelpers-Cpj98o6Y.js";const M={title:"tips/Physics",tags:["autodocs"]},{Story:G}=A();var E=z("<!> <!> <!> <!> <!> <!>",1);function p(h,m){f(m,!1),v(),G(h,{name:"Docs",parameters:{docs:{canvas:{sourceState:"shown"},source:{language:"html",code:`<script lang="ts">
  import { Vector3 } from '@babylonjs/core/Maths/math.vector';

  import Canvas from '@juunini/svelte-babylonjs/Canvas.svelte';
  import Engine from '@juunini/svelte-babylonjs/engine/Engine.svelte';
  import Scene from '@juunini/svelte-babylonjs/Scene.svelte';
  import ArcRotateCamera from '@juunini/svelte-babylonjs/camera/ArcRotateCamera.svelte';
  import Ground from '@juunini/svelte-babylonjs/mesh/Ground.svelte';
  import HemisphericLight from '@juunini/svelte-babylonjs/light/HemisphericLight.svelte';
  import Sphere from '@juunini/svelte-babylonjs/mesh/Sphere.svelte';
<\/script>

<Canvas style="width: 100%;">
  <Engine>
    <Scene>
      <ArcRotateCamera alpha={Math.PI / 2} beta={Math.PI / 2} radius={10} />
      <HemisphericLight direction={new Vector3(0, 1, 0)} intensity={0.7} />
      <Ground
        options={{ width: 6, height: 6 }}
        position={{ x: 0, y: -2, z: 0 }}
        collideAgainstImpulse={{ x: 0, y: 5, z: 0 }}
      />
      <Ground
        options={{ width: 6, height: 6 }}
        position={{ x: 3.5, y: 1, z: 0 }}
        rotation={{ x: 0, y: 0, z: Math.PI / 2 }}
        collideAgainstImpulse={{ x: -5, y: 0, z: 0 }}
      />
      <Ground
        options={{ width: 6, height: 6 }}
        position={{ x: -3.5, y: 1, z: 0 }}
        rotation={{ x: 0, y: 0, z: -Math.PI / 2 }}
        collideAgainstImpulse={{ x: 5, y: 0, z: 0 }}
      />
      <Sphere
        options={{ diameter: 2, segments: 32 }}
        position={new Vector3(0, 3, 0)}
        impulse={{ x: 5, y: 0, z: 0 }}
      />
    </Scene>
  </Engine>
</Canvas>`}},__svelteCsf:{rawCode:`<Canvas style="width: 100%;">
  <Engine>
    <Scene>
      <ArcRotateCamera alpha={Math.PI / 2} beta={Math.PI / 2} radius={10} />
      <HemisphericLight direction={new Vector3(0, 1, 0)} intensity={0.7} />
      <Ground
        options={{ width: 6, height: 6 }}
        position={{ x: 0, y: -2, z: 0 }}
        collideAgainstImpulse={{ x: 0, y: 5, z: 0 }}
      />
      <Ground
        options={{ width: 6, height: 6 }}
        position={{ x: 3.5, y: 1, z: 0 }}
        rotation={{ x: 0, y: 0, z: Math.PI / 2 }}
        collideAgainstImpulse={{ x: -5, y: 0, z: 0 }}
      />
      <Ground
        options={{ width: 6, height: 6 }}
        position={{ x: -3.5, y: 1, z: 0 }}
        rotation={{ x: 0, y: 0, z: -Math.PI / 2 }}
        collideAgainstImpulse={{ x: 5, y: 0, z: 0 }}
      />
      <Sphere
        options={{ diameter: 2, segments: 32 }}
        position={new Vector3(0, 3, 0)}
        impulse={{ x: 5, y: 0, z: 0 }}
      />
    </Scene>
  </Engine>
</Canvas>`}},children:(c,H)=>{b(c,{style:"width: 100%;",children:(d,R)=>{P(d,{children:(u,L)=>{S(u,{children:(y,D)=>{var o=E(),i=w(o);$(i,{alpha:Math.PI/2,beta:Math.PI/2,radius:10});var n=t(i,2);j(n,{direction:new l(0,1,0),intensity:.7});var s=t(n,2);e(s,{options:{width:6,height:6},position:{x:0,y:-2,z:0},collideAgainstImpulse:{x:0,y:5,z:0}});var a=t(s,2);e(a,{options:{width:6,height:6},position:{x:3.5,y:1,z:0},rotation:{x:0,y:0,z:Math.PI/2},collideAgainstImpulse:{x:-5,y:0,z:0}});var r=t(a,2);e(r,{options:{width:6,height:6},position:{x:-3.5,y:1,z:0},rotation:{x:0,y:0,z:-Math.PI/2},collideAgainstImpulse:{x:5,y:0,z:0}});var g=t(r,2);C(g,{options:{diameter:2,segments:32},position:new l(0,3,0),impulse:{x:5,y:0,z:0}}),x(y,o)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),I()}p.__docgen={version:3,name:"Physics.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const V=_(p,M),T=["Docs"],U=V.Docs;export{U as Docs,T as __namedExportsOrder,M as default};
