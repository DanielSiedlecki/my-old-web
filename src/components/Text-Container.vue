<template>
  
  
  
  <div class="row">
      
        

    <div style="width: 70%;" class="mt-5 row d-flex justify-content-start align-items-start "> 
        <h1 style="font-size: 5vh; border-bottom: solid 4px;">School</h1>
        <div  class="">
        <h1 class="flex-grow-1"><slot name="mainheader"></slot></h1>
        </div>

        <div class="">
        <h4 class="date flex-grow-1 "> <slot name="date"></slot></h4>
        </div>

        <div class="" >
        <h5 class="flex-grow-1  " style="font-size: 3vh"><slot  name="subtitle"></slot></h5>
        </div>

        <div class="text-container mt-2 " style="font-size: 2.5vh">
           <slot name="description"></slot>
           
        </div>
        <button-read-more  class="mt-5 d-flex justify-content-start align-items-start " style="width: 20%;"></button-read-more>
        
        
</div>
</div>

        


</template>

<script >
import ButtonReadMore from './ButtonReadMore.vue';

import CircleLine from './CircleLine.vue';
export default {

    components: {CircleLine, ButtonReadMore},
   
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
.date {
    display: none;
}

@media screen and (max-width: 992px) {
.date, .subtitle { display: flex;}
.tekst2 { display: none;}



}


</style>