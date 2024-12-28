<script lang="ts">
	import type { AbstractEngine } from '@babylonjs/core/Engines/abstractEngine';
	import { Scene, type SceneOptions } from '@babylonjs/core/scene';
	import { getContext, onDestroy, setContext, type Snippet } from 'svelte';

	interface Props {
		engine?: AbstractEngine;
		scene?: Scene;
		options?: SceneOptions;
		children?: Snippet;
	}

	let {
		engine = getContext<AbstractEngine>('engine'),
		scene = $bindable(),
		options,
		children
	}: Props = $props();

	scene = new Scene(engine, options);
	setContext('scene', scene);

	engine.runRenderLoop(() => scene.render());
	window.addEventListener('resize', () => engine.resize());

	onDestroy(() => {
		engine.stopRenderLoop();
		window.removeEventListener('resize', () => engine.resize());
		scene.dispose();
	});
</script>

{#if scene}
	{@render children?.()}
{/if}
