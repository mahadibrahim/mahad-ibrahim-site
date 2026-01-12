import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mahadbullo.com',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
