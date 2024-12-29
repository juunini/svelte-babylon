<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { Scene } from '@babylonjs/core/scene';
	import type { Mesh } from '@babylonjs/core/Meshes/mesh';
	import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
	import type { Nullable } from '@babylonjs/core/types';
	import { CreateDisc } from '@babylonjs/core/Meshes/Builders/discBuilder';

	export interface DiscOptions {
		arc?: number;
		backUVs?: Vector4;
		frontUVs?: Vector4;
		radius?: number;
		sideOrientation?: number;
		tessellation?: number;
		updatable?: boolean;
	}

	interface Props {
		disc?: Mesh;
		name?: string;
		options?: DiscOptions;
		scene?: Nullable<Scene>;
		children?: Snippet;
	}

	let {
		disc = $bindable(),
		name = $bindable(`disc${v7()}`),
		options,
		scene,
		children
	}: Props = $props();

	disc = CreateDisc(name, options, scene);

	onDestroy(() => {
		disc.dispose();
	});
</script>

{@render children?.()}
