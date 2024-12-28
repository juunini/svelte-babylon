<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
	import type { Mesh } from '@babylonjs/core/Meshes/mesh';
	import type { Scene } from '@babylonjs/core/scene';
	import type { Nullable } from '@babylonjs/core/types';
	import type { Color4 } from '@babylonjs/core/Maths/math.color';
	import { CreateText, type IFontData } from '@babylonjs/core/Meshes/Builders/textBuilder';

	export interface TextOptions {
		depth?: number;
		faceColors?: Color4[];
		faceUV?: Vector4[];
		perLetterFaceColors?: (letterIndex: number) => Color4[];
		perLetterFaceUV?: (letterIndex: number) => Vector4[];
		resolution?: number;
		sideOrientation?: number;
		size?: number;
	}

	interface Props {
		textMesh?: Nullable<Mesh>;
		name?: string;
		text: string;
		fontData: IFontData;
		options?: TextOptions;
		scene?: Nullable<Scene>;
		earcutInjection?: any;
		children?: Snippet;
	}

	let {
		textMesh = $bindable(),
		name = $bindable(`text${v7()}`),
		text,
		fontData,
		options,
		scene,
		earcutInjection,
		children
	}: Props = $props();

	textMesh = CreateText(name, text, fontData, options, scene, earcutInjection);

	onDestroy(() => {
		textMesh?.dispose();
	});
</script>

{@render children?.()}
