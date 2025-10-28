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
      "/users": "http://localhost:5000",
      "/dashboard": "http://localhost:5000",
      "/features": "http://localhost:5000",
      "/about":"http://localhost:5000"
    },
  },
});
