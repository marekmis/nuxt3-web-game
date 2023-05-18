<template>
  <button
    class="inline-block text-2xl lg:text-3xl px-5 py-2 lg:px-6 lg:py-3 bg-yellow-400 text-black font-bold hover:bg-yellow-300 rounded-md active:translate-y-[1px] select-none [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)] drop-shadow-sm"
  >
    {{ btnText }}
  </button>
</template>

<script setup>
const props = defineProps({
  btnText: {
    type: String,
    default: "",
  },
});
</script>
