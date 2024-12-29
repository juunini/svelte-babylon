<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { Scene } from '@babylonjs/core/scene';
	import type { Vector3, Vector4 } from '@babylonjs/core/Maths/math.vector';
	import type { Mesh } from '@babylonjs/core/Meshes/mesh';
	import type { Nullable } from '@babylonjs/core/types';
	import { CreateTube } from '@babylonjs/core/Meshes/Builders/tubeBuilder';

	export interface TubeOptions {
		arc?: number;
		backUVs?: Vector4;
		cap?: number;
		frontUVs?: Vector4;
		instance?: Mesh;
		invertUV?: boolean;
		path: Vector3[];
		radius?: number;
		radiusFunction?: (i: number, distance: number) => number;
		sideOrientation?: number;
		tessellation?: number;
		updatable?: boolean;
	}

	interface Props {
		tube?: Mesh;
		name?: string;
		options: TubeOptions;
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

	tube = CreateTube(name, options, scene);

	onDestroy(() => {
		tube.dispose();
	});
</script>

{@render children?.()}
