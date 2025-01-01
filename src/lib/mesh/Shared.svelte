<script lang="ts">
  import { getContext, onDestroy, setContext } from 'svelte';
  import { v7 } from 'uuid';
  import earcut from 'earcut';
  import { CreateGreasedLine } from '@babylonjs/core/Meshes/Builders/greasedLineBuilder';
  import { CreateGroundFromHeightMap } from '@babylonjs/core/Meshes/Builders/groundBuilder';
  import { CreateText } from '@babylonjs/core/Meshes/Builders/textBuilder';
  import type { Mesh } from '@babylonjs/core/Meshes/mesh';
  import type { Scene } from '@babylonjs/core/scene';
  import type { Nullable } from '@babylonjs/core/types';

  import type { MeshProps } from './interface';

  interface Props extends Omit<MeshProps, 'mesh'> {
    mesh?: Mesh | Nullable<Mesh>;
    createMeshFunction: any;
    options?: any;
    scene?: Scene | Nullable<Scene>;
    [key: string]: any;
  }

  let {
    mesh = $bindable(),
    createMeshFunction,
    options,
    scene,
    earcutInjection = earcut,
    position,
    rotation,
    scaling,
    ...props
  }: Props = $props();

  const name = 'mesh' + v7();

  function createMesh() {
    switch (createMeshFunction) {
      case CreateGreasedLine:
        return createMeshFunction(name, options, props.materialOptions, scene);
      case CreateGroundFromHeightMap:
        return createMeshFunction(name, props.url, options, scene);
      case CreateText:
        return createMeshFunction(
          name,
          props.text,
          props.fontData,
          options,
          scene,
          earcutInjection
        );
      default:
        return createMeshFunction(name, options, scene, earcutInjection);
    }
  }

  const parent = getContext<Mesh>('mesh') || null;
  mesh = createMesh();
  mesh!.setParent(parent);

  setContext('mesh', mesh);

  function removeChild(child: Mesh) {
    const transforms = {
      position: child.position.clone(),
      rotation: child.rotation.clone(),
      scaling: child.scaling.clone()
    };

    mesh!.removeChild(child);

    child.position.set(transforms.position.x, transforms.position.y, transforms.position.z);
    child.rotation.set(transforms.rotation.x, transforms.rotation.y, transforms.rotation.z);
    child.scaling.set(transforms.scaling.x, transforms.scaling.y, transforms.scaling.z);
  }

  $effect(() => {
    if (options === undefined) return;

    setTimeout(() => {
      const parent = mesh!.parent || null;
      const childNodes = mesh!.getChildren() as Mesh[];
      childNodes?.forEach((child) => removeChild(child));

      mesh!.dispose();
      mesh = createMesh();
      mesh!.setParent(parent);

      childNodes?.forEach((child) => mesh!.addChild(child));

      setposition();
      setRotation();
      setScaling();
    }, 0);
    return;
  });
  $effect(setposition);
  $effect(setRotation);
  $effect(setScaling);
  onDestroy(() => mesh!.dispose());

  function setposition() {
    if (position === undefined) return;
    setTimeout(() => mesh!.position!.set(position.x || 0, position.y || 0, position.z || 0));
  }
  function setRotation() {
    if (rotation === undefined) return;
    setTimeout(() => mesh!.rotation!.set(rotation.x || 0, rotation.y || 0, rotation.z || 0));
  }
  function setScaling() {
    if (scaling === undefined) return;
    setTimeout(() => mesh!.scaling!.set(scaling.x || 0, scaling.y || 0, scaling.z || 0));
  }
</script>

{@render props.children?.()}
