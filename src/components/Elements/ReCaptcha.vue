<template>

  <div class="g-recaptcha-container ">
  <form @submit.prevent="submitForm">
    <div class="g-recaptcha" ref="recaptchaElement"  data-sitekey="6LdUFOMmAAAAAB9zknMxDPOwg2gBR2ek7yz1Ya14" data-callback="onRecaptchaVerify" data-hl="en"> </div>
    <br/>
    
  </form>
</div>
</template>

<script>
import { RecaptchaValidService } from '@/services/DataService';


export default {

  data(){
    return {
      CaptchaValid: false
    }
  },
  methods: {


    submitForm() {
    },
    onRecaptchaVerify(response) {

      var data = {
        'g-recaptcha-response' : response
      
                }

        const RecaptchaValidation = new RecaptchaValidService()


        RecaptchaValidation.create(data)
        .then( () => {
          this.CaptchaValid = true
  

          this.$emit('CaptchaValid', this.CaptchaValid)
          

        })
        .catch(error => {
          console.log(error)
          this.$emit('CaptchaValid', this.CaptchaValid)
        })
    },
    loadRecaptchaScript() {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js?hl=en";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    },
    
  
    
  },
  mounted() {
    this.loadRecaptchaScript();
    window.onRecaptchaVerify = this.onRecaptchaVerify;


  }
};
</script>

<style lang="scss" scoped>



</style>