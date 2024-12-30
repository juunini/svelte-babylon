<script lang="ts">
  import { onDestroy } from 'svelte';
  import { v7 } from 'uuid';
  import { PointLight } from '@babylonjs/core/Lights/pointLight';
  import { SpotLight } from '@babylonjs/core/Lights/spotLight';
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
    scene,
    direction = Vector3.Zero(),
    position = Vector3.Zero(),
    angle,
    exponent,
    intensity
  }: Props = $props();

  const name = `light${v7()}`;

  if (light instanceof PointLight) {
    light = new LightClass(name, position, scene);
  } else if (light instanceof SpotLight) {
    light = new LightClass(name, position, direction, angle, exponent, scene);
  } else {
    light = new LightClass(name, direction, scene);
  }

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
