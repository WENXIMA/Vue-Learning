<template>
    <div>
        <h2>User page</h2>
        <h3>Welcome to our membership page</h3>
        <h4>Welcome to our membership program! As a member, you'll have access to a variety of benefits including the ability to register as a coach or request to book an appointment with one of our coaches to take a course. You can also send requests to specific coaches to ask for more information. We're excited to have you as a part of our community and are here to support you in achieving your goals.</h4>
        <router-link to="/coachregister"><button class="btn btn-outline-warning">Register as a coach</button></router-link><br />
        <router-link to="/requestlist"><button class="btn btn-outline-warning">Send a request to our coach</button></router-link><br />

        <button class="btn btn-outline-dark" @click="$store.dispatch('logout')">Logout</button>
    </div>
</template>

<script>
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';
export default {
    setup(){
        const store = useStore();
        onBeforeMount(() => {
            store.dispatch('fetchUser')
        }); 
    },
    
}
</script>

<style scoped>
.btn{
    position: relative;
    margin-top: 2rem;
    color:black
}
.btn:hover{
    color:white

}
h2,h3,h4{
    text-align: center;
    color:#C58940
}
</style>
