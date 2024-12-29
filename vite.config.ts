import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},

	build: {
		rollupOptions: {
			output: {
				manualChunks(id: string) {
					if (id.includes('@babylonjs/core/scene')) {
						return '@babylonjs/core/scene';
					}

					if (id.includes('@babylonjs/core/Engines')) {
						return '@babylonjs/core/Engines';
					}

					if (id.includes('@babylonjs/core/Materials')) {
						return '@babylonjs/core/Materials';
					}

					if (id.includes('@babylonjs/core/types')) {
						return '@babylonjs/core/types';
					}

					if (id.includes('@babylonjs/core/Maths')) {
						return '@babylonjs/core/Maths';
					}

					if (id.includes('@babylonjs/core/Meshes')) {
						return '@babylonjs/core/Meshes';
					}
				}
			}
		}
	}
});
