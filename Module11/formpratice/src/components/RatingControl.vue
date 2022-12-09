<template>
    <ul>
        <li><button type="button" @click="activate('poor')">Poor</button></li>
        <li><button type="button" @click="activate('average')">Average</button></li>
        <li><button type="button" @click="activate('great')">Good</button></li>
    </ul>
</template>

<script>
export default{
    props:['modelValue'],
    emits:['update:modelValue'],
    methods:{
        activate(option){
            this.activeOption = option;
            this.$emit('update:modelValue',option);
        }
    }
}
</script>