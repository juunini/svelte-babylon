<script lang="ts">
  import type { Vector3 } from '@babylonjs/core/Maths/math.vector';
  import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';

  import type { CameraProps } from './interface';
  import DefaultCamera from './Shared.svelte';

  interface Props extends CameraProps {
    camera?: ArcRotateCamera;
    alpha: number;
    beta: number;
    radius: number;
    target: Vector3;
  }

  let { camera = $bindable(), ...props }: Props = $props();
</script>

<DefaultCamera bind:camera CameraClass={ArcRotateCamera} {...props} />
