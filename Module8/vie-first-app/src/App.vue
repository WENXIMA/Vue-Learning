<template>
    <section>
        <h2>Friends</h2>
    <h4>{{text}}</h4>
    <new-friend @add-contact="addContact"></new-friend>
    <ul>
        <friend-contact 
        v-for="friend in friends"
        :key = "friend.id"
        :id="friend.id"
        :name = "friend.name"
        :phone-number = "friend.phone"
        :email-address = "friend.email"
        :fav="friend.fav"
        @toggle-favorite = "toggleFavoriteStatus"
        @delete = "deleteing">
        
    </friend-contact>
    
    </ul>
    </section>
    

</template>

<script>
export default{
    
    data() {
        return {
            text:'Hello World',
            friends:[
                {
                    id:'1',
                    name:'wenxia',
                    phone:'8732888108',
                    email:'gmail',
                    fav:false
                },
                {
                    id:'2',
                    name:'jason',
                    phone:'6132888108',
                    email:'@gmail',
                    fav:true
                },
                {
                    id:'3',
                    name:'enxia',
                    phone:'1732888108',
                    email:'@gmail',
                    fav:false
                },
            ]
        }
    },
    methods:{
        toggleFavoriteStatus(friendName){
            const ideName=this.friends.find(friend => friend.name === friendName);
            ideName.fav = !ideName.fav;
        },
        addContact(name,phone,email){
            const newContact = {
                id:new Date().toISOString(),
                name:name,
                phone:phone,
                email:email,
                fav:false
            };
            this.friends.push(newContact)
        },
        deleteing(ids){
            this.friends = this.friends.filter((friend) => friend.id != ids);
        },
    }

}

</script>
