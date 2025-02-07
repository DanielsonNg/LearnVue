<script setup>
import { ref } from 'vue';


const score = ref(50)

</script>

<template>
    <h1>Score Me</h1>
    <div v-if="score>90">
        <p>Great {{ score }}</p>
    </div>
    <div v-else-if="score > 70">
        <p>Nice {{score}}</p>
    </div>
    <div v-else>
        <p>Try Harder {{ score }}</p>
    </div>
    <div v-show="score > 60">
        PASS
    </div>
</template>

<style scoped>
</style>