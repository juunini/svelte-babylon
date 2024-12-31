<script lang="ts">
  import { v7 } from 'uuid';
  import { getContext, onDestroy } from 'svelte';
  import { Vector3 } from '@babylonjs/core/Maths/math.vector';
  import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
  import { ArcFollowCamera, FollowCamera } from '@babylonjs/core/Cameras/followCamera';
  import type { Camera } from '@babylonjs/core/Cameras/camera';

  import type { CameraProps } from './interface';

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
  } else if (CameraClass === FollowCamera) {
    camera = new FollowCamera(name, position, scene, props.lockedTarget);
  } else if (CameraClass === ArcFollowCamera) {
    if (scene == null) {
      throw new Error('ArcFollowCamera requires a scene to be provided');
    }

    camera = new ArcFollowCamera(name, props.alpha, props.beta, props.radius, props.target, scene);
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
