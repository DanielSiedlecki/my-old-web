<template>
  <div class=" mt-3 container-fluid custom-container d-flex align-items-center justify-content-center">

    <div class="row mt-2">
        <div class="col-12">
        

    <div class="row   d-flex justify-content-center ">
        <div class="col-12 d-flex flex-column flex-md-row d-flex align-items-center  ">
            

          <div class="col-6 d-flex justify-content-md-end justify-content-center me-md-3 ">     
            <img class="pe-3" src="../assets/SocialMediaIcons/Mail.svg" alt="Mail">
            <img src="../assets/SocialMediaIcons/Github.svg" alt="GitHub">
        </div> 

        <div class="col-6 d-flex  justify-content-md-start justify-content-center mt-2">
            <img class="pe-3" src="../assets/SocialMediaIcons/Linkedin.svg" alt="Linkedin">
            <img @click="()=>VisibilityIcon = !VisibilityIcon" v-show="VisibilityIcon" src="../assets/SocialMediaIcons/Telephone.svg" alt="Telephone">

            <div @click="()=>VisibilityIcon = !VisibilityIcon" v-show="!VisibilityIcon" class="telephoneNumber"><h1 class="mt-2">+48 534 166 602</h1></div>
        
        </div>
        </div>
    </div>

    <div class="col-12 mt-4">
    <p> Copyright by Daniel Siedlecki</p>
    </div>
    </div>
        
        
        



    </div>

    
  </div>
</template>

<script>
export default {

    data(){
        return {
            VisibilityIcon: true
        }
    }

}
</script>

<style lang="scss" scoped>



@import '../styles.scss';
@keyframes slide-right {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(1px);
            transform: translateX(10px);
  }}
.custom-container{ 
    
    background-color: $secondary-global-color;
    min-height: 20vh;
    width: 100%;

    img:hover {
        transform: scale(1.2);
        cursor: pointer;
        transition: 0.3s ease-in;
    }
    
    .telephoneNumber{

        min-width: 100%;
        background-color: white;
        border-radius: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: slide-right 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        
        
        h1 {
            
            color: $primary-global-color;
            font-size: 20px;
            
            
        }

        
        @media screen and (max-width: 780px) { 
            h1 { 
            font-size: 14px
            }
        }
        

        
    }

    
    .telephoneNumber:hover{
        cursor: pointer;
        
        
    }




    p {
    text-align: center;
    color: white;
    font-size: 16px;
    letter-spacing: 1px;
    font-family: 'Roboto';
    font-weight: 200;

}


}







</style>