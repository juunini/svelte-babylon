<script lang="ts">
  import type { GroundMesh } from '@babylonjs/core/Meshes/groundMesh';
  import type { Scene } from '@babylonjs/core/scene';
  import { CreateGround } from '@babylonjs/core/Meshes/Builders/groundBuilder';

  import type { MeshProps } from './interface';
  import DefaultMesh from './_Mesh.svelte';

  interface GroundOptions {
    width?: number;
    height?: number;
    subdivisions?: number;
    subdivisionsX?: number;
    subdivisionsY?: number;
    updatable?: boolean;
  }

  interface Props extends MeshProps {
    mesh?: GroundMesh;
    options?: GroundOptions;
    scene?: Scene;
  }

  let { mesh = $bindable(), options, scene, position, lookAt }: Props = $props();
</script>

<DefaultMesh
  bind:mesh
  createMeshFunction={CreateGround as any}
  {options}
  {scene}
  {position}
  {lookAt}
/>
