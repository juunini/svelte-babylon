import{b as o}from"./create-runtime-stories-Dd8eu6kK.js";import"./helperFunctions-BriT_8O2.js";import"./props-CDwtXEPn.js";import"./index-client-0IVJ1HVs.js";import"./iframe-8l14vsvk.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./_commonjsHelpers-Cpj98o6Y.js";const r="rgbdEncodePixelShader",e=`varying vec2 vUV;uniform sampler2D textureSampler;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}`;o.ShadersStore[r]=e;const c={name:r,shader:e};export{c as rgbdEncodePixelShader};
