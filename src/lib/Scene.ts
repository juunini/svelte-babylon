import type { Scene } from '@babylonjs/core/scene';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { HavokPlugin } from '@babylonjs/core/Physics/v2/Plugins/havokPlugin';
import HavokPhysics from '@babylonjs/havok';

export async function enablePhysics(
  scene: Scene,
  gravity = new Vector3(0, -9.81, 0),
  useDeltaForWorldStep?: boolean
) {
  await import('@babylonjs/core/Physics/v2/physicsEngineComponent');
  const havok = await HavokPhysics();
  const physicsPlugin = new HavokPlugin(useDeltaForWorldStep, havok);
  scene.enablePhysics(gravity, physicsPlugin);
}
