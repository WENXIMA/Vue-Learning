export default{
    async login(context,payload){
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDMiuZZ5QVMK2_d7DhkN7vJITZ5eKlICJQ`,{
            method:'POST',
            body:JSON.stringify({
                email:payload.email,
                password:payload.password,
                returnSecureToken:true
            })
        });
        const repsonseData = await response.json();
        if(!response.ok){
            console.log(repsonseData);
            const error=new Error(repsonseData.message || 'Failed to login');
            throw error;
        }
        context.commit('setUser',{
            token:repsonseData.idToken,
            userId:repsonseData.localId,
            tokenExpiration:repsonseData.expiresIn
        })
    },
    async signup(context,payload){
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDMiuZZ5QVMK2_d7DhkN7vJITZ5eKlICJQ`,{
            method:'POST',
            body:JSON.stringify({
                email:payload.email,
                password:payload.password,
                returnSecureToken:true
            })
        });// firebase API + API_NAME (FROM webAPI in self project)
        const repsonseData = await response.json();
        if(!response.ok){
            console.log(repsonseData);
            const error=new Error(repsonseData.message || 'Failed to login');
            throw error;
        }
        context.commit('setUser',{
            token:repsonseData.idToken,
            userId:repsonseData.localId,
            tokenExpiration:repsonseData.expiresIn
        })
    }
}