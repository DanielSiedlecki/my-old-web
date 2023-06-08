<template>
  <button class="g-recaptcha" 
        data-sitekey="6LfaOHgmAAAAAMvrxttZCxNE0208YZ-FQGzVYl5C" 
        data-callback='onSubmit' 
        data-action='submit'>Submit</button>
</template>

<script>
export default {
  mounted() {
    this.loadRecaptchaScript();
  },
  methods: {
    loadRecaptchaScript() {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js";
      document.head.appendChild(script);
    },
  },
};
</script>

<style lang="scss">


</style>