



  <template>
    <div class="mt-5 mb-5 "><h1 class="header_name" style="text-align: center;"><slot> </slot></h1></div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped lang="scss">

@import '../../styles.scss';
.header_name {
    text-align: center;
    position: relative;
    font-size: 3.5vh; 
  }
.header_name::after {
    content: ''; 
    position: absolute; 
    bottom: -20%; 
    left: 50%; 
    
    transform: translateX(-50%); 
    width: 10vw; 
    height: 4px; 
    background-color:  $blue-global-color;
    
  }
  </style>