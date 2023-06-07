<template>

    <div class="row d-flex justify-content-start">
    <div class="">    
    <h1>Contact Us</h1>
    <p> if you have any questions</p>
</div>


    <div class="row ">
        <div class="col-12 mt-2">
        <input/>   
        </div>
        
        <div class="col-12 mt-2">
            <input/>
        </div>
        
        <div class="col-12 mt-2">
            <textarea class="recaptcha"></textarea> 
        </div>
        
        <div class="col-12 mt-2">
        <re-captcha />
        
        </div>
        <div class="col-12">
            <button></button>
        </div>






    </div>


</div>


    </template>
    
    <script>
import ReCaptcha from '../Elements/ReCaptcha.vue'

   
    export default {
      components: {ReCaptcha },
    
    }
    </script>
    
    <style scoped lang="scss">
    @import '../../styles.scss';



    input {
        width: 60%
    }

    textarea{
        width: 60%;
        height: 100%;
    }

    
    </style>