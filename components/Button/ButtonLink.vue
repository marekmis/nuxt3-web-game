<template>
  <NuxtLink
    :to="to"
    :aria-label="ariaLabel"
    class="inline-block text-2xl min-w-[150px] px-5 py-2 bg-yellow-400 text-black font-bold hover:bg-yellow-300 rounded-md active:translate-y-[1px] select-none"
  >
    <span>
      {{ btnText }}
    </span>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  btnText: {
    type: String,
    default: "Button",
    required: true,
  },
  to: {
    type: String,
    default: "/",
  },
  ariaLabel: {
    type: String,
    default: "",
    required: true,
  },
});
</script>
