<template>
    <div style="max-width: 26rem;">
        <p style="text-align: center;">daniel-siedlecki.pl</p>

  <div class="row">      
    <div class="col-12">
  <div class="card" style="width: 26rem;">
  
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.

    </p>
    <div class="status">

        <p class="d-flex justify-content-center align-items-center">VISIT</p>
    </div>


  </div>

</div>
<div class="col-12 d-flex justify-content-end " >
    <Button :class="{'d-none' : VisibilityMoreInfo}" @click="() => VisibilityMoreInfo = true">Show  More <i class="fas fa-angle-down"></i></Button>
</div>
</div>
</div>


<div v-show="VisibilityMoreInfo" class="InfoContainer animate__animated  animate__fadeInDown ">
    <div class="row">
    <div class="Information d-flex justify-content-center">
        <div class="">Technologies Used:</div>

    </div>
    <div class="line mx-auto"></div>
    

    <div class="desctiption">
        
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        
    </div>
    <div class="col-12 d-flex justify-content-end " >
    <Button @click="() => VisibilityMoreInfo = false">Hide <i class="fas fa-angle-up"></i></Button>
</div>
</div>

</div>

</div>


</template>

<script>
export default {

    data(){
        return{
            VisibilityMoreInfo: false,
        }
    }

}
</script>

<style lang="scss" scoped>
@import '../../styles.scss';
.status {
    
    width: 100%;
    height: 5vh;
    background-color: transparent;
    position: absolute;
    left: 0;
    bottom: 0;
}

.status:hover{
    background-color: black;
}

.InfoContainer{
    background-color: black;
}

.line {
    width: 60%;
    height: 2px;
    background-color: white;

}

button {
    border: none;
    background-color: transparent;
    color: $primary-global-color;
    font-size: 1vw;
}
</style>