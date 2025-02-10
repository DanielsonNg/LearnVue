<script setup>
import { onWatcherCleanup, ref, watch, watchEffect } from 'vue';

const productId = ref("product2")
const product = ref(null)

// watch(productId, async (newVal, prevVal) => {
//         const response = await fetch(`/${newVal}.json`)
//         product.value = await response.json()
// },{
//     immediate:true
// })

watchEffect(async()=>{
    onWatcherCleanup(async()=>{
        console.log("cleanup")
    })
    console.log("watcher call")
    const response = await fetch(`/${productId.value}.json`)
    product.value = await response.json()
})

</script>
<template>
    <label for="productId">
        <select v-model="productId">
            <option value=""></option>
            <option value="product1">Product 1</option>
            <option value="product2">Product 2</option>
            <option value="product3">Product 3</option>
        </select>
    </label>
    <div v-if="product">
        <h1>Product</h1>
        <p>Id: {{ product.id }}</p>
        <p>Name: {{product.name }}</p>
        <p>Description: {{ product.description }}</p>
    </div>
</template>

<style scoped></style>