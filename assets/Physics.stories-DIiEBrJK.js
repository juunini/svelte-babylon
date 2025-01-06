import{i as j,a as z,t as A}from"./props-CDwtXEPn.js";import{p as G,f as $,g as p,a as E,s as t,d as h}from"./index-client-0IVJ1HVs.js";import{c as O,C as L,E as D,S as H,V as s,H as N,d as R}from"./create-runtime-stories-CMkdhrdB.js";import{A as B,S as C,G as d,a as k}from"./SpotLight-BMOF3Bl1.js";import"./iframe-p99vTRwq.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./_commonjsHelpers-Cpj98o6Y.js";const q={title:"tips/Physics",tags:["autodocs"]},{Story:F}=R();function l(i){return a=>{var r;const n=a.collidedAgainst.transformNode;(r=n.physicsBody)==null||r.applyImpulse(i,n.absolutePosition)}}const o="shadow1",e="shadow2";var J=A("<!> <!> <!> <!> <!> <!> <!> <!>",1);function I(i,a){G(a,!1),j(),F(i,{name:"Docs",parameters:{docs:{canvas:{sourceState:"shown"},source:{language:"html",code:`<script lang="ts">
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
          position={new Vector3(0, 6, 0)}
          intensity={0.7}
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
        />
        <Ground
          options={{ width: 6, height: 6 }}
          position={{ x: -3.5, y: 1, z: 0 }}
          rotation={{ x: 0, y: 0, z: -Math.PI / 2 }}
          physics
          physicsOptions={{ mass: 0, restitution: 0.5 }}
          onCollision={bounceCollidedAgainst(new Vector3(5, 0, 0))}
        />
        <Sphere
          options={{ diameter: 2, segments: 32 }}
          position={new Vector3(0, 3, 0)}
          physics
          physicsOptions={{ mass: 1, restitution: 0.5 }}
          impulse={{ x: 5, y: 0, z: 0 }}
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
</Canvas>`}},children:(n,r)=>{L(n,{style:"width: 100%;",children:(f,Q)=>{D(f,{children:(P,T)=>{H(P,{physics:!0,children:(_,U)=>{var c=J(),u=$(c);B(u,{alpha:Math.PI/2,beta:Math.PI/2,radius:10,target:new s(0,0,0)});var m=t(u,2);N(m,{direction:new s(0,1,0),intensity:.7});var y=t(m,2);C(y,{angle:Math.PI/2,exponent:2,position:new s(3,5,0),intensity:.2,shadowId:o});var g=t(y,2);C(g,{angle:Math.PI/2,exponent:2,position:new s(-3,5,0),intensity:.2,shadowId:e});var w=t(g,2),x=h(()=>l(new s(0,5,0)));d(w,{options:{width:6,height:6},position:{x:0,y:-2,z:0},physics:!0,physicsOptions:{mass:0,restitution:.5},get onCollision(){return p(x)},shadowEnabled:!1});var v=t(w,2),S=h(()=>l(new s(-5,0,0)));d(v,{options:{width:6,height:6},position:{x:3.5,y:1,z:0},rotation:{x:0,y:0,z:Math.PI/2},physics:!0,physicsOptions:{mass:0,restitution:.5},get onCollision(){return p(S)},shadowGroup:[o,e]});var b=t(v,2),M=h(()=>l(new s(5,0,0)));d(b,{options:{width:6,height:6},position:{x:-3.5,y:1,z:0},rotation:{x:0,y:0,z:-Math.PI/2},physics:!0,physicsOptions:{mass:0,restitution:.5},get onCollision(){return p(M)},shadowGroup:[o,e]});var V=t(b,2);k(V,{options:{diameter:2,segments:32},position:new s(0,3,0),physics:!0,physicsOptions:{mass:1,restitution:.5},impulse:{x:5,y:0,z:0},shadowGroup:[o,e]}),z(_,c)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),E()}I.__docgen={version:3,name:"Physics.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const K=O(I,q),is=["Docs"],as=K.Docs;export{as as Docs,is as __namedExportsOrder,q as default};
