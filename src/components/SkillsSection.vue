<template>

    <div class="container-fluid d-flex justify-content-center align-items-center animate__animated animate__fadeIn" style="min-height: 100vh;">
    <div class="row   "  >
        <div class="col-md-4 col-4 d-none d-md-flex  d-flex justify-content-center align-items-center d-none">

            <img src="../assets/professional-skills-icon.png" alt="">

        </div>
        <div class="col-8 col-md-8 col-sm-12 mx-auto " >
  
  
            <page-header>Main Skills</page-header>
            <div class="row justify-content-center">
            <skills-card class="col-4 mb-2 card-zoom-hover" :number="2" :icon="`my-icon-node`" :skill_name="`Node.js`" :skill_level="`Junior`" />
            <skills-card class="col-4 mb-2 card-zoom-hover" :number="2" :icon="`my-icon-angular`" :skill_name="`Angular`" :skill_level="`Junior`" />
            <skills-card class="col-4 mb-2 card-zoom-hover" :number="2" :icon="`my-icon-ts`" :skill_name="`TypeScript`" :skill_level="`Junior`" />
            <skills-card class="col-4 mb-2 card-zoom-hover" :number="3" :icon="`my-icon-js`" :skill_name="`JavaScript`" :skill_level="`Regular`" />
            <skills-card class="col-4 mb-2 card-zoom-hover" :number="3" :icon="`my-icon-vue`" :skill_name="`Vue.js`" :skill_level="`Regular`" />
            <skills-card class="col-4 mb-2 card-zoom-hover" :number="3" :icon="`my-icon-html`" :skill_name="`HTML`" :skill_level="`Regular`" />
            <skills-card class="col-4 mb-2 card-zoom-hover" :number="3" :icon="`my-icon-css`" :skill_name="`CSS`" :skill_level="`Regular`" />
            <skills-card class="col-4 mb-2 card-zoom-hover" :number="2" :icon="`my-icon-python`" :skill_name="`Python`" :skill_level="`Junior`" />
            <skills-card class="col-4 mb-2 card-zoom-hover" :number="2" :icon="`my-icon-cSharp`" :skill_name="`C#`" :skill_level="`Junior`" />
            <skills-card class="col-4 mb-2 card-zoom-hover" :number="2" :icon="`my-icon-sql`" :skill_name="`SQL`" :skill_level="`Junior`" />
            
        </div>


            
            <div class="OtherSkil">
            <page-header>Other Skills</page-header>
            <slide-skills-bar/>
        </div>
            
</div>


</div>
</div>
</template>

<script>
import SkillsCard from './Elements/SkillsCard.vue'
import SlideSkillsBar from './Elements/SlideSkillsBar.vue'
import PageHeader from './Elements/PageHeader.vue'
import StartScrollTop from '@/GlobalScript/StartScrollTop'
export default {
  components: { SlideSkillsBar, PageHeader, SkillsCard },

  mixins: [StartScrollTop],

  

  
}




</script>

<style lang="scss" scoped>



 .card-zoom-hover:hover{
      cursor: pointer;
      transform: scale(1.1);
      transition-duration: 0.5s;
      -webkit-transform: scale(1.2);
      -moz-transform: scale(1.2);
      z-index: 99;
    }


img{

    height: 20vh;
    width: 10vw;
   
}
</style>