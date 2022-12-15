<template>

    <h2>Find Coach</h2>
    <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="FrontEnd" checked @change="setFilter">
        <label class="form-check-label" for="flexSwitchCheckChecked">FrontEnd Instructor</label>
    </div>
    <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="BackEnd" checked @change="setFilter">
        <label class="form-check-label" for="flexSwitchCheckChecked">BackEnd Instructor</label>
    </div>
    <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="FullStack" checked @change="setFilter">
        <label class="form-check-label" for="flexSwitchCheckChecked">FullStack Instructor</label>
    </div>

</template>

<script>
export default {
    emits: ['change-filter'],
    data() {
        return {
            filters: {
                FrontEnd: true,
                BackEnd: true,
                FullStack: true
            }
        }
    },
    methods: {
        setFilter(event) {
            const inputId = event.target.id;
            const isActive = event.target.checked;
            const updateFilters = {
                ...this.filters,
                [inputId]: isActive
            };
            this.filters = updateFilters;
            this.$emit('change-filter', updateFilters)
        }
    }
}
</script>