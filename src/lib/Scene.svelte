<script lang="ts">
  import { getContext, onDestroy, setContext, type Snippet } from 'svelte';
  import type { AbstractEngine } from '@babylonjs/core/Engines/abstractEngine';
  import type { Vector3 } from '@babylonjs/core/Maths/math.vector';
  import { Scene, type SceneOptions } from '@babylonjs/core/scene';

  import { enablePhysics } from './Scene';

  interface Props {
    engine?: AbstractEngine;
    scene?: Scene;
    options?: SceneOptions;
    physics?: boolean;
    physicsOptions?: {
      gravity?: Vector3;
      useDeltaForWorldStep?: boolean;
    };
    children?: Snippet;
  }

  let {
    engine = getContext<AbstractEngine>('engine'),
    scene = $bindable(),
    options,
    physics = true,
    physicsOptions,
    children
  }: Props = $props();

  scene = new Scene(engine, options);
  setContext('scene', scene);

  $effect(() => {
    if (physics === true) {
      if (!scene.isPhysicsEnabled || !scene.getPhysicsEngine?.()) {
        enablePhysics(scene, physicsOptions?.gravity, physicsOptions?.useDeltaForWorldStep);
      }

      scene.physicsEnabled = true;
      return;
    }

    scene.physicsEnabled = false;
  });

  $effect(() => {
    if (!physicsOptions) return;

    setTimeout(() => {
      if (physicsOptions.gravity) scene.getPhysicsEngine?.()?.setGravity(physicsOptions.gravity);
      if (physicsOptions.useDeltaForWorldStep) {
        scene.getPhysicsEngine?.()?.setTimeStep(1 / 60);
      } else {
        scene.getPhysicsEngine?.()?.setTimeStep(0);
      }
    }, 0);
  });

  engine.runRenderLoop(() => scene!.render());
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
