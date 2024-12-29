<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { Scene } from '@babylonjs/core/scene';
	import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
	import type { Mesh } from '@babylonjs/core/Meshes/mesh';
	import type { Nullable } from '@babylonjs/core/types';
	import type { Color4 } from '@babylonjs/core/Maths/math.color';
	import { CreateGeodesic } from '@babylonjs/core/Meshes/Builders/geodesicBuilder';

	export interface GeodesicOptions {
		backUVs?: Vector4;
		faceColors?: Color4[];
		faceUV?: Vector4[];
		flat?: boolean;
		frontUVs?: Vector4;
		m?: number;
		n?: number;
		sideOrientation?: number;
		size?: number;
		sizeX?: number;
		sizeY?: number;
		sizeZ?: number;
		updatable?: boolean;
	}

	interface Props {
		geodesic?: Mesh;
		name?: string;
		options: GeodesicOptions;
		scene?: Nullable<Scene>;
		children?: Snippet;
	}

	let {
		geodesic = $bindable(),
		name = $bindable(`geodesic${v7()}`),
		options,
		scene,
		children
	}: Props = $props();

	geodesic = CreateGeodesic(name, options, scene);

	onDestroy(() => {
		geodesic.dispose();
	});
</script>

{@render children?.()}
