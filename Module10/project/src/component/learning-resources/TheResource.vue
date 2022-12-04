<template>
    <BaseCard>
        <BaseButton @click="setSelectedTab('StoredResource')" :mode="sotreButtonMode">Stored Resources</BaseButton>
        <BaseButton @click="setSelectedTab('AddResource')" :mode="AddResourceButton">Add Resources</BaseButton>
    </BaseCard>
    <KeepAlive>
        <component :is="selectedTab"></component>

    </KeepAlive>
</template>

<script>
   import StoredResource from './StoredResource.vue';
   import AddResource from './AddResource.vue';


export default{
    components:{
        StoredResource,
        AddResource
    },
    computed:{
        sotreButtonMode(){
            return this.selectedTab ==='StoredResource' ? null : 'flat';
        },
        AddResourceButton(){
            return this.AddResource ==='StoredResource' ? null : 'flat';
        }
    },
    data(){
        return {
            selectedTab: 'StoredResource',
            storeResource:[
        {id:'offical-guide', title:'Offical Guide',descripition:'The Offical VueJS Documents',link:'https://vuejs.org'},
        {id:'Google', title:'Google',descripition:'Search Engine',link:'https://www.google.ca'}
    ]
        };
    },
    provide(){
        return {
            resources:this.storeResource,
            addResource:this.addResource,
            removeResource:this.removeResource,
        }
    },
    methods:{
        setSelectedTab(tab){
            this.selectedTab = tab;
        },
        addResource(title,descripition,url){
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                descripition:descripition,
                link:url,
            };
            this.storeResource.push(newResource);
            this.selectedTab = 'StoredResource'
        },
        removeResource(resId){
            const resIndex = this.storeResource.findIndex(res => res.id===resId);
            this.storeResource.splice(resIndex,1); //remove this element from this pos, and just this element
        }
    }
}
</script>