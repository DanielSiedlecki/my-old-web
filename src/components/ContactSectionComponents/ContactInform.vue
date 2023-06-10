<template>
<div class="container-fluid custom-container">

  <div class="row ">
    <div class="col-12 mt-md-4 mt-sm-2 mb-2">
      <span class="d-flex justify-content-start  align-items-center "><img src="../../assets/icons/Contact/telephone-fill.png"><p class="ms-md-5 ms-sm-2 mt-3"  style="white-space:nowrap;">+48 534 166 602</p></span>

    </div>
    <div class="col-12 mt-md-4 mt-sm-2 mb-2">
      <span class="d-flex justify-content-start  align-items-center "><img class="border" src="../../assets/icons/Contact/Mail-Fill.png"><p class="ms-md-5 ms-sm-2 mt-3">siedleckidaniel2001@gmail.com</p></span>


    </div>
    <div class="col-12 mt-md-4 mt-sm-2">
      <span class="d-flex justify-content-start  align-items-center " ><img  src="../../assets/icons/Contact/pin-location.png"><p class="ms-md-5 ms-sm-2 mt-3">Poland, Wroclaw</p></span>

    </div>


  </div>

  <div class="line mx-auto d-flex justify-content-center mt-4"></div>

  <div class="row  ">
    <div class="col-12 d-flex justify-content-center align-items-center mt-2">
      <a href="https://github.com/DanielSiedlecki"> <img style="width: 32px; height: 32px; " class="me-2 ms-2 img-hover" src="../../assets/icons/Contact/github.svg"></a>
        <a href="https://www.facebook.com/daniel.siedlecki2001/"> <img style="width: 32px; height: 32px;" class="me-2  ms-2 img-hover" src="../../assets/icons/Contact/facebook.svg"></a>
      <a href="https://www.linkedin.com/in/daniel-siedlecki-6b2308263/"><img style="width: 32px; height: 32px;" class="me-2  ms-2 img-hover" src="../../assets/icons/Contact/linkedin.svg"></a>
    </div>
   

 
  </div>

  
</div>
</template>

<script>



export default {
    components: { }
}
</script>

<style lang="scss" scoped>

@import '../../styles.scss';

p {

  font-size: 28px
  
}

@media screen and (max-width: 576px) {
  p{font-size: 18px;
    margin-top: 10%;
    
  }

  img {
    transform: scale(0.7);
    
    
    
  }
  .custom-container{
    min-width: 90vw;
  }
}

img {
  width: 64px;
  height: 64px;
  
}

.img-hover:hover {
  transform: scale(1.2);
  cursor: pointer;
  transition: 0.3s ease-in;
}

.line {
  width: 80%;
  height: 1px;
  
  border: 1px solid black;
  border-radius: 200px;
}
</style>