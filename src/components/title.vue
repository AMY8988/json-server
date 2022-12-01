<template>
    <div>
        <h3 class=" text-center">
             {{title}} 
             <base-text text="amy"></base-text>
        </h3>
    </div>
</template>

<script>

    export default {
        data(){
            return {
                name: "title"
            }
        },
        props: {
            title: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>