<template>
    
    <div class="row d-flex justify-content-start">
    <div class="">    
    <h1 class="display-5">Contact Us</h1>
    <p class="ms-1"> if you have any questions</p>
</div>


    <div class="row ">
        <div class="col-12 mt-4">
        <input placeholder="Full Name"/>   
        </div>
        
        <div class="col-12 mt-4">
            <input placeholder="Email"/>
        </div>
        
        <div class="col-12 mt-4 " >
            <textarea placeholder="Text" ></textarea> 
        </div>
        
        
        <div class="col-12 mt-4">
            <re-captcha class="recaptcha" ></re-captcha>
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

    h1 {
        color: $primary-global-color;
    }
    
    input {
        width: 100%;
        height: 6vh;
        font-size: 3vh;
        border:  2px solid #A3A3A3;
        outline: none;
        box-sizing: border-box;
        
    }

    textarea{
        width: 100%;
        height: 10vh;
        font-size: 2vh;
        border: 2px solid #8C8C8C;
        box-sizing: border-box;
        
    }

    input:focus {
        outline: none;
        border-color: $primary-global-color
    }

    textarea:focus {
        outline: none;
        border: 1px solid $primary-global-color
    }
    .recaptcha{
        border-color: $primary-global-color;
        background-color: $primary-global-color ;
        width: 100%;
        height: 6vh;
        color: white;
        font-size: 3vh;
        border-radius: 10px;
        border: 1px solid $primary-global-color
    }

    
    </style>