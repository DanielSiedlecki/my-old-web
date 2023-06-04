<template>
  
  <input type="text" v-model="titleModel">
  <input type="text" v-model="descriptionModel" >

  <default-button @click="saveOpinion()" />


</template>

<script>
import DefaultButton from './Elements/DefaultButton.vue';
import OpinionDataService from '../services/DataService.js'



export default {
  components: {
    DefaultButton
  },
  data() {
    return {
      id: null,
      titleModel: '',
      descriptionModel:'',
      opinion: {
        id: "20",
        title: '',
        description: '',
        published: false
      }
    };
  },
  methods: {
    saveOpinion() {
      var data = {
        title: this.titleModel,
        description: this.descriptionModel
      };

      OpinionDataService.create(data)
        .then(response => {
          this.opinion.id = response.opinion.id;
          console.log(response.data);

        })
        .catch(error => {
          console.log(error);
          console.log(data)
        });
    }
  }
};
</script>

<style>

</style>
        DefaultButton