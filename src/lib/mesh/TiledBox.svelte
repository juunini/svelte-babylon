<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { Scene } from '@babylonjs/core/scene';
	import type { Mesh } from '@babylonjs/core/Meshes/mesh';
	import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
	import type { Color4 } from '@babylonjs/core/Maths/math.color';
	import type { Nullable } from '@babylonjs/core/types';
	import { CreateTiledBox } from '@babylonjs/core/Meshes/Builders/tiledBoxBuilder';

	export interface TiledBoxOptions {
		alignHorizontal?: number;
		alignVertical?: number;
		depth?: number;
		faceColors?: Color4[];
		faceUV?: Vector4[];
		height?: number;
		pattern?: number;
		sideOrientation?: number;
		tileHeight?: number;
		tileSize?: number;
		tileWidth?: number;
		updatable?: boolean;
		width?: number;
	}

	interface Props {
		tiledBox?: Mesh;
		name?: string;
		options: TiledBoxOptions;
		scene?: Nullable<Scene>;
		children?: Snippet;
	}

	let {
		tiledBox = $bindable(),
		name = $bindable(`tiledBox${v7()}`),
		options,
		scene,
		children
	}: Props = $props();

	tiledBox = CreateTiledBox(name, options, scene);

	onDestroy(() => {
		tiledBox.dispose();
	});
</script>

{@render children?.()}
