<template>
  <div id="nav">
  <NavBar/>
  <router-view/>
  <Footer/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
export default {
  components: { 
    //Home,
    NavBar,
    Footer,
  },
}
</script>

