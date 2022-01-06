<template>

<div class="bg-white">
<div class="relative overflow-hidden">
  <Navbar/>
  <router-view/>
  <Footer/>
</div>
</div>
</template>

<script>
//import Home from './views/Home.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  components: { 
    //Home,
    Navbar,
    Footer,
  },
  data() {
    return {
      logo: require('./assets/preview.png')
    }
  },
  metaInfo() {
    return {
      meta: [
          // Twitter Card
          {name: 'twitter:card', content: 'summary'},
          {name: 'twitter:title', content: 'ODesigns'},
          {name: 'twitter:description', content: 'A website design agency that does more than just design.'},
          // image must be an absolute path
          {name: 'twitter:image', content: this.logo},
          // Facebook OpenGraph
          {property: 'og:title', content: 'ODesigns'},
          {property: 'og:site_name', content: 'ODesigns'},
          {property: 'og:type', content: 'website'},
          {property: 'og:image', content:  this.logo},
          {property: 'og:description', content: 'A website design agency that does more than just design.'}
      ]
    }
  }
}
</script>