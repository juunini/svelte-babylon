import type { Light } from '@babylonjs/core/Lights/light';
import type { Vector3 } from '@babylonjs/core/Maths/math.vector';
import type { Scene } from '@babylonjs/core/scene';

export interface LightProps {
  light?: Light;
  scene?: Scene;
  direction?: Vector3;
  position?: Vector3;
  intensity?: number;
}
