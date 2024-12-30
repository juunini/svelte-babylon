<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
  import type { Nullable } from '@babylonjs/core/types';
  import type { Color4 } from '@babylonjs/core/Maths/math.color';
  import { CreatePolyhedron } from '@babylonjs/core/Meshes/Builders/polyhedronBuilder';

  import type { MeshProps } from './interface';
  import DefaultMesh from './Shared.svelte';

  interface Props extends MeshProps {
    options?: {
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
    };
    scene?: Nullable<Scene>;
  }

  let { mesh = $bindable(), options, scene, position, lookAt }: Props = $props();
</script>

<DefaultMesh
  bind:mesh
  createMeshFunction={CreatePolyhedron}
  {options}
  {scene}
  {position}
  {lookAt}
/>
