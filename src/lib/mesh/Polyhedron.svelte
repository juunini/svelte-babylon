<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { Scene } from '@babylonjs/core/scene';
	import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
	import type { Mesh } from '@babylonjs/core/Meshes/mesh';
	import type { Nullable } from '@babylonjs/core/types';
	import type { Color4 } from '@babylonjs/core/Maths/math.color';
	import { CreatePolyhedron } from '@babylonjs/core/Meshes/Builders/polyhedronBuilder';

	export interface PolyhedronOptions {
		backUVs?: Vector4;
		custom?: any;
		faceColors?: Color4[];
		faceUV?: Vector4[];
		flat?: boolean;
		frontUVs?: Vector4;
		sideOrientation?: number;
		size?: number;
		sizeX?: number;
		sizeY?: number;
		sizeZ?: number;
		type?: number;
		updatable?: boolean;
	}

	interface Props {
		polyhedron?: Mesh;
		name?: string;
		options?: PolyhedronOptions;
		scene?: Nullable<Scene>;
		children?: Snippet;
	}

	let {
		polyhedron = $bindable(),
		name = $bindable(`polyhedron${v7()}`),
		options,
		scene,
		children
	}: Props = $props();

	polyhedron = CreatePolyhedron(name, options, scene);

	onDestroy(() => {
		polyhedron.dispose();
	});
</script>

{@render children?.()}
