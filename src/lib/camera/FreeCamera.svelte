<script lang="ts">
  import { FreeCamera } from '@babylonjs/core/Cameras/freeCamera';

  import type { CameraProps } from './interface';
  import DefaultCamera from './_Camera.svelte';

  interface Props extends CameraProps {
    camera?: FreeCamera;
    setActiveOnSceneIfNoneActive?: boolean;
  }

  let { camera = $bindable(), position, scene, setActiveOnSceneIfNoneActive }: Props = $props();
</script>

<DefaultCamera
  bind:camera
  CameraClass={FreeCamera}
  {scene}
  {position}
  {setActiveOnSceneIfNoneActive}
/>
