<script setup>
const { counter, name } = defineProps(['counter', "name"])
</script>

<template>
    {{ name }} : {{ counter }}
</template>