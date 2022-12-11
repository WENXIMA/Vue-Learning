<template>
    
    <ul>
        <li>{{name}}</li>
        <li>{{email}}</li>
        <li>{{descripition}}</li>
        <li>{{coachtype}}</li>
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
            coachtype:{
                type:String
            },
        
    },
}
</script>