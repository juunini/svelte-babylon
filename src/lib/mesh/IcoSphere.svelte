<script lang="ts">
  import type { Scene } from '@babylonjs/core/scene';
  import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
  import type { Nullable } from '@babylonjs/core/types';
  import { CreateIcoSphere } from '@babylonjs/core/Meshes/Builders/icoSphereBuilder';

  import type { MeshProps } from './interface';
  import DefaultMesh from './Shared.svelte';

  interface Props extends MeshProps {
    options?: {
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
    };
    scene?: Nullable<Scene>;
  }

  let { mesh = $bindable(), ...props }: Props = $props();
</script>

<DefaultMesh bind:mesh createMeshFunction={CreateIcoSphere} {...props} />
