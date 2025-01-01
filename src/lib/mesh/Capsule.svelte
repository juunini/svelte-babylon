<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { Nullable } from '@babylonjs/core/types';
  import type { ICreateCapsuleOptions } from '@babylonjs/core/Meshes/Builders/capsuleBuilder';
  import { CreateCapsule } from '@babylonjs/core/Meshes/Builders/capsuleBuilder';
  import { PhysicsShapeType } from '@babylonjs/core/Physics/v2/IPhysicsEnginePlugin';

  import type { MeshProps } from './interface';
  import DefaultMesh from './Shared.svelte';

  interface Props extends MeshProps {
    options?: ICreateCapsuleOptions;
    scene?: Nullable<Scene>;
  }

  let { mesh = $bindable(), physicsShape = PhysicsShapeType.CAPSULE, ...props }: Props = $props();
</script>

<DefaultMesh bind:mesh createMeshFunction={CreateCapsule} {physicsShape} {...props} />
