<template>
    <div class="card">
        <form @submit.prevent="register">
            <div class="card-body">
                <p v-if="!formIsValid">PLease check your input</p>
                <label for="email">E-Mail:</label>
                <input type="email" id="email" v-model.trim="register_form.email" />
            </div>
            <div class="card-body">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model.trim="register_form.password" />
            </div>

            <button mode="flat" class="btn btn-outline-warning" type="submit" value="Register">Register</button>
            <router-link to="/login" class="lin">Already have an account? Login</router-link>
        </form>
    </div>
</template>

<script>
import {ref} from 'vue';
import "firebase/compat/auth";
import {useStore} from 'vuex';
  export default {
    setup(){
      const register_form = ref({});
      const store = useStore();
      const register = () => {
        store.dispatch('register',register_form.value)
      }
      return{
        register_form,
        register
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
.card{
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
.btn{
    color:black
  }
  .lin{
    color:black;
    position:absolute;
    margin-left:2.5rem;
  }
  .lin:hover{
    color:#EF9A53
  }
</style>