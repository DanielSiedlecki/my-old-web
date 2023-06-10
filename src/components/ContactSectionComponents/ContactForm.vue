<template>
    
    <div class="row d-flex justify-content-md-start justify-content-sm-center ">
    <div class="">    
    <h1 class="display-5">Contact Us</h1>
    <p class="ms-1"> if you have any questions</p>
</div>


    <div class="row ">
        <div class="col-12 mt-4">
        <input v-model="fullname" :class="{'validation' : fullnameValid}" :placeholder="!fullnameValid ? 'Fullname' : 'Field cannot be empty'"/>   
        </div>
        
        <div class="col-12 mt-4">
            <input v-model="email" :class="{'validation' : mailValid}" :placeholder="!mailValid ? 'Email' : 'Field cannot be empty'"/>
        </div>
        
        <div class="col-12 mt-4 " >
            <textarea v-model="textarea" :class="{'validation' : textareaValid}" :placeholder="!textareaValid ? 'Text' : 'Field cannot be empty' " ></textarea> 
        </div>
        
        
        <div class="col-12 mt-4">
            <re-captcha @click="Submit" class="recaptcha" ></re-captcha>
        </div>

        <not-available-toast @destroyToast="destroyToastFunction" v-if="VisibilityAvaibleToast"></not-available-toast>




    </div>


</div>


    </template>
    
    <script>
import ReCaptcha from '../Elements/ReCaptcha.vue'
import NotAvailableToast from '../Toats/NotAvailableToast.vue'
import {Valid} from '../../Scripts/ValidScript.js'


   
    export default {
      components: {ReCaptcha, NotAvailableToast, },
        data(){
            return{
                fullname: '',
                email: '',
                textarea: '',

                VisibilityAvaibleToast: false,

                fullnameValid: false,
                mailValid: false,
                textareaValid: false,


            }
        },
        methods:{

            Submit(){

                
                

                if(Valid(this.fullname)){
                    this.fullnameValid = true
                    
                }
                if(Valid(this.email)){
                    this.mailValid = true
                }
                if(Valid(this.textarea)){
                    this.textareaValid = true
                }

                else{
                    this.VisibilityAvaibleToast = true
                    this.Send()
                }


                
            },
            Send(){
                this.fullname = ''
                this.email = ''
                this.textarea = ''
                this.fullnameValid = !this.fullnameValid
                this.mailValid = !this.mailValid
                this.textareaValid = !this.textareaValid




            },

            destroyToastFunction(){
                this.VisibilityAvaibleToast = false
            }
        },
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
    .validation {
        border: 1px solid red;
    }
    
    </style>