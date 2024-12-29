<script lang="ts">
  import { getContext, onDestroy } from 'svelte';
  import { v7 } from 'uuid';
  import type { Mesh } from '@babylonjs/core/Meshes/mesh';
  import type { Scene } from '@babylonjs/core/scene';
  import type { Nullable } from '@babylonjs/core/types';
  import type { GreasedLineMaterialBuilderOptions } from '@babylonjs/core/Meshes/Builders/greasedLineBuilder';
  import type { IFontData } from '@babylonjs/core/Meshes/Builders/textBuilder';

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
    useParentScene = true,
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
    lookAt
  }: Props = $props();

  if (useParentScene && scene === undefined) {
    scene = getContext('scene');
  }

  const name = 'mesh' + v7();

  if (materialOptions !== undefined) {
    mesh = createMeshFunction(name, options, materialOptions, scene);
  } else if (url !== undefined) {
    mesh = createMeshFunction(name, url, options, scene);
  } else if (text !== undefined) {
    mesh = createMeshFunction(name, text, fontData, options, scene, earcutInjection);
  } else {
    mesh = createMeshFunction(name, options, scene, earcutInjection);
  }

  $effect(() => {
    mesh?.dispose();
    mesh = createMeshFunction(name, options, scene);
  });

  $effect(() => {
    if (position === undefined) return;
    mesh?.position.set(position.x, position.y, position.z);
  });

  $effect(() => {
    if (lookAt === undefined) return;
    mesh?.lookAt(lookAt?.targetPoint, lookAt?.yawCor, lookAt?.pitchCor, lookAt?.rollCor);
  });

  onDestroy(() => {
    mesh?.dispose();
  });
</script>
