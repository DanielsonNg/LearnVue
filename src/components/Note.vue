<script setup>
import { reactive, ref, useTemplateRef } from 'vue';

const notes = reactive([])
const note = ref("")
const noteInput = useTemplateRef("noteInput")

function addNote(){
    notes.push(note.value)
    note.value= ""
    noteInput.value.focus()
}
</script>

<template>
    <h1>Create Note</h1>
    <div>
        <input ref="noteInput" type="text" v-model="note" 
        placeholder="Write Note Here...">
        <button @click="addNote">Add Note</button>
    </div>
    <h1>Note List</h1>
    <ul>
        <li v-for="note in notes">
            {{ note }}
        </li>
    </ul>
</template>

<style scoped>
</style>