export default{
    coachlist(state){
        return state.coachlist;
    },
    hasCoaches(state) { //check coachlist is null
        return state.coachlist && state.coachlist.length>0; 
    },
    isCoach(_, getters, _2, rootGetters) {
        const coachlist = getters.coachlist;
        const userId = rootGetters.userId;
        return coachlist.some(coach => coach.id === userId);
      }
    
}