<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { v7 } from 'uuid';
	import type { Scene } from '@babylonjs/core/scene';
	import type { Vector4 } from '@babylonjs/core/Maths/math.vector';
	import type { Mesh } from '@babylonjs/core/Meshes/mesh';
	import type { Nullable } from '@babylonjs/core/types';
	import { CreateIcoSphere } from '@babylonjs/core/Meshes/Builders/icoSphereBuilder';

	export interface IcoSphereOptions {
		bbackUVs?: Vector4;
		flat?: boolean;
		frontUVs?: Vector4;
		radius?: number;
		radiusX?: number;
		radiusY?: number;
		radiusZ?: number;
		sideOrientation?: number;
		subdivisions?: number;
		updatable?: boolean;
	}

	interface Props {
		icoSphere?: Mesh;
		name?: string;
		options?: IcoSphereOptions;
		scene?: Nullable<Scene>;
		children?: Snippet;
	}

	let {
		icoSphere = $bindable(),
		name = $bindable(`icoSphere${v7()}`),
		options,
		scene,
		children
	}: Props = $props();

	icoSphere = CreateIcoSphere(name, options, scene);

	onDestroy(() => {
		icoSphere.dispose();
	});
</script>

{@render children?.()}
