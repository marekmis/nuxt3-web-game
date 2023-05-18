<template>
  <div
    class="px-3 pt-16 pb-8 flex flex-col w-full min-h-screen justify-center items-center animate-fade-in"
  >
    <section class="max-w-xl relative z-10">
      <h1 class="text-6xl mb-6 font-bold -rotate-3">Hello!</h1>
      <p class="text-lg lg:text-xl">My name is Marek,</p>
      <p class="text-lg lg:text-xl">
        I'm a frontend developer who loves to code and design for
        <s class="text-red-500">
          <span class="text-black dark:text-white">web</span></s
        >
        people.
      </p>
      <p class="text-lg lg:text-xl mt-3">
        Rather than creating a traditional portfolio, I had an idea to make
        something a bit more entertaining. I wanted to develop a small game that
        incorporates my current interests: Nuxt.js, TailwindCSS, and... gravel
        cycling.
      </p>
    </section>

    <div class="overflow-hidden w-full relative h-[300px] -top-14 z-0">
      <ClientOnly>
        <NuxtLink to="/game">
          <GameRoot :deactivated="true" class="trans-page" />
        </NuxtLink>
        <template #fallback>
          <GameLoader />
        </template>
      </ClientOnly>
    </div>

    <section class="max-w-xl">
      <p class="text-sm text-slate-500 dark:text-slate-300">
        Apart from few emojis, there's not a single image used in the game 😎
      </p>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Marek Mis | Frontend Developer",
  meta: [
    {
      name: "description",
      content:
        "Frontend Developer with a passion for good design and ❤️ Vue.js",
    },
  ],
});
</script>
