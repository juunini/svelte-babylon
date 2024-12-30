<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { Nullable } from '@babylonjs/core/types';
  import type { GreasedLineBaseMesh } from '@babylonjs/core/Meshes/GreasedLine/greasedLineBaseMesh';
  import type { GreasedLineMesh } from '@babylonjs/core/Meshes/GreasedLine/greasedLineMesh';
  import type { GreasedLineRibbonMesh } from '@babylonjs/core/Meshes/GreasedLine/greasedLineRibbonMesh';
  import {
    CreateGreasedLine,
    type GreasedLineMaterialBuilderOptions,
    type GreasedLineMeshBuilderOptions
  } from '@babylonjs/core/Meshes/Builders/greasedLineBuilder';

  import type { MeshProps } from './interface';
  import DefaultMesh from './Shared.svelte';

  interface Props extends MeshProps {
    mesh?: GreasedLineBaseMesh | GreasedLineMesh | GreasedLineRibbonMesh;
    options: GreasedLineMeshBuilderOptions;
    materialOptions?: Nullable<GreasedLineMaterialBuilderOptions>;
    scene?: Scene;
  }

  let {
    mesh = $bindable(),
    options,
    materialOptions = null,
    scene,
    position,
    lookAt
  }: Props = $props();
</script>

<DefaultMesh
  bind:mesh
  createMeshFunction={CreateGreasedLine}
  {options}
  {scene}
  {position}
  {lookAt}
  {materialOptions}
/>
