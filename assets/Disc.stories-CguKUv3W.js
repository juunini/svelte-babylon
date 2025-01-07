import{p as O,s as $,r as M,i as H,a as L,t as j}from"./props-CDwtXEPn.js";import{p as A,a as N,f as R,s as D,g as F,n as G,d as X}from"./index-client-0IVJ1HVs.js";import{u as y,M as k,l as B,c as Y,d as q,C as J,E as K,S as Q,A as W,H as Z,V as ee,m as _}from"./create-runtime-stories-DQMLDbyL.js";import"./iframe-Cn89D-On.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./_commonjsHelpers-Cpj98o6Y.js";function T(s){const t=[],i=[],n=[],e=[],r=s.radius||.5,c=s.tessellation||64,p=s.arc&&(s.arc<=0||s.arc>1)?1:s.arc||1,x=s.sideOrientation===0?0:s.sideOrientation||y.DEFAULTSIDE;t.push(0,0,0),e.push(.5,.5);const u=Math.PI*2*p,w=p===1?u/c:u/(c-1);let l=0;for(let a=0;a<c;a++){const f=Math.cos(l),d=Math.sin(l),h=(f+1)/2,m=(1-d)/2;t.push(r*f,r*d,0),e.push(h,m),l+=w}p===1&&(t.push(t[3],t[4],t[5]),e.push(e[2],e[3]));const b=t.length/3;for(let a=1;a<b-1;a++)i.push(a+1,0,a);y.ComputeNormals(t,i,n),y._ComputeSides(x,t,i,n,e,s.frontUVs,s.backUVs);const o=new y;return o.indices=i,o.positions=t,o.normals=n,o.uvs=e,o}function z(s,t={},i=null){const n=new k(s,i);return t.sideOrientation=k._GetDefaultSideOrientation(t.sideOrientation),n._originalBuilderSideOrientation=t.sideOrientation,T(t).applyToMesh(n,t.updatable),n}y.CreateDisc=T;k.CreateDisc=(s,t,i,n=null,e,r)=>z(s,{radius:t,tessellation:i,sideOrientation:r,updatable:e},n);function v(s,t){let i=O(t,"mesh",15),n=M(t,["$$slots","$$events","$$legacy","mesh"]);B(s,$({createMeshFunction:z},()=>n,{get mesh(){return i()},set mesh(e){i(e)}}))}v.__docgen={data:[{name:"options",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ arc?: number | undefined; backUVs?: Vector4 | undefined; frontUVs?: Vector4 | undefined; radius?: number | undefined; sideOrientation?: number | undefined; tessellation?: number | undefined; updatable?: boolean | undefined; }"},static:!1,readonly:!1},{name:"scene",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"Scene"},static:!1,readonly:!1},{name:"children",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"mesh",visibility:"public",description:"if you want to use a mesh api, bind it",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"Mesh"},static:!1,readonly:!1,defaultValue:"..."},{name:"physics",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1},{name:"physicsShape",visibility:"public",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"number",value:0,text:"PhysicsShapeType.SPHERE"},{kind:"const",type:"number",value:1,text:"PhysicsShapeType.CAPSULE"},{kind:"const",type:"number",value:2,text:"PhysicsShapeType.CYLINDER"},{kind:"const",type:"number",value:3,text:"PhysicsShapeType.BOX"},{kind:"const",type:"number",value:4,text:"PhysicsShapeType.CONVEX_HULL"},{kind:"const",type:"number",value:5,text:"PhysicsShapeType.CONTAINER"},{kind:"const",type:"number",value:6,text:"PhysicsShapeType.MESH"},{kind:"const",type:"number",value:7,text:"PhysicsShapeType.HEIGHTFIELD"},{kind:"type",type:"object",text:"PhysicsShape"}],text:"PhysicsShapeType.SPHERE | PhysicsShapeType.CAPSULE | PhysicsShapeType.CYLINDER | PhysicsShapeType.BOX | PhysicsShapeType.CONVEX_HULL | PhysicsShapeType.CONTAINER | PhysicsShapeType.MESH | PhysicsShapeType.HEIGHTFIELD | PhysicsShape"},static:!1,readonly:!1},{name:"physicsOptions",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"PhysicsAggregateParameters"},static:!1,readonly:!1},{name:"position",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ x: number; y: number; z: number; }"},static:!1,readonly:!1},{name:"rotation",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ x: number; y: number; z: number; }"},static:!1,readonly:!1},{name:"scaling",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ x: number; y: number; z: number; }"},static:!1,readonly:!1},{name:"force",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ x: number; y: number; z: number; }"},static:!1,readonly:!1},{name:"impulse",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ x: number; y: number; z: number; }"},static:!1,readonly:!1},{name:"collideAgainstForce",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ x: number; y: number; z: number; }"},static:!1,readonly:!1},{name:"collideAgainstImpulse",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ x: number; y: number; z: number; }"},static:!1,readonly:!1},{name:"receiveShadows",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1},{name:"shadowEnabled",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1},{name:"shadowGroup",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"string[]"},static:!1,readonly:!1},{name:"onCollision",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"(eventData: IPhysicsCollisionEvent, eventState: EventState) => void"},static:!1,readonly:!1},{name:"onCollisionOnce",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"(eventData: IPhysicsCollisionEvent, eventState: EventState) => void"},static:!1,readonly:!1}],name:"Disc.svelte"};const te={title:"mesh/Disc",tags:["autodocs"],component:v},{Story:se}=q();var ne=j("<!> <!> <!>",1);function I(s,t){A(t,!1),H(),se(s,{name:"Docs",args:{options:{arc:void 0,backUVs:{x:0,y:0,z:1,w:1},frontUVs:{x:0,y:0,z:1,w:1},radius:void 0,sideOrientation:void 0,tessellation:void 0,updatable:void 0},position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},scaling:{x:1,y:1,z:1}},parameters:{docs:{canvas:{sourceState:"shown"},source:{code:`<Canvas style="width: 100%;">
  <Engine>
    <Scene physics={false}>
      <ArcRotateCamera alpha={Math.PI / 2} beta={Math.PI / 2} radius={10} />
      <HemisphericLight direction={new Vector3(0, 1, 0)} intensity={0.7} />
      <Disc
        options={{ backUVs: { x: 0, y: 0, z: 1, w: 1 }, frontUVs: { x: 0, y: 0, z: 1, w: 1 } }}
        position={{ x: 0, y: 0, z: 0 }}
        rotation={{ x: 0, y: 0, z: 0 }}
        scaling={{ x: 1, y: 1, z: 1 }}
      />
    </Scene>
  </Engine>
</Canvas>`}},__svelteCsf:{rawCode:`<Canvas style="width: 100%;">
  <Engine>
    <Scene physics={false}>
      <ArcRotateCamera alpha={Math.PI / 2} beta={Math.PI / 2} radius={10} />
      <HemisphericLight direction={new Vector3(0, 1, 0)} intensity={0.7} />
      <Disc
        options={{
          ...args.options,
          frontUVs: args.options?.frontUVs
            ? new Vector4(
                args.options?.frontUVs.x,
                args.options?.frontUVs.y,
                args.options?.frontUVs.z,
                args.options?.frontUVs.w
              )
            : undefined,
          backUVs: args.options?.backUVs
            ? new Vector4(
                args.options?.backUVs.x,
                args.options?.backUVs.y,
                args.options?.backUVs.z,
                args.options?.backUVs.w
              )
            : undefined
        }}
        position={args.position}
        rotation={args.rotation}
        scaling={args.scaling}
      />
    </Scene>
  </Engine>
</Canvas>`}},children:(n,e=G)=>{J(n,{style:"width: 100%;",children:(r,c)=>{K(r,{children:(p,x)=>{Q(p,{physics:!1,children:(u,w)=>{var l=ne(),b=R(l);W(b,{alpha:Math.PI/2,beta:Math.PI/2,radius:10});var o=D(b,2);Z(o,{direction:new ee(0,1,0),intensity:.7});var a=D(o,2),f=X(()=>{var d,h,m,S,V,g,U,P,E,C;return{...e().options,frontUVs:(d=e().options)!=null&&d.frontUVs?new _((h=e().options)==null?void 0:h.frontUVs.x,(m=e().options)==null?void 0:m.frontUVs.y,(S=e().options)==null?void 0:S.frontUVs.z,(V=e().options)==null?void 0:V.frontUVs.w):void 0,backUVs:(g=e().options)!=null&&g.backUVs?new _((U=e().options)==null?void 0:U.backUVs.x,(P=e().options)==null?void 0:P.backUVs.y,(E=e().options)==null?void 0:E.backUVs.z,(C=e().options)==null?void 0:C.backUVs.w):void 0}});v(a,{get options(){return F(f)},get position(){return e().position},get rotation(){return e().rotation},get scaling(){return e().scaling}}),L(u,l)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),N()}I.__docgen={version:3,name:"Disc.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const ie=Y(I,te),ue=["Docs"],be=ie.Docs;export{be as Docs,ue as __namedExportsOrder,te as default};
