<template>
  
  <button type="button" class="btn btn-outline-primary btn-lg" data-mdb-ripple-color="dark">{{text}}</button>


</template>

<script>
export default {
    name: "DefaultButton",
    props: {
        text: {
            type: String,
            default: 'default'
        }


    }




}
</script>

<style lang="scss" scoped>
@import '../styles.scss';
button {
    border: 4px solid #327CE5;
    filter: drop-shadow(0px 4px 3px #000000);
    border-radius: 20px;
    background-color: white;
    font-family: 'Roboto';
    letter-spacing: 1px;

    
}

.btn:hover {
    
}

</style>

