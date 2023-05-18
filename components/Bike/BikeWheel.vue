<template>
  <div
    class="wheel w-12 h-12 rounded-full border-4 border-amber-500 shadow-[0_0px_0px_4px_rgba(15,23,42,1)] relative -z-1 overflow-hidden0 transition-all"
    :class="{
      'animate-spin-slow': speed === 1,
      'animate-spin-medium': speed === 2,
      'animate-spin-fast': speed === 3,
    }"
  >
    <div
      v-if="showGear"
      class="rear-gear absolute rounded-full w-4 h-4 border-slate-400 border-2 outline-dotted outline-slate-400 outline-1 left-3 bottom-3 z-10"
    ></div>

    <div
      v-for="(spokeClass, idx) in spokeClasses"
      :key="idx"
      class="absolute bg-slate-300 w-full h-[1px] top-1/2 after:absolute after:bg-slate-300 after:w-full after:h-[1px] after:top-1/2 after:rotate-12"
      :class="spokeClass"
    ></div>
  </div>
</template>

<script setup>
const spokeClasses = ["rotate-0", "rotate-45", "rotate-90", "-rotate-45"];
const props = defineProps({
  speed: {
    type: Number,
    default: 0,
  },
  showGear: {
    type: Boolean,
    default: false,
  },
});
</script>
