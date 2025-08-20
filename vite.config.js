import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/frontapp1/', // 👈 This sets the correct base URL
  server: {
    port: 5175 // 👈 This forces Vite to run on port 5175
  }
})
