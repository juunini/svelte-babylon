import{p as f,s as v,r as w,i as I,a as A,t as z}from"./props-CDwtXEPn.js";import{p as M,f as E,g as r,a as L,s as o,d as l}from"./index-client-0IVJ1HVs.js";import{D as k,a as O,G as C,J as G,c as R,C as q,E as D,S as N,V as n,H,d as B}from"./create-runtime-stories-Dd8eu6kK.js";import{G as p,S as J}from"./Sphere-DF57a6bb.js";import"./iframe-8l14vsvk.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./_commonjsHelpers-Cpj98o6Y.js";function F(i,t){let e=f(t,"camera",15),s=w(t,["$$slots","$$events","$$legacy","camera"]);O(i,v({CameraClass:k},()=>s,{get camera(){return e()},set camera(a){e(a)}}))}k.__docgen={data:[{name:"camera",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"ArcRotateCamera"},static:!1,readonly:!1,defaultValue:"..."},{name:"alpha",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1},{name:"beta",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1},{name:"radius",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1},{name:"target",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"object",text:"Vector3"},static:!1,readonly:!1},{name:"attachParentCanvas",visibility:"public",description:"if you do not want to use parent canvas to control, set `false` (default: true)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1},{name:"scene",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"Scene"},static:!1,readonly:!1},{name:"position",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"Vector3"},static:!1,readonly:!1},{name:"setActiveOnSceneIfNoneActive",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1}],name:"ArcRotateCamera.svelte"};function K(i,t){let e=f(t,"light",15),s=w(t,["$$slots","$$events","$$legacy","light"]);G(i,v({LightClass:C},()=>s,{get light(){return e()},set light(a){e(a)}}))}C.__docgen={data:[{name:"light",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"SpotLight"},static:!1,readonly:!1,defaultValue:"..."},{name:"angle",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1},{name:"exponent",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1},{name:"intensity",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1},{name:"scene",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"Scene"},static:!1,readonly:!1},{name:"direction",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"Vector3"},static:!1,readonly:!1},{name:"position",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"Vector3"},static:!1,readonly:!1},{name:"shadowEnabled",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1}],name:"SpotLight.svelte"};const Q={title:"tips/Physics",tags:["autodocs"]},{Story:T}=B();function c(i){return t=>{var s;const e=t.collidedAgainst.transformNode;(s=e.physicsBody)==null||s.applyImpulse(i,e.absolutePosition)}}var U=z("<!> <!> <!> <!> <!> <!> <!>",1);function x(i,t){M(t,!1),I(),T(i,{name:"Docs",parameters:{docs:{source:{language:"html",code:`<script lang="ts">
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
</Canvas>`}},children:(e,s)=>{q(e,{style:"width: 100%;",children:(a,X)=>{D(a,{children:(_,Y)=>{N(_,{physics:!0,children:(P,Z)=>{var d=U(),y=E(d);F(y,{alpha:Math.PI/2,beta:Math.PI/2,radius:10,target:new n(0,0,0)});var h=o(y,2);H(h,{direction:new n(0,1,0),intensity:.7});var u=o(h,2);K(u,{angle:Math.PI/2,exponent:2,position:new n(0,6,0),intensity:.7});var m=o(u,2),S=l(()=>c(new n(0,5,0)));p(m,{options:{width:6,height:6},position:{x:0,y:-2,z:0},physics:!0,physicsOptions:{mass:0,restitution:.5},get onCollision(){return r(S)},shadowEnabled:!1});var b=o(m,2),j=l(()=>c(new n(-5,0,0)));p(b,{options:{width:6,height:6},position:{x:3.5,y:1,z:0},rotation:{x:0,y:0,z:Math.PI/2},physics:!0,physicsOptions:{mass:0,restitution:.5},get onCollision(){return r(j)}});var g=o(b,2),$=l(()=>c(new n(5,0,0)));p(g,{options:{width:6,height:6},position:{x:-3.5,y:1,z:0},rotation:{x:0,y:0,z:-Math.PI/2},physics:!0,physicsOptions:{mass:0,restitution:.5},get onCollision(){return r($)}});var V=o(g,2);J(V,{options:{diameter:2,segments:32},position:new n(0,3,0),physics:!0,physicsOptions:{mass:1,restitution:.5},impulse:{x:5,y:0,z:0}}),A(P,d)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),L()}x.__docgen={version:3,name:"Physics.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const W=R(x,Q),pe=["Docs"],ce=W.Docs;export{ce as Docs,pe as __namedExportsOrder,Q as default};
