<template>
    
    <ul>
        <li>{{name}}</li>
        <li>{{email}}</li>
        <li>{{descripition}}</li>
    </ul>



</template>


<script>
export default{
    props: {
       
            name:{
                type:String,
                
            },
            email:{
                type:String,
                
            },
            descripition:{
                type:String,
                
            },
        
    },
}
</script>