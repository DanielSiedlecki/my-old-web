<template>
  <div class="animate__animated animate__fadeIn ">
  <education-section style="position-relative"/>
  <work-section style="position-relative" />
</div>
</template>

<script>
import EducationSection from "./Work&EducationComponents/EducationSection.vue"
import WorkSection from "./Work&EducationComponents/WorkSection.vue"

export default {
  components: { EducationSection, WorkSection },

}
</script>

<style>

</style>