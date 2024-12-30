<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { Vector3 } from '@babylonjs/core/Maths/math.vector';

  import Canvas from '@juunini/svelte-babylonjs/Canvas.svelte';
  import BabylonEngine from '@juunini/svelte-babylonjs/engine/Engine.svelte';
  import BabylonScene from '@juunini/svelte-babylonjs/Scene.svelte';
  import BabylonFreeCamera from '@juunini/svelte-babylonjs/camera/FreeCamera.svelte';
  import BabylonGround from '@juunini/svelte-babylonjs/mesh/Ground.svelte';
  import BabylonHemisphericLight from '@juunini/svelte-babylonjs/light/HemisphericLight.svelte';
  import BabylonSphere from '@juunini/svelte-babylonjs/mesh/Sphere.svelte';

  const { Story } = defineMeta({
    title: 'README'
  });
</script>

<Story name="README">
  <Canvas style="width: 100%;">
    <BabylonEngine>
      <BabylonScene>
        <BabylonFreeCamera position={new Vector3(0, 5, -10)} />
        <BabylonHemisphericLight direction={new Vector3(0, 1, 0)} intensity={0.7} />
        <BabylonGround options={{ width: 6, height: 6 }} />
        <BabylonSphere options={{ diameter: 2, segments: 32 }} position={new Vector3(0, 1, 0)} />
      </BabylonScene>
    </BabylonEngine>
  </Canvas>
</Story>
