<template>
  <div class="row">
    <div class="col-md-12 d-flex justify-content-center">
      <span>
        <h1 class="display-2" style="font-family: Roboto, sans-serif; font-weight: 600;">Hello, my name is Daniel</h1>
        <h2 class="display-4">and you?</h2>
      </span>
    </div>
    <div class="col-md-12 mt-2">
      <input type="input" v-model="inputName" @keydown.space.prevent class="form-control btn-lg" :class="{'validation': validation || validation1}"
       :placeholder="validation ? 'Name contains number' : (validation1 ? 'Name is too long' : 'Your Name')" name="name" id="name" required />
    </div>
    <div class="col-md-12 mt-4">
      <div class="row">
        <div class="col-md-6 mt-2">
          <default-button-vue text="anonymous" @click="SubmitName('Anon')" class="btn btn-primary btn-block" style="font-size: 1rem"></default-button-vue>
        </div>
        <div class="col-md-6 mt-2">
          <default-button-vue @click="SubmitName(this.inputName)" text="Next" class="btn btn-secondary btn-block" style="font-size: 1rem"></default-button-vue>
        </div>
      </div>
    </div>
  </div>

  <notifications-corner/>
</template>

<script>

import DefaultButtonVue from '../Elements/DefaultButton.vue';

export default {
  components: { DefaultButtonVue },
  
  methods:{

    SubmitName(name){
      
      if (!this.isNameValid && !this.isNameLengthValid) {
        const nameChange = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        this.$emit('data', nameChange)

      }


    
      
      else if(this.isNameLengthValid){
        this.validation = false
        this.validation1 = true
        this.inputName= ''
        


      }
      else{
        this.validation1 = false
        this.validation = true
        this.inputName= ''
      }
      

      

    }
    
  },

  data() {
    return {
      inputName: '',
      validation: false,
      
    }
  },
  computed: {
   
  isNameValid(){
    const digitPattern = /\d/;
    return digitPattern.test(this.inputName)
  },

  isNameLengthValid(){
    return !(this.inputName.length < 15)
  }

  

  



  },
}
</script>

<style lang="scss" scoped>
@import '../../styles.scss';

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