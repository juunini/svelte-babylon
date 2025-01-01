<script lang="ts">
  import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
  import type { Mesh } from '@babylonjs/core/Meshes/mesh';
  import type { Scene } from '@babylonjs/core/scene';
  import type { Nullable } from '@babylonjs/core/types';
  import type { Color4 } from '@babylonjs/core/Maths/math.color';
  import { CreateText, type IFontData } from '@babylonjs/core/Meshes/Builders/textBuilder';

  import type { MeshProps } from './interface';
  import DefaultMesh from './Shared.svelte';

  interface Props extends Omit<MeshProps, 'mesh'> {
    mesh?: Nullable<Mesh>;
    text: string;
    fontData: IFontData | string;
    options?: {
      depth?: number;
      faceColors?: Color4[];
      faceUV?: Vector4[];
      perLetterFaceColors?: (letterIndex: number) => Color4[];
      perLetterFaceUV?: (letterIndex: number) => Vector4[];
      resolution?: number;
      sideOrientation?: number;
      size?: number;
    };
    scene?: Nullable<Scene>;
    earcutInjection?: any;
  }

  let { mesh = $bindable(), fontData, ...props }: Props = $props();

  if (typeof fontData === 'string') {
    (async () => {
      const response = await fetch(fontData);
      const data = await response.json();
      fontData = data;
    })();
  }
</script>

{#if typeof fontData === 'object'}
  <DefaultMesh bind:mesh createMeshFunction={CreateText} {fontData} {...props} />
{/if}
