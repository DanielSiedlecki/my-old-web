<template>
  <MDBNavbar light bg="light" expand="lg" container>
    <MDBNavbarBrand href="#" ><img  style="width: 50%; height: 50%;" src="../assets/Logo_NavBarv2.svg" alt=""></MDBNavbarBrand>
    <MDBNavbarToggler
      target="#navbarNav"
      @click="collapse2 = !collapse2"
    ></MDBNavbarToggler>
    <MDBCollapse  id="navbarNav" v-model="collapse2">
  <MDBNavbarNav style="list-style: none; width: 100%; margin-right: 2rem; " class="d-lg-flex  justify-content-lg-end custom-font-size">
    <MDBNavbarItem to="#" active class="mx-3 mt-2 custom-border-md-top hover"  > Example </MDBNavbarItem>
    <MDBNavbarItem to="#" class="mx-3 mt-2 custom-border-md-top hover">         Example </MDBNavbarItem>
    <MDBNavbarItem to="#" class="mx-3 mt-2 custom-border-md-top hover">         Example</MDBNavbarItem>
    <MDBNavbarItem to="#" disabled class="mx-3 mt-2 custom-border-md-top hover">Example </MDBNavbarItem>
    <MDBNavbarItem to="#" disabled class="mx-3 mt-2 custom-border-md-top hover ">Example </MDBNavbarItem>
    
  </MDBNavbarNav>
</MDBCollapse>
  </MDBNavbar>
</template>

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
    setup() {
      const collapse2 = ref(false);
      return { collapse2 };
    },
  };
</script>
<style lang="scss" scoped>
@import "../styles.scss";
.custom-font-size {
    font-size: 28px
  }

 .hover:hover {
    color: $blue-global-color;
    cursor: pointer;
  
  }
@media (max-width: 918px) {

  
  .custom-border-md-top {
    

    text-align: center;
  }

  .custom-font-size {
    font-size: 24px
  }
}

</style>