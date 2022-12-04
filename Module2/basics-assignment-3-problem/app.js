const app = Vue.createApp({
    data() {
        return {
            num: 0,
            resultTxt:''
        }
    },
    watch:{
        num(value){
            if(value <37){
                this.resultTxt =  "Not there yet!";
            } else if (value >37 ){
                this.resultTxt = "Too much";
            }else{
                this.resultTxt = value;
            }
            const that = this;
            if(value === 37) {
                setTimeout(function() {
                    that.num = 0;
                },5000)
            } 
        }
        
    },
    // computed : {
    //     results() {
    //         if(this.num < 37) {
    //             this.resultTxt = "not there yet";
    //             console.log("add")
    //         } else if (this.num > 37) {
    //             this.resultTxt = " Too much";
    //         }else{
    //             this.resultTxt = this.num;
    //         }
    //     }
    // },
    methods: {
        add5(){
            this.num += 5;
        },
        add1(){
            this.num +=1;
        }
    },
});



app.mount("#assignment");