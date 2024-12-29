<script lang="ts">
  import { v7 } from 'uuid';
  import { getContext, onDestroy } from 'svelte';
  import { Camera } from '@babylonjs/core/Cameras/camera';
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
    attachParentScene = true,
    scene,
    position = new Vector3(0, 5, -10),
    setActiveOnSceneIfNoneActive
  }: Props = $props();

  if (attachParentScene && scene === undefined) {
    scene = getContext('scene');
  }

  camera = new CameraClass(`camera${v7()}`, position, scene, setActiveOnSceneIfNoneActive);

  camera.setTarget?.(Vector3.Zero());

  $effect(() => {
    camera.position = position;
  });

  if (attachParentCanvas) {
    const canvas = getContext('canvas');
    camera.attachControl?.(canvas, true);
  }

  onDestroy(() => {
    camera.dispose();
  });
</script>
