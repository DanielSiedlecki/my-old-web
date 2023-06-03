<template>
    <div id="carouselExampleControls" class="carousel slide w-100" data-ride="carousel">
      <div class="carousel-inner " style="width: 100%;">
        <div class="carousel-item active" >
          <div class="row justify-content-center " style="">
  
              <skills-card-vue class="col-6 col-md-3 mb-2" :number="3" :icon="`my-icon-adobe-photoshop`" :skill_name="`Adobe Photoshop`" :skill_level="`Regular`"/>
              <skills-card-vue class="col-6 col-md-3 mb-2" :number="3" :icon="`my-icon-figma`" :skill_name="`Figma`" :skill_level="`Regular`" />
  
             
             
          </div>
        </div>
        <div class="carousel-item  ">
          <div class="row justify-content-center ">
  
              <skills-card-vue class="col-6 col-md-3 mb-2" :number="3" :icon="`my-icon-git`" :skill_name="`GIT`" :skill_level="`Regular`" />
              <skills-card-vue class="col-6 col-md-3 mb-2" :number="3" :icon="`my-icon-microsoft`" :skill_name="`Windows Server`" :skill_level="`Regular`" />
             
            
             
              
             
          </div>
        </div>
        </div>
      <button class="carousel-control-prev" type="button" style="color:black" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" style="color:black" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </template>
  
  <script>
import SkillsCardVue from './SkillsCard.vue'

  export default {
    components: { SkillsCardVue},
  
  }
  </script>
  
  <style scoped lang="scss">
  
  </style>