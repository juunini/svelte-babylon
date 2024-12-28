<script lang="ts">
	import { onDestroy, setContext, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { Scene } from '@babylonjs/core/scene';
	import { FreeCamera } from '@babylonjs/core/Cameras/freeCamera';
	import { Vector3 } from '@babylonjs/core/Maths/math.vector';

	interface Props {
		name?: string;
		position?: Vector3;
		scene?: Scene;
		setActiveOnSceneIfNoneActive?: boolean;
		camera?: FreeCamera;
		children?: Snippet;
	}

	let {
		children,
		name = $bindable(),
		position,
		scene,
		setActiveOnSceneIfNoneActive,
		camera = $bindable()
	}: Props = $props();

	if (name === undefined) {
		name = `FreeCamera${v7()}`;
	}

	if (position === undefined) {
		position = new Vector3(0, 0, 0);
	}

	camera = new FreeCamera(name, position, scene, setActiveOnSceneIfNoneActive);

	onDestroy(() => {
		camera.dispose();
	});
</script>

{#if children}
	{@render children?.()}
{/if}
