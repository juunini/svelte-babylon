<script lang="ts">
  import { getContext, onDestroy, setContext } from 'svelte';
  import { v7 } from 'uuid';
  import earcut from 'earcut';
  import { CreateGreasedLine } from '@babylonjs/core/Meshes/Builders/greasedLineBuilder';
  import { CreateGroundFromHeightMap } from '@babylonjs/core/Meshes/Builders/groundBuilder';
  import { CreateText } from '@babylonjs/core/Meshes/Builders/textBuilder';
  import { PhysicsAggregate } from '@babylonjs/core/Physics/v2/physicsAggregate';
  import {
    PhysicsShapeType,
    type IPhysicsCollisionEvent
  } from '@babylonjs/core/Physics/v2/IPhysicsEnginePlugin';
  import { Vector3 } from '@babylonjs/core/Maths/math.vector';
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
    scene = getContext<Scene>('scene'),
    earcutInjection = earcut,
    position,
    rotation,
    scaling,
    physics = true,
    physicsShape = PhysicsShapeType.MESH,
    physicsOptions = { mass: 1, restitution: 0.5 },
    force,
    impulse,
    collideAgainstForce,
    collideAgainstImpulse,
    receiveShadows,
    shadowEnabled = true,
    shadowGroup = [],
    onCollision,
    onCollisionOnce,
    ...props
  }: Props = $props();

  const name = 'mesh' + v7();
  const parent = getContext<Mesh>('mesh') || null;
  let physicsAggregate = $state<PhysicsAggregate>();
  let collideAgainstForceFunction = $state<(eventData: IPhysicsCollisionEvent) => void>();
  let collideAgainstImpulseFunction = $state<(eventData: IPhysicsCollisionEvent) => void>();

  if (scene === undefined) {
    scene = getContext<Scene>('scene');
  }

  mesh = createMesh();
  mesh!.setParent(parent);
  setContext('mesh', mesh);

  $effect(setOptions);
  $effect(setposition);
  $effect(setRotation);
  $effect(setScaling);
  $effect(setPhysics);
  $effect(setForce);
  $effect(setImpulse);
  $effect(setcollideAgainstForce);
  $effect(setcollideAgainstImpulse);
  $effect(setreceiveShadows);
  $effect(setShadowEnabled);
  $effect(setOnCollision);
  $effect(setOnCollisionOnce);
  onDestroy(() => mesh!.dispose());

  function createMesh() {
    switch (createMeshFunction) {
      case CreateGreasedLine:
        return CreateGreasedLine(name, { ...options }, { ...props.materialOptions }, scene);
      case CreateGroundFromHeightMap:
        return CreateGroundFromHeightMap(name, props.url, { ...options }, scene);
      case CreateText:
        return CreateText(name, props.text, props.fontData, { ...options }, scene, earcutInjection);
      default:
        return createMeshFunction(name, { ...options }, scene, earcutInjection);
    }
  }
  function removeChild(child: Mesh) {
    const transforms = {
      position: child.position.clone(),
      rotation: child.rotation.clone(),
      scaling: child.scaling.clone()
    };

    mesh!.removeChild(child);

    child.position = transforms.position;
    child.rotation = transforms.rotation;
    child.scaling = transforms.scaling;
  }
  function setOptions() {
    if (options === undefined) return;

    setTimeout(() => {
      const transforms = {
        position: mesh!.position.clone(),
        rotation: mesh!.rotation.clone(),
        scaling: mesh!.scaling.clone()
      };
      const parent = mesh!.parent || null;
      const childNodes = mesh!.getChildren() as Mesh[];
      childNodes?.forEach((child) => removeChild(child));

      mesh!.dispose();
      mesh = createMesh();
      mesh!.setParent(parent);
      mesh!.position = transforms.position;
      mesh!.rotation = transforms.rotation;
      mesh!.scaling = transforms.scaling;

      childNodes?.forEach((child) => mesh!.addChild(child));
    }, 0);
  }
  function setposition() {
    if (position === undefined) return;
    setTimeout(() => {
      mesh!.position = new Vector3(position.x, position.y, position.z);

      if (physicsAggregate) setPhysics();
    }, 0);
  }
  function setRotation() {
    if (rotation === undefined) return;
    setTimeout(() => {
      mesh!.rotation = new Vector3(rotation.x, rotation.y, rotation.z);

      if (physicsAggregate) setPhysics();
    }, 0);
  }
  function setScaling() {
    if (scaling === undefined) return;
    setTimeout(() => {
      mesh!.scaling = new Vector3(scaling.x, scaling.y, scaling.z);

      if (physicsAggregate) setPhysics();
    }, 0);
  }
  function setPhysics() {
    if (!mesh) return;
    if (physics !== true) return;
    if (physicsOptions === undefined) return;
    setTimeout(() => {
      function applyPhysics() {
        if (!scene?.physicsEnabled) scene?.onAfterRenderObservable.removeCallback(applyPhysics);
        if (scene?.isPhysicsEnabled === undefined) return;
        if (!scene.isPhysicsEnabled()) return;
        if (physicsAggregate) physicsAggregate.dispose();

        physicsAggregate = new PhysicsAggregate(mesh!, physicsShape, { ...physicsOptions }, scene!);
        scene.onAfterRenderObservable.removeCallback(applyPhysics);
      }

      scene?.onAfterRenderObservable.add(applyPhysics);
    }, 0);
  }
  function setForce() {
    if (force === undefined || physicsAggregate === undefined) return;
    setTimeout(() => {
      physicsAggregate!.body.applyForce(
        new Vector3(force.x, force.y, force.z),
        mesh!.absolutePosition
      );
    }, 0);
  }
  function setImpulse() {
    if (impulse === undefined || physicsAggregate === undefined) return;
    setTimeout(() => {
      physicsAggregate!.body.applyImpulse(
        new Vector3(impulse.x, impulse.y, impulse.z),
        mesh!.absolutePosition
      );
    }, 0);
  }
  function setcollideAgainstForce() {
    if (!mesh) return;
    if (collideAgainstForce === undefined || physicsAggregate === undefined) return;

    setTimeout(() => {
      const collisionObserable = physicsAggregate!.body.getCollisionObservable();

      if (collideAgainstForceFunction) {
        collisionObserable.removeCallback(collideAgainstForceFunction);
      }

      collideAgainstForceFunction = ({ collidedAgainst }: IPhysicsCollisionEvent) => {
        collidedAgainst.applyForce(
          new Vector3(collideAgainstForce.x, collideAgainstForce.y, collideAgainstForce.z),
          mesh!.absolutePosition
        );
      };

      physicsAggregate!.body.setCollisionCallbackEnabled(true);
      collisionObserable.add(collideAgainstForceFunction);
    }, 0);
  }
  function setcollideAgainstImpulse() {
    if (!mesh) return;
    if (collideAgainstImpulse === undefined || physicsAggregate === undefined) return;

    setTimeout(() => {
      const collisionObserable = physicsAggregate!.body.getCollisionObservable();

      if (collideAgainstImpulseFunction) {
        collisionObserable.removeCallback(collideAgainstImpulseFunction);
      }

      collideAgainstImpulseFunction = ({ collidedAgainst }: IPhysicsCollisionEvent) => {
        collidedAgainst.applyImpulse(
          new Vector3(collideAgainstImpulse.x, collideAgainstImpulse.y, collideAgainstImpulse.z),
          mesh!.absolutePosition
        );
      };

      physicsAggregate!.body.setCollisionCallbackEnabled(true);
      collisionObserable.add(collideAgainstImpulseFunction);
    }, 0);
  }
  function setreceiveShadows() {
    if (!mesh) return;
    if (receiveShadows === undefined) return;
    setTimeout(() => (mesh!.receiveShadows = receiveShadows), 0);
  }
  function setShadowEnabled() {
    if (!mesh) return;
    if (shadowEnabled === undefined) return;
    setTimeout(() => {
      mesh!.shadowEnabled = shadowEnabled;
      mesh!.shadowGroup = shadowGroup;

      scene?.lights
        .filter((light) => shadowGroup.includes(light.shadowId))
        .forEach((light) => light.getShadowGenerator()!.addShadowCaster(mesh));
    }, 0);
  }
  function setOnCollision() {
    if (!mesh) return;
    if (onCollision === undefined || physicsAggregate === undefined) return;
    setTimeout(() => {
      physicsAggregate!.body.setCollisionCallbackEnabled(true);
      physicsAggregate!.body.getCollisionObservable().add(onCollision);
    }, 0);
  }
  function setOnCollisionOnce() {
    if (onCollisionOnce === undefined || physicsAggregate === undefined) return;
    setTimeout(() => {
      physicsAggregate!.body.setCollisionCallbackEnabled(true);
      physicsAggregate!.body.getCollisionObservable().addOnce(onCollisionOnce);
    }, 0);
  }
</script>

{@render props.children?.()}
