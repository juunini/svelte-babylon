<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { Vector3 } from '@babylonjs/core/Maths/math.vector';
  import type { Mesh } from '@babylonjs/core/Meshes/mesh';

  import Canvas from '@juunini/svelte-babylonjs/Canvas.svelte';
  import Engine from '@juunini/svelte-babylonjs/engine/Engine.svelte';
  import Scene from '@juunini/svelte-babylonjs/Scene.svelte';
  import FreeCamera from '@juunini/svelte-babylonjs/camera/FreeCamera.svelte';
  import HemisphericLight from '@juunini/svelte-babylonjs/light/HemisphericLight.svelte';
  import Box from '@juunini/svelte-babylonjs/mesh/Box.svelte';

  let mesh: Mesh;

  const { Story } = defineMeta({
    title: 'mesh/Box',
    tags: ['autodocs'],
    component: Box
  });
</script>

<Story
  name="Docs"
  args={{
    options: { width: 2, height: 2, depth: 2 },
    position: Vector3.Zero(),
    lookAt: {
      targetPoint: Vector3.Zero()
    }
  }}
>
  {#snippet children(args)}
    <Canvas style="width: 100%;">
      <Engine>
        <Scene>
          <FreeCamera position={new Vector3(0, 5, -10)} />
          <HemisphericLight direction={new Vector3(0, 1, 0)} intensity={0.7} />
          <Box bind:mesh options={args.options} position={args.position} lookAt={args.lookAt} />
        </Scene>
      </Engine>
    </Canvas>
  {/snippet}
</Story>
