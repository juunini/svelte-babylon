<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
  import type { Color4 } from '@babylonjs/core/Maths/math.color';
  import type { Nullable } from '@babylonjs/core/types';
  import { CreateTiledBox } from '@babylonjs/core/Meshes/Builders/tiledBoxBuilder';

  import type { MeshProps } from './interface';
  import DefaultMesh from './Shared.svelte';

  interface Props extends MeshProps {
    options: {
      alignHorizontal?: number;
      alignVertical?: number;
      depth?: number;
      faceColors?: Color4[];
      faceUV?: Vector4[];
      height?: number;
      pattern?: number;
      sideOrientation?: number;
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

<DefaultMesh bind:mesh createMeshFunction={CreateTiledBox} {options} {scene} {position} {lookAt} />
