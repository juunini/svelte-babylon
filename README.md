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

![image](https://github.com/user-attachments/assets/95007a0b-6ef6-45f4-a910-e4ade279f79f)

```svelte
<script lang="ts">
  import { Vector3 } from '@babylonjs/core/Maths/math.vector';

  import Canvas from '@juunini/svelte-babylonjs/Canvas.svelte';
  import BabylonEngine from '@juunini/svelte-babylonjs/engine/Engine.svelte';
  import BabylonScene from '@juunini/svelte-babylonjs/Scene.svelte';
  import BabylonFreeCamera from '@juunini/svelte-babylonjs/camera/FreeCamera.svelte';
  import BabylonGround from '@juunini/svelte-babylonjs/mesh/Ground.svelte';
  import BabylonHemisphericLight from '@juunini/svelte-babylonjs/light/HemisphericLight.svelte';
  import BabylonSphere from '@juunini/svelte-babylonjs/mesh/Sphere.svelte';
</script>

<Canvas style="width: 100%;">
  <BabylonEngine>
    <BabylonScene>
      <BabylonFreeCamera position={new Vector3(0, 5, -10)} />
      <BabylonHemisphericLight direction={new Vector3(0, 1, 0)} intensity={0.7} />
      <BabylonGround options={{ width: 6, height: 6 }} />
      <BabylonSphere options={{ diameter: 2, segments: 32 }} position={{ x: 0, y: 1, z: 0 }} />
    </BabylonScene>
  </BabylonEngine>
</Canvas>
```

### Bind Mesh, Camera, Light, etc.

You can bind the mesh to a variable.  
(Not only Mesh, but also Camera, Light, etc.)

```svelte
<script lang="ts">
  import type { GroundMesh } from '@babylonjs/core/Meshes/groundMesh';
  import BabylonGround from '@juunini/svelte-babylonjs/mesh/Ground.svelte';

  let groundMesh = $state<GroundMesh>();

  $effect(() => {
    // using groundMesh here...
  });
</script>

<BabylonGround bind:mesh={groundMesh} />
```

## License

[MIT](LICENSE)
