import{p as F,s as P,r as H,i as L,a as I,t as N}from"./props-CDwtXEPn.js";import{p as T,a as q,f as A,g as B,n as G,s as z,d as R}from"./index-client-0IVJ1HVs.js";import{t as u,M as h,e as J,f as K,g as Q,i as W,j as X,k as Y,F as Z,V as S,H as ee,l as O}from"./create-runtime-stories-ChL5sEf5.js";import"./iframe-BnamMGfJ.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./_commonjsHelpers-Cpj98o6Y.js";function M(n){const t=[],i=[],s=[],e=[],r=n.radius||.5,d=n.tessellation||64,l=n.arc&&(n.arc<=0||n.arc>1)?1:n.arc||1,U=n.sideOrientation===0?0:n.sideOrientation||u.DEFAULTSIDE;t.push(0,0,0),e.push(.5,.5);const f=Math.PI*2*l,v=l===1?f/d:f/(d-1);let c=0;for(let o=0;o<d;o++){const m=Math.cos(c),p=Math.sin(c),b=(m+1)/2,V=(1-p)/2;t.push(r*m,r*p,0),e.push(b,V),c+=v}l===1&&(t.push(t[3],t[4],t[5]),e.push(e[2],e[3]));const y=t.length/3;for(let o=1;o<y-1;o++)i.push(o+1,0,o);u.ComputeNormals(t,i,s),u._ComputeSides(U,t,i,s,e,n.frontUVs,n.backUVs);const a=new u;return a.indices=i,a.positions=t,a.normals=s,a.uvs=e,a}function j(n,t={},i=null){const s=new h(n,i);return t.sideOrientation=h._GetDefaultSideOrientation(t.sideOrientation),s._originalBuilderSideOrientation=t.sideOrientation,M(t).applyToMesh(s,t.updatable),s}u.CreateDisc=M;h.CreateDisc=(n,t,i,s=null,e,r)=>j(n,{radius:t,tessellation:i,sideOrientation:r,updatable:e},s);function k(n,t){let i=F(t,"mesh",15),s=H(t,["$$slots","$$events","$$legacy","mesh"]);J(n,P({createMeshFunction:j},()=>s,{get mesh(){return i()},set mesh(e){i(e)}}))}k.__docgen={data:[{name:"options",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ arc?: number | undefined; backUVs?: Vector4 | undefined; frontUVs?: Vector4 | undefined; radius?: number | undefined; sideOrientation?: number | undefined; tessellation?: number | undefined; updatable?: boolean | undefined; }"},static:!1,readonly:!1},{name:"scene",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"Scene"},static:!1,readonly:!1},{name:"children",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"mesh",visibility:"public",description:"if you want to use a mesh api, bind it",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"Mesh"},static:!1,readonly:!1,defaultValue:"..."},{name:"position",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ x: number; y: number; z: number; }"},static:!1,readonly:!1},{name:"rotation",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ x: number; y: number; z: number; }"},static:!1,readonly:!1},{name:"scaling",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ x: number; y: number; z: number; }"},static:!1,readonly:!1}],name:"Disc.svelte"};const te={title:"mesh/Disc",tags:["autodocs"],component:k},{Story:ne}=Q();var se=N("<!> <!> <!>",1);function E(n,t){T(t,!1),L(),ne(n,{name:"Docs",args:{options:{arc:void 0,backUVs:{x:0,y:0,z:1,w:1},frontUVs:{x:0,y:0,z:1,w:1},radius:void 0,sideOrientation:void 0,tessellation:void 0,updatable:void 0},position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},scaling:{x:1,y:1,z:1}},children:(s,e=G)=>{W(s,{style:"width: 100%;",children:(r,d)=>{X(r,{children:(l,U)=>{Y(l,{children:(f,v)=>{var c=se(),y=A(c);Z(y,{position:new S(0,5,-10)});var a=z(y,2);ee(a,{direction:new S(0,1,0),intensity:.7});var o=z(a,2),m=R(()=>{var p,b,V,g,w,x,_,D,$,C;return{...e().options,frontUVs:(p=e().options)!=null&&p.frontUVs?new O((b=e().options)==null?void 0:b.frontUVs.x,(V=e().options)==null?void 0:V.frontUVs.y,(g=e().options)==null?void 0:g.frontUVs.z,(w=e().options)==null?void 0:w.frontUVs.w):void 0,backUVs:(x=e().options)!=null&&x.backUVs?new O((_=e().options)==null?void 0:_.backUVs.x,(D=e().options)==null?void 0:D.backUVs.y,($=e().options)==null?void 0:$.backUVs.z,(C=e().options)==null?void 0:C.backUVs.w):void 0}});k(o,{get options(){return B(m)},get position(){return e().position},get rotation(){return e().rotation},get scaling(){return e().scaling}}),I(f,c)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Canvas style="width: 100%;">
  <Engine>
    <Scene>
      <FreeCamera position={new Vector3(0, 5, -10)} />
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
</Canvas>`}}}),q()}E.__docgen={version:3,name:"Disc.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const ie=K(E,te),fe=["Docs"],ye=ie.Docs;export{ye as Docs,fe as __namedExportsOrder,te as default};
