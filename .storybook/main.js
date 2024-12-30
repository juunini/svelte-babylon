import path from 'path';

/** @type { import('@storybook/sveltekit').StorybookConfig } */
const config = {
  stories: ['../src/stories/Introduce.stories.svelte', '../src/**/*.mdx', '../src/**/*.stories.@(js|ts|svelte)'],
  addons: [
    '@storybook/addon-svelte-csf',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/sveltekit',
    options: {}
  },
  viteFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve?.alias,
      '@juunini/svelte-babylonjs': path.resolve(__dirname, '../src/lib')
    };

    return config;
  }
};
export default config;
