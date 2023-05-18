<template>
  <nav
    v-if="$route.path !== '/'"
    class="fixed z-50 top-2 left-2 xl:top-5 xl:left-5 bg-white/90 dark:bg-sky-950 p-2 backdrop-blur-sm rounded-lg flex items-center"
  >
    <NuxtLink to="/" title="Go to homepage" class="flex items-center group">
      <PhHouse
        :size="24"
        class="md:group-hover:scale-110 transition-all duration-75"
      />
    </NuxtLink>
  </nav>
</template>

<script lang="ts" setup>
import { PhHouse } from "@phosphor-icons/vue";
</script>
