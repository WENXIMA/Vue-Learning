const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  watch:{
    counter(value) {
      if(value>50) {
        this.counter = 0;
      }
    }
  },
  computed: {
    fullname() {
      if(this.name === '') {
        return '';
      }
      return this.name+' '+"Ma";
    }
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
