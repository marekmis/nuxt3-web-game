<template>
  <div
    class="rider-leg-behind absolute w-4 h-4 -z-10 rounded-full transition-all brightness-75"
    :class="[
      speed === 0 ? 'bottom-14 left-16 ml-0.5' : 'bottom-16 left-[45px]',
      crashed ? 'hidden' : '',
    ]"
  >
    <div
      class="leg absolute bottom-3 left-0 origin-bottom-left transition-all"
      :class="{
        'animate-leg-slow animation-delay-slow': speed === 1,
        'animate-leg-medium animation-delay-medium': speed === 2,
        'animate-leg-fast animation-delay-fast': speed === 3,
      }"
    >
      <div
        class="absolute top-0 left-0 bg-sky-600 w-4 h-7 rounded-t-lg z-10"
      ></div>

      <div
        class="leg-upper absolute -bottom-10 -right-4 bg-yellow-500 w-3 h-8 -z-10 after:absolute after:bg-yellow-500 after:w-3 after:h-3 after:-bottom-1 after:rounded-full before:absolute before:bg-yellow-600 before:w-3 before:h-6 before:left-0 before:top-0"
      >
        <div
          class="leg-bottom absolute bottom-0 bg-yellow-500 w-1 h-7 rounded-full origin-bottom after:absolute after:w-2 after:h-2 after:bottom-2 after:bg-yellow-500 after:rounded-r-full before:w-1 before:h-2 before:bg-green-800 before:absolute transition-all"
          :class="{
            'rotate-180 right-1': speed === 0,
            'right-1': [1, 2, 3].includes(speed),
            'animate-bottom-leg-slow animation-delay-slow': speed === 1,
            'animate-bottom-leg-medium animation-delay-medium': speed === 2,
            'animate-bottom-leg-fast animation-delay-fast': speed === 3,
          }"
        >
          <div
            class="foot absolute top-0 right-0 bg-red-600 border-t border-slate-800 w-3 h-1 rounded-bl-full"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  speed: {
    type: Number,
    default: 0,
  },
  crashed: {
    type: Boolean,
    default: false,
  },
});
</script>
