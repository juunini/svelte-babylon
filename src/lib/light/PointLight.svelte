<script lang="ts">
  import { PointLight } from '@babylonjs/core/Lights/pointLight';

  import type { LightProps } from './interface';
  import DefaultLight from './Shared.svelte';

  interface Props extends LightProps {
    light?: PointLight;
    intensity?: number;
  }

  let { light = $bindable(), ...props }: Props = $props();
</script>

<DefaultLight bind:light LightClass={PointLight} {...props} />
