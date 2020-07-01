<template>
  <section id="featuredPlaylists" class="pb-24 text-gray-870 body-font border-gray-200 w-full ">
    
      <div class="flex flex-col mt-24 text-center w-full mb-20">
        <h2 class="text-xs text-orange-400 tracking-widest font-medium title-font mb-1 uppercase">Curated tunes</h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Featured Playlists</h1>
      </div>
      
      <div id="cardContainer" class="flex flex-no-wrap  overflow-x-auto scrolling-touch">
        <div v-for="card in cards" :key="card.Title" class="p-4 min-w-full md:min-w-md max-w-1/3 flex">
            <PlaylistCard :card="card" />
        </div>
      </div>
        
      
      
  
  </section>
</template>

<script>
import PlaylistCard from './PlaylistCard.vue'

export default {
    components: {
   PlaylistCard
  },

  data() {
    return {
      cards: [
        {
          Title: 'Vanilla Deep',
          Description: 'Made with the deep house & techno DJ in mind, this playlist features tracks that you can throw into almost any gig - Similar to the concept behind the "Little Helpers" record label.',
          Link: 'https://goosebumps.fanlink.to/vanilladeep',
          imgUrl: '/img/goose.png',
          imgAlt: 'Goosebumps alternative logo',
          externalLink: 'https://www.residentadvisor.net/record-label.aspx?id=3712',
        },
        {
          Title: 'Headspace Playlist',
          Description: 'All the tracks plus more - used for the mix I recently did for Headspace',
          Link: 'https://goosebumps.fanlink.to/guestmix',
          imgUrl: '/img/goose.png',
          imgAlt: 'Goosebumps alternative logo',
        },
        {
          Title: 'Electronica - Weird - Unbound',
          Description: 'Genre-fluid playlist of lush sounds. Updated regularly. Lovely playlist to write code to.',
          Link: 'https://goosebumps.fanlink.to/electronica',
          imgUrl: '/img/goose.png',
          imgAlt: 'Goosebumps alternative logo',
        },
        {
          Title: 'The BeatTape - Knxwledge & Friends',
          Description: 'A collection of sample heavy instrumentals, influenced mainly by Knxwledge & FlyLo.',
          Link: 'https://goosebumps.fanlink.to/beatTape',
          imgUrl: '/img/goose.png',
          imgAlt: 'Goosebumps alternative logo',
        },
        {
          Title: 'Jazz',
          Description: 'The main jazz playlists, featuring a varying bunch of styles from the genre',
          Link: 'https://goosebumps.fanlink.to/jazz',
          imgUrl: '/img/goose.png',
          imgAlt: 'https://goosebumps.fanlink.to/beatTape',
        },
        
      ]
    }
  }

}
</script>

<style>

</style>