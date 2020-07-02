<template>
  <section class="section80 relative">
    <Nav class="mb-6 " />
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="md:text-5xl text-2xl uppercase font-black underline text-black">Contact Us</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-black">Let's work together, leave a message below.</p>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-1/2">
            <input class="w-full bg-gray-300 rounded border border-gray-700 text-gray-800 focus:outline-none focus:border-yellow-200 text-base px-4 py-2" placeholder="Name" type="text">
          </div>
          <div class="p-2 w-1/2">
            <input class="w-full bg-gray-300 rounded border border-gray-700 text-gray-800 focus:outline-none focus:border-yellow-200 text-base px-4 py-2" placeholder="Email" type="email">
          </div>
          <div class="p-2 w-full">
            <textarea class="w-full bg-gray-300 rounded border border-gray-700 text-gray-800 focus:outline-none h-48 focus:border-yellow-200 text-base px-4 py-2 resize-none block" placeholder="Message"></textarea>
          </div>
          <div class="p-2 w-full">
            <button class="bg-orange-100 text-gray-600 font-semibold  flex mx-auto  border-0 py-2 px-8 focus:outline-none hover:bg-gray-800 rounded text-lg">Submit</button>
          </div>
          <div class="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
            
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-4 text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-4 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-4 text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <MainFooter/>
  </section>
</template>

<script>
import Nav from './Nav.vue'
import MainFooter from './MainFooter.vue'


export default {
  name: 'contact',
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