<template>
  <TheHeader title="GoodMorning"></TheHeader>
  <TheResource></TheResource>
</template>

<script>
 import TheResource from './component/learning-resources/TheResource.vue';
import TheHeader from './component/Header/TheHeader.vue';

export default{
  components:{
    // LearningResource : LearningResource,
    TheHeader:TheHeader,
    TheResource:TheResource,
  },
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

</style>