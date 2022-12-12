<template>
<div>
    <h2>Coach Page</h2>
    <router-link to="/register"><button>Register</button></router-link>
    <router-link to="/requestlist"><button>Send Request</button></router-link>
    <CoachFilter @change-filter="setFilters"></CoachFilter>
    


    <ul v-if="hasCoaches">
        <CoachData v-for="coach in filterCoaches" :key="coach.id"
        :id="coach.id"
        :name="coach.name"
        :email="coach.email"
        :hourlyRate = "coach.hourlyRate"
        :areas="coach.areas"
        :description="coach.description">
        
    </CoachData>
    </ul>
    <h2 v-else>No Coaches in the list</h2>
    
    
    
    
    

</div>
</template>

<script>
 import CoachData from './CoachData.vue';
 import CoachFilter from './CoachFilter.vue';
export default{
    components:{CoachData,CoachFilter},
    computed:{
        filterCoaches(){//getting coachlist from module in index.js and Second coachlist is getters methods
            const coaches = this.$store.getters['coachlist/coachlist'];
            return coaches.filter(coach => {
                if(this.activeFilters.FrontEnd && coach.areas.includes('FrontEnd')){
                    return true;
                }
                if(this.activeFilters.BackEnd && coach.areas.includes('BackEnd')){
                    return true;
                }
                if(this.activeFilters.FullStack && coach.areas.includes('FullStack')){
                    return true;
                }
                return false;
            }) 
        },
        hasCoaches(){ //check coach list is empty 
            return this.$store.getters['coachlist/hasCoaches'];
        }
    },
   data() {
        return {
            activeFilters:{
                FrontEnd:true,
                BackEnd:true,
                FullStack:true,
            }
        }
    },
    methods:{
        setFilters(updateFilters){
            this.activeFilters = updateFilters;
        }
    },
    provide(){
        return {
            addnewCoach:this.addnewCoach,

        }
    }
   
    

}
</script>