<template>
  <div class="overflow-x-hidden" id="app">
    <div class="bg-yellow-400 min-h-screen mx-auto flex flex-col justify-start w-screen shadow-2xl">
      <Nav class="mb-6" />
      <HeroText />
    </div>
    <FeaturedProjects/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import HeroText from './components/HeroText.vue'
import FeaturedProjects from './components/FeaturedProjects.vue'
import './assets/css/main.css'

export default {
  name: 'App',
  components: {
    Nav,
    HeroText,
    FeaturedProjects,
  }
}
</script>

<style>

</style>
