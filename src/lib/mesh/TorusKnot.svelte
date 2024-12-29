<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { Mesh } from '@babylonjs/core/Meshes/mesh';
  import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
  import { CreateTorusKnot } from '@babylonjs/core/Meshes/Builders/torusKnotBuilder';

  import type { MeshProps } from './interface';
  import DefaultMesh from './_Mesh.svelte';

  interface TorusKnotOptions {
    backUVs?: Vector4;
    frontUVs?: Vector4;
    p?: number;
    q?: number;
    radialSegments?: number;
    radius?: number;
    sideOrientation?: number;
    tube?: number;
    tubularSegments?: number;
    updatable?: boolean;
  }

  interface Props extends MeshProps {
    torusKnot?: Mesh;
    options?: TorusKnotOptions;
    scene?: Scene;
  }

  let { torusKnot = $bindable(), options, scene, position, lookAt }: Props = $props();
</script>

<DefaultMesh
  bind:mesh={torusKnot}
  createMeshFunction={CreateTorusKnot as any}
  {options}
  {scene}
  {position}
  {lookAt}
/>
