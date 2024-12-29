<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { LinesMesh } from '@babylonjs/core/Meshes/linesMesh';
  import type { Material } from '@babylonjs/core/Materials/material';
  import type { Vector3 } from '@babylonjs/core/Maths/math.vector';
  import type { Nullable } from '@babylonjs/core/types';
  import type { Color4 } from '@babylonjs/core/Maths/math.color';
  import { CreateLineSystem } from '@babylonjs/core/Meshes/Builders/linesBuilder';

  import type { MeshProps } from './interface';
  import DefaultMesh from './_Mesh.svelte';

  interface Props extends MeshProps {
    mesh?: LinesMesh;
    options: {
      colors?: Nullable<Color4[][]>;
      instance?: Nullable<LinesMesh>;
      lines: Vector3[][];
      material?: Material;
      updatable?: boolean;
      useVertexAlpha?: boolean;
    };
    scene?: Scene;
  }

  let { mesh = $bindable(), options, scene, position, lookAt }: Props = $props();
</script>

<DefaultMesh
  bind:mesh
  createMeshFunction={CreateLineSystem}
  {options}
  {scene}
  {position}
  {lookAt}
/>
