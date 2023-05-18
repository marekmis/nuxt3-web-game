<template>
  <button aria-label="Dark mode" @click="switchMode">
    <Transition name="swap-top" mode="out-in">
      <component
        :is="darkMode ? PhMoonStars : PhSun"
        :key="`darkmode-${darkMode}`"
        class="w-6 h-6 md:hover:scale-110 transition-all duration-75 select-none"
      />
    </Transition>
  </button>
</template>

<script lang="ts" setup>
import { PhSun, PhMoonStars } from "@phosphor-icons/vue";
import { useUiStore } from "@/stores/ui";

const uiStore = useUiStore();
const gtag = useGtag();
const config = useRuntimeConfig();

function switchMode() {
  uiStore.toggleDarkMode();
  gtag("event", "dark_mode_switch", {
    value: uiStore.darkMode,
    send_to: config.public?.gtag?.id,
  });
}
const darkMode = computed(() => uiStore.darkMode);
</script>
