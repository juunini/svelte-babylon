<script lang="ts" module>
  import earcut from 'earcut';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { Vector3, Vector4 } from '@babylonjs/core/Maths/math.vector';
  import { Mesh } from '@babylonjs/core/Meshes/mesh';
  import { Color4 } from '@babylonjs/core/Maths/math.color';
  import Canvas from '@juunini/svelte-babylonjs/Canvas.svelte';
  import Engine from '@juunini/svelte-babylonjs/engine/Engine.svelte';
  import Scene from '@juunini/svelte-babylonjs/Scene.svelte';
  import FreeCamera from '@juunini/svelte-babylonjs/camera/FreeCamera.svelte';
  import HemisphericLight from '@juunini/svelte-babylonjs/light/HemisphericLight.svelte';
  import ExtrudePolygon from '@juunini/svelte-babylonjs/mesh/ExtrudePolygon.svelte';

  const { Story } = defineMeta({
    title: 'mesh/ExtrudePolygon',
    tags: ['autodocs'],
    component: ExtrudePolygon
  });
</script>

<Story
  name="Docs"
  args={{
    options: {
      backUVs: { x: 0, y: 0, z: 1, w: 1 },
      faceColors: [{ r: 1, g: 1, b: 1, a: 1 }],
      faceUV: [{ x: 0, y: 0, z: 1, w: 1 }],
      frontUVs: { x: 0, y: 0, z: 1, w: 1 },
      shape: [
        { x: 4, y: 0, z: -4 },
        { x: 2, y: 0, z: 0 },
        { x: 5, y: 0, z: 2 },
        { x: 1, y: 0, z: 2 },
        { x: -5, y: 0, z: 5 },
        { x: -3, y: 0, z: 1 },
        { x: -4, y: 0, z: -4 },
        { x: -2, y: 0, z: -3 },
        { x: 2, y: 0, z: -3 }
      ],
      holes: [
        [
          { x: 1, y: 0, z: -1 },
          { x: 1.5, y: 0, z: 0 },
          { x: 1.4, y: 0, z: 1 },
          { x: 0.5, y: 0, z: 1.5 }
        ],
        [
          { x: 0, y: 0, z: -2 },
          { x: 0.5, y: 0, z: -1 },
          { x: 0.4, y: 0, z: 0 },
          { x: -1.5, y: 0, z: 0.5 }
        ]
      ],
      depth: 2,
      sideOrientation: Mesh.DOUBLESIDE,
      updatable: undefined,
      wrap: undefined
    },
    earcutInjection: earcut,
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
          <ExtrudePolygon
            options={{
              ...args.options,
              shape: args.options?.shape.map((v) => new Vector3(v.x, v.y, v.z)),
              holes: args.options?.holes.map((hole) => hole.map((v) => new Vector3(v.x, v.y, v.z))),
              faceUV: args.options?.faceUV?.map((v) => new Vector4(v.x, v.y, v.z, v.w)),
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
                : undefined,
              faceColors: args.options?.faceColors?.map((v) => new Color4(v.r, v.g, v.b, v.a))
            }}
            earcutInjection={args.earcutInjection}
            position={args.position}
            rotation={args.rotation}
            scaling={args.scaling}
          />
        </Scene>
      </Engine>
    </Canvas>
    <h2>Caution!</h2>
    <p>
      The <code>earcutInjection</code> prop is required for the 'https://www.npmjs.com/package/earcut'
      library to work.
    </p>
  {/snippet}
</Story>
