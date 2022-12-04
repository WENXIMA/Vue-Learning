const app = Vue.createApp({
    data() {
        return {
            
            enterTask:'',
            tasks:[],
            hide:true,
        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.enterTask);
        },
        hideshow(){
            this.hide = !this.hide;
        }
    }
});

app.mount('#assignment');