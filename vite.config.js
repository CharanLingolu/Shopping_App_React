import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Update the base URL to match your GitHub repository name
export default defineConfig({
  base: '/Shopping_App_React/', // Change this to your repo name
  plugins: [react()],
});