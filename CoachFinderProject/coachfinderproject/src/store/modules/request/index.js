import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';

export default{
    namespaced:true,
    state(){
        return {
            requestlist:[
                {
                    id:'1',
                    from:'coach1@gmail.com',
                    to:'wma050@uottawa.ca',
                    title:'Book a new reservation',
                    message:'Book a new reservation at monday 10am'
                },
                {
                    id:'2',
                    from:'coach2@gmail.com',
                    to:'jason@uottawa.ca',
                    title:'Book a new reservation',
                    message:'Book a new reservation at friday 8am'
                },
                {
                    id:'3',
                    from:'coach3@gmail.com',
                    to:'jason@uottawa.ca',
                    title:'Book a new reservation',
                    message:'Book a new reservation at friday 8am'
                }
            ]
        }
    },
    mutations,
    getters,
    actions,
}