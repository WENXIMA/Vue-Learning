<template>
    <div class="App">
        <!-- set the output value -->
    <h2>{{name}} {{age}}s</h2>

    </div>
    
   </template>
   
   <script>
   export default{
    // Setting the props of necessary variables
    props:{
    name:{Type:String,require:true},
    age:{Type:Number,require:true},
  },
   }
   </script>