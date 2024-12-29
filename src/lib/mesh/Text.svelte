<script lang="ts">
	import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
	import type { Mesh } from '@babylonjs/core/Meshes/mesh';
	import type { Scene } from '@babylonjs/core/scene';
	import type { Nullable } from '@babylonjs/core/types';
	import type { Color4 } from '@babylonjs/core/Maths/math.color';
	import { CreateText, type IFontData } from '@babylonjs/core/Meshes/Builders/textBuilder';

	import type { MeshProps } from './interface';
	import CreateMesh from './_CreateMesh.svelte';

	interface TextOptions {
		depth?: number;
		faceColors?: Color4[];
		faceUV?: Vector4[];
		perLetterFaceColors?: (letterIndex: number) => Color4[];
		perLetterFaceUV?: (letterIndex: number) => Vector4[];
		resolution?: number;
		sideOrientation?: number;
		size?: number;
	}

	interface Props extends MeshProps {
		textMesh?: Nullable<Mesh>;
		text: string;
		fontData: IFontData;
		options?: TextOptions;
		scene?: Nullable<Scene>;
		earcutInjection?: any;
	}

	let {
		textMesh = $bindable(),
		text,
		fontData,
		options,
		scene,
		earcutInjection,
		position,
		lookAt
	}: Props = $props();
</script>

<CreateMesh
	bind:mesh={textMesh}
	createMeshFunction={CreateText}
	{options}
	{scene}
	{text}
	{fontData}
	{earcutInjection}
	{position}
	{lookAt}
/>
