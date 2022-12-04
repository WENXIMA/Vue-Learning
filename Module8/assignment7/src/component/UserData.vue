<template>
   <form @submit.prevent=""> 
    <!-- create input field -->
    <div>
        <input placeholder="name" v-model="InputName" type="String"/>
    </div>
    <div>
        <input placeholder="age" v-model="InputAge" type="Int"/>
    </div>
    <button @click="addUser">Submit</button>

   </form>
   </template>
   
   <script>
   export default{
    // emit add method
    emit:['add-user'],
    data() {
        return {
            InputName:"",
            InputAge:""
        }
    },
    methods: {
        addUser(){
            this.$emit('add-user',this.InputName,this.InputAge);
        }
    },
   }
   </script>