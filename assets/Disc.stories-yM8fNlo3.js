import{p as C,s as z,r as S,i as O,a as M,t as j}from"./props-D_CwaEcb.js";import{p as E,a as F,f as P,b as H,n as L,c as U,d as I}from"./index-client-a4XWVA08.js";import{f as p,M as y,k as N,l as T,m as q,n as A,o as B,p as G,F as R,V as v,H as J,d as w}from"./create-runtime-stories-BBH7VRGR.js";import"./iframe-CWYB0b8a.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./_commonjsHelpers-Cpj98o6Y.js";function x(n){const t=[],i=[],s=[],e=[],r=n.radius||.5,d=n.tessellation||64,l=n.arc&&(n.arc<=0||n.arc>1)?1:n.arc||1,V=n.sideOrientation===0?0:n.sideOrientation||p.DEFAULTSIDE;t.push(0,0,0),e.push(.5,.5);const u=Math.PI*2*l,h=l===1?u/d:u/(d-1);let c=0;for(let o=0;o<d;o++){const m=Math.cos(c),k=Math.sin(c),D=(m+1)/2,$=(1-k)/2;t.push(r*m,r*k,0),e.push(D,$),c+=h}l===1&&(t.push(t[3],t[4],t[5]),e.push(e[2],e[3]));const f=t.length/3;for(let o=1;o<f-1;o++)i.push(o+1,0,o);p.ComputeNormals(t,i,s),p._ComputeSides(V,t,i,s,e,n.frontUVs,n.backUVs);const a=new p;return a.indices=i,a.positions=t,a.normals=s,a.uvs=e,a}function g(n,t={},i=null){const s=new y(n,i);return t.sideOrientation=y._GetDefaultSideOrientation(t.sideOrientation),s._originalBuilderSideOrientation=t.sideOrientation,x(t).applyToMesh(s,t.updatable),s}p.CreateDisc=x;y.CreateDisc=(n,t,i,s=null,e,r)=>g(n,{radius:t,tessellation:i,sideOrientation:r,updatable:e},s);function b(n,t){let i=C(t,"mesh",15),s=S(t,["$$slots","$$events","$$legacy","mesh"]);N(n,z({createMeshFunction:g},()=>s,{get mesh(){return i()},set mesh(e){i(e)}}))}b.__docgen={data:[{name:"options",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ arc?: number | undefined; backUVs?: Vector4 | undefined; frontUVs?: Vector4 | undefined; radius?: number | undefined; sideOrientation?: number | undefined; tessellation?: number | undefined; updatable?: boolean | undefined; }"},static:!1,readonly:!1},{name:"scene",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"Scene"},static:!1,readonly:!1},{name:"children",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"mesh",visibility:"public",description:"if you want to use a mesh api, bind it",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"Mesh"},static:!1,readonly:!1,defaultValue:"..."},{name:"position",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ x: number; y: number; z: number; }"},static:!1,readonly:!1},{name:"rotation",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ x: number; y: number; z: number; }"},static:!1,readonly:!1},{name:"scaling",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ x: number; y: number; z: number; }"},static:!1,readonly:!1}],name:"Disc.svelte"};const K={title:"mesh/Disc",tags:["autodocs"],component:b},{Story:Q}=q();var W=j("<!> <!> <!>",1);function _(n,t){E(t,!1),O(),Q(n,{name:"Docs",args:{options:{arc:void 0,backUVs:{x:0,y:0,z:1,w:1},frontUVs:{x:0,y:0,z:1,w:1},radius:void 0,sideOrientation:void 0,tessellation:void 0,updatable:void 0},position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},scaling:{x:1,y:1,z:1}},children:(s,e=L)=>{A(s,{style:"width: 100%;",children:(r,d)=>{B(r,{children:(l,V)=>{G(l,{children:(u,h)=>{var c=W(),f=P(c);R(f,{position:new v(0,5,-10)});var a=U(f,2);J(a,{direction:new v(0,1,0),intensity:.7});var o=U(a,2),m=I(()=>({...e().options,frontUVs:e().options.frontUVs?new w(e().options.frontUVs.x,e().options.frontUVs.y,e().options.frontUVs.z,e().options.frontUVs.w):void 0,backUVs:e().options.backUVs?new w(e().options.backUVs.x,e().options.backUVs.y,e().options.backUVs.z,e().options.backUVs.w):void 0}));b(o,{get options(){return H(m)},get position(){return e().position},get rotation(){return e().rotation},get scaling(){return e().scaling}}),M(u,c)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Canvas style="width: 100%;">
  <Engine>
    <Scene>
      <FreeCamera position={new Vector3(0, 5, -10)} />
      <HemisphericLight direction={new Vector3(0, 1, 0)} intensity={0.7} />
      <Disc
        options={{
          ...args.options!,
          frontUVs: args.options!.frontUVs
            ? new Vector4(
                args.options!.frontUVs.x,
                args.options!.frontUVs.y,
                args.options!.frontUVs.z,
                args.options!.frontUVs.w
              )
            : undefined,
          backUVs: args.options!.backUVs
            ? new Vector4(
                args.options!.backUVs.x,
                args.options!.backUVs.y,
                args.options!.backUVs.z,
                args.options!.backUVs.w
              )
            : undefined
        }}
        position={args.position}
        rotation={args.rotation}
        scaling={args.scaling}
      />
    </Scene>
  </Engine>
</Canvas>`}}}),F()}_.__docgen={version:3,name:"Disc.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const X=T(_,K),ae=["Docs"],re=X.Docs;export{re as Docs,ae as __namedExportsOrder,K as default};
