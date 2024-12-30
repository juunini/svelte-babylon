<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { Vector3 } from '@babylonjs/core/Maths/math.vector';
  import Canvas from '@juunini/svelte-babylonjs/Canvas.svelte';
  import Engine from '@juunini/svelte-babylonjs/engine/Engine.svelte';
  import Scene from '@juunini/svelte-babylonjs/Scene.svelte';
  import FreeCamera from '@juunini/svelte-babylonjs/camera/FreeCamera.svelte';
  import HemisphericLight from '@juunini/svelte-babylonjs/light/HemisphericLight.svelte';
  import DashedLine from '@juunini/svelte-babylonjs/mesh/DashedLine.svelte';

  const { Story } = defineMeta({
    title: 'mesh/DashedLine',
    tags: ['autodocs'],
    component: DashedLine
  });
</script>

<Story
  name="Docs"
  args={{
    options: {
      dashNb: 20,
      dashSize: 4,
      gapSize: 4,
      instance: undefined,
      material: undefined,
      points: [new Vector3(-2, 4, -8), new Vector3(2, 4, -8)],
      updatable: undefined,
      useVertexAlpha: undefined
    },
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    scaling: { x: 1, y: 1, z: 1 }
  }}
>
  {#snippet children(args)}
    <Canvas style="width: 100%;">
      <Engine>
        <Scene>
          <FreeCamera position={new Vector3(0, 5, -10)} />
          <HemisphericLight direction={new Vector3(0, 1, 0)} intensity={0.7} />
          <DashedLine
            options={args.options!}
            position={args.position}
            rotation={args.rotation}
            scaling={args.scaling}
          />
        </Scene>
      </Engine>
    </Canvas>
  {/snippet}
</Story>
