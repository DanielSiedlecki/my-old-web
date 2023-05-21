<template>
  <div class="container vh-100  "> 
    <div class="row ">


        <div class="col-md-4 "><CircleLine/></div>
    <div class="col-md-8  d-flex justify-content-start align-items-center "> 
        <div class="text-container">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Expedita ratione dicta, ullam in facilis alias dolorum, iusto eaque animi totam minus maiores nostrum doloremque officiis! 
        
        Ab nam dignissimos fugiat nihil! Ab nam dignissimos fugiat nihil! Ab nam dignissimos fugiat nihil!Ab nam dignissimos fugiat nihil! Ab nam dignissimos fugiat nihil!</div>
    
    </div>

</div>
  </div>
</template>

<script>
import CircleLine from './CircleLine.vue';



export default {
  components: { CircleLine },

}
</script >

<style lang="scss" scoped>
.text-container {
  border-left: 2px solid black; /* Obramowanie po lewej stronie */
  padding-left: 10px; /* Dodatkowy margines wewnątrz kontenera */
  width: calc(80% - 10px); /* Długość obramowania (połowa szerokości - margines) */
}


</style>