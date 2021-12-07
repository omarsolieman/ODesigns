<template>

<div class="bg-white">
<div class="relative overflow-hidden">
  <Navbar/>
  <router-view/>
</div>
</div>
</template>

<script>
//import Home from './views/Home.vue'
import Navbar from './components/Navbar.vue'
export default {
  components: { 
    //Home,
    Navbar,
  },
  
}
</script>