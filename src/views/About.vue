<template>
  <div class="about">

    {{this.$route.query.msg}}



  </div>
 
</template>

<script >

export default({
  props:{
       msg:{
         type:Number,
       },
     },

})
</script>


<style >
.about{
    margin: 0;
}
</style>