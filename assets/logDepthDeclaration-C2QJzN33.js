import{b as e}from"./create-runtime-stories-Dd8eu6kK.js";const a="mainUVVaryingDeclaration",n=`#ifdef MAINUV{X}
varying vec2 vMainUV{X};
#endif
`;e.IncludesShadersStore[a]=n;const t="logDepthDeclaration",r=`#ifdef LOGARITHMICDEPTH
uniform float logarithmicDepthConstant;varying float vFragmentDepth;
#endif
`;e.IncludesShadersStore[t]=r;
