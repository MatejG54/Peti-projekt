<script setup>
import Card from './Card.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="py-20">
        <div class="flex flex-row items-center justify-center">
            <Card bg="bg-red-400">
                <h1 class="custom-title">Leagues</h1>
                <p class="mt-3 mb-3">Wanna learn more about football leagues?</p>
                <RouterLink to="/leagues"
                class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">Go to Leagues</RouterLink>
            </Card>
            <Card bg="bg-yellow-400">
                <h1 class="custom-title">Players</h1>
                <p class="my-3">Find players and clubs you like</p>
                <RouterLink to="/players"
                class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">Go to Players</RouterLink>
            </Card>
            <Card bg="bg-green-400">
                <h1 class="custom-title">Store</h1>
                <p class="my-3">Add more players to our base</p>
                <RouterLink to="/store"
                class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">Go to Store</RouterLink>
            </Card>
        </div>
    </section>
</template>

<style scoped>
.custom-title {
  text-align: center;    
  font-size: 1.5rem;     
  font-weight: 700;     
}
</style>