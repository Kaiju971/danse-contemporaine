import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    outDir: "dist",
    // Vite copie automatiquement public/ dans dist/
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // Optionnel : pour importer avec @/components/...
    },
  },
});
