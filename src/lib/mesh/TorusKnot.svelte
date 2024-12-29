<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { Scene } from '@babylonjs/core/scene';
	import type { Mesh } from '@babylonjs/core/Meshes/mesh';
	import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
	import { CreateTorusKnot } from '@babylonjs/core/Meshes/Builders/torusKnotBuilder';

	export interface TorusKnotOptions {
		backUVs?: Vector4;
		frontUVs?: Vector4;
		p?: number;
		q?: number;
		radialSegments?: number;
		radius?: number;
		sideOrientation?: number;
		tube?: number;
		tubularSegments?: number;
		updatable?: boolean;
	}

	interface Props {
		torusKnot?: Mesh;
		name?: string;
		options?: TorusKnotOptions;
		scene?: Scene;
		children?: Snippet;
	}

	let {
		torusKnot = $bindable(),
		name = $bindable(`torusKnot${v7()}`),
		options,
		scene,
		children
	}: Props = $props();

	torusKnot = CreateTorusKnot(name, options, scene);

	onDestroy(() => {
		torusKnot.dispose();
	});
</script>

{@render children?.()}
