<template>
    
    <div class="row d-flex justify-content-md-start justify-content-sm-center ">
    <div class="">    
    <h1 class="display-5">Contact Us</h1>
    <p class="ms-1"> if you have any questions</p>
</div>


    <div class="row ">
        <div class="col-12 mt-4">
        <input v-model="email.fullname" :class="{'validation' : fullnameValid}" :placeholder="!fullnameValid ? 'Fullname' : 'Field cannot be empty'"/>   
        </div>
        
        <div class="col-12 mt-4">
            <input v-model="email.mail" :class="{'validation' : mailValid}" :placeholder="!mailValid ? 'Email' : 'Field cannot be empty'"/>
        </div>
        
        <div class="col-12 mt-4 " >
            <textarea v-model="email.text" :class="{'validation' : textareaValid}" :placeholder="!textareaValid ? 'Text' : 'Field cannot be empty' " ></textarea> 
        </div>
        
        
        <div class="col-12 d-flex justify-content-start">
            <re-captcha @CaptchaValid="CaptchaValidationStatus" class="recaptcha" ></re-captcha>
        </div>

        <div class="col-12 mb-4"><button @click="Validation">Send</button></div>

        <error-toast v-if="VisibilityErrorToast" @destroyToast="destroyToastFunction">Recaptcha error.</error-toast>
        <success-toast v-if="VisibilitySuccessToast" @destroyToast="destroyToastFunction">Your message was successfully sent. </success-toast>
        



    </div>


</div>


    </template>
    
    <script>

import ReCaptcha from '../Elements/ReCaptcha.vue'
import { SendMailService } from '@/services/DataService'
import ErrorToast from '../Toats/ErrorToast.vue'
import SuccessToast from '../Toats/SuccessToast.vue'



   
    export default {
      components: {ReCaptcha, ErrorToast , SuccessToast},
        data(){
            return{
                email: {
                fullname: '',
                mail: '',
                text: '',
            },

                VisibilityErrorToast: false,
                VisibilitySuccessToast: false,

                fullnameValid: false,
                mailValid: false,
                textareaValid: false,
                CaptchaValid: false

            }
        },
        methods:{
            Validation() {
                console.log(this.CaptchaValid)
                if(this.email.fullname.length <= 0){
                    this.fullnameValid = !this.fullnameValid
                }
                else if(this.email.mail.length <= 0){
                    this.mailValid = !this.mailValid
                }
                else if(this.email.text.length <= 0){
                    this.textareaValid = !this.textareaValid
                }
                else if(this.CaptchaValid === false){
                    this.VisibilityErrorToast = true
                }

                else{
                    this.VisibilityErrorToast = false
                    this.Submit()
                }



            },

            CaptchaValidationStatus(captchaValid){

                this.CaptchaValid = captchaValid;
                console.log("Wartość captchaValid:", this.CaptchaValid);
            },

            Submit(){
               
                var data = {
                    fullname : this.email.fullname,
                    mail: this.email.mail,
                    text: this.email.text
                }

                const SendMailServices = new SendMailService()

                SendMailServices.create(data)
                .then(response => {
                    console.log(response)
                    this.VisibilitySuccessToast = true
                    this.InputClear()

                })
                .catch(error => {
                    console.log(error)
                })



                console.log(this.email)


                
            },
            InputClear(){
                this.fullname = ''
                this.email = ''
                this.textarea = ''
                this.fullnameValid = false
                this.mailValid = false
                this.textareaValid = false




            },

            destroyToastFunction(){
                this.VisibilityErrorToast = false
                this.VisibilitySuccessToast = false
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
    
    .validation {
        border: 1px solid red;
    }
    
    button {
        width: 100%;
        height: 6vh;
        border: 3px solid $primary-global-color;
        border-radius: 200px;
        background-color: $primary-global-color;
        color: white;
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        

    }

    button:hover {
        border-color: $secondary-global-color;
        background-color: $secondary-global-color;
        cursor: pointer;
    }
    </style>