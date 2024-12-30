<script lang="ts">
  import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight';

  import type { LightProps } from './interface';
  import DefaultLight from './Shared.svelte';

  interface Props extends LightProps {
    light?: DirectionalLight;
    intensity?: number;
  }

  let { light = $bindable(), ...props }: Props = $props();
</script>

<DefaultLight bind:light LightClass={DirectionalLight} {...props} />
