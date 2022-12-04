const app = Vue.createApp({
  data() {
    return { 
      InputValue:'',
      goals: [] };
  },
  methods:{
    addGoal(){
      this.goals.push(this.InputValue)
    },
    removeGoal(ind){
      this.goals.splice(ind, 1)
    }
  }
});

app.mount('#user-goals');
