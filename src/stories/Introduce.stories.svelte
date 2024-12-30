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
    title: 'Introduce',
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
    \<BabylonScene\>
      \<BabylonFreeCamera position={new Vector3(0, 5, -10)} /\>
      \<BabylonHemisphericLight direction={new Vector3(0, 1, 0)} intensity={0.7} /\>
      \<BabylonGround options={{ width: 6, height: 6 }} /\>
      \<BabylonSphere options={{ diameter: 2, segments: 32 }} position={new Vector3(0, 1, 0)} /\>
    \</BabylonScene\>
  \</BabylonEngine\>
\</Canvas\>`
      }
    }
  }}
>
  <Canvas style="width: 100%;">
    <Engine>
      <Scene>
        <FreeCamera position={new Vector3(0, 5, -10)} />
        <HemisphericLight direction={new Vector3(0, 1, 0)} intensity={0.7} />
        <Ground options={{ width: 6, height: 6 }} />
        <Sphere options={{ diameter: 2, segments: 32 }} position={new Vector3(0, 1, 0)} />
      </Scene>
    </Engine>
  </Canvas>
</Story>

<h1>@juunini/svelte-babylonjs</h1>

<h2>Caution</h2>

<blockquote>
  <p>❗ This is WIP and not ready for production use.</p>
</blockquote>

<h2>Introduction</h2>

Easily create 3D scenes with Babylon.js in Svelte.

<h2>Usage</h2>

<p>Click under <code>Show code</code> button or to see category</p>

<h2>Installation</h2>

<code>
  <pre>
npm install @juunini/svelte-babylonjs
yarn add @juunini/svelte-babylonjs
pnpm add @juunini/svelte-babylonjs
bun add @juunini/svelte-babylonjs
  </pre>
</code>

<h2>License</h2>

MIT
