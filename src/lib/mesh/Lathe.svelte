<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { Scene } from '@babylonjs/core/scene';
	import type { Vector3, Vector4 } from '@babylonjs/core/Maths/math.vector';
	import type { Mesh } from '@babylonjs/core/Meshes/mesh';
	import type { Nullable } from '@babylonjs/core/types';
	import { CreateLathe } from '@babylonjs/core/Meshes/Builders/latheBuilder';

	export interface LatheOptions {
		arc?: number;
		backUVs?: Vector4;
		cap?: number;
		clip?: number;
		closed?: boolean;
		frontUVs?: Vector4;
		invertUV?: boolean;
		radius?: number;
		shape: Vector3[];
		sideOrientation?: number;
		tessellation?: number;
		updatable?: boolean;
	}

	interface Props {
		lathe?: Mesh;
		name?: string;
		options: LatheOptions;
		scene?: Nullable<Scene>;
		children?: Snippet;
	}

	let {
		lathe = $bindable(),
		name = $bindable(`lathe${v7()}`),
		options,
		scene,
		children
	}: Props = $props();

	lathe = CreateLathe(name, options, scene);

	onDestroy(() => {
		lathe.dispose();
	});
</script>

{@render children?.()}
