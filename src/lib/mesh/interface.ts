import type { Mesh } from '@babylonjs/core/Meshes/mesh';

export interface MeshProps {
  mesh?: Mesh;
  useParentScene?: boolean;
  position?: {
    x?: number;
    y?: number;
    z?: number;
  };
  lookAt?: {
    x?: number;
    y?: number;
    z?: number;
    yawCor?: number;
    pitchCor?: number;
    rollCor?: number;
  };
}
