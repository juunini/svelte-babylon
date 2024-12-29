<script lang="ts">
  import type { GroundMesh } from '@babylonjs/core/Meshes/groundMesh';
  import type { Scene } from '@babylonjs/core/scene';
  import type { Color3 } from '@babylonjs/core/Maths/math.color';
  import type { Nullable } from '@babylonjs/core/types';
  import { CreateGroundFromHeightMap } from '@babylonjs/core/Meshes/Builders/groundBuilder';

  import type { MeshProps } from './interface';
  import CreateMesh from './_CreateMesh.svelte';

  interface GroundFromHeightMapOptions {
    alphaFilter?: number;
    colorFilter?: Color3;
    height?: number;
    maxHeight?: number;
    minHeight?: number;
    onError?: (message?: string, exception?: any) => void;
    onReady?: (mesh: GroundMesh, heightBuffer?: Float32Array) => void;
    passHeightBufferInCallback?: boolean;
    subdivisions?: number;
    updatable?: boolean;
    width?: number;
  }

  interface Props extends MeshProps {
    groundFromHeightMap?: GroundMesh;
    url: string | { data: Uint8Array; height: number; width: number };
    options?: GroundFromHeightMapOptions;
    scene?: Nullable<Scene>;
  }

  let {
    groundFromHeightMap = $bindable(),
    url,
    options,
    scene,
    position,
    lookAt
  }: Props = $props();
</script>

<CreateMesh
  bind:mesh={groundFromHeightMap}
  createMeshFunction={CreateGroundFromHeightMap}
  {options}
  {scene}
  {url}
  {position}
  {lookAt}
/>
