<script setup>
import { ref } from 'vue';


const red = ref(false)
const bold = ref(false)

function toggleRed() {
    red.value = !red.value
}

function toggleBold() {
    bold.value = !bold.value
}

const style1={
    color:'red'
}

const style2 = {
    textTransform: "uppercase",
    fontWeight:"bold"
}
</script>

<template>
    <h1 :class="{ red: red, bold: bold }">Style1</h1>
    <h1 :class="[ 'red','bold' ]">Style2</h1>

    <h1 :style="style1">Style3</h1>
    <h1 :style="[style1,style2]">Style4</h1>

    <button @click="toggleBold">Bold</button>
    <button @click="toggleRed">Red</button>

</template>

<style scoped>
.red{
    color:red;
}

.bold{
    text-transform: uppercase;
    font-weight: bold;
}
</style>