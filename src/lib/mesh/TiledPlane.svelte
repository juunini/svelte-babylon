<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
  import type { Nullable } from '@babylonjs/core/types';
  import { CreateTiledPlane } from '@babylonjs/core/Meshes/Builders/tiledPlaneBuilder';

  import type { MeshProps } from './interface';
  import DefaultMesh from './Shared.svelte';

  interface Props extends MeshProps {
    options: {
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
    };
    scene?: Nullable<Scene>;
  }

  let { mesh = $bindable(), options, scene, position, lookAt }: Props = $props();
</script>

<DefaultMesh
  bind:mesh
  createMeshFunction={CreateTiledPlane}
  {options}
  {scene}
  {position}
  {lookAt}
/>
