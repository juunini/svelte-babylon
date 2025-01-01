<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { Vector3 } from '@babylonjs/core/Maths/math.vector';

  import Canvas from '@juunini/svelte-babylonjs/Canvas.svelte';
  import Engine from '@juunini/svelte-babylonjs/engine/Engine.svelte';
  import Scene from '@juunini/svelte-babylonjs/Scene.svelte';
  import FreeCamera from '@juunini/svelte-babylonjs/camera/FreeCamera.svelte';
  import Ground from '@juunini/svelte-babylonjs/mesh/Ground.svelte';
  import HemisphericLight from '@juunini/svelte-babylonjs/light/HemisphericLight.svelte';
  import Sphere from '@juunini/svelte-babylonjs/mesh/Sphere.svelte';

  const { Story } = defineMeta({
    title: 'tips/Physics',
    tags: ['autodocs']
  });
</script>

<Story
  name="Docs"
  parameters={{
    docs: {
      source: {
        language: 'html',
        code: `\<script lang="ts"\>
  import { Vector3 } from '@babylonjs/core/Maths/math.vector';

  import Canvas from '@juunini/svelte-babylonjs/Canvas.svelte';
  import BabylonEngine from '@juunini/svelte-babylonjs/engine/Engine.svelte';
  import BabylonScene from '@juunini/svelte-babylonjs/Scene.svelte';
  import BabylonFreeCamera from '@juunini/svelte-babylonjs/camera/FreeCamera.svelte';
  import BabylonGround from '@juunini/svelte-babylonjs/mesh/Ground.svelte';
  import BabylonHemisphericLight from '@juunini/svelte-babylonjs/light/HemisphericLight.svelte';
  import BabylonSphere from '@juunini/svelte-babylonjs/mesh/Sphere.svelte';
\</script\>

\<Canvas style="width: 100%;"\>
  \<BabylonEngine\>
    \<BabylonScene physics\>
      \<BabylonFreeCamera position={new Vector3(0, 5, -10)} /\>
      \<BabylonHemisphericLight direction={new Vector3(0, 1, 0)} intensity={0.7} /\>
      \<BabylonGround
        options={{ width: 6, height: 6 }}
        physics
        physicsOptions={{ mass: 0, restitution: 0.5 }}
      /\>
      \<BabylonSphere
        options={{ diameter: 2, segments: 32 }}
        position={{ x: 0, y: 5, z: 0 }}
        physics
        physicsOptions={{ mass: 1, restitution: 0.5 }}
      /\>
    \</BabylonScene\>
  \</BabylonEngine\>
\</Canvas\>`
      }
    }
  }}
>
  <Canvas style="width: 100%;">
    <Engine>
      <Scene physics>
        <FreeCamera position={new Vector3(0, 5, -10)} />
        <HemisphericLight direction={new Vector3(0, 1, 0)} intensity={0.7} />
        <Ground
          physics
          physicsOptions={{ mass: 0, restitution: 0.5 }}
          options={{ width: 6, height: 6 }}
        />
        <Sphere
          physics
          physicsOptions={{ mass: 1, restitution: 0.5 }}
          options={{ diameter: 2, segments: 32 }}
          position={{ x: 0, y: 5, z: 0 }}
        />
      </Scene>
    </Engine>
  </Canvas>
</Story>
