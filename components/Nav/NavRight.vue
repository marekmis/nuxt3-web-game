<template>
  <nav
    class="fixed z-50 top-2 right-2 xl:top-5 xl:right-5 bg-white/90 dark:bg-sky-950 p-2 backdrop-blur-sm rounded-lg flex items-center"
  >
    <ButtonDarkMode />

    <NuxtLink
      to="https://github.com/marekmis/nuxt3-web-game"
      class="flex items-center group ml-5 md:ml-8"
      target="_blank"
      title="Source code on GitHub"
    >
      <span class="hidden md:inline-block mr-1">GitHub</span>
      <PhCode
        :size="24"
        class="md:group-hover:scale-110 transition-all duration-75"
      />
    </NuxtLink>

    <NuxtLink
      to="https://www.linkedin.com/in/marekmis/"
      class="flex items-center group ml-5 md:ml-8"
      target="_blank"
      title="Connect on LinkedIn"
    >
      <span class="hidden md:inline-block mr-1">Let's connect</span>
      <PhLinkedinLogo
        :size="24"
        class="md:group-hover:scale-110 transition-all duration-75"
      />
    </NuxtLink>
  </nav>
</template>

<script lang="ts" setup>
import { PhLinkedinLogo, PhCode } from "@phosphor-icons/vue";
</script>
