<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
  import type { Mesh } from '@babylonjs/core/Meshes/mesh';
  import type { Nullable } from '@babylonjs/core/types';
  import { CreateIcoSphere } from '@babylonjs/core/Meshes/Builders/icoSphereBuilder';

  import type { MeshProps } from './interface';
  import DefaultMesh from './_Mesh.svelte';

  interface IcoSphereOptions {
    bbackUVs?: Vector4;
    flat?: boolean;
    frontUVs?: Vector4;
    radius?: number;
    radiusX?: number;
    radiusY?: number;
    radiusZ?: number;
    sideOrientation?: number;
    subdivisions?: number;
    updatable?: boolean;
  }

  interface Props extends MeshProps {
    icoSphere?: Mesh;
    options?: IcoSphereOptions;
    scene?: Nullable<Scene>;
  }

  let { icoSphere = $bindable(), options, scene, position, lookAt }: Props = $props();
</script>

<DefaultMesh
  bind:mesh={icoSphere}
  createMeshFunction={CreateIcoSphere}
  {options}
  {scene}
  {position}
  {lookAt}
/>
