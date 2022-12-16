<!-- <template>

   <div>
   <p>log in page</p>
   <router-link to="/userregister">Register</router-link>
   </div>
   <div class="card">
    <form submit.prevent="submitForm">
        <p v-if="!validation">Please check your input, password has to contain at least 6 character</p>
        <div class="card-body">
            <label for="email">Email Address: </label>
            <input type="email" id="email" v-model.trim="email"/>
        </div>
        <div class="card-body">
            <label for="password">Password: </label>
            <input type="password" id="password" v-model.trim="password"/>
        </div>
        <button type="submit">{{submitButtonCaption}}</button>
        <button type="button" mode="flat" @click="switchmode">{{switchmodeCaption}} </button>
    </form>
   </div>
</template>

<script>
export default{
    data() {
        return {
            email:'',
            password:'',
            validation:true,
            model:'login'
        }
    },
    computed:{
        submitButtonCaption(){
            if(this.mode==='login'){
                return 'Login';
            }else{
                return 'SignUp';
            }
        },
        switchmodeCaption(){
            if(this.mode==='register'){
                return 'signUp';
            }else{
                return 'login';
            }
        }

    },
    methods: {
        submitForm(){
            if(this.email === '' || !this.email.includes('@')||this.password.length<6){
                this.validation=false;
                return;
            }
        },
        switchmode(){
            if(this.mode==='login'){
                this.mode='signup';
            }else{
                this.mode='login';
            }
        }
    },
}
</script>

<style scoped>
.card{
    border-style: none;
    background-color: transparent;
}
input{
    background-color: transparent;
}
</style> -->
<template>
    <div class="card">
      <form @submit.prevent="submitForm">
        <div class="card-body">
          <label for="email">E-Mail</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="card-body">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <p
          v-if="!formIsValid"
        >Please enter a valid email and password (must be at least 6 characters long).</p>
        <button>{{ submitButtonCaption }}</button>
        <button type="button" mode="flat" @click="switchAuthMode">{{ switchModeButtonCaption }}</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        formIsValid: true,
        mode: 'login',
      };
    },
    computed: {
      submitButtonCaption() {
        if (this.mode === 'login') {
          return 'Login';
        } else {
          return 'Signup';
        }
      },
      switchModeButtonCaption() {
        if (this.mode === 'login') {
          return 'Signup instead';
        } else {
          return 'Login instead';
        }
      },
    },
    methods: {
      submitForm() {
        this.formIsValid = true;
        if (
          this.email === '' ||
          !this.email.includes('@') ||
          this.password.length < 6
        ) {
          this.formIsValid = false;
          return;
        }
        try{
            if (this.mode === 'login') {
           this.$store.dispatch('login',{
            email:this.email,
            password:this.password
          })
          this.$router.push('/')
        } else {
          this.$store.dispatch('signup', {
            email: this.email,
            password: this.password,
          });
        } 
        }catch(err){
            this.error = err.message || 'Failed to auth'
        }
        
      },
      switchAuthMode() {
        if (this.mode === 'login') {
          this.mode = 'signup';
        } else {
          this.mode = 'login';
        }
      },
    },
  };
  </script>
  
  <style scoped>
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
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.15rem;
  }
  
  input:focus,
  textarea:focus {
    border-color: #3d008d;
    background-color: #faf6ff;
    outline: none;
  }
  </style>