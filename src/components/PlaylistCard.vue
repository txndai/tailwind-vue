<template>
  <div class="">
          <div class="flex rounded-lg h-full w-full bg-gray-100 p-8 flex-col">
            <div class="flex items-center mb-3">
              <div
                class="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-400 text-white flex-shrink-0">
                <img :src="card.imgUrl" alt="playlist logo">
              </div>
              <h2 class="text-gray-900 text-lg title-font font-medium">{{card.Title}}</h2>
            </div>
            <div class=" flex flex-col flex-grow justify-between">
              <p class="leading-relaxed text-base">{{card.Description}}</p>
              <a :href="card.Link" class="mt-3 hover:text-gray-900 text-yellow-700 inline-flex items-center relative bottom-0 ">Stream
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  props: ["card"],
};
</script>
