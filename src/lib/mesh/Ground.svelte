<script lang="ts">
	import type { GroundMesh } from '@babylonjs/core/Meshes/groundMesh';
	import type { Scene } from '@babylonjs/core/scene';
	import { CreateGround } from '@babylonjs/core/Meshes/Builders/groundBuilder';

	import type { MeshProps } from './interface';
	import CreateMesh from './_CreateMesh.svelte';

	interface GroundOptions {
		width?: number;
		height?: number;
		subdivisions?: number;
		subdivisionsX?: number;
		subdivisionsY?: number;
		updatable?: boolean;
	}

	interface Props extends MeshProps {
		ground?: GroundMesh;
		options?: GroundOptions;
		scene?: Scene;
	}

	let { ground = $bindable(), options, scene, position, lookAt }: Props = $props();
</script>

<CreateMesh
	bind:mesh={ground}
	createMeshFunction={CreateGround as any}
	{options}
	{scene}
	{position}
	{lookAt}
/>
