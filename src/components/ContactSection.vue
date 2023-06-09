<template>
<div class="container" style="min-height: 90vh;">

<div class="row d-flex justify-content-md-center justify-content-sm-start align-items-center" style="min-height: 80vh;">

    <div class="col-md-6 col-sm-12">

        <contact-form/>
    </div>


    <div class="col-6 col-md-6 col-sm-12 " >
        <contact-inform/>


    </div>


</div>

</div>
</template>

<script>


import ContactForm from './ContactSectionComponents/ContactForm.vue'
import ContactInform from './ContactSectionComponents/ContactInform.vue'


export default {
  components: { ContactInform, ContactForm },
  



}

</script>

<style>

</style>