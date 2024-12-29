<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { Mesh } from '@babylonjs/core/Meshes/mesh';
  import type { Nullable } from '@babylonjs/core/types';
  import { CreateHemisphere } from '@babylonjs/core/Meshes/Builders/hemisphereBuilder';

  import type { MeshProps } from './interface';
  import DefaultMesh from './_Mesh.svelte';

  interface HemisphereOptions {
    diameter?: number;
    segments?: number;
    sideOrientation?: number;
  }

  interface Props extends MeshProps {
    mesh?: Mesh;
    options?: HemisphereOptions;
    scene?: Nullable<Scene>;
  }

  let { mesh = $bindable(), options, scene, position, lookAt }: Props = $props();
</script>

<DefaultMesh
  bind:mesh
  createMeshFunction={CreateHemisphere as any}
  {options}
  {scene}
  {position}
  {lookAt}
/>
