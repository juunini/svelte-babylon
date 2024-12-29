<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { LinesMesh } from '@babylonjs/core/Meshes/linesMesh';
  import type { Color4 } from '@babylonjs/core/Maths/math.color';
  import type { Nullable } from '@babylonjs/core/types';
  import type { Material } from '@babylonjs/core/Materials/material';
  import type { Vector3 } from '@babylonjs/core/Maths/math.vector';
  import { CreateLines } from '@babylonjs/core/Meshes/Builders/linesBuilder';

  import type { MeshProps } from './interface';
  import DefaultMesh from './_Mesh.svelte';

  interface LineOptions {
    colors?: Color4[];
    instance?: Nullable<LinesMesh>;
    material?: Material;
    points: Vector3[];
    updatable?: boolean;
    useVertexAlpha?: boolean;
  }

  interface Props extends MeshProps {
    mesh?: LinesMesh;
    options: LineOptions;
    scene?: Scene;
  }

  let { mesh = $bindable(), options, scene, position, lookAt }: Props = $props();
</script>

<DefaultMesh bind:mesh createMeshFunction={CreateLines} {options} {scene} {position} {lookAt} />
