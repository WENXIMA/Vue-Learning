
export default{
    addRequest(context,payload){
        const requestData = {
            id: new Date().toISOString,
            from:payload.from,
            to:payload.to,
            title:payload.title,
            message:payload.message,
            
        };
        context.commit('addRequest',requestData);
    }
}