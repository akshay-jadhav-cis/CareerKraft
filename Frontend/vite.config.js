import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 2000,
    proxy: {
      "/features": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
      "/about": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
      "/users": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
