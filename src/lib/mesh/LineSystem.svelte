<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { LinesMesh } from '@babylonjs/core/Meshes/linesMesh';
  import type { Material } from '@babylonjs/core/Materials/material';
  import type { Vector3 } from '@babylonjs/core/Maths/math.vector';
  import type { Nullable } from '@babylonjs/core/types';
  import type { Color4 } from '@babylonjs/core/Maths/math.color';
  import { CreateLineSystem } from '@babylonjs/core/Meshes/Builders/linesBuilder';

  import type { MeshProps } from './interface';
  import CreateMesh from './_CreateMesh.svelte';

  interface LineSystemOptions {
    colors?: Nullable<Color4[][]>;
    instance?: Nullable<LinesMesh>;
    lines: Vector3[][];
    material?: Material;
    updatable?: boolean;
    useVertexAlpha?: boolean;
  }

  interface Props extends MeshProps {
    lineSystem?: LinesMesh;
    options: LineSystemOptions;
    scene?: Scene;
  }

  let { lineSystem = $bindable(), options, scene, position, lookAt }: Props = $props();
</script>

<CreateMesh
  bind:mesh={lineSystem}
  createMeshFunction={CreateLineSystem}
  {options}
  {scene}
  {position}
  {lookAt}
/>
