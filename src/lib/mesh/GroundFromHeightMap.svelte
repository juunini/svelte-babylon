<script lang="ts">
  import type { GroundMesh } from '@babylonjs/core/Meshes/groundMesh';
  import type { Scene } from '@babylonjs/core/scene';
  import type { Color3 } from '@babylonjs/core/Maths/math.color';
  import type { Nullable } from '@babylonjs/core/types';
  import { CreateGroundFromHeightMap } from '@babylonjs/core/Meshes/Builders/groundBuilder';

  import type { MeshProps } from './interface';
  import DefaultMesh from './Shared.svelte';

  interface Props extends MeshProps {
    mesh?: GroundMesh;
    url: string | { data: Uint8Array; height: number; width: number };
    options?: {
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
    };
    scene?: Nullable<Scene>;
  }

  let { mesh = $bindable(), url, options, scene, position, lookAt }: Props = $props();
</script>

<DefaultMesh
  bind:mesh
  createMeshFunction={CreateGroundFromHeightMap}
  {options}
  {scene}
  {url}
  {position}
  {lookAt}
/>
