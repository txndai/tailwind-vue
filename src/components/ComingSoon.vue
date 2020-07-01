<template>
<div class="h-screen flex flex-col justify-between antialiased bg-gray-700 transition ease-in duration-700 relative">
   <Nav class="mb-6 " />
   <h1 class="py-12 md:text-5xl text-center bg-gray-700 text-2xl uppercase font-black text-black underline">Coming Soon</h1>
    <div class="px-4 pt-12 pb-24 bg-gray-700">
        <div class="bg-gray-600 max-w-3xl bg-white rounded-lg mx-auto mb-16 p-16 shadow-xl">
            <h1 class="text-3xl text-black font-bold mb-2">
                This Page/Feature Is Coming <span class="text-yellow-600">Soon</span>
            </h1>
            <p class="mt-4 text-gray-400">This site is under continuous development, so I'll occasionally throw in teasers of whats coming, stay tuned! 
            </p>
          <div class="mt-8">
              <a href="https://linktr.ee/goosebumps" class="bg-gray-900 hover:bg-gray-800 text-gray-100 px-5 py-3 font-semibold rounded">Contact</a>
          </div>
        </div>
    </div>
   <MainFooter/>
</div>
</template>

<script>
import Nav from './Nav.vue'
import MainFooter from './MainFooter.vue'

export default {
  name: 'soon',
  components: {
    Nav,
    MainFooter,
}
}
</script>

<style>
  
</style>