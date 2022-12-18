<template>
  <div class="card">
    <form @submit.prevent="login">
      <div class="card-body">
        <label for="email">Email Address: </label>
        <input type="email" id="email" v-model.trim="login_form.email" />
      </div>
      <div class="card-body">
        <label for="password">Password: </label>
        <input type="password" id="password" v-model.trim="login_form.password" />
      </div>
      <button mode="flat" class="btn btn-outline-warning" type="submit" value="Login">Login</button>
      <router-link to="userregister" class="lin">Register Now</router-link>
    </form>
  </div>
</template>
  
<script>
import {ref} from 'vue';
import "firebase/compat/auth";
import {useStore} from 'vuex';
  export default {
    setup(){
      const login_form = ref({});
      const store = useStore();
      const login = () => {
        store.dispatch('login',login_form.value)
      }
      return{
        login_form,
        login
      }
    },
    data() {
      return {
        formIsValid: true,
        mode:null
      };
    },
  };
  </script>
  
<style scoped>
.card {
  background-color: transparent;
}

form {
  margin: 1rem;
  padding: 1rem;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  background-color: transparent;
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

.btn {
  color: black
}

.lin {
  color: black;
  position: absolute;
  margin-left: 2.5rem;
}

.lin:hover {
  color: #EF9A53
}
</style>