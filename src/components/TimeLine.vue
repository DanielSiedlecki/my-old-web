<template>
  <div style="width: 30%;" class="col-md-4 col-sm-3 circle ">
            
            <CircleLine>
    
               <template #data_start><slot name="data_start"></slot></template>
               <template #data_end><slot name="data_end"></slot></template>
    
            </CircleLine>
              
            </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">

</style>