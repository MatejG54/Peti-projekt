import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import {data} from '@/storage';

// const players = ref([]);

// const getPlayers = () => {
//   return new Promise(resolve => {
//       resolve(data.players);
//   })
// }

// onMounted(async () => {
//   players.value = await getPlayers();
// })

export const useCounterStore = defineStore('counter', () => {
  const count = ref(data.players.length)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  function decrement() {
    count.value--
  }

  return { count, doubleCount, increment, decrement }
})
