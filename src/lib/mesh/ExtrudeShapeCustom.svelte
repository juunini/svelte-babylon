<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { Scene } from '@babylonjs/core/scene';
	import type { Vector3, Vector4 } from '@babylonjs/core/Maths/math.vector';
	import type { Mesh } from '@babylonjs/core/Meshes/mesh';
	import type { Nullable } from '@babylonjs/core/types';
	import { ExtrudeShapeCustom } from '@babylonjs/core/Meshes/Builders/shapeBuilder';

	export interface ExtrudeShapeCustomOptions {
		adjustFrame?: boolean;
		backUVs?: Vector4;
		cap?: number;
		closePath?: boolean;
		closeShape?: boolean;
		firstNormal?: Vector3;
		frontUVs?: Vector4;
		instance?: Mesh;
		invertUV?: boolean;
		path: Vector3[];
		ribbonCloseArray?: boolean;
		ribbonClosePath?: boolean;
		rotationFunction?: Nullable<(i: number, distance: number) => number>;
		scaleFunction?: Nullable<(i: number, distance: number) => number>;
		shape: Vector3[];
		sideOrientation?: number;
		updatable?: boolean;
	}

	interface Props {
		extrudeShapeCustom?: Mesh;
		name?: string;
		options: ExtrudeShapeCustomOptions;
		scene?: Nullable<Scene>;
		children?: Snippet;
	}

	let {
		extrudeShapeCustom = $bindable(),
		name = $bindable(`extrudeShapeCustom${v7()}`),
		options,
		scene,
		children
	}: Props = $props();

	extrudeShapeCustom = ExtrudeShapeCustom(name, options, scene);

	onDestroy(() => {
		extrudeShapeCustom.dispose();
	});
</script>

{@render children?.()}
