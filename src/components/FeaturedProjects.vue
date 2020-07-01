<template>
  <section id="featuredProjects" class="pb-24 text-gray-870 body-font border-gray-200 w-full ">
    
      <div class="flex flex-col mt-24 text-center w-full mb-20">
        <h2 class="text-xs text-orange-400 tracking-widest font-medium title-font mb-1">PORTFOLIO</h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Featured Web Projects</h1>
      </div>
      
      <div id="cardContainer" class="flex flex-no-wrap  overflow-x-auto scrolling-touch">
        <div v-for="card in cards" :key="card.title"
          class="p-4 min-w-full flex md:min-w-3xl ">
            <PortfolioCard :card="card" />
        </div>
      </div>
        
      
      
  
  </section>
</template>

<script>
import PortfolioCard from './PortfolioCard.vue'

export default {
    components: {
    PortfolioCard
  },

  data() {
    return {
      cards: [
        {
          Title: 'Goosebumps',
          Description: 'The never-ending project. From design sketches on Figma, to what you see here now.',
          Link: 'https://goosebumps.co.zw/about',
          readMore: true,
          Tags: ['Figma', 'TailwindCSS', 'Vue'] ,
          imgUrl: '/img/portfolioLogos/goose.png',
          imgAlt: 'Goosebumps alternative logo',
        },
        {
          Title: 'Furnitures2Suit',
          Description: 'This project\'s main task was to redesign an old site, to give it a more modern & refreshing look. A lot more custom CSS than usual was used, to get the site looking exactly how the client wanted.',
          Link:'https://furnitures2suit.uk/',
          Tags: ['Wordpress', 'CSS', 'E-Commerce'] ,
          imgUrl: '/img/portfolioLogos/furniture.png',
          imgAlt: 'Furnitures2Suit logo',
        },
        {
          Title: 'Property Guru',
          Description: 'Zimbabwe based property listing site, that also allows for admin to add user submitted listings to the site.',
          Tags: ['Wordpress', 'CSS','Classifieds'] ,
          imgUrl: '/img/portfolioLogos/propery.png',
          imgAlt: 'Property Guru logo',
          Link: 'https://propertyguru.co.zw/',
        },
        {
          Title: 'Mineazy',
          Description: 'Simple landing site that was done in order to get Mineazy some online presence. The client wanted the site to look as similar to the company profile document as possible, so don\'t judge the design too harshly, lol.',
          Tags: ['Landing site', 'HTML', 'CSS'] ,
          imgUrl: '/img/portfolioLogos/Mineazy.png',
          imgAlt: 'Mineazy logo',
          Link: 'https://mineazyminingsolutions.co.zw/',
        },
        {
          Title: 'Do It 4 The Kids',
          Description: 'DIFTK is a youth led organisation that\'s doing a lot of work for under-priviledged children in Bulawayo. This website is an ongoing project, that I maintain on a volunteer basis.',
          Tags: ['Wordpress', 'CSS','Charity Org'] ,
          imgUrl: '/img/portfolioLogos/diftk.png',
          imgAlt: 'DIFTK logo',
          Link: 'https://doit4thekidz.org/'
        },
      ]
    }
  }

}
</script>

<style>

</style>