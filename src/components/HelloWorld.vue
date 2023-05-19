<template>
  <div class="container">
  <navbarComponentsVue></navbarComponentsVue>
     
  </div>
</template>

<script>
import navbarComponentsVue from './navbar-components.vue';

export default {
  name: "HelloWorld",
  components: {navbarComponentsVue}

  
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.container {
  background-color: white;
  width: 90%;
  height: 100vh;
  margin-top: 1vh;
  border-radius: 20px 20px 0px 0px;
}


</style>
