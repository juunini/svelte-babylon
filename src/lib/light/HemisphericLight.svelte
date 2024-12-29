<script lang="ts">
  import { getContext, onDestroy, type Snippet } from 'svelte';
  import { v7 } from 'uuid';
  import type { Scene } from '@babylonjs/core/scene';
  import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
  import { Vector3 } from '@babylonjs/core/Maths/math.vector';

  interface Props {
    useParentScene?: boolean;
    light?: HemisphericLight;
    name?: string;
    direction?: Vector3;
    scene?: Scene;
    intensity?: number;
    children?: Snippet;
  }

  let {
    useParentScene = true,
    light = $bindable(),
    name = $bindable(`light${v7()}`),
    direction = new Vector3(0, 0, 0),
    intensity = 1,
    scene,
    children
  }: Props = $props();

  if (useParentScene && scene === undefined) {
    scene = getContext('scene');
  }

  light = new HemisphericLight(name, direction, scene);

  $effect(() => {
    light.intensity = intensity;
  });

  onDestroy(() => {
    light.dispose();
  });
</script>

{#if light}
  {@render children?.()}
{/if}
