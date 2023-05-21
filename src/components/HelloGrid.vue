<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 d-flex justify-content-center align-items-center">
        <img src="../assets/Avatar-Photo-square.png" class="img-fluid">
      </div>
      <div class="col-md-8">
        <div>
          <AboutMeFirst v-show="showAboutMeFirst"  @data="GetData"/>
          <AboutMeSecondVue v-show="showAboutMeSecond" :name="personInfo "></AboutMeSecondVue>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import AboutMeFirst from './AboutMeFirst.vue'
import AboutMeSecondVue from './AboutMeSecond.vue'

export default {
  components: { AboutMeFirst, AboutMeSecondVue },
  
  data() {
    return {
      personInfo: '',
      showAboutMeFirst: true,
      showAboutMeSecond: false,
      change: ''
    };
  },
  methods: {
    GetData(data) {
      this.personInfo = data;

      if (this.personInfo !== '') {
        this.showAboutMeSecond = true;
        this.showAboutMeFirst = false;
      }
    }
  }
  }

</script>

<style lang="scss" scoped>
@import '../styles.scss';

.container {
  .row {
    .col-md-4 {
      img {
        width: 80%;
        
        border-radius: 200px;
        border: 20px solid #FFFFFF;
        box-shadow: 0px 0px 11px 5px rgba(0, 0, 0, 0.25);
      }
    }
  }
}
</style>