<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { Scene } from '@babylonjs/core/scene';
	import type { Vector3, Vector4 } from '@babylonjs/core/Maths/math.vector';
	import type { Mesh } from '@babylonjs/core/Meshes/mesh';
	import type { Nullable } from '@babylonjs/core/types';
	import type { Color4 } from '@babylonjs/core/Maths/math.color';
	import { ExtrudePolygon } from '@babylonjs/core/Meshes/Builders/polygonBuilder';

	export interface PolygonOptions {
		backUVs?: Vector4;
		depth?: number;
		faceColors?: Color4[];
		faceUV?: Vector4[];
		frontUVs?: Vector4;
		holes?: Vector3[][];
		shape: Vector3[];
		sideOrientation?: number;
		updatable?: boolean;
		wrap?: boolean;
	}

	interface Props {
		extrudePolygon?: Mesh;
		name?: string;
		options: PolygonOptions;
		scene?: Nullable<Scene>;
		earcutInjection?: any;
		children?: Snippet;
	}

	let {
		extrudePolygon = $bindable(),
		name = $bindable(`extrudePolygon${v7()}`),
		options,
		scene,
		earcutInjection,
		children
	}: Props = $props();

	extrudePolygon = ExtrudePolygon(name, options, scene, earcutInjection);

	onDestroy(() => {
		extrudePolygon.dispose();
	});
</script>

{@render children?.()}
