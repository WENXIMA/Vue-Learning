<template>

    <ul v-if="hasRequest">
        <RequestData v-for="request in getRequest"
        :key="request.id"
        :id="request.id"
        :from="request.from"
        :to="request.to"
        :title="request.title"
        :message="request.message"></RequestData>
    </ul>
    <h2 v-else>No Request at current time</h2>
    <div class="routers">
        <router-link to="/requestlist"><button class="btn btn-outline-warning">Request Form</button></router-link>

    </div>


</template>

<script>
import RequestData from './RequestData.vue';
export default{
components:{RequestData},
computed:{
    getRequest(){ //getting the request list
        return this.$store.getters['requestlist/requestlist'];
    },
    hasRequest(){ //check the request list is null
        return this.$store.getters['requestlist/requestlist'];
    }
}
}
</script>

<style scoped>
.btn{
    color:black;
}
.routers{
    text-align:center
}
</style>