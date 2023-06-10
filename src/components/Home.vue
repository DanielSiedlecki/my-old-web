<template>

<hello-section v-if="VisibilityHelloSection" @buttonClick="handleButtonClick"  class="custom-container  d-flex align-items-center justify-content-center " @scrollToEducation="scrollToEducation"/>
<div ref="educationSection">

<work-and-education-section v-if="VisiblitySectionEducationWork" class="custom-container  position-relative "/>

</div>






</template>

<script>
import WorkAndEducationSection from './WorkAndEducationSection.vue';
import HelloSection from './HelloSection.vue'




export default {
  name: "HomePage",
  components: { HelloSection,
    
    WorkAndEducationSection,
    
  },
  data(){return {VisiblitySectionEducationWork: false, VisibilitySkillsSection: false, VisibilityHelloSection: true}},
  methods: {
    handleButtonClick() {

    this.VisiblitySectionEducationWork = true
    
    
    setTimeout(() => {
      this.$refs["educationSection"].scrollIntoView({ behavior: "smooth" });
    }, 100);
  
  },
  
  },
};
</script>


<style scoped lang="scss">

@import '../styles.scss';




.custom-container {
    min-height: 100vh;
    
  }

</style>
