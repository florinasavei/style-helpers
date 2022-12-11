import { defineConfig } from 'vite'
import { resolve } from 'path'


// https://vitejs.dev/config/
// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  plugins: [],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.tsx"),
      name: "MyCssLib",
    },
},
})
