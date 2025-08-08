import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // Mantenha apenas UMA chave "plugins"
  plugins: [react()],

  // Suas outras configurações
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  base: "/portfolio/",
});
