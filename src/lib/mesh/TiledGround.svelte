<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { Mesh } from '@babylonjs/core/Meshes/mesh';
  import { CreateTiledGround } from '@babylonjs/core/Meshes/Builders/groundBuilder';

  import type { MeshProps } from './interface';
  import CreateMesh from './_CreateMesh.svelte';

  interface TiledGroundOptions {
    precision?: { h: number; w: number };
    subdivisions?: { h: number; w: number };
    updatable?: boolean;
    xmax: number;
    xmin: number;
    zmax: number;
    zmin: number;
  }

  interface Props extends MeshProps {
    tiledGround?: Mesh;
    options: TiledGroundOptions;
    scene?: Scene;
  }

  let { tiledGround = $bindable(), options, scene, position, lookAt }: Props = $props();
</script>

<CreateMesh
  bind:mesh={tiledGround}
  createMeshFunction={CreateTiledGround}
  {options}
  {scene}
  {position}
  {lookAt}
/>
