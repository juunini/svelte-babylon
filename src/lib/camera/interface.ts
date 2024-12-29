import type { Vector3 } from '@babylonjs/core/Maths/math.vector';
import type { Scene } from '@babylonjs/core/scene';

export interface CameraProps {
  attachParentCanvas?: boolean;
  attachParentScene?: boolean;
  scene?: Scene;
  position?: Vector3;
}
