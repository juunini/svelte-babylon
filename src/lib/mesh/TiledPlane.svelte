<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { Mesh } from '@babylonjs/core/Meshes/mesh';
  import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
  import type { Nullable } from '@babylonjs/core/types';
  import { CreateTiledPlane } from '@babylonjs/core/Meshes/Builders/tiledPlaneBuilder';

  import type { MeshProps } from './interface';
  import CreateMesh from './_CreateMesh.svelte';

  interface TiledPlaneOptions {
    alignHorizontal?: number;
    alignVertical?: number;
    backUVs?: Vector4;
    frontUVs?: Vector4;
    height?: number;
    pattern?: number;
    sideOrientation?: number;
    size?: number;
    tileHeight?: number;
    tileSize?: number;
    tileWidth?: number;
    updatable?: boolean;
    width?: number;
  }

  interface Props extends MeshProps {
    tiledplane?: Mesh;
    options: TiledPlaneOptions;
    scene?: Nullable<Scene>;
  }

  let { tiledplane = $bindable(), options, scene, position, lookAt }: Props = $props();
</script>

<CreateMesh
  bind:mesh={tiledplane}
  createMeshFunction={CreateTiledPlane}
  {options}
  {scene}
  {position}
  {lookAt}
/>
