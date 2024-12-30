<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { LinesMesh } from '@babylonjs/core/Meshes/linesMesh';
  import type { Color4 } from '@babylonjs/core/Maths/math.color';
  import type { Nullable } from '@babylonjs/core/types';
  import type { Material } from '@babylonjs/core/Materials/material';
  import type { Vector3 } from '@babylonjs/core/Maths/math.vector';
  import { CreateLines } from '@babylonjs/core/Meshes/Builders/linesBuilder';

  import type { MeshProps } from './interface';
  import DefaultMesh from './Shared.svelte';

  interface Props extends MeshProps {
    mesh?: LinesMesh;
    options: {
      colors?: Color4[];
      instance?: Nullable<LinesMesh>;
      material?: Material;
      points: Vector3[];
      updatable?: boolean;
      useVertexAlpha?: boolean;
    };
    scene?: Scene;
  }

  let { mesh = $bindable(), ...props }: Props = $props();
</script>

<DefaultMesh bind:mesh createMeshFunction={CreateLines} {...props} />
