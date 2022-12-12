export default{
    coachlist(state){
        return state.coachlist;
    },
    hasCoaches(state) { //check coachlist is null
        return state.coachlist && state.coachlist.length>0; 
    }
}