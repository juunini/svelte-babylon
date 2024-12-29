<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { Scene } from '@babylonjs/core/scene';
	import type { Mesh } from '@babylonjs/core/Meshes/mesh';
	import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
	import { CreateTorus } from '@babylonjs/core/Meshes/Builders/torusBuilder';

	export interface TorusOptions {
		backUVs?: Vector4;
		diameter?: number;
		frontUVs?: Vector4;
		sideOrientation?: number;
		tessellation?: number;
		thickness?: number;
		updatable?: boolean;
	}

	interface Props {
		torus?: Mesh;
		name?: string;
		options?: TorusOptions;
		scene?: Scene;
		children?: Snippet;
	}

	let {
		torus = $bindable(),
		name = $bindable(`torus${v7()}`),
		options,
		scene,
		children
	}: Props = $props();

	torus = CreateTorus(name, options, scene);

	onDestroy(() => {
		torus.dispose();
	});
</script>

{@render children?.()}
