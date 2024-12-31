import type { Snippet } from 'svelte';
import type { Mesh } from '@babylonjs/core/Meshes/mesh';

export interface MeshProps {
  children?: Snippet;
  /** if you want to use a mesh api, bind it */
  mesh?: Mesh;
  position?: { x: number; y: number; z: number };
  rotation?: { x: number; y: number; z: number };
  scaling?: { x: number; y: number; z: number };
}
