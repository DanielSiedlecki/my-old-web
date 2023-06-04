<template>
  
  <button type="button" class="btn btn-outline-primary d-flex justify-content-center align-items-center" 
  data-mdb-ripple-color="dark">{{ text }} <i style="font-size: 30px;  margin-left: 0.5rem;" :class='icon'></i> </button>


</template>

<script>
export default {
    name: "DefaultButton",
    props: {
        text: {
            type: String,
            default: 'Read More'
        },

        icon:{
            type: String,
            required: true
        }
    }




}
</script>

<style lang="scss" scoped>
@import '../../styles.scss';
button {
    border: 3px solid $primary-global-color;
    filter: drop-shadow(0px 4px 3px #000000);
    border-radius: 200px;
    background-color: white;
    font-family: 'Roboto';
    letter-spacing: 1px;

    
}


</style>
