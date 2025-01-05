<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { Vector3 } from '@babylonjs/core/Maths/math.vector';
  import type { IPhysicsCollisionEvent } from '@babylonjs/core/Physics/v2/IPhysicsEnginePlugin';

  import Canvas from '@juunini/svelte-babylonjs/Canvas.svelte';
  import Engine from '@juunini/svelte-babylonjs/engine/Engine.svelte';
  import Scene from '@juunini/svelte-babylonjs/Scene.svelte';
  import ArcRotateCamera from '@juunini/svelte-babylonjs/camera/ArcRotateCamera.svelte';
  import Ground from '@juunini/svelte-babylonjs/mesh/Ground.svelte';
  import HemisphericLight from '@juunini/svelte-babylonjs/light/HemisphericLight.svelte';
  import Sphere from '@juunini/svelte-babylonjs/mesh/Sphere.svelte';

  const { Story } = defineMeta({
    title: 'tips/Physics',
    tags: ['autodocs']
  });

  function bounceCollidedAgainst(vector: Vector3) {
    return (eventData: IPhysicsCollisionEvent) => {
      const againstNode = eventData.collidedAgainst.transformNode;
      againstNode.physicsBody?.applyImpulse(vector, againstNode.absolutePosition);
    };
  }
</script>

<Story
  name="Docs"
  parameters={{
    docs: {
      source: {
        language: 'html',
        code: `\<script lang="ts"\>
  import { Vector3 } from '@babylonjs/core/Maths/math.vector';
  import type { IPhysicsCollisionEvent } from '@babylonjs/core/Physics/v2/IPhysicsEnginePlugin';

  import Canvas from '@juunini/svelte-babylonjs/Canvas.svelte';
  import Engine from '@juunini/svelte-babylonjs/engine/Engine.svelte';
  import Scene from '@juunini/svelte-babylonjs/Scene.svelte';
  import ArcRotateCamera from '@juunini/svelte-babylonjs/camera/ArcRotateCamera.svelte';
  import Ground from '@juunini/svelte-babylonjs/mesh/Ground.svelte';
  import HemisphericLight from '@juunini/svelte-babylonjs/light/HemisphericLight.svelte';
  import Sphere from '@juunini/svelte-babylonjs/mesh/Sphere.svelte';

  function bounceCollidedAgainst(vector: Vector3) {
    return (eventData: IPhysicsCollisionEvent) =\> {
      const againstNode = eventData.collidedAgainst.transformNode;
      againstNode.physicsBody?.applyImpulse(vector, againstNode.absolutePosition);
    };
  }
\</script\>

\<Canvas style="width: 100%;"\>
    \<Engine\>
      \<Scene physics\>
        \<ArcRotateCamera
          alpha={Math.PI / 2}
          beta={Math.PI / 2}
          radius={10}
          target={new Vector3(0, 0, 0)}
        /\>
        \<HemisphericLight direction={new Vector3(0, 1, 0)} intensity={0.7} /\>
        \<Ground
          options={{ width: 6, height: 6 }}
          position={{ x: 0, y: -2, z: 0 }}
          physics
          physicsOptions={{ mass: 0, restitution: 0.5 }}
          onCollision={bounceCollidedAgainst(new Vector3(0, 5, 0))}
        /\>
        \<Ground
          options={{ width: 6, height: 6 }}
          position={{ x: 3.5, y: 1, z: 0 }}
          rotation={{ x: 0, y: 0, z: Math.PI / 2 }}
          physics
          physicsOptions={{ mass: 0, restitution: 0.5 }}
          onCollision={bounceCollidedAgainst(new Vector3(-5, 0, 0))}
        /\>
        \<Ground
          options={{ width: 6, height: 6 }}
          position={{ x: -3.5, y: 1, z: 0 }}
          rotation={{ x: 0, y: 0, z: -Math.PI / 2 }}
          physics
          physicsOptions={{ mass: 0, restitution: 0.5 }}
          onCollision={bounceCollidedAgainst(new Vector3(5, 0, 0))}
        /\>
        \<Sphere
          options={{ diameter: 2, segments: 32 }}
          position={new Vector3(0, 3, 0)}
          physics
          physicsOptions={{ mass: 1, restitution: 0.5 }}
          impulse={{ x: 5, y: 0, z: 0 }}
        /\>
      \</Scene\>
    \</Engine\>
  \</Canvas\>`
      }
    }
  }}
>
  <Canvas style="width: 100%;">
    <Engine>
      <Scene physics>
        <ArcRotateCamera
          alpha={Math.PI / 2}
          beta={Math.PI / 2}
          radius={10}
          target={new Vector3(0, 0, 0)}
        />
        <HemisphericLight direction={new Vector3(0, 1, 0)} intensity={0.7} />
        <Ground
          options={{ width: 6, height: 6 }}
          position={{ x: 0, y: -2, z: 0 }}
          physics
          physicsOptions={{ mass: 0, restitution: 0.5 }}
          onCollision={bounceCollidedAgainst(new Vector3(0, 5, 0))}
        />
        <Ground
          options={{ width: 6, height: 6 }}
          position={{ x: 3.5, y: 1, z: 0 }}
          rotation={{ x: 0, y: 0, z: Math.PI / 2 }}
          physics
          physicsOptions={{ mass: 0, restitution: 0.5 }}
          onCollision={bounceCollidedAgainst(new Vector3(-5, 0, 0))}
        />
        <Ground
          options={{ width: 6, height: 6 }}
          position={{ x: -3.5, y: 1, z: 0 }}
          rotation={{ x: 0, y: 0, z: -Math.PI / 2 }}
          physics
          physicsOptions={{ mass: 0, restitution: 0.5 }}
          onCollision={bounceCollidedAgainst(new Vector3(5, 0, 0))}
        />
        <Sphere
          options={{ diameter: 2, segments: 32 }}
          position={new Vector3(0, 3, 0)}
          physics
          physicsOptions={{ mass: 1, restitution: 0.5 }}
          impulse={{ x: 5, y: 0, z: 0 }}
        />
      </Scene>
    </Engine>
  </Canvas>
</Story>
