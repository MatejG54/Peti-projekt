<script setup>
import PlayerCard from '@/components/PlayerCard.vue';
import { ref, onMounted, defineProps } from 'vue';

import {data} from '@/storage';

defineProps({
    limit: Number,
    default: 3
});

// let limit = ref(6);
// const showMorePlayers = ref(false);

const players = ref([]);
// console.log(players.value)

const getPlayers = () => {
    return new Promise(resolve => {
        resolve(data.players);
    })
}

onMounted(async () => {
    players.value = await getPlayers();
})

// onMounted(async () => {
//     try {
//         const response = await fetch('/api/players', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         players.value = await response.json();

//     } catch (error) {
//         console.error("Error fetching players", error);
//     }
// })

const selectedFilter = ref();
const selectedFilter2 = ref();
const uniqueValues = ref([]);
const filteredPlayers = ref([]);

const filterSelected = () => {
    uniqueValues.value = [
        ...new Set(players.value.map(player => player[selectedFilter.value]))
    ];
    // console.log("Unique values for filter:", uniqueValues.value);
};

const filter2Selected = () => {
    // console.log(selectedFilter.value)
    // console.log(selectedFilter2.value)

    // const filtered = players.value.filter((player) => {
    // console.log(`Checking player ${player.name} with ${player[selectedFilter.value]} and ${selectedFilter2.value}`);
    // return player[selectedFilter.value] === selectedFilter2.value;
    // });

    // console.log(filtered);  // Ispisuje filtriranu listu


    // const filtered = players.value.filter((player) => player[selectedFilter.value])
    filteredPlayers.value = players.value.filter((player) => player[selectedFilter.value] === selectedFilter2.value)
}

</script>

<template>
    <section class="my-1">
        <h1 class="text-2xl font-bold text-center p-5">Players</h1>
        <div class="flex flex-row justify-end items-center mr-10">
            <p class="px-5">Filter: </p>
            <select id="dropdown" v-model="selectedFilter" @change="filterSelected">
                <option disabled value="">-- Select a filter --</option>
                <!-- <option value="name">name</option>
                <option value="surname">surname</option> -->
                <option value="club">club</option>
                <option value="position">position</option>
                <option value="country">country</option>
            </select>
        </div>

        <div class="flex flex-row justify-end items-center mr-10">
            <p class="px-5"></p>
            <select id="dropdown" v-model="selectedFilter2" v-if="selectedFilter" @change="filter2Selected">
                <option disabled value="">-- Select a filter --</option>
                <option v-for="unique in uniqueValues" :key="unique">{{ unique }}</option>
            </select>
        </div>

        <div v-if="selectedFilter && selectedFilter2" class="grid grid-cols-3 gap-6 py-4 mx-5">
            <PlayerCard v-for="player in filteredPlayers" :key="player.id" :player="player" />
        </div>
        <div v-else class="grid grid-cols-3 gap-6 py-4 mx-5">
            <PlayerCard v-for="player in players" :key="player.id" :player="player" />
        </div>
        <!-- <div v-if="!showMorePlayers" class="flex flex-row justify-center items-center">
            <button @click="loadMorePlayers" class="rounded-md bg-blue-500 p-3 font-bold text-center hover:bg-blue-600 text-white">
                Load more players
            </button>
        </div>
        <div v-else class="flex flex-row justify-center items-center">
            <button @click="loadLessPlayers" class="rounded-md bg-blue-500 p-3 mb-5 font-bold text-center hover:bg-blue-600 text-white">
                Load less players
            </button>
        </div> -->
    </section>
</template>