<template>
  <div class="uppercase">
    <div>
      <span class="lg:text-lg font-bold mr-1">Score: </span>
      <span
        class="text-2xl lg:text-3xl font-black tracking-wider animate-explode inline-block"
        >{{ score }}</span
      >
    </div>
    <div>
      <span class="text-sm lg:text-base font-bold tracking-wider mr-1"
        >Your hi-score:</span
      >
      <span class="tracking-wider text-base lg:text-lg font-black">{{
        hiscore
      }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  score: {
    type: Number,
    default: 0,
  },
  hiscore: {
    type: Number,
    default: 0,
  },
});
</script>
