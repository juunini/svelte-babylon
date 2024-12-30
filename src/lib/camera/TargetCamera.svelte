<script lang="ts">
  import { TargetCamera } from '@babylonjs/core/Cameras/targetCamera';

  import type { CameraProps } from './interface';
  import DefaultCamera from './Shared.svelte';

  interface Props extends CameraProps {
    camera?: TargetCamera;
    setActiveOnSceneIfNoneActive?: boolean;
  }

  let { camera = $bindable(), position, scene, setActiveOnSceneIfNoneActive }: Props = $props();
</script>

<DefaultCamera
  bind:camera
  CameraClass={TargetCamera}
  {scene}
  {position}
  {setActiveOnSceneIfNoneActive}
/>
