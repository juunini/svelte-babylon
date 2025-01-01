import{a as o}from"./create-runtime-stories-W9W7bo9k.js";import"./helperFunctions-BJvmjhME.js";import"./props-CDwtXEPn.js";import"./index-client-0IVJ1HVs.js";import"./iframe-Dg-i1owp.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./_commonjsHelpers-Cpj98o6Y.js";const r="rgbdEncodePixelShader",e=`varying vec2 vUV;uniform sampler2D textureSampler;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}`;o.ShadersStore[r]=e;const c={name:r,shader:e};export{c as rgbdEncodePixelShader};
