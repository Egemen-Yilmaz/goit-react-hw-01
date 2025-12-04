import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  // If you deploy to GitHub Pages at https://<user>.github.io/goit-react-hw-01/
  // set base to the repo name. Using an explicit base ensures built asset
  // paths are correct and avoids 404s like /vite.svg when served from
  // a subpath. Change this if you publish under a different path.
  base: '/goit-react-hw-01/',
  plugins: [react()],
});
