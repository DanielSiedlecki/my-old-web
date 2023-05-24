



  <template>
    <div class="mt-5 mb-5 "><h1 class="header_name" style="text-align: center;"><slot> </slot></h1></div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped lang="scss">

@import '../styles.scss';
.header_name {
    text-align: center;
    position: relative;
    font-size: 3.5vh; /* Ustawienie pozycji dla kontenera */
     /* Ustawienie jako element blokowy */
  }
.header_name::after {
    content: ''; /* Dodanie pustej zawartości do pseudo-elementu */
    position: absolute; /* Ustawienie pozycji dla pseudo-elementu */
    bottom: -20%; /* Przypisanie dolnej krawędzi do dolnej krawędzi kontenera */
    left: 50%; /* Przesunięcie o połowę szerokości kontenera */
    
    transform: translateX(-50%); /* Przesunięcie w lewo o połowę szerokości kontenera */
    width: 10vw; /* Szerokość obramowania */
    height: 4px; /* Wysokość obramowania */
    background-color:  $blue-global-color;
    
  }
  </style>