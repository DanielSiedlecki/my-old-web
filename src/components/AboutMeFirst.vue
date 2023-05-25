<template>
  <div class="row">
    <div class="col-md-12 d-flex justify-content-center">
      <span>
        <h1 class="display-2" style="font-family: Roboto, sans-serif; font-weight: 600;">Hello, my name is Daniel</h1>
        <h2 class="display-4">and you?</h2>
      </span>
    </div>
    <div class="col-md-12 mt-2">
      <input type="input" v-model="inputName" @keydown.space.prevent class="form-control btn-lg" :class="{'validation': !validation}" :placeholder="validation ? 'Your name' : 'Uzupełnij dane poprawnie'" name="name" id="name" required />
    </div>
    <div class="col-md-12 mt-4">
      <div class="row">
        <div class="col-md-6 mt-2">
          <default-button-vue text="anonymous" @click="submitName('Anon')" class="btn btn-primary btn-block" style="font-size: 1rem"></default-button-vue>
        </div>
        <div class="col-md-6 mt-2">
          <default-button-vue @click="validationName" text="Next" class="btn btn-secondary btn-block" style="font-size: 1rem"></default-button-vue>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import DefaultButtonVue from './Elements/DefaultButton.vue';

export default {
  components: { DefaultButtonVue },
  setup(_, { emit }) {
    const inputName = ref('');
    const validation = ref(true);

    function submitName(name) {
      const nameChange = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      emit('data', nameChange);
      console.log(nameChange);
    }

    function validationName() {
      const name = inputName.value;

      if (name !== '' && name.length >= 3 && name.length <= 12) {
        const signs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        let foundLetter = false;

        signs.forEach((sign) => {
          if (name.indexOf(sign) !== -1) {
            foundLetter = true;
            return;
          }
        });

        if (!foundLetter) {
          submitName(name);
        } else {
          validation.value = false;
        }
      } else {
        validation.value = false;
      }
    }

    return { submitName, inputName, validationName, validation };
  },
};
</script>

<style lang="scss" scoped>
@import '../styles.scss';

.row {
  .col-md-4 {
    img {
      border-radius: 200px;
      border: 20px solid #ffffff;
      box-shadow: 0px 0px 11px 5px rgba(0, 0, 0, 0.25);
    }
  }
  .col-md-8 {
    input {
      color: $blue-global-color;
      border: 4px solid $blue-global-color;
      filter: drop-shadow(0px 4px 3px #000000);
      border-radius: 20px;
      height: 8vh;
      text-align: center;
      font-size: 36px;
    }

    .validation {
      border: 4px solid red;
    }
  }
}
</style>