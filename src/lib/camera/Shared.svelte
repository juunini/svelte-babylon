<script lang="ts">
  import { v7 } from 'uuid';
  import { getContext, onDestroy } from 'svelte';
  import type { Camera } from '@babylonjs/core/Cameras/camera';
  import { Vector3 } from '@babylonjs/core/Maths/math.vector';

  import type { CameraProps } from './interface';

  interface Props extends CameraProps {
    camera: Camera | any;
    CameraClass: any;
    setActiveOnSceneIfNoneActive?: boolean;
  }

  let {
    camera = $bindable(),
    CameraClass,
    attachParentCanvas = true,
    scene,
    position = new Vector3(0, 5, -10),
    setActiveOnSceneIfNoneActive
  }: Props = $props();
  const name = `camera${v7()}`;

  camera = new CameraClass(name, position, scene, setActiveOnSceneIfNoneActive);
  camera.setTarget?.(Vector3.Zero());

  $effect(() => {
    camera.position?.set?.(position.x, position.y, position.z);
  });

  if (attachParentCanvas) {
    const canvas = getContext('canvas');
    camera.attachControl?.(canvas, true);
  }

  onDestroy(() => {
    camera.dispose();
  });
</script>
