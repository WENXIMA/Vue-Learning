const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name : '',
      lastName:''
    };
  },
  methods:{
    confirmInput() {
      this.confirmInput = this.name;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    minus(num) {
      this.counter = this.counter - num;
    },
    addname(event, lastName){
      this.name =  event.target.value+ ' '+lastName;
    },
    submitForm(event){
      event.preventDefault();
    
      alert('Submitted');
    }
  }
});

app.mount('#events');
