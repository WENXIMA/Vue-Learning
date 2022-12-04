<template>
    <div class="App">
        
        <header><h1>{{name }}{{fav ? '(favorite)' : ''}}</h1></header>
        <button @click="toggleDetails">{{showDetail ? 'Hide' :'Show'}} Details</button>
        <button @click="toggleFavorite"> Toggle Favorite</button>
        <button @click="deleteContact">Delete</button>
        <ul v-if="showDetail">
            <li><strong>Phone:</strong>{{phoneNumber}}</li>
            <li><strong>Email:</strong>{{emailAddress}}</li>
        </ul>
        
    
    </div>
    
</template>

<script>
export default{
    props: {
      id: {
      type: String,
      required: true
    },
        name:{type:String, require:true},
        phoneNumber:String,
        emailAddress:String,
        fav:{
            type:Boolean,
            required:false,
            default:false,
        }
},
emit:[
    'toggle-favorite','delete'
],
// emit:{
//     'toggle;favorite':function(name){
//         if(name){
//             return true;
//         }else{
//             console.log('name is missing');
//             return false;
//         }
//     },
// },
    data() {
        return {
            showDetail:false,
        }
    },
    methods:{
        toggleDetails() {
            this.showDetail = !this.showDetail;
        },
        toggleFavorite() {
            this.$emit('toggle-favorite',this.name);
        },
        deleteContact(){
          this.$emit('delete',this.id);
        }
    }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

</style>