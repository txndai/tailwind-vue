<template>
  <div class="bg-gray-700 overflow-x-hidden" id="app">
    <div class="bg-gray-900 min-h-screen mx-auto flex flex-col justify-start w-screen shadow-2xl">
      <Nav class="mb-6" />
      <HeroText />
    </div>
    <FeaturedProjects/>
    <playlists />
    <mixes />
    <section id="Contact" class="featured flex flex-row justify-center text-gray-870 body-font border-gray-200 w-screen mb-24">
      <div class="inline-block mx-auto text-center w-4/5 md:w-1/3 p-5 rounded-lg">
        <h1 class="text-2xl md:text-3xl font-bold mb-2">
          Let's <span class="text-yellow-600">Talk</span>
        </h1>
        <p class="pb-6 font-bold text-gray-500">Got a project or collaboration you want to get started on? Send an <a href="mailto:guideg6@gmail.com"><span class="text-yellow-500 hover:text-yellow-600">e-mail</span></a> and I'll get back to you as soon as possible.</p>
      </div>
    </section>
    <MainFooter/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import HeroText from './components/HeroText.vue'
import FeaturedProjects from './components/FeaturedProjects.vue'
import playlists from './components/FeaturedPlaylists.vue'
import mixes from './components/FeaturedMixes.vue'
import MainFooter from './components/MainFooter.vue'
import './assets/css/main.css'

export default {
  name: 'Index',
  components: {
    Nav,
    HeroText,
    FeaturedProjects,
    playlists,
    MainFooter,
    mixes
  }
}
</script>

<style>

</style>
