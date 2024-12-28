<script lang="ts">
	import { getContext, onDestroy, setContext, type Snippet } from 'svelte';
	import { Engine } from '@babylonjs/core/Engines/engine';
	import '@babylonjs/core/Materials/standardMaterial';
	import type { EngineOptions, Nullable } from '@babylonjs/core';

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
		canvasOrContext,
		antialias,
		options,
		adaptToDeviceRatio
	}: Props = $props();

	if (canvasOrContext === undefined) {
		canvasOrContext =
			getContext<
				Nullable<
					WebGL2RenderingContext | WebGLRenderingContext | HTMLCanvasElement | OffscreenCanvas
				>
			>('canvas');
	}

	engine = new Engine(canvasOrContext, antialias, options, adaptToDeviceRatio);
	setContext('engine', engine);

	onDestroy(() => {
		engine.dispose();
	});
</script>

{#if engine}
	{@render children?.()}
{/if}
