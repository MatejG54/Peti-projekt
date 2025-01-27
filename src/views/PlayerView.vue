<script setup>
import { useRoute, useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { useCounterStore } from '@/stores/counter';
import {data} from '@/storage';

const route = useRoute();
const router = useRouter();

const counterStore = useCounterStore();

const playerId = route.params.id;

const getPlayer = (playerId) => {
    return new Promise(resolve => {
        // console.log(typeof(playerId))
        // console.log(typeof(data.players[0].id))
        const player = data.players.find(p => p.id === playerId) || null;
        resolve(player);
    })
}
const p = ref({});

onMounted(async () => {
    p.value = await getPlayer(playerId);
})

// const player = ref(data.players.find(p => p.id === playerId));

// onMounted(async () => {
//     try {
//         const response = await fetch(`/api/players/${playerId}`,{
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         player.value = await response.json();
//         console.log(player.value)
//     } catch (error) {
//         console.log("Error fetching player", error)
//     }
// })

// const removePlayer = async () => {
//     try {
//         await fetch(`/api/players/${playerId}`, {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         router.push('/players');

//     } catch (error) {
//         console.log("Error deleting player", error);        
//     }
// }

const removePlayer = (playerId) => {
    return new Promise(resolve => {
        // console.log(playerId)
        // console.log(data.players[0].id)
        const updatedPlayers = data.players.filter(p => p.id !== playerId);
        data.players = updatedPlayers;
        resolve(data);
    })
}

const handleRemovePlayer = async () => {
    await removePlayer(playerId);
    counterStore.decrement();
    router.push('/players');
}

</script>

<template>
    <section class="flex flex-col justify-center items-center mt-5">
        <div class="bg-gray-100 text-center rounded-md p-4 mb-4 flex flex-col justify-center items-center border-2 w-96">
            <h2 class="font-bold text-xl">
                {{ p.name + ' ' + p.surname }}
            </h2>
            <h3>
                club: {{ p.club }}
            </h3>
            <h3>
                position: {{ p.position }}
            </h3>
            <h3>
                country: {{ p.country }}
            </h3>
            <button @click="handleRemovePlayer" class="bg-blue-500 text-center text-white font-bold hover:bg-blue-600 p-2 m-2 rounded-md">
                Remove player
            </button>
        </div>
    </section>
</template>