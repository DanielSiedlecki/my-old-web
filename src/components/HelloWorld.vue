<template>
  <div class="container d-flex justify-content-center align-items-center">
    <hello-grid></hello-grid>
  </div>
</template>

<script>
import HelloGrid from './HelloGrid.vue'

export default {
  name: "HelloWorld",
  components: { HelloGrid }

  
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import '../styles.scss';



</style>
