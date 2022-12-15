<template>
    <div class="card w-100 d-flex justify-content-center m-4" style="width: 18rem;">
  <div class="card-body align-self-center ">
    <h3 class="card-title">{{name}}</h3>
    <ul>
        <li class="card-text">{{email}}</li>
        <li class="card-text">{{hourlyRate}}</li>
        <li class="card-text">{{description}}</li>
        <li class="card-text">{{areas}}</li>
    </ul>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>




</template>


<script>
export default{
    props: ['name','email','hourlyRate','description','areas']
}
</script>

