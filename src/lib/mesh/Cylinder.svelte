<script lang="ts">
	import type { Scene } from '@babylonjs/core/scene';
	import type { Mesh } from '@babylonjs/core/Meshes/mesh';
	import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
	import type { Color4 } from '@babylonjs/core/Maths/math.color';
	import type { Nullable } from '@babylonjs/core/types';
	import { CreateCylinder } from '@babylonjs/core/Meshes/Builders/cylinderBuilder';

	import type { MeshProps } from './interface';
	import CreateMesh from './_CreateMesh.svelte';

	interface CylinderOptions {
		arc?: number;
		backUVs?: Vector4;
		cap?: number;
		diameter?: number;
		diameterBottom?: number;
		diameterTop?: number;
		enclose?: boolean;
		faceColors?: Color4[];
		faceUV?: Vector4[];
		frontUVs?: Vector4;
		hasRings?: boolean;
		height?: number;
		sideOrientation?: number;
		subdivisions?: number;
		tessellation?: number;
		updatable?: boolean;
	}

	interface Props extends MeshProps {
		cylinder?: Mesh;
		options?: CylinderOptions;
		scene?: Nullable<Scene>;
	}

	let { cylinder = $bindable(), options, scene, position, lookAt }: Props = $props();
</script>

<CreateMesh
	bind:mesh={cylinder}
	createMeshFunction={CreateCylinder}
	{options}
	{scene}
	{position}
	{lookAt}
/>
