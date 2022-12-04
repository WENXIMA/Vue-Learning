<template>
    <h2>Add Resource</h2>
    <BaseDialog v-if="inputInvaild"
    title="Invaild Input">
<template #default>
    <p>At least 1 input value is invaild.</p>
    <p>PLease check inputs and try again</p>

</template>
<template #actions>
<BaseButton @click="confrimError">OK</BaseButton>
</template>
</BaseDialog>
    <BaseCard>
    <form @submit.prevent="submitData">
        <div class="form-control">
            <label for="title">Title</label>
            <input id="title" name="title" type="text" ref="titleInput"/>
        </div>
        <div class="form-control">
            <label for="descripition">Descripition</label>
            <textarea id="descripition" name="title" row="3" ref="DescripitionInput"/>
        </div>
        <div class="form-control">
            <label for="link">Link</label>
            <textarea id="link" name="link" type="url" ref="LinknInput"/>
        </div>
        <div class="form-control">
            <BaseButton type="submite">Add Resource</BaseButton>
        </div>
    </form>
    </BaseCard>
</template>
<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseDialog from '../UI/BaseDialog.vue';

export default{
    inject: ["addResource"],
    data() {
        return {
            inputInvaild: false,
        };
    },
    methods: {
        submitData() {
            const enterdTitle = this.$refs.titleInput.value;
            const enterdDescripition = this.$refs.DescripitionInput.value;
            const enterdLink = this.$refs.LinknInput.value;
            if (enterdTitle.trim() === "" || enterdLink.trim() === "" || enterdDescripition.trim() === "") {
                this.inputInvaild = true;
                return;
            } //trim ignore the blank space
            this.addResource(enterdTitle, enterdDescripition, enterdLink);
        },
        confrimError(){
            this.inputInvaild = false;
            this.$refs.titleInput.value='';
            this.$refs.DescripitionInput.value='';
            this.$refs.LinknInput.value='';
        }
    },
    components: { BaseDialog, BaseButton }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}</style>