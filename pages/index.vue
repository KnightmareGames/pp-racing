<template>
  <div>
    <div class="md:flex justify-center md:mt-72">
      <div class="flex content-center self-center justify-center max-h-24 md:max-h-48">
        <img src="/images/Logo.svg" alt="Planetary Pod Racing Logo">
      </div>
      <div class="flex justify-center self-center ml-5">
        <div class="flex-col">
          <p class="font-main text-primary text-l md:text-2xl">Build your planet</p>
          <p class="font-main text-primary text-l md:text-2xl">Race your pod</p>
          <p class="font-main text-secondary text-l md:text-2xl">Conquer the multiverse</p>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-10">
      <button class="bg-primary text-secondary active:bg-blueGray-600 font-nav uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onclick="window.open('https://discord.com/api/oauth2/authorize?client_id=905710922180485120&permissions=2147483649&scope=bot%20applications.commands','_blank');">
        Add to Discord
      </button>     
    </div>
    <div class="flex justify-center ">
      <div class="md:flex flex-wrap justify-center xl:w-2/3 mt-12 md:mt-36 lg:mt-96 ">
        <div class="flex flex-col lg:w-1/3 xl:w-1/4  mx-10">
          <h1 class="font-nav text-3xl"><span class="text-secondary">Scavenge</span> for powerful new items, resources, and abilities</h1>
          <p class="leading-relaxed text-primary my-4">
              The multiverse is full of surprises. Explore each planet to uncover their unique buried treasures.
              Lucky racers will find CHIPPs for activating powerful in-race abilities, QUID for entering new events
              and purchasing new items, and mysterious items that could be the key to unlocking the fastest Planetary Pod in existence.
          </p>
        </div>
        <div class="flex flex-col lg:w-1/3 xl:w-1/4  mx-10">
          <h1 class="font-nav text-3xl">Prove your racing skills and knowledge in universal <span class="text-secondary">Trials</span></h1>
          <p class="leading-relaxed text-primary my-4">
              Out of fuel? No need to travel across the expansiveness of outer space in order prove you are the best.
              Racers will enter Trials from anywhere in the multiverse and earn prizes for dominating competition from one wormhole to the next. 
          </p>
        </div>
        <div class="flex flex-col lg:w-1/3 xl:w-1/4  mx-10">
          <h1 class="font-nav text-3xl">Dominate the planet locals in 8 player <span class="text-secondary">Skirmishes</span></h1>
          <p class="leading-relaxed text-primary my-4">
              Each planet is unique. They have their own tracks, resources, weather, and people.
              Racers will learn the ins and out of each planet to crush the local competition and
              become a legend. Proceed with caution: The more you win, the larger the target you are for challengers.
          </p>
        </div>
        <div class="flex flex-col lg:w-1/3 xl:w-1/4  mx-10">
          <h1 class="font-nav text-3xl">Battle against your friends in multiplayer <span class="text-secondary">Races</span></h1>
          <p class="leading-relaxed text-primary my-4">
              Teaming up with your friends to conquer the cosmos feels great, but dominating them in head to head races feels even better.
              Put your QUID where your mouth is. The more racers that join, the better the payout.
          </p>
        </div>
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
        content: 'A multiplayer racing simulation game where players scavenge, build, and race their way to becoming the best in the multiverse'
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
