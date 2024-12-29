<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { Scene } from '@babylonjs/core/scene';
	import type { Color4 } from '@babylonjs/core/Maths/math.color';
	import type { Vector2, Vector3, Vector4 } from '@babylonjs/core/Maths/math.vector';
	import type { Mesh } from '@babylonjs/core/Meshes/mesh';
	import type { Nullable } from '@babylonjs/core/types';
	import { CreateRibbon } from '@babylonjs/core/Meshes/Builders/ribbonBuilder';

	export interface RibbonOptions {
		backUVs?: Vector4;
		closeArray?: boolean;
		closePath?: boolean;
		colors?: Color4[];
		frontUVs?: Vector4;
		instance?: Mesh;
		invertUV?: boolean;
		offset?: number;
		pathArray: Vector3[][];
		sideOrientation?: number;
		updatable?: boolean;
		uvs?: Vector2[];
	}

	interface Props {
		ribbon?: Mesh;
		name?: string;
		options: RibbonOptions;
		scene?: Nullable<Scene>;
		children?: Snippet;
	}

	let {
		ribbon = $bindable(),
		name = $bindable(`ribbon${v7()}`),
		options,
		scene,
		children
	}: Props = $props();

	ribbon = CreateRibbon(name, options, scene);

	onDestroy(() => {
		ribbon.dispose();
	});
</script>

{@render children?.()}
