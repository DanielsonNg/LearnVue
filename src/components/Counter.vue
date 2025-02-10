<script setup>
import { nextTick, ref } from 'vue';

const props = defineProps(["name", "initialCount"])


let counter = ref({
    count: Number(props.initialCount),
    username: props.name
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
        {{ counter.username }}
    </div>
</template>

<style scoped></style>