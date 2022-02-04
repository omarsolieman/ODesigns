<template>
  <div id="main">
  <Navbar/>
  <router-view/>
  <Footer/>
  </div>
</template>

<script>
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

