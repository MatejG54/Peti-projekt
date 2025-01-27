<script setup>
import { reactive } from 'vue';
import router from '@/router';
import { useCounterStore } from '@/stores/counter';

import {data} from '@/storage';

const counterStore = useCounterStore();

const form = reactive({
    name: "",
    surname: "",
    club: "",
    position: "midfielder",
    country: ""
});

const resetForm = () => {
    form.name = "";
    form.surname = "";
    form.club = "";
    form.position = "midfielder"; 
    form.country = "";
}

// const handleSubmit = async () => {
//     const newPlayer = {
//         name: form.name,
//         surname: form.surname,
//         club: form.club,
//         position: form.position,
//         country: form.country
//     }

//     try {
//         const response = await fetch(`/api/players`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(newPlayer)
//         });

//         resetForm();
        
//     } catch (error) {
//         console.log("Error fetching id", error)
//     }
// }

const addNewPlayer = (newP) => {
    return new Promise(resolve => {
        console.log(data.players)
        data.players.push(newP);
        console.log(data.players)
        resolve(data);
    })
}

const handleSubmit = async () => {
    const newPlayer = {
        id: String(counterStore.count + 1),
        name: form.name,
        surname: form.surname,
        club: form.club,
        position: form.position,
        country: form.country
    }

    await addNewPlayer(newPlayer);
    resetForm();
    counterStore.increment();
}
</script>

<template>
    <section>
      <div class="container m-auto max-w-2xl py-24">
        <div
          class="bg-gray-200 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form @submit.prevent="handleSubmit">
            <h2 class="text-3xl text-center font-bold mb-6">Add Player</h2>

            <div class="mb-4">
              <label for="type" class="block text-gray-700 font-bold mb-2"
                >Name</label
              >
              <input
                v-model="form.name"
                type="text"
                id="name"
                name="name"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Alfredo"
                required
              />
            </div>

            <div class="mb-4">
              <label for="type" class="block text-gray-700 font-bold mb-2"
                >Surname</label
              >
              <input
                v-model="form.surname"
                type="text"
                id="surname"
                name="surname"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Di Stefano"
                required
              />
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2"
                >Club</label
              >
              <input
                v-model="form.club"
                type="text"
                id="club"
                name="club"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Energetik-BGU"
                required
              />
            </div>

            <div class="mb-4">
              <label
                for="position"
                class="block text-gray-700 font-bold mb-2"
                >Position</label
              >
              <select
                v-model="form.position"
                id="position"
                name="position"
                class="border rounded w-full py-2 px-3"
                required
              >
                <option value="midfielder">midfielder</option>
                <option value="defender">defender</option>
                <option value="forward">forward</option>
                <option value="goalkeeper">goalkeeper</option>
            </select>
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2">
                Country
              </label>
              <input
                v-model="form.country"
                type="text"
                id="country"
                name="country"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Kosovo"
                required
              />
            </div>

            <div>
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Player
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
</template>