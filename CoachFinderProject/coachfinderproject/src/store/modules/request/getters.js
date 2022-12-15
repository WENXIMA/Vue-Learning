export default{
    requestlist(state){
        return state.requestlist; //getting the request list
    },
    hasRequest(state){
        return state.requestlist && state.requestlist.length>0; //check list is null? show list : do not show list
    }
}