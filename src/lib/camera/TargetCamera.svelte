<script lang="ts">
  import { getContext, onDestroy, type Snippet } from 'svelte';
  import { v7 } from 'uuid';
  import type { Scene } from '@babylonjs/core/scene';
  import { TargetCamera } from '@babylonjs/core/Cameras/targetCamera';
  import { Vector3 } from '@babylonjs/core/Maths/math.vector';

  interface Props {
    useParentScene?: boolean;
    name?: string;
    position?: Vector3;
    scene?: Scene;
    setActiveOnSceneIfNoneActive?: boolean;
    camera?: TargetCamera;
    children?: Snippet;
  }

  let {
    useParentScene = true,
    children,
    name = $bindable(`TargetCamera${v7()}`),
    position = new Vector3(0, 0, 0),
    scene,
    setActiveOnSceneIfNoneActive,
    camera = $bindable()
  }: Props = $props();

  if (useParentScene && scene === undefined) {
    scene = getContext('scene');
  }

  camera = new TargetCamera(name, position, scene, setActiveOnSceneIfNoneActive);

  onDestroy(() => {
    camera.dispose();
  });
</script>

{#if children}
  {@render children?.()}
{/if}
