<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { Scene } from '@babylonjs/core/scene';
	import type { LinesMesh } from '@babylonjs/core/Meshes/linesMesh';
	import type { Material } from '@babylonjs/core/Materials/material';
	import type { Vector3 } from '@babylonjs/core/Maths/math.vector';
	import type { Nullable } from '@babylonjs/core/types';
	import type { Color4 } from '@babylonjs/core/Maths/math.color';
	import { CreateLineSystem } from '@babylonjs/core/Meshes/Builders/linesBuilder';

	export interface LineSystemOptions {
		colors?: Nullable<Color4[][]>;
		instance?: Nullable<LinesMesh>;
		lines: Vector3[][];
		material?: Material;
		updatable?: boolean;
		useVertexAlpha?: boolean;
	}

	interface Props {
		lineSystem?: LinesMesh;
		name?: string;
		options: LineSystemOptions;
		scene?: Scene;
		children?: Snippet;
	}

	let {
		lineSystem = $bindable(),
		name = $bindable(`lineSystem${v7()}`),
		options,
		scene,
		children
	}: Props = $props();

	lineSystem = CreateLineSystem(name, options, scene);

	onDestroy(() => {
		lineSystem.dispose();
	});
</script>

{@render children?.()}
