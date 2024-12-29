<script lang="ts">
	import type { Scene } from '@babylonjs/core/scene';
	import type { Vector3, Vector4 } from '@babylonjs/core/Maths/math.vector';
	import type { Mesh } from '@babylonjs/core/Meshes/mesh';
	import type { Nullable } from '@babylonjs/core/types';
	import type { Color4 } from '@babylonjs/core/Maths/math.color';
	import { CreatePolygon } from '@babylonjs/core/Meshes/Builders/polygonBuilder';

	import type { MeshProps } from './interface';
	import CreateMesh from './_CreateMesh.svelte';

	interface PolygonOptions {
		backUVs?: Vector4;
		depth?: number;
		faceColors?: Color4[];
		faceUV?: Vector4[];
		frontUVs?: Vector4;
		holes?: Vector3[][];
		shape: Vector3[];
		sideOrientation?: number;
		smoothingThreshold?: number;
		updatable?: boolean;
		wrap?: boolean;
	}

	interface Props extends MeshProps {
		polygon?: Mesh;
		options: PolygonOptions;
		scene?: Nullable<Scene>;
		earcutInjection?: any;
	}

	let {
		polygon = $bindable(),
		options,
		scene,
		earcutInjection,
		position,
		lookAt
	}: Props = $props();
</script>

<CreateMesh
	bind:mesh={polygon}
	createMeshFunction={CreatePolygon}
	{options}
	{scene}
	{earcutInjection}
	{position}
	{lookAt}
/>
