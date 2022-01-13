import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Pricing from '../views/Pricing.vue'
import About from '../views/About.vue'
import Scheduling from '../views/Scheduling.vue'
import PricingMonthly from '../views/PricingMonthly.vue'
import WebsitesByUs from '../views/WebsitesByUs.vue'
import DemoQuickView from '../components/DemoQuickView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing
  },
  {
    path: '/pricingmonthly',
    name: 'PricingMonthly',
    component: PricingMonthly
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/scheduling',
    name: 'Scheduling',
    component: Scheduling
  },
  {
    path: '/websitesbyus',
    name: 'WebsitesByUs',
    component: WebsitesByUs
  },
  {
    path: '/quick',
    name: 'quick',
    component: DemoQuickView
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
