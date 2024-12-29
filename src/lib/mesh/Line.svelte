<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { Scene } from '@babylonjs/core/scene';
	import type { LinesMesh } from '@babylonjs/core/Meshes/linesMesh';
	import type { Color4 } from '@babylonjs/core/Maths/math.color';
	import type { Nullable } from '@babylonjs/core/types';
	import type { Material } from '@babylonjs/core/Materials/material';
	import type { Vector3 } from '@babylonjs/core/Maths/math.vector';
	import { CreateLines } from '@babylonjs/core/Meshes/Builders/linesBuilder';

	export interface LineOptions {
		colors?: Color4[];
		instance?: Nullable<LinesMesh>;
		material?: Material;
		points: Vector3[];
		updatable?: boolean;
		useVertexAlpha?: boolean;
	}

	interface Props {
		line?: LinesMesh;
		name?: string;
		options: LineOptions;
		scene?: Scene;
		children?: Snippet;
	}

	let {
		line = $bindable(),
		name = $bindable(`line${v7()}`),
		options,
		scene,
		children
	}: Props = $props();

	line = CreateLines(name, options, scene);

	onDestroy(() => {
		line.dispose();
	});
</script>

{@render children?.()}
