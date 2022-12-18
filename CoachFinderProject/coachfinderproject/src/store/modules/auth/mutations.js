export default{
    setUser(state,payload){
        state.payload = payload
    },
    clearUser(state){
        state.user=null;
    }
}