<script setup>
import { ref, onMounted } from 'vue';
import LeagueCard from '@/components/LeagueCard.vue';

import {data} from "@/storage";

const leagues = ref([]);

const getLeagues = () => {
    return new Promise(resolve => {
        resolve(data.leagues);
    })
}

onMounted(async () => {
    leagues.value = await getLeagues();
})

// onMounted(async () => {
//     try {
//         const response = await fetch('/api/leagues', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         });

//         leagues.value = await response.json();

//     } catch (error) {
//         console.error("Error fetching leagues", error);
//     }
// });
</script>

<template>
    <section>
        <h1 class="text-2xl font-bold text-center p-5">Leagues</h1>
        <div class="grid grid-cols-3 gap-6 mx-5 py-4">
            <LeagueCard v-for="league in leagues" :key="league.id" :league="league" :id="league.id"/>
        </div>
    </section>
</template>