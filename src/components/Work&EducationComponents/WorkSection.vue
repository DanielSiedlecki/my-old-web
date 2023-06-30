<template>
  <MDBContainer>
    <PageHeader> Work Experience</PageHeader>
    <MDBRow class="row" style="">
      <MDBCol class="col-4 col-sm-2 mt-5" > 
        
        
        <TimeLine>
          <template v-if="VisibilityDate" #data_start>02.2023</template>
          <template v-if="VisibilityDate" #data_divider>-</template>
          <template v-if="VisibilityDate" #data_end>06.2023</template>


        </TimeLine>  
      
      </MDBCol>

      <MDBCol class="col-8 col-sm-10 mb-5 "> 
      <div class="row">
              <div class="col-md-12 d-flex justify-content-center ms-lg-3">
                  <text-container  style="max-width: 100vw;">
                  
                  <template #mainheader>ZETO ŚWIDNICA SP Z.O.O.</template>
                  <template v-if="!VisibilityDate" #date  >03.2020 - Ongoing</template>
                  <template #subtitle>Intern Frontend Developer</template>
                  
                                     

                  <template #description>
                    Responsibilites: Participation in a web application project at Portiernia. My
                    main tasks were designing the entire Front End for this web application using
                    the Angular framework and DevExpress.

                  </template>
                  </text-container>
                </div>
                </div>
                </MDBCol> 
      </MDBRow>

      

      
    </MDBContainer >
      <div class="container mt-5 mb-5">
        <div class="row d-flex">
        <div class="col-md-12 mt-5">
        <list-experience>

          <template #Header_title> Currently Working</template>
          <template #first_slot>Engineering thesis titled "Online Registration System for a Small Business
            using Node.js and Angular"
          </template>
          <template #second_slot>Static website for a physiotherapist and personal trainer using Vue.js</template>
          
        </list-experience>
      </div>
    </div> 
    <router-link to="/skills">
    <button-with-icon style="float: right;" text="Show Skills" icon="fas fa-angle-right"/>
  </router-link>

      </div>

</template>

<script>

import TextContainer from '../Text-Container.vue';
 import { MDBContainer, MDBRow, MDBCol} from 'mdb-vue-ui-kit'; 
import TimeLine from '../Elements/TimeLine.vue'
import PageHeader from '../Elements/PageHeader.vue';
import ListExperience from '../ListExperience.vue';
import ButtonWithIcon from '../Elements/ButtonWithIcon.vue'




export default {
  
  components: { TextContainer, MDBContainer, MDBRow, TimeLine, MDBCol,PageHeader, ListExperience, ButtonWithIcon },
  mounted() {
    this.checkActuallyVisibility()
    window.addEventListener('resize', this.onResize)
  },
  data() {
    
    return {
    VisibilityDate: false,
    windowWidth: window.innerWidth,
    actuallyWidth: window.innerWidth

  }},
  methods: {  

    ButtonClick2() {
    this.$emit('buttonClick2');
  }
    ,
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
      
      if(this.actuallyWidth >= 920) {
        
        this.VisibilityDate = true
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