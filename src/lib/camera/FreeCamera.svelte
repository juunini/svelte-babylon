<script lang="ts">
  import { FreeCamera } from '@babylonjs/core/Cameras/freeCamera';

  import type { CameraProps } from './interface';
  import DefaultCamera from './Shared.svelte';

  interface Props extends CameraProps {
    camera?: FreeCamera;
  }

  let { camera = $bindable(), ...props }: Props = $props();
</script>

<DefaultCamera bind:camera CameraClass={FreeCamera} {...props} />
