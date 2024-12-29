<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { Color4 } from '@babylonjs/core/Maths/math.color';
  import type { Vector2, Vector3, Vector4 } from '@babylonjs/core/Maths/math.vector';
  import type { Mesh } from '@babylonjs/core/Meshes/mesh';
  import type { Nullable } from '@babylonjs/core/types';
  import { CreateRibbon } from '@babylonjs/core/Meshes/Builders/ribbonBuilder';

  import type { MeshProps } from './interface';
  import CreateMesh from './_CreateMesh.svelte';

  interface RibbonOptions {
    backUVs?: Vector4;
    closeArray?: boolean;
    closePath?: boolean;
    colors?: Color4[];
    frontUVs?: Vector4;
    instance?: Mesh;
    invertUV?: boolean;
    offset?: number;
    pathArray: Vector3[][];
    sideOrientation?: number;
    updatable?: boolean;
    uvs?: Vector2[];
  }

  interface Props extends MeshProps {
    ribbon?: Mesh;
    options: RibbonOptions;
    scene?: Nullable<Scene>;
  }

  let { ribbon = $bindable(), options, scene, position, lookAt }: Props = $props();
</script>

<CreateMesh
  bind:mesh={ribbon}
  createMeshFunction={CreateRibbon}
  {options}
  {scene}
  {position}
  {lookAt}
/>
