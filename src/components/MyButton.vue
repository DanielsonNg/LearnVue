<script setup>
import { useAttrs } from 'vue';

    const attributes = useAttrs()
    // console.log(attributes)
</script>

<template>
    <button>My Button {{ attributes.name }}</button>
</template>