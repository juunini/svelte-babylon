<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { Vector3 } from '@babylonjs/core/Maths/math.vector';
  import Canvas from '@juunini/svelte-babylonjs/Canvas.svelte';
  import Engine from '@juunini/svelte-babylonjs/engine/Engine.svelte';
  import Scene from '@juunini/svelte-babylonjs/Scene.svelte';
  import HemisphericLight from '@juunini/svelte-babylonjs/light/HemisphericLight.svelte';
  import Capsule from '@juunini/svelte-babylonjs/mesh/Capsule.svelte';
  import ArcRotateCamera from '$lib/camera/ArcRotateCamera.svelte';

  const { Story } = defineMeta({
    title: 'mesh/Capsule',
    tags: ['autodocs'],
    component: Capsule
  });
</script>

<Story
  name="Docs"
  args={{
    options: {
      orientation: { x: 0, y: 0, z: 0 },
      subdivisions: undefined,
      tessellation: undefined,
      height: 4,
      radius: 1,
      capSubdivisions: undefined,
      radiusTop: undefined,
      radiusBottom: undefined,
      topCapSubdivisions: undefined,
      bottomCapSubdivisions: undefined,
      updatable: undefined
    },
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    scaling: { x: 1, y: 1, z: 1 }
  }}
  parameters={{
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Canvas style="width: 100%;">
  <Engine>
    <Scene physics={false}>
      <ArcRotateCamera alpha={Math.PI / 2} beta={Math.PI / 2} radius={10} />
      <HemisphericLight direction={new Vector3(0, 1, 0)} intensity={0.7} />
      <Capsule
        options={{ height: 4, radius: 1 }}
        position={{ x: 0, y: 0, z: 0 }}
        rotation={{ x: 0, y: 0, z: 0 }}
        scaling={{ x: 1, y: 1, z: 1 }}
      />
    </Scene>
  </Engine>
</Canvas>`
      }
    }
  }}
>
  {#snippet children(args)}
    <Canvas style="width: 100%;">
      <Engine>
        <Scene physics={false}>
          <ArcRotateCamera alpha={Math.PI / 2} beta={Math.PI / 2} radius={10} />
          <HemisphericLight direction={new Vector3(0, 1, 0)} intensity={0.7} />
          <Capsule
            options={{
              ...args.options,
              orientation: args.options?.orientation
                ? new Vector3(
                    args.options?.orientation.x,
                    args.options?.orientation.y,
                    args.options?.orientation.z
                  )
                : undefined
            }}
            position={args.position}
            rotation={args.rotation}
            scaling={args.scaling}
          />
        </Scene>
      </Engine>
    </Canvas>
  {/snippet}
</Story>
