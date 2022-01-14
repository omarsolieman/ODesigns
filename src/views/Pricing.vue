<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:flex-col sm:align-center">
        <h1 class="text-5xl font-extrabold text-gray-900 sm:text-center">Pricing Plans</h1>
        <p class="mt-5 text-xl text-gray-500 sm:text-center">We have preset packages for set prices and custom packages. [For custom packages an appointment is needed]</p>
      </div>
      <div class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
        <div v-for="tier in tiers" :key="tier.name" class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
          <div class="p-6">
            <h2 class="text-lg leading-6 font-medium text-gray-900">{{ tier.name }}</h2>
            <p class="mt-4 text-sm text-gray-500">{{ tier.description }}</p>
            <p class="mt-8">
              <span class="text-xs font-medium text-gray-500">From: </span>
              <span class="text-4xl font-extrabold text-gray-900">${{ tier.priceMonthly }}</span>
              {{ ' ' }}
            </p>
            <a :href="tier.href" class="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">Buy {{ tier.name }}</a>
          </div>
          <div class="pt-6 pb-8 px-6">
            <h3 class="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li v-for="feature in tier.includedFeatures" :key="feature" class="flex space-x-3">
                  <svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                <span class="text-sm text-gray-500">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

const tiers = [
  {
    name: 'Personal Portfilio',
    href: '#',
    priceMonthly: 120,
    description: 'All The features you need for a personal portfolio whatever your occupation is',
    includedFeatures: [
      'We will Design & Develop your own personal portfolio website', 
      'We will help you get a domain name', 
      'we will also help you find an appropriate hosting service & plan'
    ],
  },
  {
    name: 'Event Website',
    href: '#',
    priceMonthly: 320,
    description: 'All the features you need for an event website [Landing page, Booking & Payment',
    includedFeatures: [
      'We will design & Develop a website for your event.',
      'We will also add ticket booking through calendly. ',
      'Payment collection through website is an option [$50 extra].',
      'We will help you get a domain name', 
      'We will also help you find an appropriate hosting service & plan'
    ],
  },
  {
    name: 'Startup',
    href: '#',
    priceMonthly: 200,
    description: 'All the basic features you need for a Startup website',
    includedFeatures: [
      'We will design & Develop a website for your event.',
      'We will also add meeting booking through calendly.',
      'We will help you get a domain name', 
      'We will also help you find an appropriate hosting service & plan'
    ],
  },
  {
    name: 'Enterprise',
    href: '#',
    priceMonthly: 600,
    description: 'Custom Features and designs with customer support for a year',
    includedFeatures: [
      'We will design & develop a website for whatever purpose you want. ',
      'We can add Payment, Authoriation, and more.',
      'We will take care of the domain name and hosting.',
      'Up to 2 new mini features every 3 months.',
      'We will provide support to you for a whole year.',
    ],
  },
]

export default {
  components: {

  },
  setup() {
    return {
      tiers,
    }
  },
}
</script>