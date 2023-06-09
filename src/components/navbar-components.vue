<template>
  <MDBNavbar class="sticky-top mb-3" light bg="white" expand="lg" container >
    <router-link to="/"><MDBNavbarBrand ><img  style="width: 60%; height: 60%; border-bottom: none;" src="../assets/Navbar/Logo.png" alt=""></MDBNavbarBrand></router-link>
    <MDBNavbarToggler
      target="#navbarNav"
      @click="() => collapse2 = !collapse2"
    ></MDBNavbarToggler>
    <MDBCollapse  id="navbarNav" v-model="collapse2">
  <MDBNavbarNav style="list-style: none;  width: 100%; margin-right: 2rem; " class="d-lg-flex  justify-content-lg-end custom-font-size">
    <router-link @click="ScrollUp"  to="/" class="mx-3 mt-2 custom-border-md-top hover" active-class="active" style="text-decoration: none;"><MDBNavbarItem>Home</MDBNavbarItem></router-link>
    <router-link @click="ScrollUp" to="/Work&Education" class="mx-3 mt-2 custom-border-md-top hover" style="text-decoration: none;">           <MDBNavbarItem>Work&Education </MDBNavbarItem></router-link>
    <router-link @click="ScrollUp" to="/Skills" class="mx-3 mt-2 custom-border-md-top hover" style="text-decoration: none;">           <MDBNavbarItem>Skills</MDBNavbarItem></router-link>
    <router-link @click="ScrollUp" to="/Opinions" disabled class="mx-3 mt-2 custom-border-md-top hover" style="text-decoration: none;">  <MDBNavbarItem>Opinions </MDBNavbarItem></router-link>
    <router-link @click="ScrollUp" to="/Contact" disabled class="mx-3 mt-2 custom-border-md-top hover " style="text-decoration: none;"> <MDBNavbarItem>Contact </MDBNavbarItem></router-link>
    
  </MDBNavbarNav>
</MDBCollapse>
  </MDBNavbar>
</template>4
<script>
  import {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    
    MDBNavbarItem,
    MDBCollapse,
  } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';

  export default {
    components: {
      MDBNavbar,
      MDBNavbarToggler,
      MDBNavbarBrand,
      MDBNavbarItem,
      MDBCollapse,
    },

    data(){

      return{
        windowWidth: 0,
        collapse2: ref(false)
      }
    },


    mounted(){
      window.addEventListener('resize', this.HiddenMenu)
    },


    methods:{
      ScrollUp(){
      this.windowWidth = window.innerWidth
      document.documentElement.scrollTop = 0

      if(this.windowWidth <= 911){
        this.collapse2 = !this.collapse2
      }
    },
    
    
    
   


    }
  };
</script>
<style lang="scss" scoped>
@import "../styles.scss";

.exact-active-link {
    color: $secondary-global-color;
    
    
}
.custom-font-size {
    font-size: 24px
  }

 .hover:hover {
    color: $primary-global-color;
    cursor: pointer; 
    transition: 0.3s ease-in;
    transform: scale(1.1);
  
  }
@media (max-width: 918px) {

  
  .custom-border-md-top {
    

    text-align: center;
  }

  .custom-font-size {
    font-size: 18px
  }
}

</style>