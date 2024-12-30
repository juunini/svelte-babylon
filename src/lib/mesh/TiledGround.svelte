<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import { CreateTiledGround } from '@babylonjs/core/Meshes/Builders/groundBuilder';

  import type { MeshProps } from './interface';
  import DefaultMesh from './Shared.svelte';

  interface Props extends MeshProps {
    options: {
      precision?: { h: number; w: number };
      subdivisions?: { h: number; w: number };
      updatable?: boolean;
      xmax: number;
      xmin: number;
      zmax: number;
      zmin: number;
    };
    scene?: Scene;
  }

  let { mesh = $bindable(), options, scene, position, lookAt }: Props = $props();
</script>

<DefaultMesh
  bind:mesh
  createMeshFunction={CreateTiledGround}
  {options}
  {scene}
  {position}
  {lookAt}
/>
