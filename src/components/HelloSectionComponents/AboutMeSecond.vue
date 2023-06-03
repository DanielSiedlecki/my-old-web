<template>
  
  <div>
    
    <div class="row">

        <div class="col-md-12 d-flex justify-content-start">

            <h1 class="display-4" style="font-family: Roboto, sans-serif; font-weight: 600;">Hello {{ name }}, Nice to meet you too!  </h1>

            
        </div>
        <div class="col-md-12 d-flex justify-content-center">

        <h2 style="font-weight: 200;"> I am a beginner frontend developer. I am passionate hardworking and knowledge driven person. </h2>


</div>
<div class="col-md-12 d-flex justify-content-end">
  <button-with-icon style="float: right;" text="Show Skills" icon="fas fa-angle-down" @click="emitButtonClick"/>
  




</div>



        
    </div>
  </div>

</template>

<script>
import ButtonWithIcon from '../Elements/ButtonWithIcon.vue';


export default {
    components: {
        ButtonWithIcon
      
    },
    props: {
        name:{
        type: String,
        default: 'name'
        },

    },
     methods: {
    emitButtonClick() {
      this.$emit('buttonClick')
      console.log("zaczynam emitowanie");}
    }
    
    
    

  
    
}



</script>

<style lang="scss" scoped>

</style>