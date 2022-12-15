<template>
    <div class="card w-100 d-flex justify-content-center m-4" style="width: 18rem;">
  <div class="card-body align-self-center ">
    <h3 class="card-title">{{title}}</h3>
    <ul>
        <li class="card-text">{{from}}</li>
        <li class="card-text">{{to}}</li>
        <li class="card-text">{{message}}</li>
    </ul>
    
  </div>
</div>
</template>

<script>
export default{
    props:['from','to','title','message']
}
</script>

<style scoped>
.card{
    background-color: transparent;
    
}
</style>