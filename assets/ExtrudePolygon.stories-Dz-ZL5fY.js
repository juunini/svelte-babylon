import{p as X,s as B,r as G,i as Y,a as C,t as H}from"./props-CDwtXEPn.js";import{p as J,g as T,a as K,d as j,f as $,n as Q,s as I}from"./index-client-0IVJ1HVs.js";import{d as L,e as W,f as Z,g as ee,M as te,h as ne,i as se,j as oe,k as ie,F as ae,V as o,H as re,l as p,m as pe}from"./create-runtime-stories-L4uVnNlK.js";import"./iframe-ZhyaJ0jc.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./_commonjsHelpers-Cpj98o6Y.js";function D(i,n){let s=X(n,"mesh",15),c=G(n,["$$slots","$$events","$$legacy","mesh"]);W(i,B({createMeshFunction:L},()=>c,{get mesh(){return s()},set mesh(a){s(a)}}))}L.__docgen={data:[{name:"name",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"options",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"object",text:"{ backUVs?: Vector4 | undefined; depth?: number | undefined; faceColors?: Color4[] | undefined; faceUV?: Vector4[] | undefined; frontUVs?: Vector4 | undefined; ... 4 more ...; wrap?: boolean | undefined; }"},static:!1,readonly:!1},{name:"scene",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"Scene"},static:!1,readonly:!1},{name:"earcutInjection",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"children",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"mesh",visibility:"public",description:"if you want to use a mesh api, bind it",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"Mesh"},static:!1,readonly:!1,defaultValue:"..."},{name:"physics",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1},{name:"physicsShape",visibility:"public",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"number",value:0,text:"PhysicsShapeType.SPHERE"},{kind:"const",type:"number",value:1,text:"PhysicsShapeType.CAPSULE"},{kind:"const",type:"number",value:2,text:"PhysicsShapeType.CYLINDER"},{kind:"const",type:"number",value:3,text:"PhysicsShapeType.BOX"},{kind:"const",type:"number",value:4,text:"PhysicsShapeType.CONVEX_HULL"},{kind:"const",type:"number",value:5,text:"PhysicsShapeType.CONTAINER"},{kind:"const",type:"number",value:6,text:"PhysicsShapeType.MESH"},{kind:"const",type:"number",value:7,text:"PhysicsShapeType.HEIGHTFIELD"},{kind:"type",type:"object",text:"PhysicsShape"}],text:"PhysicsShapeType.SPHERE | PhysicsShapeType.CAPSULE | PhysicsShapeType.CYLINDER | PhysicsShapeType.BOX | PhysicsShapeType.CONVEX_HULL | PhysicsShapeType.CONTAINER | PhysicsShapeType.MESH | PhysicsShapeType.HEIGHTFIELD | PhysicsShape"},static:!1,readonly:!1},{name:"physicsOptions",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"PhysicsAggregateParameters"},static:!1,readonly:!1},{name:"position",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ x: number; y: number; z: number; }"},static:!1,readonly:!1},{name:"rotation",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ x: number; y: number; z: number; }"},static:!1,readonly:!1},{name:"scaling",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ x: number; y: number; z: number; }"},static:!1,readonly:!1}],name:"ExtrudePolygon.svelte"};const ce={title:"mesh/ExtrudePolygon",tags:["autodocs"],component:D},{Story:ye}=ee();var le=H("<!> <!> <!>",1),de=H(`<!> <h2>Caution!</h2> <p>The <code>earcutInjection</code> prop is required for the 'https://www.npmjs.com/package/earcut'
      library to work.</p>`,1);function O(i,n){J(n,!1),Y();var s=j(()=>({options:{backUVs:{x:0,y:0,z:1,w:1},faceColors:[{r:1,g:1,b:1,a:1}],faceUV:[{x:0,y:0,z:1,w:1}],frontUVs:{x:0,y:0,z:1,w:1},shape:[{x:4,y:0,z:-4},{x:2,y:0,z:0},{x:5,y:0,z:2},{x:1,y:0,z:2},{x:-5,y:0,z:5},{x:-3,y:0,z:1},{x:-4,y:0,z:-4},{x:-2,y:0,z:-3},{x:2,y:0,z:-3}],holes:[[{x:1,y:0,z:-1},{x:1.5,y:0,z:0},{x:1.4,y:0,z:1},{x:.5,y:0,z:1.5}],[{x:0,y:0,z:-2},{x:.5,y:0,z:-1},{x:.4,y:0,z:0},{x:-1.5,y:0,z:.5}]],depth:2,sideOrientation:te.DOUBLESIDE,updatable:void 0,wrap:void 0},earcutInjection:ne,position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},scaling:{x:1,y:1,z:1}}));ye(i,{name:"Docs",get args(){return T(s)},children:(a,e=Q)=>{var y=de(),N=$(y);se(N,{style:"width: 100%;",children:(M,he)=>{oe(M,{children:(R,fe)=>{ie(R,{children:(F,me)=>{var l=le(),d=$(l);ae(d,{position:new o(0,5,-10)});var u=I(d,2);re(u,{direction:new o(0,1,0),intensity:.7});var A=I(u,2),q=j(()=>{var h,f,m,b,x,k,w,V,g,v,U,z,P,S,E,_;return{...e().options,shape:(h=e().options)==null?void 0:h.shape.map(t=>new o(t.x,t.y,t.z)),holes:(f=e().options)==null?void 0:f.holes.map(t=>t.map(r=>new o(r.x,r.y,r.z))),faceUV:(b=(m=e().options)==null?void 0:m.faceUV)==null?void 0:b.map(t=>new p(t.x,t.y,t.z,t.w)),frontUVs:(x=e().options)!=null&&x.frontUVs?new p((k=e().options)==null?void 0:k.frontUVs.x,(w=e().options)==null?void 0:w.frontUVs.y,(V=e().options)==null?void 0:V.frontUVs.z,(g=e().options)==null?void 0:g.frontUVs.w):void 0,backUVs:(v=e().options)!=null&&v.backUVs?new p((U=e().options)==null?void 0:U.backUVs.x,(z=e().options)==null?void 0:z.backUVs.y,(P=e().options)==null?void 0:P.backUVs.z,(S=e().options)==null?void 0:S.backUVs.w):void 0,faceColors:(_=(E=e().options)==null?void 0:E.faceColors)==null?void 0:_.map(t=>new pe(t.r,t.g,t.b,t.a))}});D(A,{get options(){return T(q)},get earcutInjection(){return e().earcutInjection},get position(){return e().position},get rotation(){return e().rotation},get scaling(){return e().scaling}}),C(F,l)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),C(a,y)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Canvas style="width: 100%;">
  <Engine>
    <Scene>
      <FreeCamera position={new Vector3(0, 5, -10)} />
      <HemisphericLight direction={new Vector3(0, 1, 0)} intensity={0.7} />
      <ExtrudePolygon
        options={{
          ...args.options,
          shape: args.options?.shape.map((v) => new Vector3(v.x, v.y, v.z)),
          holes: args.options?.holes.map((hole) => hole.map((v) => new Vector3(v.x, v.y, v.z))),
          faceUV: args.options?.faceUV?.map((v) => new Vector4(v.x, v.y, v.z, v.w)),
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
            : undefined,
          faceColors: args.options?.faceColors?.map((v) => new Color4(v.r, v.g, v.b, v.a))
        }}
        earcutInjection={args.earcutInjection}
        position={args.position}
        rotation={args.rotation}
        scaling={args.scaling}
      />
    </Scene>
  </Engine>
</Canvas>
<h2>Caution!</h2>
<p>
  The <code>earcutInjection</code> prop is required for the 'https://www.npmjs.com/package/earcut'
  library to work.
</p>`}}}),K()}O.__docgen={version:3,name:"ExtrudePolygon.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const ue=Z(O,ce),ze=["Docs"],Pe=ue.Docs;export{Pe as Docs,ze as __namedExportsOrder,ce as default};
