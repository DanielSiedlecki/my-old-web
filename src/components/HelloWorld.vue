<template>
  <div class="container" >
  <navbar-components></navbar-components>
  <div class="row d-flex justify-content-center container-lg container-sm">
  <div style="height: 80vh;" class="d-flex align-items-center justify-content-center">
    <hello-grid></hello-grid>
  </div>
</div>
</div>
</template>

<script>
import HelloGrid from './HelloGrid.vue'
import NavbarComponents from './navbar-components.vue';
export default {
  name: "HelloWorld",
  components: { HelloGrid, NavbarComponents }

  
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import '../styles.scss';



</style>
