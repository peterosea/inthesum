import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Pages from 'vite-plugin-pages';

export default defineConfig({
  server: {
    hmr: {
      host: '0.0.0.0',
      port: 3000,
      watch: {
        usePolling: true
      }
    },
  },
  plugins: [
    react(),
    Pages({
      dirs: [{ dir: 'src/pages', baseRoute: '' }],
    }),
  ],
});
