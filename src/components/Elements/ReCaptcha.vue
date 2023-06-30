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
  methods: {
    submitForm() {
    },
    onRecaptchaVerify(response) {

      var data = {
        'g-recaptcha-response' : response
      
                }

        const RecaptchaValidation = new RecaptchaValidService()


        RecaptchaValidation.create(data)
        .then( response => {
          console.log(response)

        })
        .catch(error => {
          console.log(error)
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