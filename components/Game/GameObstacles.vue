<template>
  <div
    class="absolute w-full h-12 border-b-orange-950 border-b dark:border-b-sky-900"
    :class="laneData?.class"
  >
    <div
      v-for="item in laneData?.obstacles"
      :key="item.id"
      class="w-8 h-8 absolute bottom-0 duration-100"
      :style="{
        right: item.distance + 'px',
      }"
    >
      <span v-if="item.type === 'cactus'" class="text-4xl relative -left-2"
        >🌵</span
      >
      <span v-else-if="item.type === 'poop'" class="text-3xl relative -left-3"
        >💩</span
      >
      <span v-else-if="item.type === 'rock'" class="text-4xl relative -left-3"
        >🪨</span
      >
      <span v-else-if="item.type === 'bin'" class="text-4xl relative -left-3"
        >🗑️</span
      >
      <span
        v-else-if="item.type === 'barrier'"
        class="text-4xl relative -left-3"
        >🚧</span
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  laneData: {
    type: Object,
    default: null,
  },
});
</script>
