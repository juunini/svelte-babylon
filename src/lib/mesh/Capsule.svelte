<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { Scene } from '@babylonjs/core/scene';
	import type { Mesh } from '@babylonjs/core/Meshes/mesh';
	import type { Nullable } from '@babylonjs/core/types';
	import { CreateCapsule } from '@babylonjs/core/Meshes/Builders/capsuleBuilder';
	import type { ICreateCapsuleOptions } from '@babylonjs/core/Meshes/Builders/capsuleBuilder';

	interface Props {
		capsule?: Mesh;
		name?: string;
		options?: ICreateCapsuleOptions;
		scene?: Nullable<Scene>;
		children?: Snippet;
	}

	let {
		capsule = $bindable(),
		name = $bindable(`capsule${v7()}`),
		options,
		scene,
		children
	}: Props = $props();

	capsule = CreateCapsule(name, options, scene);

	onDestroy(() => {
		capsule.dispose();
	});
</script>

{@render children?.()}
