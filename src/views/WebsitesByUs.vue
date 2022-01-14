<template>
  <div class="bg-white">
    <div class="lg:-mt-24 max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Products</h2>
      <h1 class="text-5xl font-extrabold text-gray-900 sm:text-center">Websites we made</h1>
        <p class="mt-5 text-xl text-gray-500 sm:text-center">This is a collection of websites we made, If you like any of them you can get similar ones for a discounted price</p>

      <div @click="showModal" class="mt-24 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a v-for="product in products" :key="product.id" :href="product.href" class="group">
          <div x-data="{ open: true }"  class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-9">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="w-full h-full object-center object-cover group-hover:opacity-75" />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">
            {{ product.name }}
          </h3>
          <p class="mt-1 text-lg font-medium text-gray-900">
            {{ product.price }}
          </p>
        </a>
      </div>
    </div>
  </div>
  <!-- <demo-quick-view
    v-show="isModalVisible"
    @close="closeModal"
  /> -->
</template>

<script>
//import DemoQuickView from '../components/DemoQuickView.vue'
const products = [
  {
    id: 1,
    name: 'Introve Blog',
    href: 'https://introve.netlify.app',
    price: '$48',
    imageSrc: 'https://i.imgur.com/q3xSGGj.png',
    imageAlt: 'A Blog that can be used for any purpose complete with disqus comment section and clean, fluid animations. Made with Vue.js and Cosmic.js for CMS.',
  },
  {
    id: 2,
    name: 'Personal Portfolio',
    href: 'https://omardev.tk',
    price: '$35',
    imageSrc: 'https://i.imgur.com/UoUTEfB.png',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'HiUpload',
    href: '#',
    price: '$89',
    imageSrc: 'https://i.imgur.com/9XYCTBK.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Personal Portfolio 2',
    href: '#',
    price: '$35',
    imageSrc: 'https://i.imgur.com/ugsZbpL.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]

export default {
  components: {
    //DemoQuickView,
  },
  setup() {
    return {
      products,
    }
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
}
</script>