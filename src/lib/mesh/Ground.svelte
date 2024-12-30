<script lang="ts">
  import type { GroundMesh } from '@babylonjs/core/Meshes/groundMesh';
  import type { Scene } from '@babylonjs/core/scene';
  import { CreateGround } from '@babylonjs/core/Meshes/Builders/groundBuilder';

  import type { MeshProps } from './interface';
  import DefaultMesh from './Shared.svelte';

  interface Props extends MeshProps {
    mesh?: GroundMesh;
    options?: {
      width?: number;
      height?: number;
      subdivisions?: number;
      subdivisionsX?: number;
      subdivisionsY?: number;
      updatable?: boolean;
    };
    scene?: Scene;
  }

  let { mesh = $bindable(), ...props }: Props = $props();
</script>

<DefaultMesh bind:mesh createMeshFunction={CreateGround as any} {...props} />
