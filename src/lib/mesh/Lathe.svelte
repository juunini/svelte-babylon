<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { Vector3, Vector4 } from '@babylonjs/core/Maths/math.vector';
  import type { Nullable } from '@babylonjs/core/types';
  import { CreateLathe } from '@babylonjs/core/Meshes/Builders/latheBuilder';

  import type { MeshProps } from './interface';
  import DefaultMesh from './Shared.svelte';

  interface Props extends MeshProps {
    options: {
      arc?: number;
      backUVs?: Vector4;
      cap?: number;
      clip?: number;
      closed?: boolean;
      frontUVs?: Vector4;
      invertUV?: boolean;
      radius?: number;
      shape: Vector3[];
      sideOrientation?: number;
      tessellation?: number;
      updatable?: boolean;
    };
    scene?: Nullable<Scene>;
  }

  let { mesh = $bindable(), options, scene, position, lookAt }: Props = $props();
</script>

<DefaultMesh bind:mesh createMeshFunction={CreateLathe} {options} {scene} {position} {lookAt} />
