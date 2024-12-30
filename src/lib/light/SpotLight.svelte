<script lang="ts">
  import { SpotLight } from '@babylonjs/core/Lights/spotLight';

  import type { LightProps } from './interface';
  import DefaultLight from './Shared.svelte';

  interface Props extends LightProps {
    light?: SpotLight;
    angle: number;
    exponent: number;
    intensity?: number;
  }

  let {
    attachParentScene,
    light = $bindable(),
    angle,
    exponent,
    direction,
    position,
    intensity,
    scene
  }: Props = $props();
</script>

<DefaultLight
  bind:light
  LightClass={SpotLight}
  {scene}
  {attachParentScene}
  {position}
  {direction}
  {angle}
  {exponent}
  {intensity}
/>
