<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { Scene } from '@babylonjs/core/scene';
	import type { Mesh } from '@babylonjs/core/Meshes/mesh';
	import { CreateTiledGround } from '@babylonjs/core/Meshes/Builders/groundBuilder';

	export interface TiledGroundOptions {
		precision?: { h: number; w: number };
		subdivisions?: { h: number; w: number };
		updatable?: boolean;
		xmax: number;
		xmin: number;
		zmax: number;
		zmin: number;
	}

	interface Props {
		tiledGround?: Mesh;
		name?: string;
		options: TiledGroundOptions;
		scene?: Scene;
		children?: Snippet;
	}

	let {
		tiledGround = $bindable(),
		name = $bindable(`tiledGround${v7()}`),
		options,
		scene,
		children
	}: Props = $props();

	tiledGround = CreateTiledGround(name, options, scene);

	onDestroy(() => {
		tiledGround.dispose();
	});
</script>

{@render children?.()}
