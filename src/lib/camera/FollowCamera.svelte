<script lang="ts">
  import type { Nullable } from '@babylonjs/core/types';
  import type { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh';
  import { FollowCamera } from '@babylonjs/core/Cameras/followCamera';

  import type { CameraProps } from './interface';
  import DefaultCamera from './Shared.svelte';

  interface Props extends CameraProps {
    camera?: FollowCamera;
    lockedTarget?: Nullable<AbstractMesh>;
  }

  let { camera = $bindable(), ...props }: Props = $props();
</script>

<DefaultCamera bind:camera CameraClass={FollowCamera} {...props} />
