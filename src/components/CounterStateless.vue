<script setup>
const { counter, name, increment } = defineProps({
    counter: Number,
    name: String,
    increment: Number
})
const emits = defineEmits(["click"])

function buttonClick(){
    emits('click', increment)
}
</script>

<template>
    {{ name }} : {{ counter }}
    <button @click="buttonClick">Increment {{ name }}</button>
</template>