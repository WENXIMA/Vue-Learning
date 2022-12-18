
<template>
  <div class="card d-flex justify-content-center">
    <div class="card-body align-self-center">
    <form @submit.prevent="submitForm">
      <p v-if="!Validation" class="error">Please check your input and try again later!</p>
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
        
      submitForm() {
        if(this.name==='' || this.email===''||this.description===''||this.areas===''||this.hourlyRate===''){
          this.Validation=false;
          return;
        }
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
  form {
    margin: 1rem;
    padding: 1rem;
  }
  
  .form-control {
    margin: 0.5rem 0;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }
  
  input,
  textarea {
    background-color: transparent;
    border-color:black;
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.15rem;
  }
  
  input:focus,
  textarea:focus {
    border-color: black;
    background-color: #E5BA73;
    outline: none;
  }
  .error{
  color:red
}
.btn{
  color:black
}
  </style>
  