<template>
<ul>
    <ul>
        <RequestData v-for="request in requestlist"
        :key="request.id"
        :id="request.id"
        :from="request.from"
        :to="request.to"
        :title="request.title"
        :message="request.message"></RequestData>
    </ul>
</ul>
<RequestList />
</template>

<script>
import RequestList from './RequestList.vue';
import RequestData from './RequestData.vue';
export default{
components:{RequestList,RequestData},
data() {
    return {
        requestlist:[],
    }
},
methods:{
    addRequest(from,to,title,message){
        const newRequest = {
            id:new Date().toISOString,
            from:from,
            to:to,
            title:title,
            message:message,

        };
        this.requestlist.push(newRequest);
    }
},
provide() {
    return{
        addRequest:this.addRequest 
    }
}
}
</script>