<script lang="ts">
  import { PointLight } from '@babylonjs/core/Lights/pointLight';

  import type { LightProps } from './interface';
  import DefaultLight from './Shared.svelte';

  interface Props extends LightProps {
    light?: PointLight;
    intensity?: number;
  }

  let {
    attachParentScene,
    light = $bindable(),
    direction,
    intensity,
    position,
    scene
  }: Props = $props();
</script>

<DefaultLight
  bind:light
  LightClass={PointLight}
  {scene}
  {attachParentScene}
  {direction}
  {intensity}
  {position}
/>
