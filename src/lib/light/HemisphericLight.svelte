<script lang="ts">
  import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';

  import type { LightProps } from './interface';
  import DefaultLight from './Shared.svelte';

  interface Props extends LightProps {
    light?: HemisphericLight;
    intensity?: number;
  }

  let { attachParentScene, light = $bindable(), direction, intensity, scene }: Props = $props();
</script>

<DefaultLight
  bind:light
  LightClass={HemisphericLight}
  {scene}
  {attachParentScene}
  {direction}
  {intensity}
/>
