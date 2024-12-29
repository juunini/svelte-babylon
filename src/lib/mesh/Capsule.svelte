<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { Nullable } from '@babylonjs/core/types';
  import { CreateCapsule } from '@babylonjs/core/Meshes/Builders/capsuleBuilder';
  import type { ICreateCapsuleOptions } from '@babylonjs/core/Meshes/Builders/capsuleBuilder';

  import type { MeshProps } from './interface';
  import DefaultMesh from './_Mesh.svelte';

  interface Props extends MeshProps {
    options?: ICreateCapsuleOptions;
    scene?: Nullable<Scene>;
  }

  let { mesh = $bindable(), options, scene, position, lookAt }: Props = $props();
</script>

<DefaultMesh bind:mesh createMeshFunction={CreateCapsule} {options} {scene} {position} {lookAt} />
