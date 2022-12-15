<template>
    <section>
        <h2>
            Send a request now
        </h2>
        <RequestForm @save-request="saveRequest"/>
    </section>
</template>

<script>
import RequestForm from './RequestForm.vue';

export default{
    components:{
        RequestForm
    },
    methods: {
        saveRequest(data){
            this.$store.dispatch('requestlist/addRequest', data); // dispatch the action method to add new request
            this.$router.replace('/request'); //move back to request page
        }
    },
}
</script>