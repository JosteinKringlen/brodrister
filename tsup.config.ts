import { defineConfig } from 'tsup';

export default defineConfig((opts) => ({
    entry: ['src/index.ts'],
    minify: true,
    target: 'es2022',
    external: ['react', 'react-dom'],
    sourcemap: true,
    dts: true,
    format: ['esm', 'cjs'],
    injectStyle: true,
    clean: !opts.watch,
    platform: 'browser',
    esbuildOptions: (opts) => {
        opts.jsx = 'automatic';
    },
}));
