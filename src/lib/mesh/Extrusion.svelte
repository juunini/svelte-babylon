<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { Scene } from '@babylonjs/core/scene';
	import type { Vector3, Vector4 } from '@babylonjs/core/Maths/math.vector';
	import type { Mesh } from '@babylonjs/core/Meshes/mesh';
	import type { Nullable } from '@babylonjs/core/types';
	import { ExtrudeShape } from '@babylonjs/core/Meshes/Builders/shapeBuilder';

	export interface ExtrusionOptions {
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
		rotation?: number;
		scale?: number;
		shape: Vector3[];
		sideOrientation?: number;
		updatable?: boolean;
	}

	interface Props {
		tube?: Mesh;
		name?: string;
		options: ExtrusionOptions;
		scene?: Nullable<Scene>;
		children?: Snippet;
	}

	let {
		tube = $bindable(),
		name = $bindable(`tube${v7()}`),
		options,
		scene,
		children
	}: Props = $props();

	tube = ExtrudeShape(name, options, scene);

	onDestroy(() => {
		tube.dispose();
	});
</script>

{@render children?.()}
