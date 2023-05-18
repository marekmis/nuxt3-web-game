<template>
  <div
    class="front-gear rotate-90 absolute z-10 left-[54px] bottom-4 w-3 h-3 after:absolute after:w-3 after:h-1 after:bg-slate-600 after:rounded-md after:left-1 after:top-1 after:z-10 before:absolute before:w-3 before:h-1 before:bg-slate-800 before:rounded-md before:right-1 before:top-1 before:-z-10 before:transition-all after:transition-all"
    :class="{
      'animate-spin-slow': speed === 1,
      'animate-spin-medium': speed === 2,
      'animate-spin-fast': speed === 3,
    }"
  >
    <div
      class="absolute rounded-full w-3 h-3 bg-slate-300 border-slate-400 border-2 outline-dotted outline-slate-400 outline-1 left-0 bottom-0 z-10 transition-all"
      :class="{
        'animate-spin-slow': speed === 1,
        'animate-spin-medium': speed === 2,
        'animate-spin-fast': speed === 3,
      }"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps({
  speed: {
    type: Number,
    default: 0,
  },
});
</script>
