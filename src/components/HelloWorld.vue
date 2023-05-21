<template>
  <div class="container-fluid full-height border">
    <div class="row full-height">
      <div class="col-12 d-flex flex-column justify-content-center align-items-center">
        <hello-grid></hello-grid>
      </div>
    </div>
  </div>

  <div class="container-fluid full-height border mt-2">
    <div class="row full-height">
      <div class="col-12 d-flex flex-column">
        <education-section></education-section>
      </div>
    </div>
  </div>
</template>

<script>
import EducationSection from './EducationSection.vue';

import HelloGrid from './HelloGrid.vue'


export default {
  name: "HelloWorld",
  components: { HelloGrid, EducationSection,}

  
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import '../styles.scss';

.full-height {
    height: 100vh;
  }

  @media (max-width: 767px) {
    .full-height {
      height: 100%;
    }
  }
</style>
