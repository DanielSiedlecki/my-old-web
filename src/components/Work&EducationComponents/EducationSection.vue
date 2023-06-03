<template>
  <div class="container" style="margin-top: 10vh;  ;">
    <PageHeader> Education & Course</PageHeader>
    <div class="row" >
      <div class="col-4 col-sm-2 mt-5 " style=""> 
        
        
        <TimeLine circleColor="black" >
          <template v-if="VisibilityDate" #data_start>10.2020</template>
          <template v-if="VisibilityDate" #data_divider>-</template>
          <template v-if="VisibilityDate" #data_end>Ongoing</template>


        </TimeLine>  
      
      </div>

      <div class="col-8 col-sm-10 mb-5 mb-sm-3 "> 
      <div class="row">
              <div class="col-md-12 d-flex justify-content-center ms-lg-3 " >
                  <text-container style="max-width: 100vw">
                  
                  <template #mainheader>WSB Meritum University</template>
                  <template v-if="!VisibilityDate" #date  >10.2020 - Ongoing</template>
                  <template #subtitle>Computer Network Enginnering</template>
                  
                  <template #data_start>10.2020</template>          
                  <template #data_end>Ongoing</template>                     

                  <template #description>
                    I am a 3th student of Computer Science in the full-time mode. My passion is programming,
                     but I also enjoy learning new things.
                     That's why I chose to specialize in Computer Network Engineering.

                  </template>
                  </text-container>
                </div>
                </div>
              </div> 
      </div>

      

      
    </div >
      <div class="container mt-5 mb-5">
        <div class="row d-flex">
        <div class="col-md-12 mt-5">
        <list-experience>

          <template #Header_title> Course and Training</template>
          <template #first_slot>Altkom Academy Training in GIT - Agile and Modern Code Repository </template>
          <template #second_slot>Driver's license B</template>
          
        </list-experience>
      </div>
    </div> 


      </div>

</template>

<script>

import TextContainer from '../Text-Container.vue';

import TimeLine from '../Elements/TimeLine.vue'
import PageHeader from '../Elements/PageHeader.vue';
import ListExperience from '../ListExperience.vue';




export default {
  
  components: { TextContainer, TimeLine,PageHeader, ListExperience },
  mounted() {
    this.checkActuallyVisibility()
    window.addEventListener('resize', this.onResize)
  },
  data() {
    
    return {
    VisibilityDate: true,
    windowWidth: window.innerWidth,
    actuallyWidth: window.innerWidth

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
    },
    checkActuallyVisibility(){
      console.log(this.actuallyWidth)
      if(this.actuallyWidth >= 920) {
        console.log(this.VisibilityDate)
        this.VisibilityDate = true
      }
      else {
        
        this.VisibilityDate = false
        console.log(this.VisibilityDate + "else")
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