import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
 // Use a dynamic base so the same repo can be deployed to GitHub Pages
 // (served from /goit-react-hw-01/) and Vercel (served from root '/').
 // Vercel sets the VERCEL env var in its build environment.
 const base = process.env.VERCEL ? '/' : '/goit-react-hw-01/';

 export default defineConfig({
   base,
   plugins: [react()],
 });
