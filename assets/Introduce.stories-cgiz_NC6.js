import{p as P,s as M,r as $,i as C,a as g,t as f}from"./props-CDwtXEPn.js";import{p as L,s as e,f as b,a as A}from"./index-client-0IVJ1HVs.js";import{i as x,j as V,c as G,C as E,E as H,S as R,A as D,H as q,V as i,d as T}from"./create-runtime-stories-DlYX6Gso.js";import{G as r,S as B}from"./Sphere-bCs4WwiW.js";import"./iframe-DXvAOt9X.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./_commonjsHelpers-Cpj98o6Y.js";function w(o,n){let t=P(n,"light",15),s=$(n,["$$slots","$$events","$$legacy","light"]);V(o,M({LightClass:x},()=>s,{get light(){return t()},set light(a){t(a)}}))}x.__docgen={data:[{name:"light",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"SpotLight"},static:!1,readonly:!1,defaultValue:"..."},{name:"angle",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1},{name:"exponent",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1},{name:"intensity",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1},{name:"scene",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"Scene"},static:!1,readonly:!1},{name:"direction",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"Vector3"},static:!1,readonly:!1},{name:"position",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"Vector3"},static:!1,readonly:!1},{name:"shadowEnabled",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1},{name:"shadowId",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1}],name:"SpotLight.svelte"};const O={title:"Introduce",tags:["autodocs"]},{Story:U}=T(),v="shadow1",I="shadow2";var W=f("<!> <!> <!> <!> <!> <!> <!> <!>",1),F=f(`<h1>@juunini/svelte-babylonjs</h1> <h2>Caution</h2> <blockquote><p>❗ This is WIP and not ready for production use.</p></blockquote> <h2>Introduction</h2> <p>Easily create 3D scenes with Babylon.js in Svelte.</p> <!> <h2>Usage</h2> <p>See under code or click category</p> <h2>Installation</h2> <code><pre>
npm install @juunini/svelte-babylonjs
yarn add @juunini/svelte-babylonjs
pnpm add @juunini/svelte-babylonjs
bun add @juunini/svelte-babylonjs
  </pre></code> <h2>License</h2> MIT`,1);function j(o,n){L(n,!1),C();var t=F(),s=e(b(t),10);U(s,{name:"Docs",parameters:{docs:{canvas:{sourceState:"shown"},source:{language:"html",code:`<script lang="ts">
  import { Vector3 } from '@babylonjs/core/Maths/math.vector';

  import Canvas from '@juunini/svelte-babylonjs/Canvas.svelte';
  import Engine from '@juunini/svelte-babylonjs/engine/Engine.svelte';
  import Scene from '@juunini/svelte-babylonjs/Scene.svelte';
  import ArcRotateCamera from '@juunini/svelte-babylonjs/camera/ArcRotateCamera.svelte';
  import Ground from '@juunini/svelte-babylonjs/mesh/Ground.svelte';
  import HemisphericLight from '@juunini/svelte-babylonjs/light/HemisphericLight.svelte';
  import SpotLight from '@juunini/svelte-babylonjs/light/SpotLight.svelte';
  import Sphere from '@juunini/svelte-babylonjs/mesh/Sphere.svelte';

  const shadowId1 = 'shadow1';
  const shadowId2 = 'shadow2';
<\/script>

<Canvas style="width: 100%;">
  <Engine>
    <Scene>
      <ArcRotateCamera alpha={Math.PI / 2} beta={Math.PI / 2} radius={10} />
      <HemisphericLight direction={new Vector3(0, 1, 0)} intensity={0.7} />
      <SpotLight
        angle={Math.PI / 2}
        exponent={2}
        position={new Vector3(3, 5, 0)}
        intensity={0.2}
        shadowId={shadowId1}
      />
      <SpotLight
        angle={Math.PI / 2}
        exponent={2}
        position={new Vector3(-3, 5, 0)}
        intensity={0.2}
        shadowId={shadowId2}
      />
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
        shadowGroup={[shadowId1, shadowId2]}
      />
    </Scene>
  </Engine>
</Canvas>`}},__svelteCsf:{rawCode:`<Canvas style="width: 100%;">
  <Engine>
    <Scene>
      <ArcRotateCamera alpha={Math.PI / 2} beta={Math.PI / 2} radius={10} />
      <HemisphericLight direction={new Vector3(0, 1, 0)} intensity={0.7} />
      <SpotLight
        angle={Math.PI / 2}
        exponent={2}
        position={new Vector3(3, 5, 0)}
        intensity={0.2}
        shadowId={shadowId1}
      />
      <SpotLight
        angle={Math.PI / 2}
        exponent={2}
        position={new Vector3(-3, 5, 0)}
        intensity={0.2}
        shadowId={shadowId2}
      />
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
        shadowGroup={[shadowId1, shadowId2]}
      />
    </Scene>
  </Engine>
</Canvas>`}},children:(a,K)=>{E(a,{style:"width: 100%;",children:(k,N)=>{H(k,{children:(S,Q)=>{R(S,{children:(_,X)=>{var l=W(),d=b(l);D(d,{alpha:Math.PI/2,beta:Math.PI/2,radius:10});var p=e(d,2);q(p,{direction:new i(0,1,0),intensity:.7});var h=e(p,2);w(h,{angle:Math.PI/2,exponent:2,position:new i(3,5,0),intensity:.2,shadowId:v});var c=e(h,2);w(c,{angle:Math.PI/2,exponent:2,position:new i(-3,5,0),intensity:.2,shadowId:I});var y=e(c,2);r(y,{options:{width:6,height:6},position:{x:0,y:-2,z:0},collideAgainstImpulse:{x:0,y:5,z:0}});var u=e(y,2);r(u,{options:{width:6,height:6},position:{x:3.5,y:1,z:0},rotation:{x:0,y:0,z:Math.PI/2},collideAgainstImpulse:{x:-5,y:0,z:0}});var m=e(u,2);r(m,{options:{width:6,height:6},position:{x:-3.5,y:1,z:0},rotation:{x:0,y:0,z:-Math.PI/2},collideAgainstImpulse:{x:5,y:0,z:0}});var z=e(m,2);B(z,{options:{diameter:2,segments:32},position:new i(0,3,0),impulse:{x:5,y:0,z:0},shadowGroup:[v,I]}),g(_,l)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),g(o,t),A()}j.__docgen={version:3,name:"Introduce.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const J=G(j,O),re=["Docs"],le=J.Docs;export{le as Docs,re as __namedExportsOrder,O as default};
