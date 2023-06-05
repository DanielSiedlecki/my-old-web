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
            <input type="text" style="font-size: 26px" v-model="title_name" placeholder="Name" maxlength="10" @keydown.space.prevent> 
          </div>
          <div class="col-6">
            <input type="text" style="font-size: 26px" v-model="title_surname" placeholder="Surname" maxlength="10" @keydown.space.prevent>
          </div>
          
          </div>
            <textarea v-model="descriptionModel" class="mt-2" :class="{'borderValidation' : characterCount === 100} " maxlength="100">Enter text here...</textarea>

           <p style="float:right"> {{ characterCount }} / 100</p>
          </div>
          <div class="modal-footer" style="border:none">
            <button type="button" class="btn btn-secondary " data-dismiss="modal" @click="closeModal">Close</button>
            <button type="button" class="btn btn-primary custom-color" @click="saveOpinion()">Add Opinion</button>
          </div>
        </div>
      </div>
    </div>
  </div>




</template>

<script>

import OpinionDataService from '../services/DataService.js'



export default {

  components: {
    
  },
  data() {
    return {
      
      characterCount:0,
      id: null,
      title_name: '',
      title_surname: '',
      descriptionModel:'',
      opinion: {
        id: "20",
        title: '',
        description: '',
        published: false
      }
    };
  },

  watch: {

    descriptionModel(newValue){
      this.characterCount = newValue.length
    }
  },
  methods: {
    saveOpinion() {
      var data = {
        title: this.title_name + ' ' + this.title_surname,
        description: this.descriptionModel
      };

      OpinionDataService.create(data)
        .then(response => {
          this.opinion.id = response.opinion.id;
          console.log(response.data);

        })
        .catch(error => {
          console.log(error);
          console.log(data)
        });
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
    }
  }
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



.borderValidation:focus {
  outline-color: red
}





</style>
        DefaultButton