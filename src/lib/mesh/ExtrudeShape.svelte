<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { Vector3, Vector4 } from '@babylonjs/core/Maths/math.vector';
  import type { Mesh } from '@babylonjs/core/Meshes/mesh';
  import type { Nullable } from '@babylonjs/core/types';
  import { ExtrudeShape } from '@babylonjs/core/Meshes/Builders/shapeBuilder';

  import type { MeshProps } from './interface';
  import DefaultMesh from './Shared.svelte';

  interface Props extends MeshProps {
    options: {
      adjustFrame?: boolean;
      backUVs?: Vector4;
      cap?: number;
      closePath?: boolean;
      closeShape?: boolean;
      firstNormal?: Vector3;
      frontUVs?: Vector4;
      instance?: Mesh;
      invertUV?: boolean;
      path: Vector3[];
      rotation?: number;
      scale?: number;
      shape: Vector3[];
      sideOrientation?: number;
      updatable?: boolean;
    };
    scene?: Nullable<Scene>;
  }

  let { mesh = $bindable(), ...props }: Props = $props();
</script>

<DefaultMesh bind:mesh createMeshFunction={ExtrudeShape} {...props} />
