<template>
  <div
    class="rider-root absolute bg-sky-600 w-4 h-4 z-20 rounded-full transition-all duration-500"
    :class="{
      'bottom-[50px] left-16': speed === 0,
      'bottom-16 left-[45px]': [1, 2, 3].includes(speed),
      'animate-body-slow': speed === 1,
      'animate-body-medium': speed === 2,
      'animate-body-fast': speed === 3,
      'rotate-90 translate-x-32 translate-y-12': crashed,
    }"
  >
    <div
      class="body absolute bg-orange-600 w-4 h-10 rounded-t-full origin-bottom transition-all"
      :class="{
        'bottom-3 z-20 rotate-0': speed === 0,
        'left-1 bottom-[10px] -z-10': [1, 2, 3].includes(speed),
        'rotate-[50deg]': speed === 1,
        'rotate-[60deg]': speed === 2,
        'rotate-[70deg]': speed === 3,
      }"
    >
      <div
        class="head absolute bg-yellow-500 w-5 h-5 z-10 origin-bottom transition-all left-0 -top-5 rounded after:bg-yellow-600 after:absolute after:left-0 after:top-1 after:w-full after:h-0.5"
        :class="{
          'rotate-[-30deg]': speed === 1,
          'rotate-[-45deg]': speed === 2,
          'rotate-[-55deg]': speed === 3,
        }"
      >
        <div
          class="helmet absolute bg-green-800 w-6 h-3 z-10 rounded-t-full -top-2 -left-0.5"
          :class="{
            '-translate-y-4 -rotate-90': crashed,
          }"
        ></div>

        <div
          class="glasses absolute bg-white w-2 h-2 z-10 rounded-b-full border-2 border-slate-900 top-1 after:bg-slate-900 after:absolute after:-left-[6px] after:-top-0.5 after:w-[6px] after:h-1 before:absolute before:border-2 before:border-slate-900 before:rounded-b-full before:bg-white before:-right-2 before:-top-0.5 before:w-2 before:h-2 transition-all"
          :class="[speed === 0 ? 'right-[5px]' : 'right-0 before:hidden']"
        ></div>
      </div>

      <div
        class="arm-upper-right absolute bg-yellow-500 w-1 h-6 z-10 origin-top transition-all left-1 top-2 after:absolute after:bg-yellow-500 after:w-1 after:h-1 after:-bottom-0.5 after:rounded-full before:absolute before:bg-orange-500 before:w-2 before:h-3 before:-left-0.5 before:-top-1 before:rounded-t-full"
        :class="{
          'rotate-[320deg]': speed === 0,
          'rotate-[290deg]': speed === 1,
          'rotate-[296deg]': speed === 2,
          'rotate-[289deg]': speed === 3,
        }"
      >
        <div
          class="arm-lower-right absolute bg-yellow-500 w-1 h-4 z-10 origin-top transition-all left-0 top-6 after:absolute after:bg-yellow-500 after:w-2 after:h-2 after:-bottom-1 after:rounded-full"
          :class="{
            'rotate-[350deg]': speed === 0,
            'rotate-[320deg]': speed === 1,
            'rotate-[280deg]': speed === 2,
            'rotate-[285deg]': speed === 3,
          }"
        ></div>
      </div>
    </div>

    <div
      class="leg absolute bottom-3 left-0 origin-bottom-left transition-all"
      :class="{
        'animate-leg-slow': speed === 1,
        'animate-leg-medium': speed === 2,
        'animate-leg-fast': speed === 3,
      }"
    >
      <div
        class="absolute top-0 left-0 bg-sky-600 w-4 h-7 rounded-t-lg z-10"
        :class="{
          'left-0.5': speed === 0,
        }"
      ></div>

      <div
        class="leg-upper absolute -bottom-10 -right-4 bg-yellow-500 w-3 h-8 -z-10 after:absolute after:bg-yellow-500 after:w-3 after:h-3 after:-bottom-1 after:rounded-full before:absolute before:bg-yellow-600 before:w-3 before:h-6 before:left-0 before:top-0"
      >
        <div
          class="leg-bottom absolute bottom-0 bg-yellow-500 w-1 h-7 rounded-full origin-bottom after:absolute after:w-2 after:h-2 after:bottom-2 after:bg-yellow-500 after:rounded-r-full before:w-1 before:h-2 before:bg-green-800 before:absolute transition-all"
          :class="{
            'rotate-180 right-1': speed === 0,
            'right-1': [1, 2, 3].includes(speed),
            'animate-bottom-leg-slow': speed === 1,
            'animate-bottom-leg-medium': speed === 2,
            'animate-bottom-leg-fast': speed === 3,
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
