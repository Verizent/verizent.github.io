import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePluginRadar } from 'vite-plugin-radar'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), VitePluginRadar({
    analytics: {
      id: process.env.VITE_GOOGLE_MEASUREMENT_ID,
    },
  })],
  build: {
    outDir: 'docs'
  },
  base: '/'
})