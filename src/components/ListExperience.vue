<template>
<page-header >Course and Training</page-header>
<ul>
    <li ><i class="fas fa-check"></i><slot name="first_slot"></slot></li>
    <li ><i class="fas fa-check"></i><slot name="second_slot"></slot></li>
    <li ><i class="fas fa-check"></i><slot name="third_slot"></slot></li>
    <li ><i class="fas fa-check"></i><slot name="fourth_slot"></slot></li>
    





</ul>


</template>


<script>
import PageHeader from './PageHeader.vue'

export default {
  components: { PageHeader },




}

</script>

<style scoped lang="scss">
li {
    list-style: none;
}

</style>