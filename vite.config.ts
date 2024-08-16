import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'prompt',
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'escuela-circulo',
      short_name: 'escuela-circulo',
      description: 'Escuela de periodismo deportivo',
      theme_color: '#16337a',
      icons:[
        {
          src: 'src/assets/pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png'
        },
        {
          src: 'src/assets/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'src/assets/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'  
        },
        {
          src: 'src/assets/maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'src/assets/image/png',
          purpose: 'maskable'
        }
      ]
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})