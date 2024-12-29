<script lang="ts">
  import { getContext, onDestroy, type Snippet } from 'svelte';
  import { v7 } from 'uuid';
  import type { Scene } from '@babylonjs/core/scene';
  import { FreeCamera } from '@babylonjs/core/Cameras/freeCamera';
  import { Vector3 } from '@babylonjs/core/Maths/math.vector';

  interface Props {
    useParentScene?: boolean;
    name?: string;
    position?: Vector3;
    scene?: Scene;
    setActiveOnSceneIfNoneActive?: boolean;
    camera?: FreeCamera;
    children?: Snippet;
  }

  let {
    useParentScene = true,
    children,
    name = $bindable(`FreeCamera${v7()}`),
    position = new Vector3(0, 0, 0),
    scene,
    setActiveOnSceneIfNoneActive,
    camera = $bindable()
  }: Props = $props();

  if (useParentScene && scene === undefined) {
    scene = getContext('scene');
  }

  const canvas = getContext('canvas');

  camera = new FreeCamera(name, position, scene, setActiveOnSceneIfNoneActive);
  camera.setTarget(Vector3.Zero());

  if (canvas) {
    camera.attachControl(canvas, true);
  }

  onDestroy(() => {
    camera.dispose();
  });
</script>

{#if children}
  {@render children?.()}
{/if}
