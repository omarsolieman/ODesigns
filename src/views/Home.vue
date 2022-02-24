<template>
<div>
  <main>
    <div>
      <div class="relative">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div class="absolute inset-0">
              <img class="h-full w-full object-cover" src="../assets/heroImage.jpg" alt="People working on laptops">
              <div class="absolute inset-0 bg-indigo-700 mix-blend-multiply"></div>
            </div>
            <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span class="block text-white">A Better way to</span>
                <span class="block text-indigo-200">Market your business</span>
              </h1>
              <p class="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                With ODesigns you can have your own personalized website to market you or your business for the lowest prices.
              </p>
              <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <a href="#" @click="showModal" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8">
                    Book a Session
                  </a>
                  <a href="websitesbyus" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8">
                    Websites by us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <feature-section/>
    <cta-section/>
    <booking-modal
      v-show="isModalVisible"
      @close="closeModal"
    />
  </main>
</div>
</template>

<script>
import featureSection from '../sections/featureSection.vue'
import ctaSection from '../sections/ctaSection.vue'
import bookingModal from '../components/bookingModal.vue'


export default {
  components: { 
    featureSection,
    ctaSection, 
    bookingModal,
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