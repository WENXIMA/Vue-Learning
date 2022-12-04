const app = Vue.createApp({
    data() {
        return {
            out1:'',
            alertmsg:'',
            out2:'',
            outputN:''
        }
    },
    methods:{
        showAlert(){
            alert("This is a msg");
        },
        output1(event){
            this.out1 = event.target.value;
        },
        output2(event){
            this.out2 = this.out1;
        }
    }

});

app.mount('#assignment');