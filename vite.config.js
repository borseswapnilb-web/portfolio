import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
// Set VITE_BASE_PATH in a .env file or your hosting environment to deploy
// under a subpath (e.g. "/portfolio/" for GitHub Pages project sites).
// Leave unset for Vercel/Netlify root hosting.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const base = env.VITE_BASE_PATH || '/'
  return {
    base'/portfolio/',
    plugins: [react()],
  }
})
