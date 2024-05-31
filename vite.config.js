import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/files/**/*',
          dest: 'files'
        }
      ]
    })
  ],
  define: {
    'process.env.REACT_APP_TWITTER_URL': JSON.stringify(process.env.REACT_APP_TWITTER_URL),
    'process.env.REACT_APP_INSTAGRAM_URL': JSON.stringify(process.env.REACT_APP_INSTAGRAM_URL),
    'process.env.REACT_APP_LINKEDIN_URL': JSON.stringify(process.env.REACT_APP_LINKEDIN_URL),
  }
})
