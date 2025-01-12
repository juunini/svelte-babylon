import type { Snippet } from 'svelte';
import type { Mesh } from '@babylonjs/core/Meshes/mesh';
import type {
  IPhysicsCollisionEvent,
  PhysicsShapeType
} from '@babylonjs/core/Physics/v2/IPhysicsEnginePlugin';
import type { PhysicsShape } from '@babylonjs/core/Physics/v2/physicsShape';
import type { PhysicsAggregateParameters } from '@babylonjs/core/Physics/v2/physicsAggregate';
import type { EventState } from '@babylonjs/core/Misc/observable';

export interface MeshProps {
  children?: Snippet;
  /** if you want to use a mesh api, bind it */
  mesh?: Mesh;
  physics?: boolean;
  physicsShape?: PhysicsShapeType | PhysicsShape;
  physicsOptions?: PhysicsAggregateParameters;
  position?: { x: number; y: number; z: number };
  rotation?: { x: number; y: number; z: number };
  scaling?: { x: number; y: number; z: number };
  force?: { x: number; y: number; z: number };
  impulse?: { x: number; y: number; z: number };
  collideAgainstForce?: { x: number; y: number; z: number };
  collideAgainstImpulse?: { x: number; y: number; z: number };
  receiveShadows?: boolean;
  shadowEnabled?: boolean;
  shadowGroup?: string[];
  onCollision?: (eventData: IPhysicsCollisionEvent, eventState: EventState) => void;
  onCollisionOnce?: (eventData: IPhysicsCollisionEvent, eventState: EventState) => void;
}
