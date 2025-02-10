<script setup>
import { ref } from 'vue';
import Counter from './Counter.vue';
import CounterStateless from './CounterStateless.vue';

const counter = ref(0)

</script>

<template>
    <Counter name="Dan" initialCount=0 />
    <Counter name="Ben" initialCount=1 />

    <CounterStateless name="Jane" :counter="counter" /><br>
    <CounterStateless name="Doe" :counter="counter" /><br>
    <button @click="counter++">Increment Counter</button>
</template>