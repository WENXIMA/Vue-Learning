<template>
<div>
    <h2>Coach Page</h2>
    <router-link to="/register"><button>Register</button></router-link>
    <router-link to="/requestlist"><button>Send Request</button></router-link>
    <ul>
        <li v-for="person in coachtype" :key="person.type">
            <input type="radio" :id="person.type" @change="conditiondisplay" :value="person.type" v-model="typecontainer.type"/>{{person.type}}
        </li>
    </ul>
    
    <div>
        <ul v-if="clicked">
        <CoachData v-for="coach in coachlist"
        :key="coach.id"
        :id="coach.id"
        :name="coach.name"
        :email="coach.email"
        :coachtype="coach.type"
        :descripition="coach.descripition"
        ></CoachData>
    </ul>
    <ul v-else>
        <CoachData v-for="coach in newlist"
        :key="coach.id"
        :id="coach.id"
        :name="coach.name"
        :email="coach.email"
        :coachtype="coach.type"
        :descripition="coach.descripition"
        ></CoachData>
    </ul>
    </div>
    
    
    
    
    

</div>
</template>

<script>
 import CoachData from './CoachData.vue';
 
export default{
    components:{CoachData},
   data() {
        return {
            typecontainer:[],
            newlist:[],
            clicked:true,
            coachtype:[{type:'All'},{type:'FrontEnd'},{type:'BackEnd'},{type:'FullStack'}],
            coachlist:[
                {
                    id:'1',
                    name:'Jason',
                    email:'wma050@uottawa.ca',
                    descripition:'carrer',
                    type:"FullStack"
                },
                {
                    id:'2',
                    name:'Jan',
                    email:'wma050@uottawa.ca',
                    descripition:'carrer',
                    type:"FrontEnd"
                },
                {
                    id:'3',
                    name:'Ca',
                    email:'wma050@uottawa.ca',
                    descripition:'carrer',
                    type:"BackEnd",
                },
            ],
        }
    },
    methods:{
        ReceiveCoachType(){
            console.log(this.typecontainer);
        },
        addnewCoach(name,email,descripition){
            const newCoach = {
                id:new Date().toISOString(),
                name: name,
                email: email,
                descripition:descripition,
            };
            this.coachlist.push(newCoach);
        },
        conditiondisplay(){
            this.clicked = false;
                if(this.typecontainer.type.toString() ==='All' ){
                this.newlist = this.coachlist;
            }else{
                this.newlist = this.coachlist.filter((item)=> item.type===this.typecontainer.type);
            }
            
            
        },
        
        
    },
    provide(){
        return {
            addnewCoach:this.addnewCoach,

        }
    }
   
    

}
</script>