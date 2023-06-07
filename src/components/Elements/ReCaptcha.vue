<template>
  <div>
    <button class="g-recaptcha" ref="recaptcha" @click="submitForm">Submit</button>
  </div>
</template>

<script>
import { useRecaptcha } from 'vue-recaptcha-v3';

export default {
  methods: {
    async submitForm() {
      await this.$recaptcha.execute();
      // Wykonaj żądanie HTTP
      // Przetwarzaj odpowiedź
    }
  },
  mounted() {
    const { execute } = useRecaptcha({ siteKey: '6LfaOHgmAAAAAMvrxttZCxNE0208YZ-FQGzVYl5C' });
    this.$recaptcha = execute;
  }
};
</script>