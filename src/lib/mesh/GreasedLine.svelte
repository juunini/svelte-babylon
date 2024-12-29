<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { Scene } from '@babylonjs/core/scene';
	import type { Nullable } from '@babylonjs/core/types';
	import type { GreasedLineBaseMesh } from '@babylonjs/core/Meshes/GreasedLine/greasedLineBaseMesh';
	import type { GreasedLineMesh } from '@babylonjs/core/Meshes/GreasedLine/greasedLineMesh';
	import type { GreasedLineRibbonMesh } from '@babylonjs/core/Meshes/GreasedLine/greasedLineRibbonMesh';
	import {
		CreateGreasedLine,
		type GreasedLineMaterialBuilderOptions,
		type GreasedLineMeshBuilderOptions
	} from '@babylonjs/core/Meshes/Builders/greasedLineBuilder';

	interface Props {
		greasedLine?: GreasedLineBaseMesh | GreasedLineMesh | GreasedLineRibbonMesh;
		name?: string;
		options: GreasedLineMeshBuilderOptions;
		materialOptions?: Nullable<GreasedLineMaterialBuilderOptions>;
		scene?: Scene;
		children?: Snippet;
	}

	let {
		greasedLine = $bindable(),
		name = $bindable(`greasedLine${v7()}`),
		options,
		materialOptions,
		scene,
		children
	}: Props = $props();

	greasedLine = CreateGreasedLine(name, options, materialOptions, scene);

	onDestroy(() => {
		greasedLine.dispose();
	});
</script>

{@render children?.()}
