import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Pricing from '../views/Pricing.vue'
import About from '../views/About.vue'
import Scheduling from '../views/Scheduling.vue'
import WebsitesByUs from '../views/WebsitesByUs.vue'
import DemoQuickView from '../components/DemoQuickView.vue'
import Content from '../views/Content.vue'
import popOver from '../components/popOver.vue'
import FAQ from '../views/FAQ.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'

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
    path: '/faq',
    name: 'faq',
    component: FAQ
  },
  {
    path: '/privacypolicy',
    name: 'privacypolicy',
    component: PrivacyPolicy
  },
  //Component Testing
  {
    path: '/quick',
    name: 'quick',
    component: DemoQuickView
  },
  {
    path: '/content',
    name: 'content',
    component: Content
  },
  {
    path: '/popover',
    name: 'popover',
    component: popOver
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
