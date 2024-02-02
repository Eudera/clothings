import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import ViteReactPlugin from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ViteReactPlugin()],

  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});

// export default {
//   // ... other configurations

// };
