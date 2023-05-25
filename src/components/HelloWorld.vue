<template>
<hello-grid @buttonClick="handleButtonClick"  class="custom-container d-flex align-items-center justify-content-center " @scrollToEducation="scrollToEducation"/>
<div ref="educationSection">
<education-section  v-if="VisiblitySection" class="custom-container position-relative" style=""/>

</div>
<work-section v-if="VisiblitySection"  class="custom-container position-relative"> </work-section>

</template>

<script>
import EducationSection from './EducationSection.vue';
import workSection from './WorkSection.vue'
import HelloGrid from './HelloGrid.vue'



export default {
  name: "HelloWorld",
  components: { HelloGrid, EducationSection, workSection},
  data(){return {VisiblitySection: false}},
  methods: {
    handleButtonClick() {

    this.VisiblitySection = true
    console.log('Funkcja w komponencie HelloWorld została wywołana');
    console.log(this.$refs['educationSection'])
    
    setTimeout(() => {
      this.$refs['educationSection'].scrollIntoView({ behavior: "smooth" });
    }, 100);
  
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
