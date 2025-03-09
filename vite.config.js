import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/JP-seasons/',
  // build: {
  //   outDir: 'dist', // 確保輸出資料夾是 dist
  //   assetsDir: 'assets',
  //   copyPublicDir: true,
  // },

  base: process.env.NODE_ENV === 'production' ? '/JP-seasons/' : '/'
})

