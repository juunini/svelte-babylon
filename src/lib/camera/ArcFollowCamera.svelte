<script lang="ts">
  import type { Nullable } from '@babylonjs/core/types';
  import type { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh';
  import { ArcFollowCamera } from '@babylonjs/core/Cameras/followCamera';

  import type { CameraProps } from './interface';
  import DefaultCamera from './Shared.svelte';

  interface Props extends CameraProps {
    camera?: ArcFollowCamera;
    /** The longitudinal angle of the camera */
    alpha: number;
    /** The latitudinal angle of the camera */
    beta: number;
    /** The radius of the camera from its target */
    radius: number;
    /** Define the camera target (the mesh it should follow) */
    target: Nullable<AbstractMesh>;
  }

  let { camera = $bindable(), ...props }: Props = $props();
</script>

<DefaultCamera bind:camera CameraClass={ArcFollowCamera} {...props} />
