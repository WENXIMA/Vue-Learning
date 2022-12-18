<template>
    <div class="card w-100 d-flex justify-content-center m-4" style="width: 18rem;">
  <div class="card-body align-self-center ">
    <h3 class="card-title">{{name}}</h3>
    <ul>
        <li class="card-text">${{hourlyRate}}/hour</li>
        <li class="card-text">{{description}}</li>
        <li class="card-text">{{areas}}</li>
    </ul>
      <router-link :to="coachDetailsLink">View Details</router-link>
  </div>
</div>




</template>


<script>
export default{
    props: ['name','email','hourlyRate','description','areas','id'],
    computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    coachDetailsLink() {
      return this.$route.path + '/' + this.id; // /coaches/c1
    },
  },
}
</script>

