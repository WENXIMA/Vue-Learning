<template>
    <base-dialog :show="!!error" title="Error Occurred" @close="ErrorClose"> 
    <!-- convert a string to boolean  -->
        <p>{{ error }}</p>
    </base-dialog>
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

    <div v-if="isloading">
        <base-spinner></base-spinner>
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
        isCoach() {
            return !this.isloading && this.$store.getters['coachlist/isCoach'];
        },
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
            error: null,
            isloading: false,
            activeFilters: {
                FrontEnd: true,
                BackEnd: true,
                FullStack: true,
            }
        }
    },
    created() {
        this.loadCoaches();
    },
    methods: {
        setFilters(updateFilters) {
            this.activeFilters = updateFilters;
        },
        async loadCoaches() {
            this.isloading = true;
            try {
                await this.$store.dispatch('coachlist/loadCoaches');

            } catch (error) {
                this.error = error.message || 'Something goes wrong!';
            }
            this.isloading = false;
        },
        ErrorClose(){
            this.error=null;
        }
    },




}
</script>

<style scoped>
.card {
    background-color: #FCDDB0;
}
</style>