<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { Scene } from '@babylonjs/core/scene';
	import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
	import { Vector3 } from '@babylonjs/core/Maths/math.vector';

	interface Props {
		light?: HemisphericLight;
		name?: string;
		direction?: Vector3;
		scene?: Scene;
		children?: Snippet;
	}

	let {
		light = $bindable(),
		name = $bindable(`light${v7()}`),
		direction = new Vector3(0, 0, 0),
		scene,
		children
	}: Props = $props();

	light = new HemisphericLight(name, direction, scene);

	onDestroy(() => {
		light.dispose();
	});
</script>

{#if light}
	{@render children?.()}
{/if}
