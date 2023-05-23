<template>
<hello-grid @buttonClick="handleButtonClick"  class="custom-container d-flex align-items-center justify-content-center " @scrollToEducation="scrollToEducation"/>
<div ref="educationSection">
<education-section   class="custom-container position-relative" style=""/>

</div>

</template>

<script>
import EducationSection from './EducationSection.vue';

import HelloGrid from './HelloGrid.vue'



export default {
  name: "HelloWorld",
  components: { HelloGrid, EducationSection},

  methods: {
    handleButtonClick() {
    console.log('Funkcja w komponencie HelloWorld została wywołana');
    console.log(this.$refs['educationSection'])
    this.$refs['educationSection'].scrollIntoView({behavior: "smooth"})
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
