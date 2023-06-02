<template>
  
  <div class="d-flex flex-column " style="background-color: white; border-radius: 20px;">
    
    <navbarComponents></navbarComponents>
   
    <router-view></router-view>
    

  
  </div>

  <arrow-scrool-up class="arrow-up"></arrow-scrool-up>
</template>

<script>

import navbarComponents from './components/navbar-components.vue';
import ArrowScroolUp from './components/Elements/ArrowScroolUp.vue';


export default {
  name: 'App',
  components: {
    
    
    navbarComponents, ArrowScroolUp,
    
  },
  beforeRouteUpdate(to, from, next) {
    document.title = to.meta.title || 'Default';
    next();
  }
}
</script>

<style scope lang="scss">
@import '~@/../mdb/scss/index.free.scss';

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}





</style>
