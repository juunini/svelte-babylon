<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { Vector3, Vector4 } from '@babylonjs/core/Maths/math.vector';
  import type { Mesh } from '@babylonjs/core/Meshes/mesh';
  import type { Nullable } from '@babylonjs/core/types';
  import { CreateTube } from '@babylonjs/core/Meshes/Builders/tubeBuilder';

  import type { MeshProps } from './interface';
  import DefaultMesh from './Shared.svelte';

  interface Props extends MeshProps {
    options: {
      arc?: number;
      backUVs?: Vector4;
      cap?: number;
      frontUVs?: Vector4;
      instance?: Mesh;
      invertUV?: boolean;
      path: Vector3[];
      radius?: number;
      radiusFunction?: (i: number, distance: number) => number;
      sideOrientation?: number;
      tessellation?: number;
      updatable?: boolean;
    };
    scene?: Nullable<Scene>;
  }

  let { mesh = $bindable(), ...props }: Props = $props();
</script>

<DefaultMesh bind:mesh createMeshFunction={CreateTube} {...props} />
