<template>
    <div class="d-flex justify-content-center">
        <div class="align-self-center">
            <h2>Coach Page</h2>
        </div>
    </div>


    <div class="d-flex justify-content-start">
        <div class="align-self-center">
            <CoachFilter @change-filter="setFilters"></CoachFilter>
        </div>
    </div>
    <div class="card d-flex justify-content-center">
        <div class="card-body align-self-center ">
            <ul v-if="hasCoaches">
                <CoachData v-for="coach in filterCoaches" :key="coach.id" :id="coach.id" :name="coach.name"
                    :email="coach.email" :hourlyRate="coach.hourlyRate" :areas="coach.areas"
                    :description="coach.description">
                </CoachData>
            </ul>

            <h2 v-else>No Coaches in the list</h2>
        </div>
    </div>

</template>

<script>
import CoachData from './CoachData.vue';
import CoachFilter from './CoachFilter.vue';
export default {
    components: { CoachData, CoachFilter },
    computed: {
        filterCoaches() {//getting coachlist from module in index.js and Second coachlist is getters methods
            const coaches = this.$store.getters['coachlist/coachlist'];
            return coaches.filter(coach => {
                if (this.activeFilters.FrontEnd && coach.areas.includes('FrontEnd')) {
                    return true;
                }
                if (this.activeFilters.BackEnd && coach.areas.includes('BackEnd')) {
                    return true;
                }
                if (this.activeFilters.FullStack && coach.areas.includes('FullStack')) {
                    return true;
                }
                return false;
            })
        },
        hasCoaches() { //check coach list is empty 
            return this.$store.getters['coachlist/hasCoaches'];
        }
    },
    data() {
        return {
            activeFilters: {
                FrontEnd: true,
                BackEnd: true,
                FullStack: true,
            }
        }
    },
    methods: {
        setFilters(updateFilters) {
            this.activeFilters = updateFilters;
        }
    },




}
</script>

<style scoped>
.card {
    background-color: #FCDDB0;
}
</style>