<template>
<div>
    <h2>Coach Page</h2>
    
    <router-link to="/coaches/register">Register</router-link>
    <!-- <h2>{{coachlist}}</h2> -->
    <ul>
        <CoachData v-for="coach in coachlist"
        :key="coach.id"
        :id="coach.id"
        :name="coach.name"
        :email="coach.email"
        :descripition="coach.descripition"
        ></CoachData>
    </ul>
    <CoachRegister />
    
    

</div>
</template>

<script>
 import CoachRegister from './CoachRegister.vue';
 import CoachData from './CoachData.vue';
export default{
    components:{CoachRegister,CoachData},
   data() {
        return {
            coachlist:[
                {
                    id:'1',
                    name:'Jason',
                    email:'wma050@uottawa.ca',
                    descripition:'carrer'
                },
                {
                    id:'2',
                    name:'Jan',
                    email:'wma050@uottawa.ca',
                    descripition:'carrer'
                },
                {
                    id:'3',
                    name:'Ca',
                    email:'wma050@uottawa.ca',
                    descripition:'carrer'
                },
            ],
        }
    },
    methods:{
        contactCoach(){},
        addnewCoach(name,email,descripition){
            const newCoach = {
                id:new Date().toISOString(),
                name: name,
                email: email,
                descripition:descripition,
            };
            this.coachlist.push(newCoach);
        }
    },
    provide(){
        return {
            addnewCoach:this.addnewCoach,

        }
    }
   
    

}
</script>