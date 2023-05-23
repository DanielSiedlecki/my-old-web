<template>
  <MDBContainer class="container-fluid">
    <MDBRow class="row flex-wrap h75">
      <MDBCol class=""> 
   
        
                  <text-container>
                  <template #HeaderName>Education & Course</template>
                  <template #mainheader>ZETO - SWIDNICA SP Z.O.O.</template>
                  <template #date>10.2020 - Ongoing</template>
                  <template #subtitle>Intern Front-End Developer</template>


                  <template #data_start>10.2020</template>
                  <template #data_end>Ongoing</template>

                  <template #description>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                      Expedita ratione dicta, ullam in facilis alias dolorum, iusto eaque animi totam minus maiores nostrum doloremque officiis! 
                      Ab nam dignissimos fugiat nihil! Ab nam dignissimos fugiat nihil! 
                      Ab nam dignissimos fugiat nihil!Ab nam dignissimos fugiat nihil! Ab nam dignissimos fugiat nihil!

                  </template>
                  </text-container>
                </MDBCol>

             
      </MDBRow>
    </MDBContainer>
      


</template>

<script>

import TextContainer from './Text-Container.vue';
 import { MDBContainer, MDBRow} from 'mdb-vue-ui-kit'; 



export default {
  
  components: {TextContainer, MDBContainer, MDBRow,  },
  setup(){
    function console(){
      console.log("work")
    }
    return{console}
  }

}
</script >


<style lang="scss" scoped>



.text-container {
  border-left: 2px solid black; 
  padding-left: 10px; 
  width: calc(80% - 10px);
}

.h75 {
  height: 75vh
}
.h25 {
  height: 25vh
}

.custom-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  

}

.text-container {
  flex: 1;
  overflow: auto;
}


</style>