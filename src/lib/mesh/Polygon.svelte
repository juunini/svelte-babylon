<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { Vector3, Vector4 } from '@babylonjs/core/Maths/math.vector';
  import type { Nullable } from '@babylonjs/core/types';
  import type { Color4 } from '@babylonjs/core/Maths/math.color';
  import { CreatePolygon } from '@babylonjs/core/Meshes/Builders/polygonBuilder';

  import type { MeshProps } from './interface';
  import DefaultMesh from './Shared.svelte';

  interface Props extends MeshProps {
    options: {
      backUVs?: Vector4;
      depth?: number;
      faceColors?: Color4[];
      faceUV?: Vector4[];
      frontUVs?: Vector4;
      holes?: Vector3[][];
      shape: Vector3[];
      sideOrientation?: number;
      smoothingThreshold?: number;
      updatable?: boolean;
      wrap?: boolean;
    };
    scene?: Nullable<Scene>;
    earcutInjection?: any;
  }

  let { mesh = $bindable(), ...props }: Props = $props();
</script>

<DefaultMesh bind:mesh createMeshFunction={CreatePolygon} {...props} />
