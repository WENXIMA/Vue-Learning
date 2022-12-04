<template>

 <user-data @add-user="addUsers"></user-data>
 <ul>
  <!-- traverse the whole avaiable user table -->
  <active-user
  v-for="i in user"
  :key="i.name"
  :name="i.name"
  :age="i.age">

  </active-user>
 </ul>

</template>

<script>
export default{
  
  data() {
    return {
      //create empty array to store user data
      user:[]
    }
  },
  methods: {
    //set method to add user to the array and output them
    addUsers(name,age){
      const newUser = {
        name:name,
        age:age,
      };
      this.user.push(newUser);
    }
  },
}

</script>
