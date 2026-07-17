import { build } from 'esbuild';


await build({
  entryPoints: ['tests/smoke/smoke-test.ts'],
  bundle: true,
  platform: 'node',
  target: 'es2015',
  external: ['k6','k6/http', 'k6/metrics', 'k6/execution', 'k6/check', 'k6/*'],
  outfile: 'dist/smoke-test.js',});

console.log('Build complete!');