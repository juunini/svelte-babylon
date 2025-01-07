import{a}from"./create-runtime-stories-DQMLDbyL.js";const e="mainUVVaryingDeclaration",n=`#ifdef MAINUV{X}
varying vec2 vMainUV{X};
#endif
`;a.IncludesShadersStore[e]=n;const t="logDepthDeclaration",r=`#ifdef LOGARITHMICDEPTH
uniform float logarithmicDepthConstant;varying float vFragmentDepth;
#endif
`;a.IncludesShadersStore[t]=r;
