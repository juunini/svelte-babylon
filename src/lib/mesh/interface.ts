import type { Vector3 } from '@babylonjs/core/Maths/math.vector';
import type { Mesh } from '@babylonjs/core/Meshes/mesh';

export interface MeshProps {
  mesh?: Mesh;
  useParentScene?: boolean;
  position?: Vector3;
  lookAt?: {
    targetPoint: Vector3;
    yawCor?: number;
    pitchCor?: number;
    rollCor?: number;
  };
}
