<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { Mesh } from '@babylonjs/core/Meshes/mesh';
  import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
  import type { Nullable } from '@babylonjs/core/types';
  import type { Plane } from '@babylonjs/core/Maths/math.plane';
  import { CreatePlane } from '@babylonjs/core/Meshes/Builders/planeBuilder';

  import type { MeshProps } from './interface';
  import DefaultMesh from './_Mesh.svelte';

  interface PlaneOptions {
    backUVs?: Vector4;
    frontUVs?: Vector4;
    height?: number;
    sideOrientation?: number;
    size?: number;
    sourcePlane?: Plane;
    updatable?: boolean;
    width?: number;
  }

  interface Props extends MeshProps {
    plane?: Mesh;
    options?: PlaneOptions;
    scene?: Nullable<Scene>;
  }

  let { plane = $bindable(), options, scene, position, lookAt }: Props = $props();
</script>

<DefaultMesh
  bind:mesh={plane}
  createMeshFunction={CreatePlane}
  {options}
  {scene}
  {position}
  {lookAt}
/>
