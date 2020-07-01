<template >
<div class="flex flex-col justify-between antialiased bg-gray-700 transition ease-in duration-700 relative text-black">
   <Nav class="mb-6 " />
     <div class="m-auto max-w-6xl p-12">
        <div class="flex flex-col md:flex-row">
            <div class="md:w-1/2 max-w-md flex flex-col justify-center">
                <div class="md:text-5xl text-2xl uppercase font-black underline">About</div>
                <div class="text-xl mt-4">Built by: <a class="bg-yellow-300 hover:bg-yellow-400" href="https://twitter.com/txndai">GT Fari</a>. <br><br>
                    Built using: 
                    <ul>
                        <li><a class="bg-yellow-300 hover:bg-yellow-400" href="https://vuejs.org/"> Vue</a></li>
                        <li><a class="bg-yellow-300 hover:bg-yellow-400" href="https://tailwindcss.com/"> TailwindCSS</a></li>
                        <li><a class="bg-yellow-300 hover:bg-yellow-400" href="https://webpack.js.org/"> WebPack</a></li>
                        <strike><li><a class="bg-yellow-300 hover:bg-yellow-400" href="https://parceljs.org/">ParcelJS</a></li></strike>
                        <li><a class="bg-yellow-300 hover:bg-yellow-400" href="https://www.netlify.com/">Netlify</a></li>
                    </ul> <br><br>
                    <p>Don't be shy to say hi or shoot through any suggestions right <a class="bg-yellow-300 hover:bg-yellow-400" href="https://linktr.ee/goosebumps">here</a>😁</p>
                    <p>Check out the blog <router-link class="bg-yellow-300 hover:bg-yellow-400" to="soon">here</router-link> to learn more about what we do.</p>

                </div>
            </div>
            <div class="flex md:justify-end w-full md:w-1/2 -mt-5">
                <div class="pattern">
                    <div class="bg-white shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4">
                        <img alt="card img" class="rounded-lg" src="/img/chicago.jpg">
                        <div class="rounded-lg text-2xl p-10 bg-white"><img alt="quote" class="float-left mr-1"
                                src="https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5cf8fb1f994fb7168d0d66fb_quote-intro.svg">
                            This site was born out of necessity, mainly as a site for me to practice what I learn on the
                            Web Development journey, and to serve as a central house for music related content & other
                            projects. - A digital playground, so to say.</div>
                    </div>
                </div>
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
  name: 'About',
  components: {
    Nav,
    MainFooter,
}
}
</script>
  
<style>
  .bg-dots {
            background-image: url(https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5dea7a12bb83ab1f13040de5_cx-dots.svg);
            background-repeat: no-repeat
        }
</style>