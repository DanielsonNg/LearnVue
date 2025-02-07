<script setup>
console.info("Hello Vue")
const hello = '<h1>Hello Vue</h1>'

const buttonDisabled = false

const data={
    id:'hello',
    class:'hello'
}


</script>

<template>
    <h1 v-bind="data">{{ hello.toUpperCase() }}</h1>
    <h2>{{ 10+10+ 'Test' }}</h2>
    <div :class="data.class" v-html="hello"></div>

    <button :disabled="buttonDisabled">This is a button</button>
</template>

<style scoped>
.hello {
    color: green
}
</style>