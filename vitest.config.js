import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) =>
            ["Bike", "Rider"].some((word) => tag.startsWith(word)),
        },
      },
    }),
  ],
  test: {
    globals: true,
    environment: "happy-dom",
  },
});
