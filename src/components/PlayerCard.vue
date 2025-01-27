<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

defineProps({
    player: Object
});
</script>

<template>
    <div class="bg-gray-100 text-center rounded-md p-4 mb-4 flex flex-col justify-center items-center border-2">
        <h2 class="font-bold text-xl">
            {{ player.name + ' ' + player.surname }}
        </h2>
        <h3>
            club: {{ player.club }}
        </h3>
        <h3>
            {{ player.position }}
        </h3>
        <h3>
            country: {{ player.country }}
        </h3>
        <RouterLink :to="'/players/' + player.id" class="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-2 mt-2">More</RouterLink>
    </div>
</template>