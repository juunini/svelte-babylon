<script lang="ts">
	import type { Scene } from '@babylonjs/core/scene';
	import type { Mesh } from '@babylonjs/core/Meshes/mesh';
	import type { Nullable } from '@babylonjs/core/types';
	import { CreateCapsule } from '@babylonjs/core/Meshes/Builders/capsuleBuilder';
	import type { ICreateCapsuleOptions } from '@babylonjs/core/Meshes/Builders/capsuleBuilder';

	import type { MeshProps } from './interface';
	import CreateMesh from './_CreateMesh.svelte';

	interface Props extends MeshProps {
		capsule?: Mesh;
		options?: ICreateCapsuleOptions;
		scene?: Nullable<Scene>;
	}

	let { capsule = $bindable(), options, scene, position, lookAt }: Props = $props();
</script>

<CreateMesh
	bind:mesh={capsule}
	createMeshFunction={CreateCapsule}
	{options}
	{scene}
	{position}
	{lookAt}
/>
