import{S as e}from"./create-runtime-stories-ChL5sEf5.js";const n="mainUVVaryingDeclaration",a=`#ifdef MAINUV{X}
varying vMainUV{X}: vec2f;
#endif
`;e.IncludesShadersStoreWGSL[n]=a;const r="logDepthDeclaration",t=`#ifdef LOGARITHMICDEPTH
uniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;
#endif
`;e.IncludesShadersStoreWGSL[r]=t;
