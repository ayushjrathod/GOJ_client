import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000", // backend server URL
        changeOrigin: true,
        secure:false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});