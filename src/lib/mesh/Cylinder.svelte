<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
  import type { Color4 } from '@babylonjs/core/Maths/math.color';
  import type { Nullable } from '@babylonjs/core/types';
  import { CreateCylinder } from '@babylonjs/core/Meshes/Builders/cylinderBuilder';

  import type { MeshProps } from './interface';
  import DefaultMesh from './Shared.svelte';
  import { PhysicsShapeType } from '@babylonjs/core/Physics/v2/IPhysicsEnginePlugin';

  interface Props extends MeshProps {
    options?: {
      arc?: number;
      backUVs?: Vector4;
      cap?: number;
      diameter?: number;
      diameterBottom?: number;
      diameterTop?: number;
      enclose?: boolean;
      faceColors?: Color4[];
      faceUV?: Vector4[];
      frontUVs?: Vector4;
      hasRings?: boolean;
      height?: number;
      sideOrientation?: number;
      subdivisions?: number;
      tessellation?: number;
      updatable?: boolean;
    };
    scene?: Nullable<Scene>;
  }

  let { mesh = $bindable(), physicsShape = PhysicsShapeType.CYLINDER, ...props }: Props = $props();
</script>

<DefaultMesh bind:mesh createMeshFunction={CreateCylinder} {physicsShape} {...props} />
