<template>
    <div>
        <p style="text-align: center; width: 100%;"><slot name="header"></slot></p>

  <div class="row container">      
    <div class="col-12">

        
  <div class="card" style="min-width: 100%; z-index: 999;">
  
  <div class="card-body">
    <p class="card-text">
        <img :src="src" style="width: 100%; height: 100%;">
    </p>
    <a :href=href> <div class="status border ">
             
            <p ><slot name="status">In Progress</slot></p>
        

    </div>
</a>
  </div>


</div>
<div class="col-12 d-flex justify-content-end " >
    <Button :class="{'d-none' : VisibilityMoreInfo}" @click="() => VisibilityMoreInfo = true">Show  More <i class="fas fa-angle-down"></i></Button>
</div>
</div>
</div>


<div v-show="VisibilityMoreInfo" style="min-width: 100%;" class=" row container animate__animated  animate__fadeInDown">
    <div class="col-12">

        
<div class="" style="min-width: 100%; z-index: 999;">
<div class="Technology">

        <p style="font-weight: 600;">Used Technology:</p>

        <div><p>Backend: <slot name="Backend">None</slot> <br>
            Frontend: <slot name="Frontend">None</slot> <br>
            Database: <slot name="Database">None</slot> <br>
        </p>
            <p></p>
            <p></p>
            <p></p>
        </div>
</div>

    
    <div class="description">
        <p>
            <slot name="description"></slot>

        </p>

    
  </div>
  <div class="col-12 d-flex justify-content-end " >
    <Button @click="() => VisibilityMoreInfo = false">Hide <i class="fas fa-angle-up"></i></Button>
</div>
</div>

</div>
</div>

</div>


</template>

<script>


export default {
    props:{

        src:{
            type:String
        },
        href:{
            type:String,
            default: 'https://www.google.com'
        }
    },

    mounted(){
      
    },
    data(){
        return{
            VisibilityMoreInfo: false,
            ClassHideUp: false,

            
        }
    },
    

}
</script>

<style lang="scss" scoped>
@import '../../styles.scss';
.status {
    
    width: 105%;
    height: 30%;
    background-color: $primary-global-color;
    position: absolute;
    border-radius: 5px;
    left: 0;
    bottom: 0;
    transform: translateX(-2.5%);
    
   
    

    p {
        text-align: center;
        font-size: 26px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        color: white;
        
    }


}


.status:hover{
    background-color: $secondary-global-color
}

.InfoContainer{
    background-color: white
}

.line {
    width: 60%;
    height: 2px;
    background-color: black

}

button {
    border: none;
    background-color: transparent;
    color: $primary-global-color;
    font-size: 16px;
}
</style>