<template>
<form @submit.prevent="regsiterIn">
    <input type="text" ref="coachNameInput" placeholder="name"/>
    <input type="email" ref="coachEmailInput" placeholder="email"/>
    <input type="text" ref="coachInfoInput" placeholder="descripition"/>
    

    <button type="submit" >Register</button>
</form>
</template>

<script>
export default{
    inject:['addnewCoach'],
methods: {
    regsiterIn() {
        const CName = this.$refs.coachNameInput.value;
        const CEmail = this.$refs.coachEmailInput.value;
        const CDescripition = this.$refs.coachInfoInput.value;
        this.addnewCoach(CName,CEmail,CDescripition);   
    }
}
}
</script>