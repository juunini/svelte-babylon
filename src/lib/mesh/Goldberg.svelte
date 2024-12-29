<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { Scene } from '@babylonjs/core/scene';
	import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
	import type { Nullable } from '@babylonjs/core/types';
	import type { Color4 } from '@babylonjs/core/Maths/math.color';
	import type { GoldbergMesh } from '@babylonjs/core/Meshes/goldbergMesh';
	import {
		CreateGoldberg,
		type GoldbergCreationOption
	} from '@babylonjs/core/Meshes/Builders/goldbergBuilder';

	export interface GoldbergOptions {
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
		goldberg?: GoldbergMesh;
		name?: string;
		options: GoldbergCreationOption;
		scene?: Nullable<Scene>;
		children?: Snippet;
	}

	let {
		goldberg = $bindable(),
		name = $bindable(`goldberg${v7()}`),
		options,
		scene,
		children
	}: Props = $props();

	goldberg = CreateGoldberg(name, options, scene);

	onDestroy(() => {
		goldberg.dispose();
	});
</script>

{@render children?.()}
