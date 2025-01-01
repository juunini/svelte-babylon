import{a as e}from"./create-runtime-stories-W9W7bo9k.js";const t="uvAttributeDeclaration",i=`#ifdef UV{X}
attribute uv{X}: vec2f;
#endif
`;e.IncludesShadersStoreWGSL[t]=i;const r="prePassVertexDeclaration",n=`#ifdef PREPASS
#ifdef PREPASS_LOCAL_POSITION
varying vPosition : vec3f;
#endif
#ifdef PREPASS_DEPTH
varying vViewPos: vec3f;
#endif
#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)
uniform previousViewProjection: mat4x4f;varying vCurrentPosition: vec4f;varying vPreviousPosition: vec4f;
#endif
#endif
`;e.IncludesShadersStoreWGSL[r]=n;const f="samplerVertexDeclaration",s=`#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0
varying v_VARYINGNAME_UV: vec2f;
#endif
`;e.IncludesShadersStoreWGSL[f]=s;const o="bumpVertexDeclaration",d=`#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL) 
varying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;
#endif
#endif
`;e.IncludesShadersStoreWGSL[o]=d;const a="lightVxUboDeclaration",u=`#ifdef LIGHT{X}
struct Light{X}
{vLightData: vec4f,
vLightDiffuse: vec4f,
vLightSpecular: vec4f,
#ifdef SPOTLIGHT{X}
vLightDirection: vec4f,
vLightFalloff: vec4f,
#elif defined(POINTLIGHT{X})
vLightFalloff: vec4f,
#elif defined(HEMILIGHT{X})
vLightGround: vec3f,
#endif
shadowsInfo: vec4f,
depthValues: vec2f} ;var<uniform> light{X} : Light{X};
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform lightMatrix{X}: array<mat4x4f,SHADOWCSMNUM_CASCADES{X}>;varying vPositionFromLight{X}_0: vec4f;varying vDepthMetric{X}_0: f32;varying vPositionFromLight{X}_1: vec4f;varying vDepthMetric{X}_1: f32;varying vPositionFromLight{X}_2: vec4f;varying vDepthMetric{X}_2: f32;varying vPositionFromLight{X}_3: vec4f;varying vDepthMetric{X}_3: f32;varying vPositionFromCamera{X}: vec4f;
#elif defined(SHADOWCUBE{X})
#else
varying vPositionFromLight{X}: vec4f;varying vDepthMetric{X}: f32;uniform lightMatrix{X}: mat4x4f;
#endif
#endif
#endif
`;e.IncludesShadersStoreWGSL[a]=u;const v="morphTargetsVertexGlobalDeclaration",p=`#ifdef MORPHTARGETS
uniform morphTargetInfluences : array<f32,NUM_MORPH_INFLUENCERS>;
#ifdef MORPHTARGETS_TEXTURE 
uniform morphTargetTextureIndices : array<f32,NUM_MORPH_INFLUENCERS>;uniform morphTargetTextureInfo : vec3<f32>;var morphTargets : texture_2d_array<f32>;var morphTargetsSampler : sampler;fn readVector3FromRawSampler(targetIndex : i32,vertexIndex : f32)->vec3<f32>
{ 
let y=floor(vertexIndex/uniforms.morphTargetTextureInfo.y);let x=vertexIndex-y*uniforms.morphTargetTextureInfo.y;let textureUV=vec2<f32>((x+0.5)/uniforms.morphTargetTextureInfo.y,(y+0.5)/uniforms.morphTargetTextureInfo.z);return textureSampleLevel(morphTargets,morphTargetsSampler,textureUV,i32(uniforms.morphTargetTextureIndices[targetIndex]),0.0).xyz;}
#endif
#endif
`;e.IncludesShadersStoreWGSL[v]=p;const m="morphTargetsVertexDeclaration",c=`#ifdef MORPHTARGETS
#ifndef MORPHTARGETS_TEXTURE
#ifdef MORPHTARGETS_POSITION
attribute position{X} : vec3<f32>;
#endif
#ifdef MORPHTARGETS_NORMAL
attribute normal{X} : vec3<f32>;
#endif
#ifdef MORPHTARGETS_TANGENT
attribute tangent{X} : vec3<f32>;
#endif
#ifdef MORPHTARGETS_UV
attribute uv_{X} : vec2<f32>;
#endif
#ifdef MORPHTARGETS_UV2
attribute uv2_{X} : vec2<f32>;
#endif
#elif {X}==0
uniform morphTargetCount: i32;
#endif
#endif
`;e.IncludesShadersStoreWGSL[m]=c;const l="morphTargetsVertexGlobal",x=`#ifdef MORPHTARGETS
#ifdef MORPHTARGETS_TEXTURE
var vertexID : f32;
#endif
#endif
`;e.IncludesShadersStoreWGSL[l]=x;const h="morphTargetsVertex",E=`#ifdef MORPHTARGETS
#ifdef MORPHTARGETS_TEXTURE
#if {X}==0
for (var i=0; i<NUM_MORPH_INFLUENCERS; i=i+1) {if (i>=uniforms.morphTargetCount) {break;}
vertexID=f32(vertexInputs.vertexIndex)*uniforms.morphTargetTextureInfo.x;
#ifdef MORPHTARGETS_POSITION
positionUpdated=positionUpdated+(readVector3FromRawSampler(i,vertexID)-vertexInputs.position)*uniforms.morphTargetInfluences[i];vertexID=vertexID+1.0;
#endif
#ifdef MORPHTARGETS_NORMAL
normalUpdated=normalUpdated+(readVector3FromRawSampler(i,vertexID) -vertexInputs.normal)*uniforms.morphTargetInfluences[i];vertexID=vertexID+1.0;
#endif
#ifdef MORPHTARGETS_UV
uvUpdated=uvUpdated+(readVector3FromRawSampler(i,vertexID).xy-vertexInputs.uv)*uniforms.morphTargetInfluences[i];vertexID=vertexID+1.0;
#endif
#ifdef MORPHTARGETS_TANGENT
tangentUpdated=vec4f(tangentUpdated.xyz+(readVector3FromRawSampler(i,vertexID) -vertexInputs.tangent.xyz)*uniforms.morphTargetInfluences[i],tangentUpdated.a);vertexID=vertexID+1.0;
#endif
#ifdef MORPHTARGETS_UV2
uv2Updated=uv2Updated+(readVector3FromRawSampler(i,vertexID).xy-vertexInputs.uv2)*uniforms.morphTargetInfluences[i];
#endif
}
#endif
#else
#ifdef MORPHTARGETS_POSITION
positionUpdated=positionUpdated+(vertexInputs.position{X}-vertexInputs.position)*uniforms.morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_NORMAL
normalUpdated+=(vertexInputs.normal{X}-vertexInputs.normal)*uniforms.morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_TANGENT
tangentUpdated=vec4f(tangentUpdated.xyz+(vertexInputs.tangent{X}-vertexInputs.tangent.xyz)*uniforms.morphTargetInfluences[{X}],tangentUpdated.a);
#endif
#ifdef MORPHTARGETS_UV
uvUpdated=uvUpdated+(vertexInputs.uv_{X}-vertexInputs.uv)*uniforms.morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_UV2
uv2Updated=uv2Updated+(vertexInputs.uv2_{X}-vertexInputs.uv2)*uniforms.morphTargetInfluences[{X}];
#endif
#endif
#endif
`;e.IncludesShadersStoreWGSL[h]=E;const I="prePassVertex",S=`#ifdef PREPASS_DEPTH
vertexOutputs.vViewPos=(scene.view*worldPos).rgb;
#endif
#ifdef PREPASS_LOCAL_POSITION
vertexOutputs.vPosition=positionUpdated.xyz;
#endif
#if (defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)) && defined(BONES_VELOCITY_ENABLED)
vertexOutputs.vCurrentPosition=scene.viewProjection*worldPos;
#if NUM_BONE_INFLUENCERS>0
var previousInfluence: mat4x4f;previousInfluence=mPreviousBones[ i32(matricesIndices[0])]*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
previousInfluence+=mPreviousBones[ i32(matricesIndices[1])]*matricesWeights[1];
#endif 
#if NUM_BONE_INFLUENCERS>2
previousInfluence+=mPreviousBones[ i32(matricesIndices[2])]*matricesWeights[2];
#endif 
#if NUM_BONE_INFLUENCERS>3
previousInfluence+=mPreviousBones[ i32(matricesIndices[3])]*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
previousInfluence+=mPreviousBones[ i32(matricesIndicesExtra[0])]*matricesWeightsExtra[0];
#endif 
#if NUM_BONE_INFLUENCERS>5
previousInfluence+=mPreviousBones[ i32(matricesIndicesExtra[1])]*matricesWeightsExtra[1];
#endif 
#if NUM_BONE_INFLUENCERS>6
previousInfluence+=mPreviousBones[ i32(matricesIndicesExtra[2])]*matricesWeightsExtra[2];
#endif 
#if NUM_BONE_INFLUENCERS>7
previousInfluence+=mPreviousBones[ i32(matricesIndicesExtra[3])]*matricesWeightsExtra[3];
#endif
vertexOutputs.vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld*previousInfluence* vec4f(positionUpdated,1.0);
#else
vertexOutputs.vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld* vec4f(positionUpdated,1.0);
#endif
#endif
`;e.IncludesShadersStoreWGSL[I]=S;const _="uvVariableDeclaration",T=`#ifdef MAINUV{X}
#if !defined(UV{X})
var uv{X}: vec2f=vec2f(0.,0.);
#else
var uv{X}: vec2f=vertexInputs.uv{X};
#endif
vertexOutputs.vMainUV{X}=uv{X};
#endif
`;e.IncludesShadersStoreWGSL[_]=T;const g="samplerVertexImplementation",O=`#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0
if (uniforms.v_INFONAME_==0.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}
#ifdef UV2
else if (uniforms.v_INFONAME_==1.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}
#endif
#ifdef UV3
else if (uniforms.v_INFONAME_==2.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(vertexInputs.uv3,1.0,0.0)).xy;}
#endif
#ifdef UV4
else if (uniforms.v_INFONAME_==3.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(vertexInputs.uv4,1.0,0.0)).xy;}
#endif
#ifdef UV5
else if (uniforms.v_INFONAME_==4.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(vertexInputs.uv5,1.0,0.0)).xy;}
#endif
#ifdef UV6
else if (uniforms.v_INFONAME_==5.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(vertexInputs.uv6,1.0,0.0)).xy;}
#endif
#endif
`;e.IncludesShadersStoreWGSL[g]=O;const P="bumpVertex",N=`#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
var tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNormal,tbnTangent)*tangentUpdated.w;var matTemp= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz)* mat3x3f(tbnTangent,tbnBitangent,tbnNormal);vertexOutputs.vTBN0=matTemp[0];vertexOutputs.vTBN1=matTemp[1];vertexOutputs.vTBN2=matTemp[2];
#endif
#endif
`;e.IncludesShadersStoreWGSL[P]=N;const R="shadowsVertex",A=`#ifdef SHADOWS
#if defined(SHADOWCSM{X})
vertexOutputs.vPositionFromCamera{X}=scene.view*worldPos;
#if SHADOWCSMNUM_CASCADES{X}>0
vertexOutputs.vPositionFromLight{X}_0=uniforms.lightMatrix{X}[0]*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.vDepthMetric{X}_0=(-vertexOutputs.vPositionFromLight{X}_0.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vertexOutputs.vDepthMetric{X}_0= (vertexOutputs.vPositionFromLight{X}_0.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif
#if SHADOWCSMNUM_CASCADES{X}>1
vertexOutputs.vPositionFromLight{X}_1=uniforms.lightMatrix{X}[1]*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.vDepthMetric{X}_1=(-vertexOutputs.vPositionFromLight{X}_1.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vertexOutputs.vDepthMetric{X}_1= (vertexOutputs.vPositionFromLight{X}_1.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif 
#if SHADOWCSMNUM_CASCADES{X}>2
vertexOutputs.vPositionFromLight{X}_2=uniforms.lightMatrix{X}[2]*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.vDepthMetric{X}_2=(-vertexOutputs.vPositionFromLight{X}_2.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vertexOutputs.vDepthMetric{X}_2= (vertexOutputs.vPositionFromLight{X}_2.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif 
#if SHADOWCSMNUM_CASCADES{X}>3
vertexOutputs.vPositionFromLight{X}_3=uniforms.lightMatrix{X}[3]*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.vDepthMetric{X}_3=(-vertexOutputs.vPositionFromLight{X}_3.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vertexOutputs.vDepthMetric{X}_3= (vertexOutputs.vPositionFromLight{X}_3.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif 
#elif defined(SHADOW{X}) && !defined(SHADOWCUBE{X})
vertexOutputs.vPositionFromLight{X}=uniforms.lightMatrix{X}*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.vDepthMetric{X}=(-vertexOutputs.vPositionFromLight{X}.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vertexOutputs.vDepthMetric{X}=(vertexOutputs.vPositionFromLight{X}.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif
#endif
`;e.IncludesShadersStoreWGSL[R]=A;const X="logDepthVertex",M=`#ifdef LOGARITHMICDEPTH
vertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;
#endif
`;e.IncludesShadersStoreWGSL[X]=M;
