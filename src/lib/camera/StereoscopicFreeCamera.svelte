<script lang="ts">
  import { StereoscopicFreeCamera } from '@babylonjs/core/Cameras/Stereoscopic/stereoscopicFreeCamera';

  import type { CameraProps } from './interface';
  import DefaultCamera from './Shared.svelte';

  interface Props extends CameraProps {
    camera?: StereoscopicFreeCamera;
    interaxialDistance: number;
    isStereoscopicSideBySide: boolean;
  }

  let { camera = $bindable(), ...props }: Props = $props();
</script>

<DefaultCamera bind:camera CameraClass={StereoscopicFreeCamera} {...props} />
