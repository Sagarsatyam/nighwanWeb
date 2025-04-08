import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      includePublic: true,
      logStats: true,
    }),
    cssInjectedByJsPlugin()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
        },
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    cssCodeSplit: false,
    minify: 'terser',
    sourcemap: false,
    assetsInlineLimit: 4096,
    cssMinify: 'lightningcss',
  },
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets',
      '@components': '/src/components',
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        cssnano({
          preset: ['default', {
            discardComments: { removeAll: true },
            normalizeWhitespace: true,
            minifyFontValues: true,
            minifyGradients: true,
            minifyParams: true,
            minifySelectors: true,
            reduceIdents: true,
            reduceInitial: true,
            reduceTransforms: true,
            svgo: true,
          }]
        })
      ]
    },
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[local]_[hash:base64:5]',
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
      scss: {
        additionalData: `$injectedColor: orange;`
      }
    },
    lightningcss: {
      minify: true,
      browserslist: '>= 0.25%'
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
    port: 3000,
    open: true,
    cors: true,
  },
  publicDir: 'public',
});
