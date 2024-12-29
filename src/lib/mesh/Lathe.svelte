<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { Vector3, Vector4 } from '@babylonjs/core/Maths/math.vector';
  import type { Mesh } from '@babylonjs/core/Meshes/mesh';
  import type { Nullable } from '@babylonjs/core/types';
  import { CreateLathe } from '@babylonjs/core/Meshes/Builders/latheBuilder';

  import type { MeshProps } from './interface';
  import CreateMesh from './_CreateMesh.svelte';

  interface LatheOptions {
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
  }

  interface Props extends MeshProps {
    lathe?: Mesh;
    options: LatheOptions;
    scene?: Nullable<Scene>;
  }

  let { lathe = $bindable(), options, scene, position, lookAt }: Props = $props();
</script>

<CreateMesh
  bind:mesh={lathe}
  createMeshFunction={CreateLathe}
  {options}
  {scene}
  {position}
  {lookAt}
/>
