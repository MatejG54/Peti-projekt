<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

defineProps({
    league: Object,
    id: String 
});

</script>

<template>
    <div class="bg-gray-100 text-center rounded-md p-4 mb-4 flex flex-col justify-center items-center border-2">
        <h2 class="custom-title">
            {{ league.name }}
        </h2>
        <!-- <p>{{ id }}</p> -->
        <h3>
            country: {{ league.country }}
        </h3>
        <div>
            <RouterLink :to="'/leagues/' + id" class="rounded-md bg-blue-200 m-2 p-1 text-center font-bold hover:bg-blue-400">Read more</RouterLink>
        </div>
    </div>
</template>

<style scoped>
.custom-title {
  font-weight: 700; /* Ekvivalent za font-bold */
  font-size: 1.25rem; /* Ekvivalent za text-xl */
}
</style>