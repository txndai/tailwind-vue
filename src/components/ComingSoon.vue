<template>
<div class=" section80 h-screen flex flex-col justify-between antialiased transition ease-in duration-700 relative">
   <Nav class="mb-6 " />
   <h1 class="py-12 md:text-5xl text-center  text-2xl uppercase font-black text-black underline">Coming Soon</h1>
    <div class="px-4 pt-12 pb-24 ">
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

<style scoped>
  .section80{
    background-color: #4a5568;
background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.04' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
  }
</style>