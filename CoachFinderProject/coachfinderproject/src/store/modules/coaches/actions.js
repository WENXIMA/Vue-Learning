export default{
    async addCoach(context,payload){
        const userId = context.rootGetters.userId;
        const coachData = {
            name:payload.name,
            email:payload.email,
            hourlyRate:payload.hourlyRate,
            areas:payload.areas,
            description:payload.description
        };
        //store data to firebase url (we need to add .json in the end)
        const response = await fetch(`https://coachfinerapplication-default-rtdb.firebaseio.com/coaches/${userId}.json`,{
            method:'PUT', //update, added if does not exist. if exist, update it.
            body:JSON.stringify(coachData)
        });
        const responseData = await response.json();

        // const responseData = await response.json();
        if(!response.ok){
            //error message
            const error = new Error(responseData.message || 'Failed to fetch');
            throw error;
        }
        context.commit('addCoach',{
            ...coachData,
            id:userId,
            
        })
    },
    async loadCoaches(context){
        const response = await fetch(`https://coachfinerapplication-default-rtdb.firebaseio.com/coaches.json`);
        const responseData = await response.json();
        if(!response.ok){
            //error message
            const error = new Error(responseData.message || 'Failed to fetch');
            throw error;
        }
        const coaches = [];

        for(const key in responseData){
            const coach = {
                id:key,
                name:responseData[key].name,
                email:responseData[key].email,
                hourlyRate:responseData[key].hourlyRate,
                areas:responseData[key].areas,
                description:responseData[key].description
            };
            coaches.push(coach);
        }
        context.commit('setCoaches',coaches)
        
    }
}