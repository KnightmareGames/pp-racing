<template>
  <div>
    <div class="flex content-center justify-center ">
      <img src="/images/Logo.svg" alt="Planetary Pod Racing Logo">
    </div>
    <div class="flex justify-center mt-10">
      <div class="flex-col">
        <p class="font-main text-primary text-xl md:text-3xl">Build your planet</p>
        <p class="font-main text-primary text-xl md:text-3xl">Race your pod</p>
        <p class="font-main text-secondary text-xl md:text-3xl">Conquer the universe</p>
      </div>
    </div>
    <div class="flex justify-end ">
      <img src="/images/Stripe-1.svg" alt="Line break stripe">
    </div>
    <div class="flex justify-center  mx-auto">
      <div class="grid grid-cols-2 grid-rows-4 ">
        <div><img src="/images/Header-1.svg" alt="Build your track"></div>
        <div></div>
        <div></div>
        <div><img src="/images/Header-2.svg" alt="Scavenge for parts"></div>
        <div><img src="/images/Header-3.svg" alt="Configure your pod"></div>
        <div></div>
        <div></div>
        <div><img src="/images/Header-4.svg" alt="Race and WIN"></div>
      </div>
    </div>
    <div class="flex justify-start mt-5">
      <img src="/images/Stripe-2.svg" alt="Line break stripe 2">
    </div>
    <div class="flex justify-center mt-10">
      <p class="font-main text-primary text-2xl md:text-6xl">Join the community now!</p>
    </div>
    <div class="flex justify-center mx-auto mt-10">
      <div class="grid grid-cols-3 grid-rows-1 ">
        <div><a href="https://discord.gg/ruH9t94PHK"><img src="/images/Discord-Logo.svg" alt="Planetary Pod Racing Discord Link"></a></div>
        <div></div>
        <div><a href="https://twitter.com/PPRacingGame"><img src="/images/Twitter-Logo.svg" alt="Planetary Pod Racing Twitter Link"></a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Plantary Pod Racing',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'plantery-pod-racing-landing',
        name: 'keywords',
        content: 'discord, bot, game, pp, racing, planetary, pod'
      },
      {
        hid: 'landing-description',
        name: 'description',
        content: 'A multiplayer racing simulation game where players scavenge, build, and race their way to becoming the best in the universe'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
}
</script>

<style>
@font-face {
    font-family: mainFont;
    src: url("/fonts/RacingSansOne-Regular.ttf");
}
</style>
