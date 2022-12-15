
<template>
  <!-- <div class="form-group row"> 
   <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
   <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail" placeholder="Email">
   </div>
</div> -->
  <div class="card d-flex justify-content-center">
    <div class="card-body align-self-center">
    <form @submit.prevent="submitForm">
      <div class="card-body align-self-center">
        <label for="name">Name</label>
        <input type="text" id="name" v-model.trim="name" />
      </div>
      <div class="card-body align-self-center">
        <label for="email">Email</label>
        <input type="text" id="email" v-model.trim="email" />
      </div>
      <div class="card-body align-self-center">
        <label for="description">Description</label>
        <textarea id="description" rows="5" v-model.trim="description"></textarea>
      </div>
      <div class="card-body align-self-center">
        <label for="hourlyRate">Hourly Rate</label>
        <input type="number" id="hourlyRate" v-model.number="hourlyRate" />
      </div>
      <div class="card-body align-self-center">
        <h3>Areas of Expertise</h3>
        <div>
          <input type="checkbox" id="FrontEnd" value="FrontEnd" v-model="areas" />
          <label for="FrontEnd">Frontend Development</label>
        </div>
        <div>
          <input type="checkbox" id="BackEnd" value="BackEnd" v-model="areas" />
          <label for="BackEnd">Backend Development</label>
        </div>
        <div>
          <input type="checkbox" id="FullStack" value="FullStack" v-model="areas" />
          <label for="FullStack">FullStack Development</label>
        </div>
      </div>
      <div class="btns">
        <button class="btn btn-outline-warning" type="submit">Register</button>

      </div>
    </form>
  </div>
  </div>
    
  </template>
  
  <script>
  export default {
    emits:['save-coach'], //set up the emit to passing data to parent component
    data() {
      return {
        name: '',
        email: '',
        description: '',
        hourlyRate: null,
        areas: [],
        Validation:true,
      };
    },
    methods: {
        ValidateForm() {
            
        },
      submitForm() {
        const formData = {
            name: this.name,
            email: this.email,
            description: this.description,
            hourlyRate: this.hourlyRate,
          areas: this.areas
        };
        this.$emit('save-coach',formData); // send data from this component to CoachFrom component
        console.log(formData);
      }
    }
  };
  </script>

  <style scoped>
.card{
  background-color: transparent;
}
input,textarea{
  background-color: transparent;
  text-align: center;

}
.btn{
  color:black;

}
.btns{
  text-align: center;

}
</style>
  