<script lang="ts">
  import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight';

  import type { LightProps } from './interface';
  import DefaultLight from './Shared.svelte';

  interface Props extends LightProps {
    light?: DirectionalLight;
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
  LightClass={DirectionalLight}
  {scene}
  {attachParentScene}
  {direction}
  {intensity}
  {position}
/>
