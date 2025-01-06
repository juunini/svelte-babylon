import{a as e}from"./create-runtime-stories-DlYX6Gso.js";import"./kernelBlurVaryingDeclaration-CZ9gTezY.js";import"./props-CDwtXEPn.js";import"./index-client-0IVJ1HVs.js";import"./iframe-DXvAOt9X.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./_commonjsHelpers-Cpj98o6Y.js";const n="kernelBlurVertex",o="vertexOutputs.sampleCoord{X}=vertexOutputs.sampleCenter+uniforms.delta*KERNEL_OFFSET{X};";e.IncludesShadersStoreWGSL[n]=o;const t="kernelBlurVertexShader",r=`attribute position: vec2f;uniform delta: vec2f;varying sampleCenter: vec2f;
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {const madd: vec2f= vec2f(0.5,0.5);
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.sampleCenter=(input.position*madd+madd);
#include<kernelBlurVertex>[0..varyingCount]
vertexOutputs.position= vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;e.ShadersStoreWGSL[t]=r;const S={name:t,shader:r};export{S as kernelBlurVertexShaderWGSL};
