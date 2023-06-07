<template>
  <div class=" mt-3 container-fluid custom-container d-flex align-items-center justify-content-center">
    
    <div class="row mt-2">
        
   
        <div class="col-12">
        

    <div class="row   d-flex justify-content-center mt-3">
        <div class="col-12 d-flex  flex-column flex-md-row justify-content-center  d-flex align-items-center  ">
            

          <div class="col-6 d-flex justify-content-md-end justify-content-center me-md-3 ">     
           <a href="mailto:siedleckidaniel2001@gmail.com" ><img class="pe-3" src="../assets/icons/SocialMediaFooter/Mail.svg" alt="Mail"> </a>
            <a href="https://github.com/DanielSiedlecki"> <img src="../assets/icons/SocialMediaFooter/Github.svg" alt="GitHub" ></a>
        </div> 

        <div class="col-6 d-flex  justify-content-md-start justify-content-center mt-2">
            <a href="https://www.linkedin.com/in/daniel-siedlecki-6b2308263/"><img class="pe-3" src="../assets/icons/SocialMediaFooter/Linkedin.svg" alt="Linkedin"></a>
            <img @click="()=>VisibilityIcon = !VisibilityIcon" v-show="VisibilityIcon" src="../assets/icons/SocialMediaFooter/Telephone.svg" alt="Telephone">

            <div @click="()=>VisibilityIcon = !VisibilityIcon" v-show="!VisibilityIcon" class="telephoneNumber "><h1 class=" mt-2">+48 534 166 602</h1></div>
        
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

.custom-container{ 
    
    background-color: $secondary-global-color;
    min-height: 100%;
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
        animation: flipInX;
        animation-duration: 0.6s; 
        
        
        h1 {
            
            color: $primary-global-color;
            font-size: 18px;
            
            
        }

        
        @media screen and (max-width: 780px) { 
            h1 { 
            font-size: 10px
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