<template>
<form @submit.prevent="sendrequest">
        <input type="email" ref="SenderEmail" placeholder="From"/>
        <input type="email" ref="ReceiverEmail" placeholder="To"/>
        <input type="text" ref="Title" placeholder="To"/>
        <textarea type="text" ref="Content" placeholder="Type in here..." />
        <button type="submit">Submit</button>
    </form>
</template>

<script>
export default{
    inject:['addRequest'],
    methods:{
        sendrequest(){
            const sender = this.$refs.SenderEmail.value;
            const receiver = this.$refs.ReceiverEmail.value;
            const head = this.$refs.Title.value;
            const content = this.$refs.Content.value;
            this.addRequest(sender,receiver,head,content);
        }
    }
}
</script>