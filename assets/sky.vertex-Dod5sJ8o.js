import{t as e}from"./shaderStore-D-XQlhUT.js";import{$ as t,Q as n,X as r,ot as i,st as a,tt as o}from"./index-mFGISFSZ.js";var s=`skyVertexShader`,c=`attribute position: vec3f;
#ifdef VERTEXCOLOR
attribute color: vec4f;
#endif
uniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;
#ifdef POINTSIZE
uniform pointSize: f32;
#endif
varying vPositionW: vec3f;
#ifdef VERTEXCOLOR
varying vColor: vec4f;
#endif
#include<logDepthDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#ifdef VERTEXCOLOR
vertexOutputs.vColor=vertexInputs.color;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;e.ShadersStoreWGSL[s]||(e.ShadersStoreWGSL[s]=c);var l=[t,a,o,i,r,n];for(let t of l)e.IncludesShadersStoreWGSL[t.name]||(e.IncludesShadersStoreWGSL[t.name]=t.shader);var u={name:s,shader:c};export{u as skyVertexShaderWGSL};