<template>
  <MDBContainer>
    <PageHeader> Education & Course</PageHeader>
    <MDBRow class="row">
      <MDBCol class="col-4 col-sm-2 mt-5"> 
        
        
        <TimeLine>
          <template v-if="VisibilityDate" #data_start>10.2020</template>
          <template v-if="VisibilityDate" #data_divider>-</template>
          <template v-if="VisibilityDate" #data_end>Ongoing</template>


        </TimeLine>  
      
      </MDBCol>

      <MDBCol class="col-8 col-sm-10  "> 
      <div class="row">
              <div class="col-md-12 d-flex justify-content-center">
                  <text-container style="max-width: 100vw;">
                  
                  <template #mainheader>ZETO - SWIDNICA SP Z.O.O.</template>
                  <template v-if="!VisibilityDate" #date  >10.2020 - Ongoing</template>
                  <template #subtitle>Intern Front-End Developer</template>
                  
                  <template #data_start>10.2020</template>          
                  <template #data_end>Ongoing</template>                     

                  <template #description>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                      Expedita ratione dicta, ullam in facilis alias dolorum, iusto eaque animi totam minus maiores nostrum doloremque officiis! 
                      

                  </template>
                  </text-container>
                </div>
                <div class="col-md-12 d-flex justify-content-end">
                  <ButtonReadMore/>
                </div>
              </div>

                </MDBCol>

             
      </MDBRow>

      
     <list-experience/>
    </MDBContainer>
      


</template>

<script>

import TextContainer from './Text-Container.vue';
 import { MDBContainer, MDBRow, MDBCol} from 'mdb-vue-ui-kit'; 
import TimeLine from './TimeLine.vue'
import ButtonReadMore from './ButtonReadMore.vue';
import PageHeader from './PageHeader.vue';
import ListExperience from './ListExperience.vue';




export default {
  
  components: { TextContainer, MDBContainer, MDBRow, TimeLine, MDBCol, ButtonReadMore, PageHeader, ListExperience },
  mounted() {
    window.addEventListener('resize', this.onResize)
  },
  data() {
    
    return {
    VisibilityDate: false,
    windowWidth: window.innerWidth

  }},
  methods: {  
    onResize() {
      this.windowWidth = window.innerWidth
      if(this.windowWidth >= 920){
        this.VisibilityDate = true
        return this.VisibilityDate
      }

      else {
        this.VisibilityDate = false
      }
    }
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