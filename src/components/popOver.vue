<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Popover class="relative" v-slot="{ open }">
    <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
      <span>Solutions</span>
      <svg :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
       <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </PopoverButton>

    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
      <PopoverPanel class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
            <a v-for="item in solutions" :key="item.name" :href="item.href" class="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
              <p class="text-base font-medium text-gray-900">
                {{ item.name }}
              </p>
              <p class="mt-1 text-sm text-gray-500">
                {{ item.description }}
              </p>
            </a>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

const solutions = [
  
  { name: 'Websites By Us', description: 'Get Pre-made websites for lower prices', href: 'websitesbyus' },
  {
    name: 'FAQ',
    description: 'Get all of your questions answered in our FAQ section or contact support.',
    href: 'faq',
  },
  { name: 'Ecommerce API', description: 'Easy to use API with advanced features for your Ecommerce applications [Coming Soon!]', href: '#' },
  { name: 'Privacy Policy', description: 'Understand how we take your privacy seriously.', href: 'privacypolicy' },
]

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
  },
  setup() {
    return {
      solutions,
    }
  },
}
</script>