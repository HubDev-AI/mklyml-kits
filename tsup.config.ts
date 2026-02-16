import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    newsletter: 'newsletter/src/index.ts',
    docs: 'docs/src/index.ts',
  },
  format: ['esm'],
  dts: true,
  clean: true,
  external: ['@mklyml/core', 'zod'],
});
