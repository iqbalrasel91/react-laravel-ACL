import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

// export default defineConfig(({ plugins: [react()], mode }) => {
//   // Load environment variables based on the current mode
//   dotenv.config({ path: `.env.${mode}` });

//   // Rest of your Vite configuration...
// });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
