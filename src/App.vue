<template>
  <HelloWorld/>
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

<style lang="scss">
@import '~@/../mdb/scss/index.free.scss';

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
