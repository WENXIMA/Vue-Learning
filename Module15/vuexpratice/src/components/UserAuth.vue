<template>
  <button @click="login" v-if="!isAuth">Login</button>
  <button @click="logout" v-if="isAuth">Logout</button>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.dispatch('login'); //reference the methods from actions by dispatch
    },
    logout() {
      this.$store.dispatch('logout');
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;//getting the state of isloggedin from getters to determine which buttons
        //needs to display
    }
  }
}
</script>