<script lang="ts">
  import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
  import type { Scene } from '@babylonjs/core/scene';
  import type { Nullable } from '@babylonjs/core/types';
  import { CreateSphere } from '@babylonjs/core/Meshes/Builders/sphereBuilder';
  import { PhysicsShapeType } from '@babylonjs/core/Physics/v2/IPhysicsEnginePlugin';

  import type { MeshProps } from './interface';
  import DefaultMesh from './Shared.svelte';

  interface Props extends MeshProps {
    options?: {
      arc?: number;
      backUVs?: Vector4;
      diameter?: number;
      diameterX?: number;
      diameterY?: number;
      diameterZ?: number;
      frontUVs?: Vector4;
      segments?: number;
      sideOrientation?: number;
      slice?: number;
      updatable?: boolean;
    };
    scene?: Nullable<Scene>;
  }

  let { mesh = $bindable(), physicsShape = PhysicsShapeType.SPHERE, ...props }: Props = $props();
</script>

<DefaultMesh bind:mesh createMeshFunction={CreateSphere} {physicsShape} {...props} />
