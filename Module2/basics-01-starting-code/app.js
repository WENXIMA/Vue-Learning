const app = Vue.createApp({
    data() {
        return {
            courseGoal : "Learn Vue",
            courseGoal2 : "Learn React",
            vueLink:'https://www.google.ca'
        }
    },
    methods: {
        outputGoal: function() {
            const randomNumber = Math.random();
            if(randomNumber > 5){
                return this.courseGoal;
            }else{
                return this.courseGoal2;
            }
        }
    }
});

app.mount('#user-goal');