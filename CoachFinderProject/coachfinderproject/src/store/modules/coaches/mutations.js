export default{
    addCoach(state,payload){
        state.coachlist.push(payload);
    },
    setCoaches(state,payload){ //ref from actions loadCoaches
        state.coachlist = payload;
    }
}