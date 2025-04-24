import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  plugins: [tailwindcss(), react(), {
    enforce: 'pre', ...mdx({
      providerImportSource: "@mdx-js/react",
    }),
  },],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
