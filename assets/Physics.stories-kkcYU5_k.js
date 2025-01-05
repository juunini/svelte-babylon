import{p as P,s as A,r as j,i as $,a as S,t as V}from"./props-CDwtXEPn.js";import{p as z,f as I,g as r,a as M,s as o,d as l}from"./index-client-0IVJ1HVs.js";import{A as g,a as O,c as E,C as G,E as R,S as N,V as s,H as D,d as H}from"./create-runtime-stories-D2yFG5at.js";import{G as p,S as q}from"./Sphere-CQ59PPQb.js";import"./iframe-2opK77xr.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./_commonjsHelpers-Cpj98o6Y.js";function L(i,t){let e=P(t,"camera",15),n=j(t,["$$slots","$$events","$$legacy","camera"]);O(i,A({CameraClass:g},()=>n,{get camera(){return e()},set camera(a){e(a)}}))}g.__docgen={data:[{name:"camera",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"ArcRotateCamera"},static:!1,readonly:!1,defaultValue:"..."},{name:"alpha",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1},{name:"beta",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1},{name:"radius",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1},{name:"target",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"object",text:"Vector3"},static:!1,readonly:!1},{name:"attachParentCanvas",visibility:"public",description:"if you do not want to use parent canvas to control, set `false` (default: true)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1},{name:"scene",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"Scene"},static:!1,readonly:!1},{name:"position",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"Vector3"},static:!1,readonly:!1},{name:"setActiveOnSceneIfNoneActive",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1}],name:"ArcRotateCamera.svelte"};const B={title:"tips/Physics",tags:["autodocs"]},{Story:F}=H();function c(i){return t=>{var n;const e=t.collidedAgainst.transformNode;(n=e.physicsBody)==null||n.applyImpulse(i,e.absolutePosition)}}var J=V("<!> <!> <!> <!> <!> <!>",1);function v(i,t){z(t,!1),$(),F(i,{name:"Docs",parameters:{docs:{source:{language:"html",code:`<script lang="ts">
  import { Vector3 } from '@babylonjs/core/Maths/math.vector';
  import type { IPhysicsCollisionEvent } from '@babylonjs/core/Physics/v2/IPhysicsEnginePlugin';

  import Canvas from '@juunini/svelte-babylonjs/Canvas.svelte';
  import Engine from '@juunini/svelte-babylonjs/engine/Engine.svelte';
  import Scene from '@juunini/svelte-babylonjs/Scene.svelte';
  import ArcRotateCamera from '@juunini/svelte-babylonjs/camera/ArcRotateCamera.svelte';
  import Ground from '@juunini/svelte-babylonjs/mesh/Ground.svelte';
  import HemisphericLight from '@juunini/svelte-babylonjs/light/HemisphericLight.svelte';
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
        <Ground
          options={{ width: 6, height: 6 }}
          position={{ x: 0, y: -2, z: 0 }}
          physics
          physicsOptions={{ mass: 0, restitution: 0.5 }}
          onCollision={bounceCollidedAgainst(new Vector3(0, 5, 0))}
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
      <Ground
        options={{ width: 6, height: 6 }}
        position={{ x: 0, y: -2, z: 0 }}
        physics
        physicsOptions={{ mass: 0, restitution: 0.5 }}
        onCollision={bounceCollidedAgainst(new Vector3(0, 5, 0))}
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
</Canvas>`}},children:(e,n)=>{G(e,{style:"width: 100%;",children:(a,Q)=>{R(a,{children:(f,T)=>{N(f,{physics:!0,children:(C,U)=>{var d=J(),y=I(d);L(y,{alpha:Math.PI/2,beta:Math.PI/2,radius:10,target:new s(0,0,0)});var h=o(y,2);D(h,{direction:new s(0,1,0),intensity:.7});var m=o(h,2),w=l(()=>c(new s(0,5,0)));p(m,{options:{width:6,height:6},position:{x:0,y:-2,z:0},physics:!0,physicsOptions:{mass:0,restitution:.5},get onCollision(){return r(w)}});var u=o(m,2),x=l(()=>c(new s(-5,0,0)));p(u,{options:{width:6,height:6},position:{x:3.5,y:1,z:0},rotation:{x:0,y:0,z:Math.PI/2},physics:!0,physicsOptions:{mass:0,restitution:.5},get onCollision(){return r(x)}});var b=o(u,2),_=l(()=>c(new s(5,0,0)));p(b,{options:{width:6,height:6},position:{x:-3.5,y:1,z:0},rotation:{x:0,y:0,z:-Math.PI/2},physics:!0,physicsOptions:{mass:0,restitution:.5},get onCollision(){return r(_)}});var k=o(b,2);q(k,{options:{diameter:2,segments:32},position:new s(0,3,0),physics:!0,physicsOptions:{mass:1,restitution:.5},impulse:{x:5,y:0,z:0}}),S(C,d)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),M()}v.__docgen={version:3,name:"Physics.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const K=E(v,B),oe=["Docs"],ae=K.Docs;export{ae as Docs,oe as __namedExportsOrder,B as default};
