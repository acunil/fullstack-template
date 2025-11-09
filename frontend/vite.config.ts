import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
  // load .env, .env.local, .env.[mode] etc
  const env = loadEnv(mode, process.cwd(), '')

  // Prefer VITE_BACKEND_URL, fallback to localhost
  const backendUrl = env.VITE_BACKEND_URL || 'http://localhost:8080'

  return defineConfig({
    plugins: [react()],
    server: {
      proxy: {
        '/test': {
          target: backendUrl,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  })
}
