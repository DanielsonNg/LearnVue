<script setup>
import { nextTick, ref } from 'vue';


let counter = ref({
    count: 0,
    username: "dan"
})
const increment = async () => {
    console.log("Incrementing...")
 
    counter.value = {
        ...counter.value,
        count: counter.value.count + 1
    }

    counter.value.count++

    await nextTick()
    console.log("Increment Done")
}

</script>

<template>
    <div>
        <h1 id="count">Counter: {{ counter.count }}</h1>
        <button @click="increment">Increment</button>
    </div>
</template>

<style scoped></style>