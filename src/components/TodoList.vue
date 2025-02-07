<script setup>

const items = [
    {
        id: 1,
        text: "Learn Vue",
        deadline: 1,
        done: true
    },
    {
        id: 2,
        text: "Learn Python",
        deadline: 10,
        done: false
    },
    {
        id: 3,
        text: "Learn React",
        deadline: 30,
        done: true
    }
]
</script>

<template>
    <h1>Todo List</h1>
    <template v-for="item in items">
        <ul :key="item.id" v-if="item.done">
            <li v-for="(value, key) in item">
                {{ key + ': ' + value }}
            </li>
        </ul>
    </template>
    <h3 v-for="n in 3">Hello {{ n }}</h3>
</template>
<style></style>