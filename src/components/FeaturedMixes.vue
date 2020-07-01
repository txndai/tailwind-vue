<template>
  <section id="featuredPlaylists" class="pb-24 text-gray-870 body-font border-gray-200 w-full ">
    
      <div class="flex flex-col mt-24 text-center w-full mb-20">
        <h2 class="text-xs text-orange-400 tracking-widest font-medium title-font mb-1 uppercase">Curated tunes</h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Featured Mixes</h1>
      </div>
      
      <div id="cardContainer" class="flex flex-no-wrap  overflow-x-auto scrolling-touch">
        <div v-for="card in cards" :key="card.Title" class="p-4 min-w-full md:min-w-md max-w-lg flex">
            <MixCard :card="card" />
        </div>
      </div>
        
      
      
  
  </section>
</template>

<script>
import MixCard from './MixCard.vue'

export default {
    components: {
   MixCard
  },

  data() {
    return {
      cards: [
        {
          Title: 'Sa Deep House',
          MixedBy: 'Safari',
          Description: 'Short mix, showcasing a deep-house sub-genre that SA has just been killing for years now, the style of glitch.',
          Link: 'https://youtu.be/WgUt9PnrcqI',
          imgUrl: '/img/goose.png',
          imgAlt: 'Goosebumps alternative logo',
          djLink: 'https://twitter.com/txndai',
          tracklist: ['Dwson - Another Sleepless Night','Fka Mash - We Belong To The Night', 'Sean Munnick - Week n Chill', 'Xclusive kAi - FourPlay', 'Jazzuelle - Blood Moon', 'Dwson - Tears for You'],
        },
        {
          Title: 'Stephan Bodzin x Rodriguez Jr.',
          MixedBy: 'Safari',
          Description: 'If you enjoy this sound, pay attention to the featuring artists & remixers too!',
          Link: 'https://youtu.be/WgUt9PnrcqI',
          imgUrl: '/img/goose.png',
          imgAlt: 'Goosebumps alternative logo',
          djLink: 'https://twitter.com/txndai',
          tracklist: [
              'Marc Romboy & Stephan Bodzin - Phobos (Synthapella)',
              'Miyagi ft. Allies For Everyone - Clouds (David Hasert Remix)',
              'Stephan Bodzin - Luka Leon',
              'Rodriguez Jr. - Chrysalism',
              'Stephan Bodzin - Vendetta',
              'Stephan Bodzin - Sputnik (Dominik Eulberg Remix)',
              'Stephan Bodzin - Powers of Ten',
              'Stephan Bodzin - Catamaran',
              'Rodriguez Jr. - Monticello',
              'Gorje Hewek & Izhevski - Leternite Vechnost (Instrumental)'
          ],
        },
        {
          Title: 'AfroBeat chill',
          MixedBy: 'Safari',
          Description: 'Laidback dancefloor afro tunes',
          Link: 'https://www.youtube.com/watch?v=anxlX5urLNM',
          imgUrl: '/img/goose.png',
          imgAlt: 'Goosebumps alternative logo',
          djLink: 'https://twitter.com/txndai',
          tracklist: [
              'Odunsi feat RAYE - Tipsy',
              'Show Dem Camp - Tropicana ft. Flash',
              'Fasina x Adey - Split',
              'BOJ feat. Teni – Obe (Stew)',
              'Sarz & WurlD - Trobul',
              'Tekno - BE',
              'One Acen - Vice Versa ft. WSTRN',
              'Show Dem Camp - Popping Again ft. Odunsi, BOJ',
              'Da Beatfreakz x AJ x Deno x Swarmz x Cadet - Pumpy'
          ],
        },
        {
          Title: 'Filthy Jump up DnB',
          MixedBy: 'JackinGoose',
          Description: 'Perfect for working out, or as background music to world domination and general destruction, this is music for the villains.',
          Link: 'https://www.youtube.com/watch?v=WkJnD48cANo',
          imgUrl: '/img/goose.png',
          imgAlt: 'Goosebumps alternative logo',
          djLink: 'https://twitter.com/txndai',
          tracklist: [
              'Dub Phizix - Who Are you?',
              'Serum - Skeleton Key',
              'Petroll - Spectral',
              'Voltage & Nicky Blackmarket - The Plot Thickens',
              'Voltage & Nicky Blackmarket - Jazz Tickles',
              'Serum - Dark Clouds',
              'Halogenix - Blej',
              'Inja x Serum - Samurai',
              'QZB - WYGD',
          ],
        },
        {
          Title: 'The Underclub Sessions 16',
          MixedBy: 'Mphoe Househead',
          Description: '"Kicking off the new year, The Underclub surely knows how to set a scene, opening with cosmic synths and strange, skulking grooves; even once it hits house music\'s cruising speed, the penchant for dubbed-out percussion and lush textures lends an unmistakably psychedelic feel..It\'s an exhilarating double-hour tour of deep tech, minimal, dub, breakbeats, and sneaky samples with so many textures and patterns woven throughout the mixes, listeners will stay engaged for countless listens, making it a necessary addition to your playlist too!" - Dooley Ibrahim',
          Link: 'https://fanlink.to/underclub16',
          imgUrl: '/img/goose.png',
          imgAlt: 'Goosebumps alternative logo',
          djLink: 'https://twitter.com/txndai',
        },
      ]
    }
  }

}
</script>

<style>

</style>