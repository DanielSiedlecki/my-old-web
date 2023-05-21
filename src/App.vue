<template>
  
  <div class="d-flex flex-column vh-100" style="background-color: white; border-radius: 20px;">
    
    <navbarComponents></navbarComponents>
    <div class="container bg-white rounded p-3 flex-grow-1 d-flex flex-column justify-content-center align-items-center ">

    <hello-world class="d-flex justify-content-center align-items-center"></hello-world>
  </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import navbarComponents from './components/navbar-components.vue';

export default {
  name: 'App',
  components: {
    HelloWorld, navbarComponents
  }
}
</script>

<style scope lang="scss">
@import '~@/../mdb/scss/index.free.scss';

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}


</style>
