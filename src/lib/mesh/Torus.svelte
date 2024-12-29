<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
  import { CreateTorus } from '@babylonjs/core/Meshes/Builders/torusBuilder';

  import type { MeshProps } from './interface';
  import DefaultMesh from './_Mesh.svelte';

  interface Props extends MeshProps {
    options?: {
      backUVs?: Vector4;
      diameter?: number;
      frontUVs?: Vector4;
      sideOrientation?: number;
      tessellation?: number;
      thickness?: number;
      updatable?: boolean;
    };
    scene?: Scene;
  }

  let { mesh = $bindable(), options, scene, position, lookAt }: Props = $props();
</script>

<DefaultMesh
  bind:mesh
  createMeshFunction={CreateTorus as any}
  {options}
  {scene}
  {position}
  {lookAt}
/>
