<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { Scene } from '@babylonjs/core/scene';
	import type { Mesh } from '@babylonjs/core/Meshes/mesh';
	import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
	import type { Nullable } from '@babylonjs/core/types';
	import type { Plane } from '@babylonjs/core/Maths/math.plane';
	import { CreatePlane } from '@babylonjs/core/Meshes/Builders/planeBuilder';

	export interface PlaneOptions {
		backUVs?: Vector4;
		frontUVs?: Vector4;
		height?: number;
		sideOrientation?: number;
		size?: number;
		sourcePlane?: Plane;
		updatable?: boolean;
		width?: number;
	}

	interface Props {
		plane?: Mesh;
		name?: string;
		options?: PlaneOptions;
		scene?: Nullable<Scene>;
		children?: Snippet;
	}

	let {
		plane = $bindable(),
		name = $bindable(`plane${v7()}`),
		options,
		scene,
		children
	}: Props = $props();

	plane = CreatePlane(name, options, scene);

	onDestroy(() => {
		plane.dispose();
	});
</script>

{@render children?.()}
