import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';
import dotenv from 'dotenv';

dotenv.config();

const envVariables = [
  'REACT_APP_TWITTER_URL',
  'REACT_APP_INSTAGRAM_URL',
  'REACT_APP_LINKEDIN_URL',
  'REACT_APP_PSNM_CHAPTER1_URL',
  'REACT_APP_PSNM_CHAPTER2_URL',
  'REACT_APP_PSNM_CHAPTER4_URL',
  'REACT_APP_PSNM_CHAPTER5_URL',
  'REACT_APP_PSNM_CHAPTER7_URL',
  'REACT_APP_POM_ASSIGNMENT_URL',
  'REACT_APP_CN_ASSIGNMENT1_URL',
  'REACT_APP_CN_ASSIGNMENT2_URL',
  'REACT_APP_CN_ASSIGNMENT3_URL',
]

const defineEnv = {};
envVariables.forEach((envVar) => {
  if(process.env[envVar]) {
    defineEnv[`process.env.${envVar}`] = JSON.stringify(process.env[envVar]);
  }
}); 

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
  define: defineEnv
})
