<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-50 mb-24s">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 mb-48 mt-24">
      <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2 class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Frequently asked questions
        </h2>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200">
          <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
            <dt class="text-lg">
              <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                <span class="font-medium text-gray-900">
                  {{ faq.question }}
                </span>
                <span class="ml-6 h-7 flex items-center">
                <svg :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base text-gray-500">
                {{ faq.answer }}
              </p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const faqs = [
  {
    question: "What are the prices for Websites?",
    answer:
      "Unless you are picking one of the pre-made websites, There isn't an exact price we can give you until we find out what exactly do you need, When do you need it, etc.",
  },
  {
    question: "What Technologies do you use for Development?",
    answer:
      "We currently Have Developers who are using the following [Vue.js, Django, TailwindCSS, Firebase, SQL & Python]. We will add more Technologies to the list soon. You can look forward to the following [Laravel, Solidity, React.js, Flutter & Express/Node.js].",
  },
  {
    question: "What Payment methods do you accept?",
    answer:
      "We currently Only Accept International bank transfers and PayPal on a Case to Case basis, You can Expect other methods like Stripe, and/or FPX(Malaysi Only).",
  },
  {
    question: "Are you currently hiring?",
    answer:
      "Sadly we aren't accepting new job applications but soon we will release a form so you can be notified when we are hiring again",
  },
  {
    question: "Other than web design and development what other services do you offer?",
    answer:
      "We offer Python app development, Logo and Brand Identity design, 3D design and Printing Services",
  },
  // More questions...
]

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  },
  setup() {
    return {
      faqs,
    }
  },
}
</script>