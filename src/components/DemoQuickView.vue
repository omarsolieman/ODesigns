
<template>
<div class="fixed z-10 inset-0 overflow-y-auto" role="dialog" aria-modal="true" :show="open"  >
  <div class="flex min-h-screen text-center md:block md:px-2 lg:px-4" style="font-size: 0;">
    <div class="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" aria-hidden="true"></div>
    <!-- This element is to trick the browser into centering the modal contents. -->
    <span class="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true">&#8203;</span>
    <div class="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
      <div class="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
        <button @click="close" type="button" class="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8">
          <span @click="close" class="sr-only">Close</span>
          <!-- Heroicon name: outline/x -->
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
          <div class="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="object-center object-cover" />
          </div>
          <div class="sm:col-span-8 lg:col-span-7">
            <h2 class="text-2xl font-extrabold text-gray-900 sm:pr-12">
              {{ product.name }}
            </h2>

            <section aria-labelledby="information-heading" class="mt-2">
              <h3 id="information-heading" class="sr-only">Product information</h3>

              <p class="text-2xl text-gray-900">
                {{ product.price }}
              </p>
              <!-- <div class="mt-6">
                <h4 class="sr-only">Reviews</h4>
                <div class="flex items-center">
                  <div class="flex items-center">
                    <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[product.rating > rating ? 'text-gray-900' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']" aria-hidden="true" />
                  </div>
                  <p class="sr-only">{{ product.rating }} out of 5 stars</p>
                  <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{{ product.reviewCount }} reviews</a>
                </div>
              </div> -->
            </section>

            <section aria-labelledby="options-heading" class="mt-10">
              <h3 id="options-heading" class="sr-only">Product options</h3>

              <form>
                <!-- Colors -->
                <div>
                  <h4 class="text-sm text-gray-900 font-medium">Theme</h4>

                  <RadioGroup v-model="selectedColor" class="mt-4">
                    <RadioGroupLabel class="sr-only">
                      Choose a color
                    </RadioGroupLabel>
                    <div class="flex items-center space-x-3">
                      <RadioGroupOption as="template" v-for="color in product.colors" :key="color.name" :value="color" v-slot="{ active, checked }">
                        <div :class="[color.selectedClass, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">
                          <RadioGroupLabel as="p" class="sr-only">
                            {{ color.name }}
                          </RadioGroupLabel>
                          <span aria-hidden="true" :class="[color.class, 'h-8 w-8 border border-black border-opacity-10 rounded-full']" />
                        </div>
                      </RadioGroupOption>
                    </div>
                  </RadioGroup>
                </div>

                <!-- Sizes -->
                <div class="mt-10">
                  <div class="flex items-center justify-between">
                    <h4 class="text-sm text-gray-900 font-medium">Pages</h4>
                  </div>

                  <RadioGroup v-model="selectedSize" class="mt-4">
                    <RadioGroupLabel class="sr-only">
                      Choose a size
                    </RadioGroupLabel>
                    <div class="grid grid-cols-4 gap-4">
                      <RadioGroupOption as="template" v-for="size in product.sizes" :key="size.name" :value="size" :disabled="!size.inStock" v-slot="{ active, checked }">
                        <div :class="[size.inStock ? 'bg-white shadow-sm text-gray-900 cursor-pointer' : 'bg-gray-50 text-gray-200 cursor-not-allowed', active ? 'ring-2 ring-indigo-500' : '', 'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1']">
                          <RadioGroupLabel as="p">
                            {{ size.name }}
                          </RadioGroupLabel>
                          <div v-if="size.inStock" :class="[active ? 'border' : 'border-2', checked ? 'border-indigo-500' : 'border-transparent', 'absolute -inset-px rounded-md pointer-events-none']" aria-hidden="true" />
                          <div v-else aria-hidden="true" class="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none">
                            <svg class="absolute inset-0 w-full h-full text-gray-200 stroke-2" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                              <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                            </svg>
                          </div>
                        </div>
                      </RadioGroupOption>
                    </div>
                  </RadioGroup>
                </div>

                <button type="submit" class="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Get Now</button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { ref } from 'vue'
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
} from '@headlessui/vue'

const product = {
  name: 'Introve Blog ',
  price: '$192',
  href: '#',
  imageSrc: 'https://i.imgur.com/q3xSGGj.png',
  imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
  colors: [
    { name: 'Light Mode', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Dark Mode', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'Home Page', inStock: false },
    { name: 'Content', inStock: false },
    { name: 'Contact us', inStock: false },
    { name: 'Sign in', inStock: false },
    { name: 'Sign up', inStock: false },
    { name: 'Payment', inStock: false },
    { name: 'Cart', inStock: false },
  ],
}

export default {
  components: {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
  },

  setup() {
    const open = ref(false)
    const selectedColor = ref(product.colors[0])
    const selectedSize = ref(product.sizes[2])

    return {
      product,
      open,
      selectedColor,
      selectedSize,
    }
  },

  methods: {
    close() {
    this.$emit('close');
    },
  },
}
</script>