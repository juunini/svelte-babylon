import{a as o}from"./create-runtime-stories-C5aqBmYi.js";import"./helperFunctions-D5Nq0KH6.js";import"./props-BRt4u2O_.js";import"./index-client-atPt8Ppi.js";import"./iframe-BEUO-_wG.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./_commonjsHelpers-Cpj98o6Y.js";const r="rgbdDecodePixelShader",e=`varying vec2 vUV;uniform sampler2D textureSampler;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);}`;o.ShadersStore[r]=e;const l={name:r,shader:e};export{l as rgbdDecodePixelShader};
