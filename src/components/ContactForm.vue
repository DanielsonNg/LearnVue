<script setup>

const model = defineModel({
    type:Object,
    required: true,

})
</script>

<template>
    <h1>Contact Us</h1>
    <form>
        <div>
        <label for="name">Name:
            <input type="text" id="name" v-model="model.name">
        </label>
        </div>
        <div>
            <label for="email">Email:
                <input type="text" id="name" v-model="model.email">
            </label>
        </div>
        <div>
            <label for="age">Age:
                <input type="number" id="age" v-model.number="model.age">
            </label>
        </div>
        <div>
            <label for="type">Type:
                <select id="type" v-model="model.type">
                    <option value="regular">Regular</option>
                    <option value="vip">VIP</option>
                </select>
            </label>
        </div>
        <div>
            <label for="complain"> Complain:
                <input type="checkbox" id="complain" v-model="model.complain">
            </label>
        </div>
        <div>
            <label for="complain">Message:
                <textarea id="message" v-model="model.message"></textarea>
            </label>
        </div>
    </form>
</template>