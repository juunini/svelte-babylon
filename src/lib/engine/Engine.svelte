<script lang="ts">
  import { getContext, onDestroy, setContext, type Snippet } from 'svelte';
  import '@babylonjs/core/Materials/standardMaterial';
  import type { Nullable } from '@babylonjs/core/types';
  import type { EngineOptions } from '@babylonjs/core/Engines/thinEngine';
  import { Engine } from '@babylonjs/core/Engines/engine';

  interface Props {
    useParentCanvas?: boolean;
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
    useParentCanvas = true,
    children,
    engine = $bindable(),
    canvasOrContext = getContext('canvas'),
    antialias,
    options,
    adaptToDeviceRatio
  }: Props = $props();

  if (useParentCanvas && canvasOrContext === undefined) {
    canvasOrContext = getContext('canvas');
  }

  engine = new Engine(canvasOrContext!, antialias, options, adaptToDeviceRatio);
  setContext('engine', engine);

  onDestroy(() => {
    engine.dispose();
  });
</script>

{#if engine}
  {@render children?.()}
{/if}
