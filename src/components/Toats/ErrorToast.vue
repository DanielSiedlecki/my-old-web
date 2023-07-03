<template>

<div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center">


<div class="toast d-inline toast-custom-position animation" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header toast-custom-color d-flex   ">
    <img src="" class="rounded mr-2" alt="">
    
    <small style="white-space:nowrap;">{{ Timeago }} seconds ago</small>
    <button @click="closeToast()" type="button" class="ml-2 mb-1 w-100 d-flex justify-content-end"  data-dismiss="toast" aria-label="Close">
      <span class=" "><img style="width: 16px; height: 16px; ;" src="../../assets/icons/ToastIcons/Close-Icon.png"></span>


    </button>
  </div>
  <div class="toast-body">
   <slot></slot>
  </div>
</div>
</div>

</template>

<script>


export default {

  data(){
    return{
      Timeago: 0,
      Visibility: true

    }
  },

  mounted(){
   this.Timer()

  },

  methods:{
    Timer(){
      setInterval(() => {
        this.Timeago++
        if(this.Timeago > 10){
          this.$emit('destroyToast', false)
          
        
        }
      }, 1000)
    
  },

  closeToast(){
    this.$emit('destroyToast', false)
  }




  },
}
</script>

<style lang="scss" scoped>

@import '../../styles.scss';

.toast-custom-color {
    background-color: $error-toast-color;
    color: white;
    
    
}

button {
  background-color: transparent;
  border: none;
  float: left;
  
}

.toast-custom-position {
  position: fixed;
    right: 10px;
    bottom: 10px;
    z-index: 99;
}
.animation {
  animation: bounceIn;
  animation-duration: 0.6s; 
}



</style>