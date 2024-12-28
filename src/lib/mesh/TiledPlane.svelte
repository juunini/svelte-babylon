<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { Scene } from '@babylonjs/core/scene';
	import type { Mesh } from '@babylonjs/core/Meshes/mesh';
	import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
	import type { Nullable } from '@babylonjs/core/types';
	import { CreateTiledPlane } from '@babylonjs/core/Meshes/Builders/tiledPlaneBuilder';

	export interface TiledPlaneOptions {
		alignHorizontal?: number;
		alignVertical?: number;
		backUVs?: Vector4;
		frontUVs?: Vector4;
		height?: number;
		pattern?: number;
		sideOrientation?: number;
		size?: number;
		tileHeight?: number;
		tileSize?: number;
		tileWidth?: number;
		updatable?: boolean;
		width?: number;
	}

	interface Props {
		tiledplane?: Mesh;
		name?: string;
		options: TiledPlaneOptions;
		scene?: Nullable<Scene>;
		children?: Snippet;
	}

	let {
		tiledplane = $bindable(),
		name = $bindable(`tiledplane${v7()}`),
		options,
		scene,
		children
	}: Props = $props();

	tiledplane = CreateTiledPlane(name, options, scene);

	onDestroy(() => {
		tiledplane.dispose();
	});
</script>

{@render children?.()}
