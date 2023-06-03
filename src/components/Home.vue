<template>

<hello-section v-if="VisibilityHelloSection" @buttonClick="handleButtonClick"  class="custom-container d-flex align-items-center justify-content-center " @scrollToEducation="scrollToEducation"/>
<div ref="educationSection">


<work-and-education-section v-if="VisiblitySectionEducationWork" class="custom-container position-relative"/></div>



<skills-section v-if="VisibilitySkillsSection" class="custom-container position-relative" > </skills-section>


</template>

<script>
import WorkAndEducationSection from './WorkAndEducationSection.vue';
import HelloSection from './HelloSection.vue'
import SkillsSection from './SkillsSection.vue';



export default {
  name: "HomePage",
  components: { HelloSection,
    
    WorkAndEducationSection,
    SkillsSection
  },
  data(){return {VisiblitySectionEducationWork: false, VisibilitySkillsSection: false, VisibilityHelloSection: true}},
  methods: {
    handleButtonClick() {

    this.VisiblitySectionEducationWork = true
    console.log('Funkcja w komponencie HelloWorld została wywołana');
    console.log(this.$refs['educationSection'])
    
    setTimeout(() => {
      this.$refs['educationSection'].scrollIntoView({ behavior: "smooth" });
    }, 100);
  
  },
  
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import '../styles.scss';




.custom-container {
    min-height: 100vh;
    
  }
</style>
