<template>
  <div class="absolute w-[131px] bottom-7 left-1 z-10">
    <div
      class="hidden dark:block absolute w-20 h-20 overflow-hidden -right-10 -bottom-10 before:h-2 gradient-mask-r-0"
    >
      <div
        class="absolute w-48 h-48 bg-white/70 rotate-45 left-10 bottom-0"
      ></div>
    </div>

    <div
      class="hidden dark:block absolute w-1 h-2 bg-red-800 left-[50px] bottom-7 z-10"
    >
      <div
        class="absolute w-full h-full bg-red-500 left-0 top-0 animate-pulse"
      ></div>
    </div>

    <div
      class="rear-frame absolute bg-black h-1 w-[48px] left-4 bottom-3 -rotate-45 rounded-md"
    ></div>

    <div
      class="gear-tube absolute bg-black h-0.5 w-10 left-6 -bottom-0.5 rounded-md"
    ></div>

    <div
      class="top-tube absolute bg-black h-1 w-10 right-8 bottom-8 -rotate-0 rounded-md"
    ></div>

    <div
      class="bottom-tube absolute bg-black h-1 w-12 right-7 bottom-4 -rotate-[40deg] rounded-md"
    ></div>

    <div
      class="fork absolute bg-black h-10 w-1 right-7 -bottom-1 -rotate-[12deg] rounded-md"
    ></div>

    <div
      class="seat-tube absolute bg-black h-12 w-1 left-[60px] -bottom-1 -rotate-2 rounded-md -translate-x-1"
    ></div>

    <div
      class="seat absolute bg-yellow-900 h-1 w-4 left-[51px] bottom-10 rounded-md"
    ></div>

    <div class="handlebar absolute right-[35px] bottom-7">
      <div
        class="w-1 h-3 bg-black absolute left-0 bottom-0 after:w-2 after:h-1 after:bg-black after:absolute after:bottom-3"
      ></div>
      <div class="handlebar absolute left-2 bottom-1 overflow-hidden">
        <div
          class="relative border-4 border-yellow-900 h-3 w-4 rounded-full right-2"
        ></div>
      </div>
    </div>
  </div>
</template>
