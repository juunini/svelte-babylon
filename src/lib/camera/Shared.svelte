<script lang="ts">
  import { v7 } from 'uuid';
  import { getContext, onDestroy } from 'svelte';
  import type { Camera } from '@babylonjs/core/Cameras/camera';
  import { Vector3 } from '@babylonjs/core/Maths/math.vector';

  import type { CameraProps } from './interface';
  import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';

  interface Props extends CameraProps {
    camera: Camera | any;
    CameraClass: any;
    setActiveOnSceneIfNoneActive?: boolean;
    [key: string]: any;
  }

  let {
    camera = $bindable(),
    CameraClass,
    attachParentCanvas = true,
    scene = getContext('scene'),
    position = new Vector3(0, 5, -10),
    setActiveOnSceneIfNoneActive,
    ...props
  }: Props = $props();
  const name = `camera${v7()}`;

  if (CameraClass === ArcRotateCamera) {
    camera = new ArcRotateCamera(
      name,
      props.alpha,
      props.beta,
      props.radius,
      props.target,
      scene,
      setActiveOnSceneIfNoneActive
    );
  } else {
    camera = new CameraClass(name, position, scene, setActiveOnSceneIfNoneActive);
  }
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
