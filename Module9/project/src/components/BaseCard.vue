<template>
    <header>
        <slot name="header"></slot>
    </header>
<div>
    <slot></slot>
</div>
</template>
<script>
export default{};
</script>
<style scoped>
div{
    background-color: aqua;
}
</style>