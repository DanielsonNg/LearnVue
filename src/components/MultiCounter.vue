<script setup>
import { ref } from 'vue';
import Counter from './Counter.vue';
import CounterStateless from './CounterStateless.vue';

const counter = ref(0)

function increment(value){
    counter.value += value
}

</script>

<template>
    <Counter name="Dan" initialCount=0 />
    <Counter name="Ben" initialCount=1 />

    <CounterStateless 
    @click="() => increment" 
    name="Jane" 
    :counter="counter"
    increment="2"
    /><br>

    <CounterStateless 
    @click="() => increment"
    name="Doe" 
    :counter="counter"
    :increment="1" /><br>
    <button @click="counter++">Increment Counter</button>
</template>