<template>
    <nav class="navbar navbar-expand-lg navbar-light shadow-0 ">
  <div class="container-fluid mt-4">
    <a class="navbar-brand" href="#">
      <img
        src="../assets/Logo_navBar.svg"
        height="50"
        alt="MDB Logo"
        loading="lazy"
      />
    
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto mb-2 mb-lg-0 fs-5" >
        <a class="nav-link me-2 active" aria-current="page" href="#">Example 1</a>
        <a class="nav-link me-2" href="#">Example 2</a>
        <a class="nav-link me-2" href="#">Example 3</a>
        <a class="nav-link me-2" href="#">Example 4</a>
        <a class="nav-link me-2" href="#">Example 5</a>
        
        
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {

    
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
  .navbar-nav-custom {

    width: 100%;
    
    
  }

</style>