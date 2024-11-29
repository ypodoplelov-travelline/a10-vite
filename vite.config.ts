// import { splitVendorChunkPlugin, defineConfig } from 'vite';
// import { dependencies } from './package.json';
//
// function renderChunks(deps) {
//   let chunks = {};
//   Object.keys(deps).forEach((key) => {
//     if ([].includes(key)) return;
//     chunks[key] = [key];
//   });
//   return chunks;
// }
//
// export default defineConfig({
//     plugins: [splitVendorChunkPlugin()],
//     build: {
//         sourcemap: false,
//         rollupOptions: {
//           output: {
//             manualChunks: {
//               vendor: [],
//               ...renderChunks(dependencies),
//             },
//           },
//         },
//       },
//   })

import react from '@vitejs/plugin-react-swc'
// import path, { resolve } from 'node:path'
import { visualizer } from 'rollup-plugin-visualizer'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'
import inspect from 'vite-plugin-inspect'
import { env } from '@dotenv-run/core'

env({
  root: './',
  verbose: true,
})

// console.log('VITE_ENDPOINT_API', process.env.VITE_ENDPOINT_API)

const config = defineConfig({
  cacheDir: './.cache',
  clearScreen: false,
  base: process.env.VITE_BASE_URL,
  // root: './src',
  // build: {
  //   outDir: '../dist',
  //   emptyOutDir: true,
  //   rollupOptions: {
  //     input: {
  //       main: resolve(__dirname, './src/index.html'),
  //     },
  //   },
  // },

  plugins: [
    inspect(),
    react({
      tsDecorators: true,
    }),
    visualizer({
      emitFile: true,
      filename: 'stats.html',
      // template: 'sunburst'
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  // resolve: {
  //   alias: {
  //     '@web-client': path.resolve(__dirname, './src/modules'),
  //     '@assets': path.resolve(__dirname, './src/assets'),
  //     '@public': path.resolve(__dirname, './public'),
  //   },
  // },
  // appType: 'mpa',
})

export default config
