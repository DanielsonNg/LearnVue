<script setup>
import Container from './Container.vue';
import MyButton from './MyButton.vue';


function clickHandler() {
    alert("clicked")
}

</script>

<template>
    <Container title="Penggunaan Container dengan <slot/>">
        <template #header>
            <h1>Button App</h1>
        </template>
        <template #default>
            <MyButton class="button" @click="clickHandler" name="test" />
        </template>
        <template #footer>
            <p>@Copycat 2025</p>
        </template>
    </Container>
</template>

<style scoped>
.button:hover {
    background-color: aqua;
}
</style>