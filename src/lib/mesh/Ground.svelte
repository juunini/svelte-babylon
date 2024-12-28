<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { GroundMesh } from '@babylonjs/core/Meshes/groundMesh';
	import type { Scene } from '@babylonjs/core/scene';
	import { CreateGround } from '@babylonjs/core/Meshes/Builders/groundBuilder';

	export interface GroundOptions {
		width?: number;
		height?: number;
		subdivisions?: number;
		subdivisionsX?: number;
		subdivisionsY?: number;
		updatable?: boolean;
	}

	interface Props {
		ground?: GroundMesh;
		name?: string;
		options?: GroundOptions;
		scene?: Scene;
		children?: Snippet;
	}

	let {
		ground = $bindable(),
		name = $bindable(`ground${v7()}`),
		options,
		scene,
		children
	}: Props = $props();

	ground = CreateGround(name, options, scene);

	onDestroy(() => {
		ground.dispose();
	});
</script>

{@render children?.()}
