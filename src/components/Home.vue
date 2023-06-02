<template>

<hello-grid v-if="VisibilityHelloSection" @buttonClick="handleButtonClick"  class="custom-container d-flex align-items-center justify-content-center " @scrollToEducation="scrollToEducation"/>
<div ref="educationSection">
<education-section  v-if="VisiblitySectionEducationWork" class="custom-container position-relative" style=""/>

</div>
<work-section v-if="VisiblitySectionEducationWork" @buttonClick2="handleButtonClick2"  class="custom-container position-relative"> </work-section>


<skills-section v-if="VisibilitySkillsSection" class="custom-container position-relative" > </skills-section>


</template>

<script>
import EducationSection from './EducationSection.vue';
import workSection from './WorkSection.vue'
import HelloGrid from './HelloGrid.vue'
import SkillsSection from './SkillsSection.vue';



export default {
  name: "HomePage",
  components: { HelloGrid,
    
    EducationSection, workSection,
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
  handleButtonClick2() {
      this.VisibilitySkillsSection = true
      this.VisiblitySectionEducationWork = false
      this.VisibilityHelloSection = false
    }
  
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
