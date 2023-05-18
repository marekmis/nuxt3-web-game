<template>
  <div class="absolute w-full max-w-[100vw] top-0 left-0 h-4">
    <div class="absolute top-0 left-0 uppercase">
      <div class="flex items-center">
        <span class="text-sm lg:text-base mr-1">Score:</span>
        <span class="text-xl lg:text-2xl font-black tracking-wider">{{
          score
        }}</span>
      </div>
      <div class="flex items-center">
        <span class="font-normal text-xs lg:text-base mr-1"
          >Your hi-score:</span
        >
        <span class="text-xs lg:text-base font-bold tracking-wider">{{
          hiscore
        }}</span>
      </div>
    </div>
    <div class="absolute top-0 right-0 uppercase flex items-center">
      <span class="text-sm lg:text-base mr-1 font-bold">Level:</span>
      <span
        :key="level"
        class="text-2xl lg:text-3xl font-black tracking-wider animate-explode inline-block"
        >{{ level }}</span
      >
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
  level: {
    type: Number,
    default: 1,
  },
});
</script>
