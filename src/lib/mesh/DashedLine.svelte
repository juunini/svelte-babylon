<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { LinesMesh } from '@babylonjs/core/Meshes/linesMesh';
  import type { Material } from '@babylonjs/core/Materials/material';
  import type { Vector3 } from '@babylonjs/core/Maths/math.vector';
  import { CreateDashedLines } from '@babylonjs/core/Meshes/Builders/linesBuilder';
  import type { MeshProps } from './interface';
  import DefaultMesh from './_Mesh.svelte';

  interface Props extends MeshProps {
    mesh?: LinesMesh;
    options: {
      dashNb?: number;
      dashSize?: number;
      gapSize?: number;
      instance?: LinesMesh;
      material?: Material;
      points: Vector3[];
      updatable?: boolean;
      useVertexAlpha?: boolean;
    };
    scene?: Scene;
  }

  let { mesh = $bindable(), options, scene, position, lookAt }: Props = $props();
</script>

<DefaultMesh
  bind:mesh
  createMeshFunction={CreateDashedLines}
  {options}
  {scene}
  {position}
  {lookAt}
/>
