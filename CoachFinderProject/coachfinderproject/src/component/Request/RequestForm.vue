<template>
  <form @submit.prevent="submitForm" class="card d-flex justify-content-center">
    <div class="card-body align-self-center">
      <p class="error" v-if="!validation">Please check your input and try again!</p>
      <label for="from">From:</label>
      <input  type="email" id="from" v-model.trim="from" placeholder="coach email" />
    </div>
    <div class="card-body align-self-center">
      <label for="to">to:</label>
      <input  type="email" id="to" v-model.trim="to" placeholder="your email" />
    </div>
    <div class="card-body align-self-center">
      <label for="title">title:</label>
      <input  id="title" rows="5" v-model.trim="title" placeholder="title" />
    </div>
    <div class="card-body align-self-center">
      <label for="message">message:</label>
      <textarea  id="message" v-model.trim="message" placeholder="Type in here ...."/>
    </div>
    <button class="btn btn-warn w-100" type="submit" >Send</button>
  </form>
</template>


<script>
export default {
  emits: ['save-request'],
  data() {
    return {
      from: '',
      to: '',
      title: '',
      message: '',
      validation:true,
      
    }
  },
  methods: {
    submitForm() {
      this.validation = true;
      if(this.from ==='' || this.message==='' || this.to==='' || this.title===''){
        this.validation=false;
        return;
      }
      const formData = {
        from: this.from,
        to: this.to,
        title: this.title,
        message: this.message,

      };
      this.$emit('save-request', formData); // send data from this component to CoachFrom component
      console.log(formData);
    }
  }
}

</script>

<style scoped>
.card{

  background-color: transparent;
}
input,textarea{
  background-color: transparent;
}
.btn{
  width: 50%;
  background-color:rgba(201, 125, 12, 0.459)
}

.error{
  color:red;
}
</style>