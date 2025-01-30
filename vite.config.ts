import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: "https://Toppages.github.io/Top-level",
  server: {
    proxy: {
      '/api': {
        target: 'https://stock.hype.games',  
        changeOrigin: true, 
        secure: false,
      },
    },
  },
});
