export default{
    addCoach(context,payload){
        const coachData = {
            id: new Date().toISOString,
            name:payload.name,
            email:payload.email,
            hourlyRate:payload.hourlyRate,
            areas:payload.areas,
            description:payload.description
        };
        context.commit('addCoach',coachData)
    }
}