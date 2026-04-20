import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  css: {
    transformer: "lightningcss",
  },
  build: {
    rollupOptions: {
      input: "assets/tailwind.source.css",
      output: {
        assetFileNames: "[name].css",
      },
    },
    outDir: "assets",
    emptyOutDir: false,
  },
});
