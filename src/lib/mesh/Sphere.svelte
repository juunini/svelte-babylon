<script lang="ts">
	import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
	import type { Mesh } from '@babylonjs/core/Meshes/mesh';
	import type { Scene } from '@babylonjs/core/scene';
	import type { Nullable } from '@babylonjs/core/types';
	import { CreateSphere } from '@babylonjs/core/Meshes/Builders/sphereBuilder';

	import type { MeshProps } from './interface';
	import CreateMesh from './_CreateMesh.svelte';

	interface SphereOptions {
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
	}

	interface Props extends MeshProps {
		sphere?: Mesh;
		options?: SphereOptions;
		scene?: Nullable<Scene>;
	}

	let { sphere = $bindable(), options, scene, position, lookAt }: Props = $props();
</script>

<CreateMesh
	bind:mesh={sphere}
	createMeshFunction={CreateSphere}
	{options}
	{scene}
	{position}
	{lookAt}
/>
