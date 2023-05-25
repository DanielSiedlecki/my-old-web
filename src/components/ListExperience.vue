<template>
<page-header ><slot name="Header_title"></slot></page-header>
<ul class="mt-5">
   
   <li class="mt-1" v-for="item in lista" :key="item">
    <i style="margin-right: 0.5vw;" class="fas fa-check"></i>
    <slot  :name="item"></slot>
  
  
  
  </li> 





</ul>


</template>


<script>
import PageHeader from './PageHeader.vue'

export default {
  components: { PageHeader },

  data(){
    return{
    showSlot: false,
    lista: []
    }
  },



  mounted(){

    this.lista = ['first_slot', 'second_slot', 'third_slot', 'fourth_slot'].filter(slot => !!this.$slots[slot])
  }






}

</script>

<style scoped lang="scss">
li {
    list-style: none;
}

</style>