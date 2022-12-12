<template>
    <h2>Find Coach</h2>
    <input type="checkbox" id="FrontEnd" checked @change="setFilter"/>
    <label for="FrontEnd">FrontEnd</label>

    <input type="checkbox" id="BackEnd" checked @change="setFilter"/>
    <label for="BackEnd">BackEnd</label>

    <input type="checkbox" id="FullStack" checked @change="setFilter"/>
    <label for="FullStack">FullStack</label>
</template>

<script>
export default{
    emits:['change-filter'],
    data(){
        return {
            filters:{
                FrontEnd:true,
                BackEnd:true,
                FullStack:true
            }
        }
    },
    methods:{
        setFilter(event){
            const inputId = event.target.id;
            const isActive = event.target.checked;
            const updateFilters ={
                ...this.filters,
                [inputId]:isActive
            };
            this.filters = updateFilters;
            this.$emit('change-filter',updateFilters)
        }
    }
}
</script>