<template>

<hello-section v-if="VisibilityHelloSection" @buttonClick="handleButtonClick"  class="custom-container  d-flex align-items-center justify-content-center " @scrollToEducation="scrollToEducation"/>
<div ref="portfolioSection">

<porfolio-section v-if="VisiblityPortfolio"  class="custom-container position-relative" />

</div>






</template>

<script>

import HelloSection from './HelloSection.vue'
import PorfolioSection from './PorfolioSection.vue';




export default {
  name: "HomePage",
  components: { HelloSection,
                PorfolioSection,
  },
  data(){
    return {
    VisibilityHelloSection: true,
    VisiblityPortfolio: false

  }},
  methods: {
    handleButtonClick() {
    this.VisiblityPortfolio = true
    
    
    setTimeout(() => {
      this.$refs["portfolioSection"].scrollIntoView({ behavior: "smooth" });
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
