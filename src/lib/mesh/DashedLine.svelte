<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { Scene } from '@babylonjs/core/scene';
	import type { LinesMesh } from '@babylonjs/core/Meshes/linesMesh';
	import type { Material } from '@babylonjs/core/Materials/material';
	import type { Vector3 } from '@babylonjs/core/Maths/math.vector';
	import { CreateDashedLines } from '@babylonjs/core/Meshes/Builders/linesBuilder';

	export interface DashedLineOptions {
		dashNb?: number;
		dashSize?: number;
		gapSize?: number;
		instance?: LinesMesh;
		material?: Material;
		points: Vector3[];
		updatable?: boolean;
		useVertexAlpha?: boolean;
	}

	interface Props {
		dashedLine?: LinesMesh;
		name?: string;
		options: DashedLineOptions;
		scene?: Scene;
		children?: Snippet;
	}

	let {
		dashedLine = $bindable(),
		name = $bindable(`dashedLine${v7()}`),
		options,
		scene,
		children
	}: Props = $props();

	dashedLine = CreateDashedLines(name, options, scene);

	onDestroy(() => {
		dashedLine.dispose();
	});
</script>

{@render children?.()}
