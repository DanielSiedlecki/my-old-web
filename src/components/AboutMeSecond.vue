<template>
  
  <div>
    
    <div class="row">

        <div class="col-md-12 d-flex justify-content-center">

            <h1 class="display-2" style="font-family: Roboto, sans-serif; font-weight: 600;">Hello {{ name }}, Nice to meet you too!  </h1>

            
        </div>



        
    </div>
  </div>

</template>

<script>

export default {
    
    props: {
        name:{
        type: String,
        default: 'name'
        }
    },

  
    
}



</script>

<style lang="scss" scoped>

</style>