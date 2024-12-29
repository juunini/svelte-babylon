<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { GroundMesh } from '@babylonjs/core/Meshes/groundMesh';
	import type { Scene } from '@babylonjs/core/scene';
	import type { Color3 } from '@babylonjs/core/Maths/math.color';
	import type { Nullable } from '@babylonjs/core/types';
	import { CreateGroundFromHeightMap } from '@babylonjs/core/Meshes/Builders/groundBuilder';

	export interface GroundFromHeightMapOptions {
		alphaFilter?: number;
		colorFilter?: Color3;
		height?: number;
		maxHeight?: number;
		minHeight?: number;
		onError?: (message?: string, exception?: any) => void;
		onReady?: (mesh: GroundMesh, heightBuffer?: Float32Array) => void;
		passHeightBufferInCallback?: boolean;
		subdivisions?: number;
		updatable?: boolean;
		width?: number;
	}

	interface Props {
		groundFromHeightMap?: GroundMesh;
		name?: string;
		url: string | { data: Uint8Array; height: number; width: number };
		options?: GroundFromHeightMapOptions;
		scene?: Nullable<Scene>;
		children?: Snippet;
	}

	let {
		groundFromHeightMap = $bindable(),
		name = $bindable(`groundFromHeightMap${v7()}`),
		url,
		options,
		scene,
		children
	}: Props = $props();

	groundFromHeightMap = CreateGroundFromHeightMap(name, url, options, scene);

	onDestroy(() => {
		groundFromHeightMap.dispose();
	});
</script>

{@render children?.()}
