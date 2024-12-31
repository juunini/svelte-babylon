<script lang="ts">
  import { getContext, onDestroy, setContext } from 'svelte';
  import { v7 } from 'uuid';
  import type { Mesh } from '@babylonjs/core/Meshes/mesh';
  import type { Scene } from '@babylonjs/core/scene';
  import type { Nullable } from '@babylonjs/core/types';
  import type { GreasedLineMaterialBuilderOptions } from '@babylonjs/core/Meshes/Builders/greasedLineBuilder';
  import type { IFontData } from '@babylonjs/core/Meshes/Builders/textBuilder';
  import type { TransformNode } from '@babylonjs/core/Meshes/transformNode';

  import type { MeshProps } from './interface';

  type CreateMesh = (
    name: string,
    options?: any,
    scene?: Scene | Nullable<Scene>,
    earcutInjection?: any
  ) => Mesh | Nullable<Mesh>;
  type CreatGreasedLine = (
    name: string,
    options?: any,
    materialOptions?: Nullable<GreasedLineMaterialBuilderOptions>,
    scene?: Scene | Nullable<Scene>
  ) => Mesh | Nullable<Mesh>;
  type CreateGroundFromHeightMap = (
    name: string,
    url: string,
    options?: any,
    scene?: Scene | Nullable<Scene>
  ) => Mesh | Nullable<Mesh>;
  type CreateText = (
    name: string,
    text: string,
    fontData: IFontData,
    options?: any,
    scene?: Nullable<Scene>,
    earcutInjection?: any
  ) => Nullable<Mesh>;

  interface Props extends Omit<MeshProps, 'mesh'> {
    mesh?: Mesh | Nullable<Mesh>;
    createMeshFunction: CreateMesh | CreatGreasedLine | CreateGroundFromHeightMap | CreateText;
    options?: any;
    scene?: Scene | Nullable<Scene>;
    earcutInjection?: any;
    materialOptions?: Nullable<GreasedLineMaterialBuilderOptions>;
    url?: string | { data: Uint8Array; height: number; width: number };
    text?: string;
    fontData?: IFontData;
  }

  let {
    mesh = $bindable(),
    createMeshFunction,
    options,
    scene,
    earcutInjection,
    materialOptions,
    url,
    text,
    fontData,
    position,
    rotation,
    scaling,
    children
  }: Props = $props();

  const name = 'mesh' + v7();

  function createMesh() {
    if (materialOptions !== undefined) {
      return createMeshFunction(name, options, materialOptions, scene);
    } else if (url !== undefined) {
      return createMeshFunction(name, url, options, scene);
    } else if (text !== undefined) {
      return createMeshFunction(name, text, fontData, options, scene, earcutInjection);
    } else {
      return createMeshFunction(name, options, scene, earcutInjection);
    }
  }

  const parent = getContext<Mesh>('mesh') || null;
  mesh = createMesh();
  mesh?.setParent(parent);

  setContext('mesh', mesh);

  $effect(() => {
    if (options === undefined) return;

    const parent = mesh?.parent || null;
    const childNodes = mesh?.getChildren();
    childNodes?.forEach((child) => {
      mesh?.removeChild(child as TransformNode);
    });

    mesh?.dispose();
    mesh = createMesh();

    mesh?.setParent(parent);

    childNodes?.forEach((child) => {
      mesh?.addChild(child as TransformNode);
    });
  });

  $effect(() => {
    if (position === undefined) return;
    mesh?.position?.set(position?.x ?? 0, position?.y ?? 0, position?.z ?? 0);
  });

  $effect(() => {
    if (rotation === undefined) return;
    mesh?.rotation?.set(rotation?.x ?? 0, rotation?.y ?? 0, rotation?.z ?? 0);
  });

  $effect(() => {
    if (scaling === undefined) return;
    mesh?.scaling?.set(scaling?.x ?? 0, scaling?.y ?? 0, scaling?.z ?? 0);
  });

  onDestroy(() => {
    mesh?.dispose();
  });
</script>

{@render children?.()}
