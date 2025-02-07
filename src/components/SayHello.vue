<script setup>
import { computed, reactive, ref } from 'vue';


const person = reactive({
    firstName: '',
    lastName: ''
})
function sayHello() {
    person.firstName = document.getElementById("firstName").value
    person.lastName = document.getElementById("lastName").value
}

const fullName = computed((prevVal)=> {
    console.log(prevVal)
    console.log('Fullname called')
    return `${person.firstName} ${person.lastName}`
}) 

const counter = ref(0)
function increment(){
    counter.value++
}

</script>

<template>
    <div>
        <button @click="increment">Counter : {{ counter }}</button> <br>
        <input placeholder="First Name" type="text" id="firstName"> <br>
        <input placeholder="Last Name" type="text" id="lastName"> <br>

        <button @click="sayHello">Say Hello</button>
        <h2>Hello {{ fullName }}</h2>
    </div>
</template>