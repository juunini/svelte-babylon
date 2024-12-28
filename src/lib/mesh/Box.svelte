<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { Scene } from '@babylonjs/core/scene';
	import type { Mesh } from '@babylonjs/core/Meshes/mesh';
	import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
	import type { Color4 } from '@babylonjs/core/Maths/math.color';
	import type { Nullable } from '@babylonjs/core/types';
	import { CreateBox } from '@babylonjs/core/Meshes/Builders/boxBuilder';

	export interface BoxOptions {
		backUVs?: Vector4;
		bottomBaseAt?: number;
		depth?: number;
		faceColors?: Color4[];
		faceUV?: Vector4[];
		frontUVs?: Vector4;
		height?: number;
		sideOrientation?: number;
		size?: number;
		topBaseAt?: number;
		updatable?: boolean;
		width?: number;
		wrap?: boolean;
	}

	interface Props {
		box?: Mesh;
		name?: string;
		options?: BoxOptions;
		scene?: Nullable<Scene>;
		children?: Snippet;
	}

	let {
		box = $bindable(),
		name = $bindable(`box${v7()}`),
		options,
		scene,
		children
	}: Props = $props();

	box = CreateBox(name, options, scene);

	onDestroy(() => {
		box.dispose();
	});
</script>

{@render children?.()}
