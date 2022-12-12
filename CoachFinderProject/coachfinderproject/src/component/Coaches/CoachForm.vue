<template>
    <section>
        <h2>
            Register as a coach now
        </h2>
        <CoachRegister @save-coach="saveCoach"/>
    </section>
</template>

<script>
import CoachRegister from './CoachRegister.vue';

export default{
    components:{
        CoachRegister
    },
    methods: {
        saveCoach(data){
            this.$store.dispatch('coachlist/addCoach', data);
            this.$router.replace('/coaches');
        }
    },
}
</script>