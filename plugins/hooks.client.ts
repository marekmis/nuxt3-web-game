import { useUiStore } from "@/stores/ui";

export default defineNuxtPlugin((nuxtApp) => {
  const uiStore = useUiStore();

  nuxtApp.hook("app:mounted", () => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    )
      uiStore.toggleDarkMode(true);
  });
});
