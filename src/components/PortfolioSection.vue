<template>
  

  <div class="container mx-auto " style="margin-top:10vh; min-height: 100vh;">

    
    <page-header >Portfolio</page-header>
    <div class="row " >
   <div class="col-12 d-flex">
    
    <div class="row">
    <div class="col-md-4 col-sm-12  " v-for="card in Cards" :key="card">
      <portoflio-card class="mb-5" :src="card.src" :href="card.href">
        <template #header> {{ card.header }} </template>
        <template #Backend> {{ card.backend }}</template>
        <template #Frontend> {{ card.frontend }}</template>
        <template #Database> {{ card.database }}</template>
        <template #description> {{ card.description }}</template>
        <template #status> {{ card.status }}</template>
      </portoflio-card>
    </div>
  </div>
</div>

  </div>





    
  </div>
</template>

<script>


import PageHeader from './Elements/PageHeader.vue'
import PortoflioCard from './Elements/PortoflioCard.vue'
export default {
  components: { PageHeader, PortoflioCard },

  data(){
    return {
      Cards: [
            {id:1, header: 'daniel-siedlecki.pl', src: require('../assets/Portfolio/web1.png'), href:'https://daniel-siedlecki.pl/', description: "This is web app, representing my person and my skills, with the possibility of giving me your opinion and contacty form (SendGrid). It will appear soon tab with my blog." ,backend: 'Node.js', frontend: 'Vue.js', database: 'MySql', status:'Visit'},
            {id:2, header: 'adam-skakowski.pl', src: require('../assets/Portfolio/web2.png'), href: 'https://adam-skakowski.netlify.app/', frontend: 'Vue.js', description: '', status: 'Visit'},
            {id:3, header: 'Live Chat app', src: require('../assets/Portfolio/inBuilding.png'), frontend: 'Angular', Backend: 'Node.js', status: 'In soon'},
            {id:4, header: 'Concierge system', src: require('../assets/Portfolio/web3.png'), href: 'https://adam-skakowski.netlify.app/', frontend: 'Vue.js', backend: 'Node.js', status: 'Check'},
                      ]
    }
  }

}


</script>

<style>

</style>