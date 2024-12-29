<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { Mesh } from '@babylonjs/core/Meshes/mesh';
  import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
  import { CreateTorus } from '@babylonjs/core/Meshes/Builders/torusBuilder';

  import type { MeshProps } from './interface';
  import CreateMesh from './_CreateMesh.svelte';

  interface TorusOptions {
    backUVs?: Vector4;
    diameter?: number;
    frontUVs?: Vector4;
    sideOrientation?: number;
    tessellation?: number;
    thickness?: number;
    updatable?: boolean;
  }

  interface Props extends MeshProps {
    torus?: Mesh;
    options?: TorusOptions;
    scene?: Scene;
  }

  let { torus = $bindable(), options, scene, position, lookAt }: Props = $props();
</script>

<CreateMesh
  bind:mesh={torus}
  createMeshFunction={CreateTorus as any}
  {options}
  {scene}
  {position}
  {lookAt}
/>
