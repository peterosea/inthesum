import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Pages from 'vite-plugin-pages';

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [
      react(),
      Pages({
        dirs: [{ dir: 'src/pages', baseRoute: '' }],
      }),
    ],
  }
});
