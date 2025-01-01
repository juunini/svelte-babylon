import{p as G,s as J,r as K,i as N,a as E,t as M}from"./props-CDwtXEPn.js";import{p as Q,g as P,a as W,d as I,f as S,n as X,s as D}from"./index-client-0IVJ1HVs.js";import{d as q,e as Y,f as Z,g as ee,M as te,h as ne,i as oe,j as se,k as ie,F as ae,V as s,H as re,l as p,m as pe}from"./create-runtime-stories-ChL5sEf5.js";import"./iframe-BnamMGfJ.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./_commonjsHelpers-Cpj98o6Y.js";function F(i,n){let o=G(n,"mesh",15),c=K(n,["$$slots","$$events","$$legacy","mesh"]);Y(i,J({createMeshFunction:q},()=>c,{get mesh(){return o()},set mesh(a){o(a)}}))}q.__docgen={data:[{name:"name",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"options",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"object",text:"{ backUVs?: Vector4 | undefined; depth?: number | undefined; faceColors?: Color4[] | undefined; faceUV?: Vector4[] | undefined; frontUVs?: Vector4 | undefined; ... 4 more ...; wrap?: boolean | undefined; }"},static:!1,readonly:!1},{name:"scene",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"Scene"},static:!1,readonly:!1},{name:"earcutInjection",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"children",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"mesh",visibility:"public",description:"if you want to use a mesh api, bind it",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"Mesh"},static:!1,readonly:!1,defaultValue:"..."},{name:"position",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ x: number; y: number; z: number; }"},static:!1,readonly:!1},{name:"rotation",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ x: number; y: number; z: number; }"},static:!1,readonly:!1},{name:"scaling",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ x: number; y: number; z: number; }"},static:!1,readonly:!1}],name:"ExtrudePolygon.svelte"};const ce={title:"mesh/ExtrudePolygon",tags:["autodocs"],component:F},{Story:le}=ee();var de=M("<!> <!> <!>",1),ye=M(`<!> <h2>Caution!</h2> <p>The <code>earcutInjection</code> prop is required for the 'https://www.npmjs.com/package/earcut'
      library to work.</p>`,1);function H(i,n){Q(n,!1),N();var o=I(()=>({options:{backUVs:{x:0,y:0,z:1,w:1},faceColors:[{r:1,g:1,b:1,a:1}],faceUV:[{x:0,y:0,z:1,w:1}],frontUVs:{x:0,y:0,z:1,w:1},shape:[{x:4,y:0,z:-4},{x:2,y:0,z:0},{x:5,y:0,z:2},{x:1,y:0,z:2},{x:-5,y:0,z:5},{x:-3,y:0,z:1},{x:-4,y:0,z:-4},{x:-2,y:0,z:-3},{x:2,y:0,z:-3}],holes:[[{x:1,y:0,z:-1},{x:1.5,y:0,z:0},{x:1.4,y:0,z:1},{x:.5,y:0,z:1.5}],[{x:0,y:0,z:-2},{x:.5,y:0,z:-1},{x:.4,y:0,z:0},{x:-1.5,y:0,z:.5}]],depth:2,sideOrientation:te.DOUBLESIDE,updatable:void 0,wrap:void 0},earcutInjection:ne,position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},scaling:{x:1,y:1,z:1}}));le(i,{name:"Docs",get args(){return P(o)},children:(a,e=X)=>{var l=ye(),L=S(l);oe(L,{style:"width: 100%;",children:(O,fe)=>{se(O,{children:(T,me)=>{ie(T,{children:(B,be)=>{var d=de(),y=S(d);ae(y,{position:new s(0,5,-10)});var u=D(y,2);re(u,{direction:new s(0,1,0),intensity:.7});var R=D(u,2),A=I(()=>{var f,m,b,x,h,w,V,k,g,v,z,U,_,C,$,j;return{...e().options,shape:(f=e().options)==null?void 0:f.shape.map(t=>new s(t.x,t.y,t.z)),holes:(m=e().options)==null?void 0:m.holes.map(t=>t.map(r=>new s(r.x,r.y,r.z))),faceUV:(x=(b=e().options)==null?void 0:b.faceUV)==null?void 0:x.map(t=>new p(t.x,t.y,t.z,t.w)),frontUVs:(h=e().options)!=null&&h.frontUVs?new p((w=e().options)==null?void 0:w.frontUVs.x,(V=e().options)==null?void 0:V.frontUVs.y,(k=e().options)==null?void 0:k.frontUVs.z,(g=e().options)==null?void 0:g.frontUVs.w):void 0,backUVs:(v=e().options)!=null&&v.backUVs?new p((z=e().options)==null?void 0:z.backUVs.x,(U=e().options)==null?void 0:U.backUVs.y,(_=e().options)==null?void 0:_.backUVs.z,(C=e().options)==null?void 0:C.backUVs.w):void 0,faceColors:(j=($=e().options)==null?void 0:$.faceColors)==null?void 0:j.map(t=>new pe(t.r,t.g,t.b,t.a))}});F(R,{get options(){return P(A)},get earcutInjection(){return e().earcutInjection},get position(){return e().position},get rotation(){return e().rotation},get scaling(){return e().scaling}}),E(B,d)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),E(a,l)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Canvas style="width: 100%;">
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
</p>`}}}),W()}H.__docgen={version:3,name:"ExtrudePolygon.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const ue=Z(H,ce),Ue=["Docs"],_e=ue.Docs;export{_e as Docs,Ue as __namedExportsOrder,ce as default};
