<template>
    <div class=" row">
        <div class=" col-10 ">
            <input type="text" class=" form-control" v-model="newMessage" @keyup.enter="create()" placeholder="Do your daily lists">
        </div>
        <div class="col-2  text-end">
            <button class="btn btn-info text-white " @click="create()">
                <fa-icon :icon="['fas' , 'circle-plus']" ></fa-icon>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name:"listCreate",
        data() {
            return {
                newMessage: ""
            }
        },
        methods: {
            create() {
                this.$emit("create" , this.newMessage);
                this.newMessage =""
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>