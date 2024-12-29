<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
  import type { Nullable } from '@babylonjs/core/types';
  import type { Color4 } from '@babylonjs/core/Maths/math.color';
  import type { GoldbergMesh } from '@babylonjs/core/Meshes/goldbergMesh';
  import {
    CreateGoldberg,
    type GoldbergCreationOption
  } from '@babylonjs/core/Meshes/Builders/goldbergBuilder';

  import type { MeshProps } from './interface';
  import DefaultMesh from './_Mesh.svelte';

  interface GoldbergOptions {
    backUVs?: Vector4;
    faceColors?: Color4[];
    faceUV?: Vector4[];
    flat?: boolean;
    frontUVs?: Vector4;
    m?: number;
    n?: number;
    sideOrientation?: number;
    size?: number;
    sizeX?: number;
    sizeY?: number;
    sizeZ?: number;
    updatable?: boolean;
  }

  interface Props extends MeshProps {
    goldberg?: GoldbergMesh;
    options: GoldbergCreationOption;
    scene?: Nullable<Scene>;
  }

  let { goldberg = $bindable(), options, scene, position, lookAt }: Props = $props();
</script>

<DefaultMesh
  bind:mesh={goldberg}
  createMeshFunction={CreateGoldberg}
  {options}
  {scene}
  {position}
  {lookAt}
/>
