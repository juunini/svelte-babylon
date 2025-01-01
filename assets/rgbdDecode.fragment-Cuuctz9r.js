import{S as o}from"./create-runtime-stories-L4uVnNlK.js";import"./helperFunctions-AfHZ6PjU.js";import"./props-CDwtXEPn.js";import"./index-client-0IVJ1HVs.js";import"./iframe-ZhyaJ0jc.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./_commonjsHelpers-Cpj98o6Y.js";const r="rgbdDecodePixelShader",e=`varying vec2 vUV;uniform sampler2D textureSampler;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);}`;o.ShadersStore[r]=e;const l={name:r,shader:e};export{l as rgbdDecodePixelShader};
