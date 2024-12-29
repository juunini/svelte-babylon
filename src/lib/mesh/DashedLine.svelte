<script lang="ts">
	import type { Scene } from '@babylonjs/core/scene';
	import type { LinesMesh } from '@babylonjs/core/Meshes/linesMesh';
	import type { Material } from '@babylonjs/core/Materials/material';
	import type { Vector3 } from '@babylonjs/core/Maths/math.vector';
	import { CreateDashedLines } from '@babylonjs/core/Meshes/Builders/linesBuilder';
	import type { MeshProps } from './interface';
	import CreateMesh from './_CreateMesh.svelte';

	interface DashedLineOptions {
		dashNb?: number;
		dashSize?: number;
		gapSize?: number;
		instance?: LinesMesh;
		material?: Material;
		points: Vector3[];
		updatable?: boolean;
		useVertexAlpha?: boolean;
	}

	interface Props extends MeshProps {
		dashedLine?: LinesMesh;
		options: DashedLineOptions;
		scene?: Scene;
	}

	let { dashedLine = $bindable(), options, scene, position, lookAt }: Props = $props();
</script>

<CreateMesh
	bind:mesh={dashedLine}
	createMeshFunction={CreateDashedLines}
	{options}
	{scene}
	{position}
	{lookAt}
/>
