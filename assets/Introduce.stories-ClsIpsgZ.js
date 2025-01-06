import{p as P,s as M,r as $,i as G,a as b,t as f}from"./props-CDwtXEPn.js";import{p as C,s as e,f as I,a as L}from"./index-client-0IVJ1HVs.js";import{i as x,j as A,c as E,C as V,E as H,S as R,A as D,H as q,V as o,d as T}from"./create-runtime-stories-DyAm3Txo.js";import{G as l,S as B}from"./Sphere-vxWpSE6f.js";import"./iframe-CEReE_Su.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./_commonjsHelpers-Cpj98o6Y.js";function v(a,n){let t=P(n,"light",15),d=$(n,["$$slots","$$events","$$legacy","light"]);A(a,M({LightClass:x},()=>d,{get light(){return t()},set light(r){t(r)}}))}x.__docgen={data:[{name:"light",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"SpotLight"},static:!1,readonly:!1,defaultValue:"..."},{name:"angle",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1},{name:"exponent",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1},{name:"intensity",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1},{name:"scene",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"Scene"},static:!1,readonly:!1},{name:"direction",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"Vector3"},static:!1,readonly:!1},{name:"position",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"Vector3"},static:!1,readonly:!1},{name:"shadowEnabled",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1},{name:"shadowId",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1}],name:"SpotLight.svelte"};const O={title:"Introduce",tags:["autodocs"]},{Story:U}=T(),i="shadow1",s="shadow2";var W=f("<!> <!> <!> <!> <!> <!> <!> <!>",1),F=f(`<h1>@juunini/svelte-babylonjs</h1> <h2>Caution</h2> <blockquote><p>❗ This is WIP and not ready for production use.</p></blockquote> <h2>Introduction</h2> <p>Easily create 3D scenes with Babylon.js in Svelte.</p> <!> <h2>Usage</h2> <p>See under code or click category</p> <h2>Installation</h2> <code><pre>
npm install @juunini/svelte-babylonjs
yarn add @juunini/svelte-babylonjs
pnpm add @juunini/svelte-babylonjs
bun add @juunini/svelte-babylonjs
  </pre></code> <h2>License</h2> MIT`,1);function j(a,n){C(n,!1),G();var t=F(),d=e(I(t),10);U(d,{name:"Docs",parameters:{docs:{canvas:{sourceState:"shown"},source:{language:"html",code:`<script lang="ts">
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
        shadowEnabled={false}
        collideAgainstImpulse={{ x: 0, y: 5, z: 0 }}
      />
      <Ground
        options={{ width: 6, height: 6 }}
        position={{ x: 3.5, y: 1, z: 0 }}
        rotation={{ x: 0, y: 0, z: Math.PI / 2 }}
        shadowGroup={[shadowId1, shadowId2]}
        collideAgainstImpulse={{ x: -5, y: 0, z: 0 }}
      />
      <Ground
        options={{ width: 6, height: 6 }}
        position={{ x: -3.5, y: 1, z: 0 }}
        rotation={{ x: 0, y: 0, z: -Math.PI / 2 }}
        shadowGroup={[shadowId1, shadowId2]}
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
        shadowEnabled={false}
        collideAgainstImpulse={{ x: 0, y: 5, z: 0 }}
      />
      <Ground
        options={{ width: 6, height: 6 }}
        position={{ x: 3.5, y: 1, z: 0 }}
        rotation={{ x: 0, y: 0, z: Math.PI / 2 }}
        shadowGroup={[shadowId1, shadowId2]}
        collideAgainstImpulse={{ x: -5, y: 0, z: 0 }}
      />
      <Ground
        options={{ width: 6, height: 6 }}
        position={{ x: -3.5, y: 1, z: 0 }}
        rotation={{ x: 0, y: 0, z: -Math.PI / 2 }}
        shadowGroup={[shadowId1, shadowId2]}
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
</Canvas>`}},children:(r,K)=>{V(r,{style:"width: 100%;",children:(k,N)=>{H(k,{children:(S,Q)=>{R(S,{children:(_,X)=>{var p=W(),h=I(p);D(h,{alpha:Math.PI/2,beta:Math.PI/2,radius:10});var c=e(h,2);q(c,{direction:new o(0,1,0),intensity:.7});var y=e(c,2);v(y,{angle:Math.PI/2,exponent:2,position:new o(3,5,0),intensity:.2,shadowId:i});var u=e(y,2);v(u,{angle:Math.PI/2,exponent:2,position:new o(-3,5,0),intensity:.2,shadowId:s});var m=e(u,2);l(m,{options:{width:6,height:6},position:{x:0,y:-2,z:0},shadowEnabled:!1,collideAgainstImpulse:{x:0,y:5,z:0}});var w=e(m,2);l(w,{options:{width:6,height:6},position:{x:3.5,y:1,z:0},rotation:{x:0,y:0,z:Math.PI/2},shadowGroup:[i,s],collideAgainstImpulse:{x:-5,y:0,z:0}});var g=e(w,2);l(g,{options:{width:6,height:6},position:{x:-3.5,y:1,z:0},rotation:{x:0,y:0,z:-Math.PI/2},shadowGroup:[i,s],collideAgainstImpulse:{x:5,y:0,z:0}});var z=e(g,2);B(z,{options:{diameter:2,segments:32},position:new o(0,3,0),impulse:{x:5,y:0,z:0},shadowGroup:[i,s]}),b(_,p)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),b(a,t),L()}j.__docgen={version:3,name:"Introduce.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const J=E(j,O),de=["Docs"],re=J.Docs;export{re as Docs,de as __namedExportsOrder,O as default};
