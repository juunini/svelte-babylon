import{a as t}from"./create-runtime-stories-BdDSBu7q.js";import"./props-CDwtXEPn.js";import"./index-client-0IVJ1HVs.js";import"./iframe-oeH-Nnzw.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./_commonjsHelpers-Cpj98o6Y.js";const e="passPixelShader",r=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}`;t.ShadersStoreWGSL[e]=r;const u={name:e,shader:r};export{u as passPixelShaderWGSL};
