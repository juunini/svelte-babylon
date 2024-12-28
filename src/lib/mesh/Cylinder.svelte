<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { Scene } from '@babylonjs/core/scene';
	import type { Mesh } from '@babylonjs/core/Meshes/mesh';
	import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
	import type { Color4 } from '@babylonjs/core/Maths/math.color';
	import type { Nullable } from '@babylonjs/core/types';
	import { CreateCylinder } from '@babylonjs/core/Meshes/Builders/cylinderBuilder';

	export interface CylinderOptions {
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

	interface Props {
		cylinder?: Mesh;
		name?: string;
		options?: CylinderOptions;
		scene?: Nullable<Scene>;
		children?: Snippet;
	}

	let {
		cylinder = $bindable(),
		name = $bindable(`cylinder${v7()}`),
		options,
		scene,
		children
	}: Props = $props();

	cylinder = CreateCylinder(name, options, scene);

	onDestroy(() => {
		cylinder.dispose();
	});
</script>

{@render children?.()}
