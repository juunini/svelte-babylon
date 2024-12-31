<script lang="ts">
  import { FlyCamera } from '@babylonjs/core/Cameras/flyCamera';

  import type { CameraProps } from './interface';
  import DefaultCamera from './Shared.svelte';

  interface Props extends CameraProps {
    camera?: FlyCamera;
    setActiveOnSceneIfNoneActive?: boolean;
  }

  let { camera = $bindable(), ...props }: Props = $props();
</script>

<DefaultCamera bind:camera CameraClass={FlyCamera} {...props} />
