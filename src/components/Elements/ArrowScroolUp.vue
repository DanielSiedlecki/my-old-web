<template>

<button @click="scrollUp" v-show="!isVisible" :class="isVisible ? 'buttonHide' : 'buttonVisible'"><i class="fas fa-angle-up ButtonVisible" ></i></button>

</template>

<script>
import { ScrollToTop } from '@/Scripts/ScrollToTop'
export default {

mounted(){window.addEventListener("scroll", this.checkVisibility)},

methods:{checkVisibility(){
    if(window.scrollY >= 200) { 
        
        this.isVisible = false
        return this.isVisible
    }else {
        this.isVisible = true
        return this.isVisible
    }



}, 

scrollUp(){

   ScrollToTop()
}
   
    
    
},
data(){ return {
   isVisible: true

}},


}
</script>

<style scoped lang="scss">
@import '../../styles.scss';

.buttonVisible {
   
    background-color: $primary-global-color;
    border: none;
    border-radius: 30%;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    opacity: 1;

    i { color: white;
    font-size: 40px}

}
.buttonHide {
    opacity: 0;
    

}




</style>