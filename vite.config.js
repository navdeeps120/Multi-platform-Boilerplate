import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? './' : '/',
  server: {
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true,
    },
    origin: 'http://localhost:5173',
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  define: {
    __APP_ENV__: JSON.stringify(mode),
  }
}))
