<template>
<div >

    <div class="modal animation " ref="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" >
      <div class="modal-dialog  modal-dialog-centered"  role="document">
        <div class="modal-content " style="border:none; position: absolute" >
          <div class="modal-header " style="border:none">
            <h5 class="modal-title" id="exampleModalLongTitle">Add Opinion</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="background-color: white; border: none; scale: 2;" @click="closeModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
           <div class="row d-flex justify-content-center">
            <div class="col-6">
            <input type="text" style="font-size: 18px" v-model="title_name" :class="{'validation' : Validname}" :placeholder="!Validname ? 'Name' : 'Field cannot be empty' " maxlength="10" @keydown.space.prevent> 
          </div>
          <div class="col-6">
            <input type="text" style="font-size: 18px" v-model="title_surname" :class="{'validation' : Validsurname}"  :placeholder="!Validsurname ? 'Surname' : 'Field cannot be empty' " maxlength="10" @keydown.space.prevent>
          </div>
          
          </div>
            <textarea v-model="descriptionModel" class="mt-2" :class="{'borderValidation' : characterCount === 100, 'validation' : Validtextarea}" :placeholder="!Validtextarea ? 'Text Area' : 'Field cannot be empty' "  maxlength="100">Enter text here...</textarea>

           <p style="float:right"> {{ characterCount }} / 100</p>
          </div>
          <div class="modal-footer" style="border:none">
            <button type="button" class="btn btn-secondary " data-dismiss="modal" @click="closeModal">Close</button>
            <button type="button" class="btn btn-primary custom-color" @click="Submit()">Add Opinion</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <error-toast v-if="VisibilityErrorToast" @destroyToast="destroyToastFunction"></error-toast>
  <success-toast v-if="VisibilitySuccessToast" @destroyToast="destroyToastFunction"> ,your opinion will be visible once it is approved by the administrator.</success-toast>


</template>

<script>


import {OpinionDataService} from '../services/DataService.js'
import ErrorToast from './Toats/ErrorToast.vue';
import SuccessToast from './Toats/SuccessToast.vue';
import { Valid } from '@/Scripts/ValidScript';


export default {

  components: {
    ErrorToast,
    SuccessToast
    
  },

  props:{
    length_list: {
      type: Number
    }
  },

  data() {
    return {
      
      Validname: false,
      Validsurname: false,
      Validtextarea: false,

      characterCount:0,
      title_name: '',
      title_surname: '',
      descriptionModel:'',
      opinion: {
        id: '',
        title: '',
        description: '',
        published: false
      },
      VisibilityErrorToast: false,
      VisibilitySuccessToast: false,

    };
  },

  watch: {

    descriptionModel(newValue){
      this.characterCount = newValue.length
    }
  },
  methods: {
    Submit(){
      if(Valid(this.title_name)){
        this.Validname = true
      }
      
      if(Valid(this.title_surname)){
        this.Validsurname = true
        
      }
      
      if(Valid(this.descriptionModel)){
        this.Validtextarea = true
        
      }
      else{
        
        this.saveOpinion()
      }

    },



    saveOpinion() {
      var data = {
        title: this.title_name + ' ' + this.title_surname,
        description: this.descriptionModel
      };
      const OpinionsDataService = new OpinionDataService()
      OpinionsDataService.create(data)
        .then(response => {

          
          this.opinion.id = response.data.id;
          this.closeModal()
          this.VisibilitySuccessToast = true
          this.$emit('refresh', true)

        })
        .catch(error => {
          console.log(error);
          this.closeModal()
          this.VisibilityErrorToast = true
        });
        this.ClearInput()

    },

    openModal() {
      
      const modal = this.$refs.exampleModal;
      modal.classList.add('show');
      modal.style.display = 'block';
      document.body.classList.add('modal-open');
    },
    closeModal() {
      
      const modal = this.$refs.exampleModal;
      modal.classList.remove('show');
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    },
    destroyToastFunction(){
      this.VisibilityErrorToast = false
      this.VisibilitySuccessToast = false

    },
    ClearInput(){
    this.title_name = ''
    this.title_surname = ''
    this.descriptionModel = ''
  }
  },
  


  }

</script>

<style lang="scss" scoped>

@import '../styles.scss';

.animation {
  animation: bounceIn;
  animation-duration: 0.6s; 
}
.custom-color{
  background-color: $primary-global-color;
}

textarea:focus, input:focus{
  
 
  outline-color: $secondary-global-color
}

textarea, input{ 
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 2px $primary-global-color solid;
  border-radius: 10px;
  resize: none
  

};
button{
  border-radius: 20px;
}
textarea {
  height: 50%;
}



.borderValidation:focus {
  outline-color: red
}
.validation {
        border: 1px solid red;
    }





</style>
       