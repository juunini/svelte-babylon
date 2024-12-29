<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { Vector3, Vector4 } from '@babylonjs/core/Maths/math.vector';
  import type { Mesh } from '@babylonjs/core/Meshes/mesh';
  import type { Nullable } from '@babylonjs/core/types';
  import { ExtrudeShapeCustom } from '@babylonjs/core/Meshes/Builders/shapeBuilder';

  import type { MeshProps } from './interface';
  import DefaultMesh from './_Mesh.svelte';

  interface ExtrudeShapeCustomOptions {
    adjustFrame?: boolean;
    backUVs?: Vector4;
    cap?: number;
    closePath?: boolean;
    closeShape?: boolean;
    firstNormal?: Vector3;
    frontUVs?: Vector4;
    instance?: Mesh;
    invertUV?: boolean;
    path: Vector3[];
    ribbonCloseArray?: boolean;
    ribbonClosePath?: boolean;
    rotationFunction?: Nullable<(i: number, distance: number) => number>;
    scaleFunction?: Nullable<(i: number, distance: number) => number>;
    shape: Vector3[];
    sideOrientation?: number;
    updatable?: boolean;
  }

  interface Props extends MeshProps {
    extrudeShapeCustom?: Mesh;
    options: ExtrudeShapeCustomOptions;
    scene?: Nullable<Scene>;
  }

  let { extrudeShapeCustom = $bindable(), options, scene, position, lookAt }: Props = $props();
</script>

<DefaultMesh
  bind:mesh={extrudeShapeCustom}
  createMeshFunction={ExtrudeShapeCustom}
  {options}
  {scene}
  {position}
  {lookAt}
/>
