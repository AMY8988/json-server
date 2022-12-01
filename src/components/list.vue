<template>
    <div>
        <li :class="['list-group-item  border rounded created' , { 'zoom':list.isDelete }]" @dblclick="isEdit=true" >

            <div class="d-flex justify-content-between  align-items-center ">

                <input type="text"  v-if="isEdit" v-model="list.message" class=" form-control me-1" @keyup.enter="isEdit = false" >

                <div v-else :class="[' form-check d-flex align-items-center ' , {'shake':list.isDone} ]">
                    <input class="form-check-input me-2"  v-model="list.isDone" type="checkbox" value="" :id="'flexCheckIndeterminate'+ list.id">
                    <label :class="['form-check-label ' , {'done':list.isDone}]"    :for=" 'flexCheckIndeterminate'+list.id " @dblclick="list.isEdit = true">
                        {{list.message}}
                    </label>
                </div>

                <div class="">
                    <fa-icon :icon="['fas' , 'pencil']" class="text-primary me-1 hover" v-if="isEdit == false"  @click="isEdit=true"></fa-icon>
                    <fa-icon :icon="['fas' , 'trash-can']" class=" fa fa-trash-can text-primary hover" @click="[list.isDelete = true , del(list.id)]"></fa-icon>
                </div>

            </div>

        </li>
    </div>
</template>

<script>
    export default {
        name: "list",

        data() {
            return {
                
                newMessage: "",
                isEdit: false,
                
            }
        },

        props: {
            list: {
                type: Object
            }
        },
        methods: {
            del(x) {
                
                this.$emit("del" , x)
            }
        },
        
    }
</script>

<style lang="scss" >

</style>