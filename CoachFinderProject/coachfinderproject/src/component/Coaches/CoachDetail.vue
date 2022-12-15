<template>

    <section>
        <div class="card">
            <h2>{{ name }}</h2>
            <h2>{{ email }}</h2>
            <h3>${{ hourlyRate }}/hour</h3>
        </div>
    </section>
    <section>
        <div class="card">
            <h2>Reach coach now</h2>
            <button class="btn btn-outline-primary">Contact</button>
        </div>
    </section>
    <section>
        <p>{{areas}}</p>
            <p>{{description}}</p>
        
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