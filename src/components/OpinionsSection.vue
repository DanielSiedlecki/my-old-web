<template>
    <div class="container-fluid d-flex justify-content-center align-items-center" style="min-height: 100vh;">
      <div class="row">
        <div class="col-md-4 col-4 d-none d-md-flex d-flex justify-content-center align-items-center d-none">
          <img v-if="review_list" src="../assets/professional-skills-icon.png" alt="" style="width: 60%;">
        </div>
        <div class="col-8 col-md-8 col-sm-12 mx-auto" style="min-height: 80vh;">
          <page-header v-if="review_list">Opinions</page-header>
          <div v-if="review_list">
            <div class="row justify-content-center scrollbar" id="style-2" style="overflow: auto; max-height: 50vh;">
              <opinion-card v-for="review in review_list" :value="review" :key="review" :text="review.description" :title="review.title"></opinion-card>
            </div>
            <button-with-icon class="mt-3" text="Add Opinion" icon="fas fa-plus" style="float: right"></button-with-icon>
          </div>
          <div v-else>
            <app-loader></app-loader>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ButtonWithIcon from './Elements/ButtonWithIcon.vue';
  import PageHeader from './Elements/PageHeader.vue';
  import OpinionCard from './Elements/OpinionCard.vue';
  
  import axios from 'axios';
    import AppLoader from './Elements/AppLoader.vue';
  
  export default {
    components: { PageHeader, OpinionCard, ButtonWithIcon, AppLoader },
    data() {
      return {
        review_list: null,
      };
    },
    mounted() {
      this.getData();
    },
    methods: {
      async getData() {
        try {
          const response = await axios.get('http://localhost:8080/api/project/published');
          this.review_list = response.data;
        } catch (err) {
          console.error(err);
        }
      },
    },
  };
  </script>
<style lang="scss" scoped>

@import '../styles.scss';

 .card-zoom-hover:hover{
      cursor: pointer;
      transform: scale(1.1);
      transition-duration: 0.5s;
      -webkit-transform: scale(1.2);
      -moz-transform: scale(1.2);
      z-index: 99;
    }


img{

    height: 50%;
    width: 60%;
   
}




#style-2::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

#style-2::-webkit-scrollbar
{
	width: 12px;
	background-color: #F5F5F5;
}

#style-2::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: $primary-global-color;
}
</style>