<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
	import type { Mesh } from '@babylonjs/core/Meshes/mesh';
	import type { Scene } from '@babylonjs/core/scene';
	import type { Nullable } from '@babylonjs/core/types';
	import { CreateSphere } from '@babylonjs/core/Meshes/Builders/sphereBuilder';

	interface Props {
		sphere?: Mesh;
		name?: string;
		options?: {
			arc?: number;
			backUVs?: Vector4;
			diameter?: number;
			diameterX?: number;
			diameterY?: number;
			diameterZ?: number;
			frontUVs?: Vector4;
			segments?: number;
			sideOrientation?: number;
			slice?: number;
			updatable?: boolean;
		};
		scene?: Nullable<Scene>;
		children?: Snippet;
	}

	let {
		sphere = $bindable(),
		name = $bindable(`sphere${v7()}`),
		options,
		scene,
		children
	}: Props = $props();

	sphere = CreateSphere(name, options, scene);

	onDestroy(() => {
		sphere.dispose();
	});
</script>

{@render children?.()}
