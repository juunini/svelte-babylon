<script lang="ts">
	import { getContext, onDestroy, setContext, type Snippet } from 'svelte';
	import '@babylonjs/core/Materials/standardMaterial';
	import type { EngineOptions, Nullable } from '@babylonjs/core';
	import { Engine } from '@babylonjs/core/Engines/engine';

	interface Props {
		canvasOrContext?: Nullable<
			WebGL2RenderingContext | WebGLRenderingContext | HTMLCanvasElement | OffscreenCanvas
		>;
		engine?: Engine;
		antialias?: boolean;
		options?: EngineOptions;
		adaptToDeviceRatio?: boolean;
		children?: Snippet;
	}

	let {
		children,
		engine = $bindable(),
		canvasOrContext = getContext('canvas'),
		antialias,
		options,
		adaptToDeviceRatio
	}: Props = $props();

	engine = new Engine(canvasOrContext!, antialias, options, adaptToDeviceRatio);
	setContext('engine', engine);

	onDestroy(() => {
		engine.dispose();
	});
</script>

{#if engine}
	{@render children?.()}
{/if}
