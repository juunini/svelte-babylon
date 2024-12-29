<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { Scene } from '@babylonjs/core/scene';
	import type { Vector3, Vector4 } from '@babylonjs/core/Maths/math.vector';
	import type { Mesh } from '@babylonjs/core/Meshes/mesh';
	import type { Nullable } from '@babylonjs/core/types';
	import { ExtrudeShapeCustom } from '@babylonjs/core/Meshes/Builders/shapeBuilder';

	export interface CustomExtrusionOptions {
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
		customExtrusion?: Mesh;
		name?: string;
		options: CustomExtrusionOptions;
		scene?: Nullable<Scene>;
		children?: Snippet;
	}

	let {
		customExtrusion = $bindable(),
		name = $bindable(`customExtrusion${v7()}`),
		options,
		scene,
		children
	}: Props = $props();

	customExtrusion = ExtrudeShapeCustom(name, options, scene);

	onDestroy(() => {
		customExtrusion.dispose();
	});
</script>

{@render children?.()}
