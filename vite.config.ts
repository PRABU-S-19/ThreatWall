import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// On Render (or any host) PORT is provided; bind to all interfaces so the platform can reach the app.
const port = Number(process.env.PORT) || undefined
const hostCfg = { host: '0.0.0.0', port, strictPort: !!port, allowedHosts: ['.onrender.com', 'localhost'] }

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: hostCfg,
  preview: hostCfg,
})
