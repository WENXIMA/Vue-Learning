<template>

    <section>
        <div class="card d-flex justify-content-center">
            <div class="card-body align-self-center">
            <h2>{{ name }}</h2>
            <h4>{{ email }}</h4>
            <h3>${{ hourlyRate }}/hour</h3>
            <p>Areas: {{areas}}</p>
            <p>Description: {{description}}</p>
            </div>
            
        </div>
    </section>
    <section>
        <div class="card">
            
        </div>
    </section>
</template>

<script>
export default{
    props:['id'],
    data() {
        return {
            selectedCoach:null
        }
    },
    computed:{
        name(){
            return this.selectedCoach.name;
        },
        email(){
            return this.selectedCoach.email;
        },
        contactLink(){
            return this.$route.path+'/'+this.id+'/request'
        },
        areas(){
            return this.selectedCoach.areas;
        },
        hourlyRate(){
            return this.selectedCoach.hourlyRate;
        },
        description(){
            return this.selectedCoach.description;
        }

    },
    created() { //find coach
        this.selectedCoach = this.$store.getters['coachlist/coachlist'].find((coach) => coach.id===this.id);
    },
}
</script>

<style scoped>
.card{
    background-color: transparent;
}
.btn{
    color:black
}
</style>