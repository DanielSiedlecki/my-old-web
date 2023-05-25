<template>
   <div class="TimeLine">
     <p>
      <slot  name="data_start"></slot>
       <br/>
       <slot name="data_divider"> </slot>
        <br/>
      <slot name="data_end"></slot>
     </p>
     <div class="object">
       <div class="circle" :style="`background-color: ${circleColor}`"></div>
       <div class="line"></div>
     </div>
   </div>
 </template>
 <script>
 export default {
  props: {
    circleColor: {
      type: String,
      default: 'black'
    }

  }


 };



 </script>
 
 <style lang="scss" scoped>
@import '../styles.scss';

 .object {
   
   transform: scale(0.75);
 }
 
 .circle {
   background-color: black;
   width: 10vw;
   height: 10vw;
   border-radius: 50%;
 }
 
 .line {
   width: 1vw;
   height: 56vh;
   left: 40%;
   top: -10%;
 
   transform: translateX(50%);
   background-color: black;
   position: absolute;
 }
 .TimeLine {
   display: flex;
   
 }
 p {
   
   display:flex;
   align-items: center;
   text-align: center;
   
   font-size: 0.8vw;
   font-weight: 600;
}


 </style>