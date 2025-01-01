<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
  import type { Color4 } from '@babylonjs/core/Maths/math.color';
  import type { Nullable } from '@babylonjs/core/types';
  import { CreateBox } from '@babylonjs/core/Meshes/Builders/boxBuilder';
  import { PhysicsShapeType } from '@babylonjs/core/Physics/v2/IPhysicsEnginePlugin';

  import type { MeshProps } from './interface';
  import DefaultMesh from './Shared.svelte';

  interface Props extends MeshProps {
    options?: {
      backUVs?: Vector4;
      bottomBaseAt?: number;
      depth?: number;
      faceColors?: Color4[];
      faceUV?: Vector4[];
      frontUVs?: Vector4;
      height?: number;
      sideOrientation?: number;
      size?: number;
      topBaseAt?: number;
      updatable?: boolean;
      width?: number;
      wrap?: boolean;
    };
    scene?: Nullable<Scene>;
  }

  let { mesh = $bindable(), physicsShape = PhysicsShapeType.BOX, ...props }: Props = $props();
</script>

<DefaultMesh bind:mesh createMeshFunction={CreateBox} {physicsShape} {...props} />
