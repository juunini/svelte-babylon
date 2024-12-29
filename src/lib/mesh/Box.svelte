<script lang="ts">
	import type { Scene } from '@babylonjs/core/scene';
	import type { Mesh } from '@babylonjs/core/Meshes/mesh';
	import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
	import type { Color4 } from '@babylonjs/core/Maths/math.color';
	import type { Nullable } from '@babylonjs/core/types';
	import { CreateBox } from '@babylonjs/core/Meshes/Builders/boxBuilder';

	import type { MeshProps } from './interface';
	import CreateMesh from './_CreateMesh.svelte';

	interface BoxOptions {
		backUVs?: Vector4;
		bottomBaseAt?: number;
		depth?: number;
		faceColors?: Color4[];
		faceUV?: Vector4[];
		frontUVs?: Vector4;
		height?: number;
		sideOrientation?: number;
		size?: number;
		topBaseAt?: number;
		updatable?: boolean;
		width?: number;
		wrap?: boolean;
	}

	interface Props extends MeshProps {
		box?: Mesh;
		options?: BoxOptions;
		scene?: Nullable<Scene>;
	}

	let { box = $bindable(), options, position, lookAt, scene }: Props = $props();
</script>

<CreateMesh bind:mesh={box} createMeshFunction={CreateBox} {options} {scene} {position} {lookAt} />
