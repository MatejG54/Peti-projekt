<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
        <div class="flex flex-col text-center justify-center items-center h-64">
            <h1 class="text-5xl font-bold mt-5 mb-3">404 Not Found</h1>
            <p class="text-xl mb-3">Not the llama you're looking for</p>
            <RouterLink to="/" class="text-white bg-blue-500 hover:bg-blue-700 rounded-md p-2">Go back</RouterLink>
        </div>
</template>