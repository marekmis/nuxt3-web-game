<template>
  <div
    class="px-3 pt-16 pb-8 flex flex-col w-full min-h-screen justify-center items-center animate-fade-in"
  >
    <main class="w-full relative h-[300px]">
      <ClientOnly>
        <GameRoot class="trans-page" />
        <template #fallback>
          <GameLoader />
        </template>
      </ClientOnly>
    </main>
  </div>
</template>

<script setup>
useHead({
  title: "Let's ride | Frontend Developer",
  meta: [
    {
      name: "description",
      content: "A simple game made with Nuxt.js and TailwindCSS",
    },
  ],
});
</script>
