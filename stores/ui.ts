import { defineStore } from "pinia";

export const useUiStore = defineStore("ui", () => {
  /* Dark mode */
  const darkMode = ref(false);

  function toggleDarkMode(isDarkMode?: boolean) {
    if (isDarkMode !== undefined) {
      darkMode.value = isDarkMode;
      document.body.classList.toggle("dark", isDarkMode);
    } else {
      darkMode.value = !darkMode.value;
      document.body.classList.toggle("dark");
    }
  }

  return { darkMode, toggleDarkMode };
});
