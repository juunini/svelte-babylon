<script lang="ts">
  import { Vector3 } from '@babylonjs/core/Maths/math.vector';
  import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';

  import type { CameraProps } from './interface';
  import DefaultCamera from './Shared.svelte';

  interface Props extends CameraProps {
    camera?: ArcRotateCamera;
    alpha: number;
    beta: number;
    radius: number;
    target?: Vector3;
  }

  let { camera = $bindable(), target = Vector3.Zero(), ...props }: Props = $props();
</script>

<DefaultCamera bind:camera CameraClass={ArcRotateCamera} {target} {...props} />
