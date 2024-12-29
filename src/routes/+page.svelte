<script lang="ts">
  import { Vector3 } from '@babylonjs/core/Maths/math.vector';

  import Canvas from '$lib/Canvas.svelte';
  import BabylonEngine from '$lib/engine/Engine.svelte';
  import BabylonScene from '$lib/Scene.svelte';
  import BabylonFreeCamera from '$lib/camera/FreeCamera.svelte';
  import BabylonGround from '$lib/mesh/Ground.svelte';
  import BabylonHemisphericLight from '$lib/light/HemisphericLight.svelte';
  import BabylonSphere from '$lib/mesh/Sphere.svelte';
</script>

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
