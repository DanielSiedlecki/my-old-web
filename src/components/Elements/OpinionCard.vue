<template>
<div class="card" style="width: 18rem;">
  <div class="card-body">

    <div class="row ">
        <div class="col-8 mt-1">
        <h5 class="card-title" >{{ title }}</h5> 


    </div>
    <div class="col-4">
        <img src="../../assets/wonder-women.png" alt="">
    </div>
    </div>
    <p class="card-text">{{ text }}</p>
    
    <div style="width: 100%;" class="d-flex justify-content-end">
    <a href="#" @click=" HoverLikeDown " class="card-link"><i :class="hoverLikeDown ? 'fas fa-thumbs-down' : 'far fa-thumbs-down'"></i></a>
    <a href="#" @click=" HoverLikeUp " class="card-link"><i :class="hoverLikeUp ? 'fas fa-thumbs-up' : 'far fa-thumbs-up'"></i></a>
    
    </div>
    
    
  </div>
</div>  
</template>

<script>
export default {
    props:{
        title: {
            type: String

        },
        text: {
            type: String
        }


    },
    data(){return {
        hoverLikeUp: false,
        hoverLikeDown: false
    }},

    methods:{

        HoverLikeUp(){

            this.hoverLikeUp = !this.hoverLikeUp
            this.hoverLikeDown = false
        },
        HoverLikeDown(){
            this.hoverLikeDown = !this.hoverLikeDown
            this.hoverLikeUp = false
        }


    }



    

}
</script>

<style>

img {

    height: 32px;
}

</style>