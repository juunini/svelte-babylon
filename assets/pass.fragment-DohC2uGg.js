import{a as t}from"./create-runtime-stories-C5aqBmYi.js";import"./props-BRt4u2O_.js";import"./index-client-atPt8Ppi.js";import"./iframe-BEUO-_wG.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./_commonjsHelpers-Cpj98o6Y.js";const e="passPixelShader",r=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}`;t.ShadersStoreWGSL[e]=r;const u={name:e,shader:r};export{u as passPixelShaderWGSL};
