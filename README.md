# @juunini/svelte-babylonjs

## Caution

> ❗ This is WIP and not ready for production use.

## Introduction

Easily create 3D scenes with Babylon.js in Svelte.

## Installation

```bash
npm install @juunini/svelte-babylonjs
yarn add @juunini/svelte-babylonjs
pnpm add @juunini/svelte-babylonjs
bun add @juunini/svelte-babylonjs
```

## Usage

```svelte
<script lang="ts">
  import type { Engine } from '@babylonjs/core/Engines/engine';
  import type { Scene } from '@babylonjs/core/scene';
  import type { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
  import type { Mesh } from '@babylonjs/core/Meshes/mesh';
  import { FreeCamera } from '@babylonjs/core/Cameras/freeCamera';
  import { Vector3 } from '@babylonjs/core/Maths/math.vector';

  import Canvas from '@juunini/svelte-babylonjs/Canvas.svelte';
  import BabylonEngine from '@juunini/svelte-babylonjs/engine/Engine.svelte';
  import BabylonScene from '@juunini/svelte-babylonjs/Scene.svelte';
  import BabylonFreeCamera from '@juunini/svelte-babylonjs/camera/FreeCamera.svelte';
  import BabylonGround from '@juunini/svelte-babylonjs/mesh/Ground.svelte';
  import BabylonHemisphericLight from '@juunini/svelte-babylonjs/light/HemisphericLight.svelte';
  import BabylonSphere from '@juunini/svelte-babylonjs/mesh/Sphere.svelte';

  let canvas: HTMLCanvasElement | undefined = $state();
  let engine: Engine | undefined = $state();
  let scene: Scene | undefined = $state();
  let light: HemisphericLight | undefined = $state();
  let camera: FreeCamera | undefined = $state();
  let sphere: Mesh | undefined = $state();

  $effect(() => {
    if (light !== undefined) {
      light.intensity = 0.7;
    }

    if (camera !== undefined) {
      camera.setTarget(Vector3.Zero());
      camera.attachControl(canvas, true);
    }

    if (sphere !== undefined) {
      sphere.position.y = 1;
    }
  });
</script>

<Canvas bind:canvas style="width: 100%;">
  <BabylonEngine bind:engine>
    <BabylonScene bind:scene {engine}>
      <BabylonFreeCamera {scene} bind:camera position={new Vector3(0, 5, -10)} />
      <BabylonHemisphericLight bind:light {scene} direction={new Vector3(0, 1, 0)} />
      <BabylonGround {scene} options={{ width: 6, height: 6 }} />
      <BabylonSphere {scene} bind:sphere options={{ diameter: 2, segments: 32 }} />
    </BabylonScene>
  </BabylonEngine>
</Canvas>
```

![image](https://github.com/user-attachments/assets/95007a0b-6ef6-45f4-a910-e4ade279f79f)

## License

[MIT](LICENSE)
