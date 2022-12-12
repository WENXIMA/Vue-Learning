<template>
    
    <ul>
        <li><h3>{{name}}</h3></li>
        <li>{{email}}</li>
        <li>{{hourlyRate}}</li>
        <li>{{description}}</li>
        <li>{{areas}}</li>
    </ul>



</template>


<script>
export default{
    props: ['name','email','hourlyRate','description','areas']
}
</script>