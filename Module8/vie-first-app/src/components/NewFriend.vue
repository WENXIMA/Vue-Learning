<template>
    <form @submit.prevent="">
        <input placeholder="name" v-model="InputName" autocomplete=false/><br>
        <input placeholder="phoneNumber" v-model="InputPhone" autocomplete=false/><br>
        <input placeholder="email" v-model="InputEmail" autocomplete=false/><br>
        <button @click="addId">Submit</button>
        
    </form>
</template>


<script>
export default{
    emit:['add-contact'],
    data() {
        return {
            
            InputName:'',
            InputPhone:'',
            InputEmail:'',
            friends:[{
                phone:String,
                name:String,
                email:String,
               
        }],
        
        }
    },
    methods: {
        addId(){
            this.$emit('add-contact', 
            this.InputName,
            this.InputPhone,
            this.InputEmail)
        }
    },
}

</script>