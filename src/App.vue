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
  
}
</script>