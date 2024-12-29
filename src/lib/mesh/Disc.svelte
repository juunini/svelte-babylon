<script lang="ts">
	import type { Scene } from '@babylonjs/core/scene';
	import type { Mesh } from '@babylonjs/core/Meshes/mesh';
	import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
	import type { Nullable } from '@babylonjs/core/types';
	import { CreateDisc } from '@babylonjs/core/Meshes/Builders/discBuilder';

	import type { MeshProps } from './interface';
	import CreateMesh from './_CreateMesh.svelte';

	interface DiscOptions {
		arc?: number;
		backUVs?: Vector4;
		frontUVs?: Vector4;
		radius?: number;
		sideOrientation?: number;
		tessellation?: number;
		updatable?: boolean;
	}

	interface Props extends MeshProps {
		disc?: Mesh;
		options?: DiscOptions;
		scene?: Nullable<Scene>;
	}

	let { disc = $bindable(), options, scene }: Props = $props();
</script>

<CreateMesh bind:mesh={disc} createMeshFunction={CreateDisc} {options} {scene} />
