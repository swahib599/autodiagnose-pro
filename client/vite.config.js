import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://autodiagnose-pro-1.onrender.com',
        changeOrigin: true,
        secure: false
      }
    }
  },
  define: {
    'process.env.BACKEND_URL': JSON.stringify('https://autodiagnose-pro-1.onrender.com')
  }
})
