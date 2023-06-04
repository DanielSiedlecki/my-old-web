<template>
  

    <div class="card ms-3" style="width: 16rem; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); ">
      <ul class="list-group list-group-light list-group-small mr-3">

        <li class="list-group-item px-3 " v-html="starlist" style="font-size: 2.5vh;" ></li>


        <li class="list-group-item px-3 " style="border: none;"> <span style="font-weight: 500;" class="d-flex justify-content-start align-items-center">{{skill_name}}
          <i  class="ms-2 my-icon " :class="icon"></i></span></li>
        <li class="list-group-item px-3" style="bottom: 18%; font-size: 15px; background-color: transparent;">{{skill_level}}</li>
      </ul>
    </div>
    
    
    </template>
    
    <script>




    
    
    
    export default {
      props:{ 
        number: {
          type: Number,
          required: true
        },
        icon:{
          type: String,
          required: true
        },
        skill_name:{
          type: String,
          default: "Default"
        },
        skill_level:{
          type: String,
          default: "Default"
        },
    
    
      },
    
      data() {
        return {
          starTableFill: [],
          starlist: '',
          x: 0,
          

        };
      },
      mounted() {
        this.StarAdd({ number: this.number });
        
      },

      
        

        
      
      methods: {
        StarAdd(props) {
          this.x = 0; 
    
          for (this.x; this.x < props.number; this.x++) {
            this.starTableFill.push('<i style="color: #327CE5" class="fas fa-star"></i>');
          }
    
          const remainingSlots = 5 - this.starTableFill.length;
          const elementsToAdd = Math.min(remainingSlots, 5);
    
          if (remainingSlots === 0) {
            console.log("Tablica jest pełna");
            return;
          }
    
          for (this.x = 0; this.x < elementsToAdd; this.x++) {
            this.starTableFill.push('<i style="color: #327CE5" class="far fa-star"></i>');
            
          }
          this.starlist = this.starTableFill.join('');
          return this.starlist;
        },
      },
    };
    </script>
    
    <style scoped lang="scss">
    @import '../../styles.scss';

 
   
    .my-icon{ 
      
      
      display: inline-block;
      width: 2vw;
      height: 2vw;
      
    }
    
    @media only screen and (max-width:1300px){
    
    .my-icon{
      width: 5vw;
      height: 5vw;
    
    
    }
    }
    @media only screen and (max-width:650px){
    
    .my-icon{
      width: 10vw;
      height: 10vw;
    
    
    }
    }



    //icon_list
    .my-icon-node {background: url(../../assets/SkillsIcon/icons8-node-js-32.png) no-repeat;transform: scale(0.8);}
    .my-icon-angular {background: url(../../assets/SkillsIcon/icons8-angular-32.png) no-repeat;transform: scale(0.8);}
    .my-icon-js {background: url(../../assets/SkillsIcon/icons8-javascript-32.png) no-repeat;transform: scale(0.8);}
    .my-icon-ts {background: url(../../assets/SkillsIcon/icons8-typescript-32.png) no-repeat;transform: scale(0.8);}
    .my-icon-vue {background: url(../../assets/SkillsIcon/icons8-vue-js-32.png) no-repeat;transform: scale(0.8);}
    .my-icon-html {background: url(../../assets/SkillsIcon/icons8-html-32.png) no-repeat;transform: scale(0.8);}
    .my-icon-css {background: url(../../assets/SkillsIcon/icons8-css-32.png) no-repeat;transform: scale(0.8);}
    .my-icon-python {background: url(../../assets/SkillsIcon/icons8-python-32.png) no-repeat;transform: scale(0.8);}
    .my-icon-git {background: url(../../assets/SkillsIcon/icons8-git-32.png) no-repeat;transform: scale(0.8);}
    .my-icon-figma {background: url(../../assets/SkillsIcon/icons8-figma-32.png) no-repeat;transform: scale(0.8);}
    .my-icon-adobe-photoshop {background: url(../../assets/SkillsIcon/icons8-adobe-photoshop-32.png) no-repeat;transform: scale(0.8);}
    .my-icon-microsoft {background: url(../../assets/SkillsIcon/icons8-microsoft-32.png) no-repeat;transform: scale(0.8);}

    </style>