<template>
  <div
    class="h-full w-full md:min-w-2xl p-4 flex flex-col-reverse justify-between md:flex-row bg-gray-600 md:max-w-3xl bg-white rounded-lg md:p-12"
  >
    <div
      class="portfolioText flex flex-col justify-between text-center md:text-left md:w-8/12 mx-auto px-5"
    >
      <h1 class="text-2xl md:text-3xl font-bold mb-2">{{ card.Title }}</h1>
      <p class="mt-4 h-40 text-gray-400">
        {{ card.Description }}
        <br />
        <span v-if="card.readMore">
          Read more about this project
          <a :href="card.Link" class="text-yellow-500 hover:text-yellow-600"
            >here</a
          >
        </span>
        <span v-else>
          Check out the website
          <a :href="card.Link" class="text-yellow-500 hover:text-yellow-600"
            >here</a
          >
        </span>
      </p>
      <div
        class="mt-8 w-full flex flex-row flex-wrap md:justify-start justify-center mx-auto"
      >
        <span
          v-for="tag in card.Tags"
          :key="tag"
          class="bg-gray-900 text-gray-100 px-5 mb-3 mr-4 py-2 font-semibold rounded"
          >{{ tag }}</span
        >
      </div>
    </div>
    <div class="md:w-4/12 m-auto w-48 h-56 md:h-auto flex flex-col justify-center align-middle">
      <a :href="card.Link">
        <img
          class="m-auto max-h-xs md:w-auto"
          :src="card.imgUrl"
          :alt="card.imgAlt"
          srcset
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["card"],
};
</script>
