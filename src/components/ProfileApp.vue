<script setup>
import { provide, reactive } from 'vue';
import ProfileAddress from './ProfileAddress.vue';
import Profile from './Profile.vue';


const profile = reactive({
    name: "Dan",
    email: "Dan@gmail.com"
})

provide("profile", profile)
</script>
<template>
    <input v-model="profile.name" type="text" placeholder="Name">
    <Profile />
    <ProfileAddress />

</template>