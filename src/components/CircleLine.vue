<template>
 <div style="display: flex; align-items: flex-start; justify-content: center;">
  <div style="position: relative;">
    <div class="line"></div>
    
    <div  class="" style="display: flex; flex-direction: row;">
    <div class="tekst2 d-lg-flex align-items-lg-center  " style=" text-align: center;"><slot name="data_start"></slot> <br> -<br> <slot name="data_end"></slot></div>
    <i class="fas fa-circle icon " style="bottom: 5vh ; position: relative; margin-top: 100px; color:black "></i>
    
   
  </div>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.icon {
  font-size: 102px;
};
.line {
  height: 50vh;
  position: absolute; top:50%; left: 70%; transform: translateX(-50%);  width: 1vw; background-color: black;
}
@media screen and (max-height: 550px){
.line {
  top: 40%;
  
}
}
@media screen and (max-height: 760px){
.line {
  height: 35vh;
}
}
@media screen and (max-height: 960px){
.line {
  height: 35vh;
}
}
@media screen and (max-width: 992px) {
.tekst1 { display: none;}
.tekst2 { display: none;}

.line {
  position: absolute;left: 50%; transform: translateX(-50%) 
  
}
.icon {
  font-size: 7vw
}

}

</style>