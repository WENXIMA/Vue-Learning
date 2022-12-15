import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';

export default{
    namespaced:true,
    state() {
        return {
            coachlist:[
                {
                    id:'c1',
                    name:'Jason',
                    email:'wma050@uottawa.ca',
                    hourlyRate:30,
                    description:'carrer',
                    areas:"FullStack"
                },
                {
                    id:'c2',
                    name:'Jan',
                    email:'wma050@uottawa.ca',
                    hourlyRate:30,
                    description:'carrer',
                    areas:"FrontEnd"
                },
                {
                    id:'c3',
                    name:'Ca',
                    email:'wma050@uottawa.ca',
                    hourlyRate:30,
                    description:'carrer',
                    areas:"BackEnd",
                },
            ]
        }
    },
    getters,
    mutations,
    actions
}