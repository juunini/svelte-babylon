<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { Nullable } from '@babylonjs/core/types';
  import type { GoldbergMesh } from '@babylonjs/core/Meshes/goldbergMesh';
  import {
    CreateGoldberg,
    type GoldbergCreationOption
  } from '@babylonjs/core/Meshes/Builders/goldbergBuilder';

  import type { MeshProps } from './interface';
  import DefaultMesh from './Shared.svelte';

  interface Props extends MeshProps {
    mesh?: GoldbergMesh;
    options: GoldbergCreationOption;
    scene?: Nullable<Scene>;
  }

  let { mesh = $bindable(), options, scene, position, lookAt }: Props = $props();
</script>

<DefaultMesh bind:mesh createMeshFunction={CreateGoldberg} {options} {scene} {position} {lookAt} />
