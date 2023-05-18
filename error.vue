<template>
  <div
    class="px-3 py-16 flex flex-col w-full min-h-screen justify-center items-center"
  >
    <section class="max-w-xl text-center">
      <h1 class="text-6xl mb-6 font-bold">Oopsie!</h1>
      <p class="text-xl lg:text-2xl">Something's missing</p>
      <ButtonLink
        btn-text="Go to homepage"
        to="/"
        aria-label="Go to homepage"
        class="mt-3"
      />
      <BikeFrame class="relative mx-auto mt-24" />
    </section>
  </div>
</template>

<script setup>
/**
 * Meta tags
 */
useHead({
  title: "Page not found",
  meta: [{ name: "robots", content: "noindex,nofollow" }],
});
</script>
