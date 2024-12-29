<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
  import type { Mesh } from '@babylonjs/core/Meshes/mesh';
  import type { Nullable } from '@babylonjs/core/types';
  import type { Color4 } from '@babylonjs/core/Maths/math.color';
  import { CreatePolyhedron } from '@babylonjs/core/Meshes/Builders/polyhedronBuilder';

  import type { MeshProps } from './interface';
  import CreateMesh from './_CreateMesh.svelte';

  interface PolyhedronOptions {
    backUVs?: Vector4;
    custom?: any;
    faceColors?: Color4[];
    faceUV?: Vector4[];
    flat?: boolean;
    frontUVs?: Vector4;
    sideOrientation?: number;
    size?: number;
    sizeX?: number;
    sizeY?: number;
    sizeZ?: number;
    type?: number;
    updatable?: boolean;
  }

  interface Props extends MeshProps {
    polyhedron?: Mesh;
    options?: PolyhedronOptions;
    scene?: Nullable<Scene>;
  }

  let { polyhedron = $bindable(), options, scene, position, lookAt }: Props = $props();
</script>

<CreateMesh
  bind:mesh={polyhedron}
  createMeshFunction={CreatePolyhedron}
  {options}
  {scene}
  {position}
  {lookAt}
/>
