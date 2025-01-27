<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';

import {data} from '@/storage';

const route = useRoute();
const leagueId = route.params.id;
const league = ref({});

const getLeague = () => {
    return new Promise(resolve => {
        const temp = data.leagues.find(l => l.id === leagueId);
        resolve(temp);
    })
}

onMounted(async () => {
    league.value = await getLeague();
})

// onMounted(async () => {
//     try {
//         const response = await fetch(`/api/leagues/${leagueId}`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         });

//         // console.log(response)
//         league.value = await response.json();
        
//     } catch (error) {
//         console.log("Error fetching id", error)
//     }
// })

</script>

<template>
    <section class="flex flex-row">
        <div class="bg-gray-200 rounded-md p-10 m-5 w-96 text-center">
            <h1 class="font-bold text-2xl">
                {{ league.name }}
            </h1>
            <h2>
                Founded in {{ league.year }}
            </h2>
        </div>
        <div class="bg-gray-200 rounded-md m-5 pl-3 pt-2 flex-grow">
            <h1 class="text-left font-bold text-top text-xl">Description</h1>
            <p class="mb-3">{{ league.description }}</p>
        </div>
    </section>
    <section>
        <div class="bg-gray-200 rounded-md m-5 pl-3 pt-2 ">
            <h1 class="text-left font-bold text-2xl m-1 mb-3">Top scorers</h1>
            <div v-for="(goals, player, index) in league.topGoalScorers" :key="player">
                <h1 class="font-bold text-lg">{{ index + 1 }}. {{ player}} : {{ goals }}</h1>
            </div>
        </div>
    </section>
</template>