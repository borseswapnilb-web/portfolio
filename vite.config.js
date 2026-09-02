import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Set VITE_BASE_PATH in the environment to deploy under a subpath
// (e.g. "/portfolio/" for GitHub Pages project sites). Leave unset for
// Vercel/Netlify root hosting.
export default defineConfig(({ env }) => ({
  base: env.VITE_BASE_PATH || '/',
  plugins: [react()],
}))