<template>
  <div
    class="absolute z-50 left-0 right-0 mx-auto text-center px-1 w-full h-full bg-white/90 dark:bg-sky-950/90 flex items-center justify-center"
  >
    <div class="text-xl w-screen">
      <h2
        class="text-5xl lg:text-6xl font-black uppercase mb-3 -rotate-2 animate-explode-rotate"
      >
        Ouch!
      </h2>
      <p class="mb-5">You didn't see that coming, huh?</p>
      <GameScore :score="score" :hiscore="hiscore" class="mb-5" />
      <ButtonButton btn-text="Play again" aria-label="Play again" />
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
