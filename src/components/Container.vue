<script setup>
const {title} = defineProps({
    title: String
})
console.log(title)
</script>

<template>
    <h1>{{ title }}</h1>
    <div>
        <slot name="default">
            <h1>Default Content</h1>
        </slot>
        <slot name="header">
            <h1>Header Content</h1>
        </slot>
        <slot name="footer">
            <h1>Footer Content</h1>
        </slot>
    </div>
</template>