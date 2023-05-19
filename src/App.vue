<template>
  <div class="container1"> 
  <HelloWorld/>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style scope lang="scss">
@import '~@/../mdb/scss/index.free.scss';

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}

.container1 {
  background-color: white;
  width: 80%;
  height: 99vh;
  
}
</style>
