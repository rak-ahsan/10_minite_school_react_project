import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    
    react(),
    {
      name: 'image-import',
      enforce: 'pre',
      // Adjust the file extensions based on your needs
      transform(src, id) {
        if (id.endsWith('.PNG')) {
          return `export default ${JSON.stringify(id)};`;
        }
      },
    },
  
  
  ],
})


