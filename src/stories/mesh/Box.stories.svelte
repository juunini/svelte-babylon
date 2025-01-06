<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { Vector3, Vector4 } from '@babylonjs/core/Maths/math.vector';
  import { Color4 } from '@babylonjs/core/Maths/math.color';
  import Canvas from '@juunini/svelte-babylonjs/Canvas.svelte';
  import Engine from '@juunini/svelte-babylonjs/engine/Engine.svelte';
  import Scene from '@juunini/svelte-babylonjs/Scene.svelte';
  import HemisphericLight from '@juunini/svelte-babylonjs/light/HemisphericLight.svelte';
  import Box from '@juunini/svelte-babylonjs/mesh/Box.svelte';
  import ArcRotateCamera from '$lib/camera/ArcRotateCamera.svelte';

  const { Story } = defineMeta({
    title: 'mesh/Box',
    tags: ['autodocs'],
    component: Box
  });
</script>

<Story
  name="Docs"
  args={{
    options: {
      backUVs: { x: 0, y: 0, z: 1, w: 1 },
      bottomBaseAt: undefined,
      depth: 4,
      faceColors: [{ r: 1, g: 1, b: 1, a: 1 }],
      faceUV: [{ x: 0, y: 0, z: 1, w: 1 }],
      frontUVs: { x: 0, y: 0, z: 1, w: 1 },
      height: 4,
      sideOrientation: undefined,
      size: undefined,
      topBaseAt: undefined,
      updatable: undefined,
      width: 4,
      wrap: undefined
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
      <Box
        options={{ width: 4, height: 4, depth: 4 }}
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
          <Box
            options={{
              ...args.options,
              faceUV: args.options?.faceUV?.map((v) => new Vector4(v.x, v.y, v.z, v.w)),
              faceColors: args.options?.faceColors?.map((v) => new Color4(v.r, v.g, v.b, v.a)),
              frontUVs: args.options?.frontUVs
                ? new Vector4(
                    args.options?.frontUVs.x,
                    args.options?.frontUVs.y,
                    args.options?.frontUVs.z,
                    args.options?.frontUVs.w
                  )
                : undefined,
              backUVs: args.options?.backUVs
                ? new Vector4(
                    args.options?.backUVs.x,
                    args.options?.backUVs.y,
                    args.options?.backUVs.z,
                    args.options?.backUVs.w
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
