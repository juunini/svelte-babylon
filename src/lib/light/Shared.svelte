<script lang="ts">
  import { getContext, onDestroy } from 'svelte';
  import { v7 } from 'uuid';
  import { PointLight } from '@babylonjs/core/Lights/pointLight';
  import { SpotLight } from '@babylonjs/core/Lights/spotLight';
  import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
  import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight';
  import { ShadowGenerator } from '@babylonjs/core/Lights/Shadows/shadowGenerator';
  import { Vector3 } from '@babylonjs/core/Maths/math.vector';

  import type { LightProps } from './interface';

  interface Props extends LightProps {
    light: any;
    LightClass: any;
    angle?: number;
    exponent?: number;
  }

  let {
    light = $bindable(),
    LightClass,
    scene = getContext('scene'),
    direction = Vector3.Zero(),
    position = Vector3.Zero(),
    angle,
    exponent,
    intensity,
    shadowEnabled = true
  }: Props = $props();

  const name = `light${v7()}`;
  let shadowGenerator: ShadowGenerator;

  switch (LightClass) {
    case PointLight:
      light = new PointLight(name, position, scene);
      break;
    case SpotLight:
      light = new SpotLight(name, position, direction, angle!, exponent!, scene);
      break;
    case DirectionalLight:
      light = new DirectionalLight(name, direction, scene);
      break;
    default:
      light = new LightClass(name, direction, scene);
  }

  $effect(() => {
    if (LightClass === HemisphericLight) return;
    if (shadowEnabled === undefined) return;

    setTimeout(() => {
      function applyShadow() {
        if (scene!.meshes.length === 0) return;
        if (!shadowGenerator) shadowGenerator = new ShadowGenerator(1024, light);

        scene!.meshes
          .filter((mesh) => mesh.shadowEnabled)
          .forEach((mesh) => shadowGenerator.addShadowCaster(mesh));
        scene!.onAfterRenderObservable.removeCallback(applyShadow);
      }

      if (shadowEnabled) {
        scene!.onAfterRenderObservable.add(applyShadow);
      }

      light.shadowEnabled = shadowEnabled;
    }, 0);
  });

  $effect(() => {
    if (intensity === undefined) return;

    light!.intensity = intensity;
  });

  $effect(() => {
    if (direction === undefined) return;

    light!.setDirectionToTarget?.(direction);
  });

  $effect(() => {
    if (position === undefined) return;

    light!.position?.set?.(position.x, position.y, position.z);
  });

  onDestroy(() => {
    light!.dispose();
  });
</script>
