<template>
  
  
  
  <div class="row">
      
        

    <div  class="mt-5 row "> 
      <div  class="">
        <h1 class="flex-grow-1" style="font-size: 3vw; border-bottom: solid 3px; "><slot name="mainheader"></slot></h1>
        </div>
      

        <div class="">
        <h4 class="date flex-grow-1 " style="font-size: 2.5vw"> <slot name="date"></slot></h4>
        </div>

        <div class="" >
        <h5 class="flex-grow-1  " style="font-size: 2vw"><slot  name="subtitle"></slot></h5>
        </div>

        <div class="text-container mt-2 " style="font-size: 2vh">
           <slot name="description"></slot>
           
        </div>
        
        
        
</div>
</div>

        


</template>

<script >



export default {

    components: {},
   
};



</script>

<style lang="scss" scoped>
@import '../styles.scss';
.text-container {
  border-left: 0.2vw solid black; /* Obramowanie po lewej stronie */
  padding-left: 10px; /* Dodatkowy margines wewnątrz kontenera */
  width: calc(80% - 10px); /* Długość obramowania (połowa szerokości - margines) */
}

.subtitle {
    display: flex;
}









</style>