import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '192.168.137.1', 
      '192.168.1.6',  
      '.ngrok-free.app',
      'localhost'
    ],
    port: 5173,
  }
})
