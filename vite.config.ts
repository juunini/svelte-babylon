import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit()],

  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  },

  optimizeDeps: {
    exclude: ['@babylonjs/havok']
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

          if (id.includes('@babylonjs/core/Materials/standardMaterial')) {
            return '@babylonjs/core/Materials/standardMaterial';
          }

          if (id.includes('@babylonjs/core/Materials/materials')) {
            return '@babylonjs/core/Materials/materials';
          }

          if (id.includes('@babylonjs/core/types')) {
            return '@babylonjs/core/types';
          }

          if (id.includes('@babylonjs/core/Maths')) {
            return '@babylonjs/core/Maths';
          }

          if (id.includes('@babylonjs/core/Meshes/abstractMesh')) {
            return '@babylonjs/core/Meshes/abstractMesh';
          }

          if (id.includes('@babylonjs/core/Meshes/Builders')) {
            return '@babylonjs/core/Meshes/Builders';
          }

          if (id.includes('@babylonjs/core/Meshes/mesh')) {
            return '@babylonjs/core/Meshes/mesh';
          }
        }
      }
    }
  }
});
