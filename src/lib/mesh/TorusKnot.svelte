<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
  import { CreateTorusKnot } from '@babylonjs/core/Meshes/Builders/torusKnotBuilder';

  import type { MeshProps } from './interface';
  import DefaultMesh from './Shared.svelte';

  interface Props extends MeshProps {
    options?: {
      backUVs?: Vector4;
      frontUVs?: Vector4;
      p?: number;
      q?: number;
      radialSegments?: number;
      radius?: number;
      sideOrientation?: number;
      tube?: number;
      tubularSegments?: number;
      updatable?: boolean;
    };
    scene?: Scene;
  }

  let { mesh = $bindable(), ...props }: Props = $props();
</script>

<DefaultMesh bind:mesh createMeshFunction={CreateTorusKnot as any} {...props} />
