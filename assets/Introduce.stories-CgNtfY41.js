import{i as E,a as b,t as P}from"./props-CDwtXEPn.js";import{p as $,s as o,f as C,g as d,a as L,d as h}from"./index-client-0IVJ1HVs.js";import{c as O,C as D,E as H,S as N,V as n,H as R,d as k}from"./create-runtime-stories-CMkdhrdB.js";import{A as q,S as f,G as p,a as B}from"./SpotLight-BMOF3Bl1.js";import"./iframe-p99vTRwq.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./_commonjsHelpers-Cpj98o6Y.js";const T={title:"Introduce",tags:["autodocs"]},{Story:U}=k();function l(a){return r=>{var t;const s=r.collidedAgainst.transformNode;(t=s.physicsBody)==null||t.applyImpulse(a,s.absolutePosition)}}const e="shadow1",i="shadow2";var W=P("<!> <!> <!> <!> <!> <!> <!> <!>",1),F=P(`<h1>@juunini/svelte-babylonjs</h1> <h2>Caution</h2> <blockquote><p>❗ This is WIP and not ready for production use.</p></blockquote> <h2>Introduction</h2> <p>Easily create 3D scenes with Babylon.js in Svelte.</p> <!> <h2>Usage</h2> <p>See under code or click category</p> <h2>Installation</h2> <code><pre>
npm install @juunini/svelte-babylonjs
yarn add @juunini/svelte-babylonjs
pnpm add @juunini/svelte-babylonjs
bun add @juunini/svelte-babylonjs
  </pre></code> <h2>License</h2> MIT`,1);function j(a,r){$(r,!1),E();var s=F(),t=o(C(s),10);U(t,{name:"Docs",parameters:{docs:{canvas:{sourceState:"shown"},source:{language:"html",code:`<script lang="ts">
  import { Vector3 } from '@babylonjs/core/Maths/math.vector';
  import type { IPhysicsCollisionEvent } from '@babylonjs/core/Physics/v2/IPhysicsEnginePlugin';

  import Canvas from '@juunini/svelte-babylonjs/Canvas.svelte';
  import Engine from '@juunini/svelte-babylonjs/engine/Engine.svelte';
  import Scene from '@juunini/svelte-babylonjs/Scene.svelte';
  import ArcRotateCamera from '@juunini/svelte-babylonjs/camera/ArcRotateCamera.svelte';
  import Ground from '@juunini/svelte-babylonjs/mesh/Ground.svelte';
  import HemisphericLight from '@juunini/svelte-babylonjs/light/HemisphericLight.svelte';
  import SpotLight from '@juunini/svelte-babylonjs/light/SpotLight.svelte';
  import Sphere from '@juunini/svelte-babylonjs/mesh/Sphere.svelte';

  function bounceCollidedAgainst(vector: Vector3) {
    return (eventData: IPhysicsCollisionEvent) => {
      const againstNode = eventData.collidedAgainst.transformNode;
      againstNode.physicsBody?.applyImpulse(vector, againstNode.absolutePosition);
    };
  }

  const shadowId1 = 'shadow1';
  const shadowId2 = 'shadow2';
<\/script>

<Canvas style="width: 100%;">
  <Engine>
    <Scene physics>
      <ArcRotateCamera
        alpha={Math.PI / 2}
        beta={Math.PI / 2}
        radius={10}
        target={new Vector3(0, 0, 0)}
      />
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
        physics
        physicsOptions={{ mass: 0, restitution: 0.5 }}
        onCollision={bounceCollidedAgainst(new Vector3(0, 5, 0))}
        shadowEnabled={false}
      />
      <Ground
        options={{ width: 6, height: 6 }}
        position={{ x: 3.5, y: 1, z: 0 }}
        rotation={{ x: 0, y: 0, z: Math.PI / 2 }}
        physics
        physicsOptions={{ mass: 0, restitution: 0.5 }}
        onCollision={bounceCollidedAgainst(new Vector3(-5, 0, 0))}
        shadowGroup={[shadowId1, shadowId2]}
      />
      <Ground
        options={{ width: 6, height: 6 }}
        position={{ x: -3.5, y: 1, z: 0 }}
        rotation={{ x: 0, y: 0, z: -Math.PI / 2 }}
        physics
        physicsOptions={{ mass: 0, restitution: 0.5 }}
        onCollision={bounceCollidedAgainst(new Vector3(5, 0, 0))}
        shadowGroup={[shadowId1, shadowId2]}
      />
      <Sphere
        options={{ diameter: 2, segments: 32 }}
        position={new Vector3(0, 3, 0)}
        physics
        physicsOptions={{ mass: 1, restitution: 0.5 }}
        impulse={{ x: 5, y: 0, z: 0 }}
        shadowGroup={[shadowId1, shadowId2]}
      />
    </Scene>
  </Engine>
</Canvas>`}},__svelteCsf:{rawCode:`<Canvas style="width: 100%;">
  <Engine>
    <Scene physics>
      <ArcRotateCamera
        alpha={Math.PI / 2}
        beta={Math.PI / 2}
        radius={10}
        target={new Vector3(0, 0, 0)}
      />
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
        physics
        physicsOptions={{ mass: 0, restitution: 0.5 }}
        onCollision={bounceCollidedAgainst(new Vector3(0, 5, 0))}
        shadowEnabled={false}
      />
      <Ground
        options={{ width: 6, height: 6 }}
        position={{ x: 3.5, y: 1, z: 0 }}
        rotation={{ x: 0, y: 0, z: Math.PI / 2 }}
        physics
        physicsOptions={{ mass: 0, restitution: 0.5 }}
        onCollision={bounceCollidedAgainst(new Vector3(-5, 0, 0))}
        shadowGroup={[shadowId1, shadowId2]}
      />
      <Ground
        options={{ width: 6, height: 6 }}
        position={{ x: -3.5, y: 1, z: 0 }}
        rotation={{ x: 0, y: 0, z: -Math.PI / 2 }}
        physics
        physicsOptions={{ mass: 0, restitution: 0.5 }}
        onCollision={bounceCollidedAgainst(new Vector3(5, 0, 0))}
        shadowGroup={[shadowId1, shadowId2]}
      />
      <Sphere
        options={{ diameter: 2, segments: 32 }}
        position={new Vector3(0, 3, 0)}
        physics
        physicsOptions={{ mass: 1, restitution: 0.5 }}
        impulse={{ x: 5, y: 0, z: 0 }}
        shadowGroup={[shadowId1, shadowId2]}
      />
    </Scene>
  </Engine>
</Canvas>`}},children:(_,K)=>{D(_,{style:"width: 100%;",children:(x,Q)=>{H(x,{children:(S,X)=>{N(S,{physics:!0,children:(M,Y)=>{var c=W(),u=C(c);q(u,{alpha:Math.PI/2,beta:Math.PI/2,radius:10,target:new n(0,0,0)});var y=o(u,2);R(y,{direction:new n(0,1,0),intensity:.7});var m=o(y,2);f(m,{angle:Math.PI/2,exponent:2,position:new n(3,5,0),intensity:.2,shadowId:e});var w=o(m,2);f(w,{angle:Math.PI/2,exponent:2,position:new n(-3,5,0),intensity:.2,shadowId:i});var g=o(w,2),V=h(()=>l(new n(0,5,0)));p(g,{options:{width:6,height:6},position:{x:0,y:-2,z:0},physics:!0,physicsOptions:{mass:0,restitution:.5},get onCollision(){return d(V)},shadowEnabled:!1});var v=o(g,2),G=h(()=>l(new n(-5,0,0)));p(v,{options:{width:6,height:6},position:{x:3.5,y:1,z:0},rotation:{x:0,y:0,z:Math.PI/2},physics:!0,physicsOptions:{mass:0,restitution:.5},get onCollision(){return d(G)},shadowGroup:[e,i]});var I=o(v,2),z=h(()=>l(new n(5,0,0)));p(I,{options:{width:6,height:6},position:{x:-3.5,y:1,z:0},rotation:{x:0,y:0,z:-Math.PI/2},physics:!0,physicsOptions:{mass:0,restitution:.5},get onCollision(){return d(z)},shadowGroup:[e,i]});var A=o(I,2);B(A,{options:{diameter:2,segments:32},position:new n(0,3,0),physics:!0,physicsOptions:{mass:1,restitution:.5},impulse:{x:5,y:0,z:0},shadowGroup:[e,i]}),b(M,c)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),b(a,s),L()}j.__docgen={version:3,name:"Introduce.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const J=O(j,T),ho=["Docs"],po=J.Docs;export{po as Docs,ho as __namedExportsOrder,T as default};
