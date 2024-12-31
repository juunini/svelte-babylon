import type { Vector3 } from '@babylonjs/core/Maths/math.vector';
import type { Scene } from '@babylonjs/core/scene';

export interface CameraProps {
  /** if you do not want to use parent canvas to control, set `false` (default: true) */
  attachParentCanvas?: boolean;
  scene?: Scene;
  position?: Vector3;
  setActiveOnSceneIfNoneActive?: boolean;
}
