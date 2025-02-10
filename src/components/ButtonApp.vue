<script setup>
import MyButton from './MyButton.vue';


function clickHandler(){
    alert("clicked")
}

</script>

<template>
    <MyButton class="button" @click="clickHandler" name="test" />
</template>

<style scoped>
.button:hover{
    background-color: aqua;
}
</style>