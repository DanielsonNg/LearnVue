<script setup>
import { computed, reactive, ref } from 'vue';


const person = reactive({
    firstName: '',
    lastName: ''
})
function sayHello(e) {
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

function changeFirstName(e){
    e.preventDefault()
    person.firstName = e.target.value

}

function changeLastName(e){
    e.preventDefault()
    person.lastName = e.target.value
}

</script>

<template>
    <div>
        <form>
            <button @click="counter++">Counter : {{ counter }}</button> <br>
            <input @input="changeFirstName" placeholder="First Name" type="text" id="firstName"> <br>
            <input @input="changeLastName" placeholder="Last Name" type="text" id="lastName"> <br>
            
            <button @click.prevent="sayHello">Say Hello</button>
            <h2>Hello {{ fullName }}</h2>
        </form>
    </div>
</template>