<template>
    
    <ul>
        <li>{{from}}</li>
        <li>{{to}}</li>
        <li>{{title}}</li>
        <li>{{message}}</li>
    </ul>



</template>


<script>
export default{
    props: {
       
        from:{
                type:String,
                
            },
            to:{
                type:String,
                
            },
            title:{
                type:String,
                
            },
            message:{
                type:String,
                
            },
        
    },
}
</script>