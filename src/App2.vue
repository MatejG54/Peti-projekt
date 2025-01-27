<script setup>
  // export default {
  //   data() {
  //     return {
  //       name: "John Doe",
  //       occupation: "student",
  //       status: 'active',
  //       numbers: [1, 2, 3, 4, 5],
  //       link: 'https://google.com',
  //     };
  //   },
  //   methods: {
  //     toggleStatus() {
  //       if(this.status === 'active') {
  //         this.status = 'pending'
  //       } else if(this.status === 'pending') {
  //         this.status = 'inactive'
  //       } else {
  //         this.status = 'active'
  //       }
  //     }
  //   }
  // }
  import {ref} from 'vue';

  const name = ref('John Doe');
  const occupation = 'student';
  const status = ref('active');
  const numbers = ref(['1', '2', '3']);
  const newNumber = ref('')
  const link = 'https://google.com';

  const toggleStatus = () => {
    if (status.value === 'active') {
      status.value = 'pending'
    } else if (status.value === 'pending') {
      status.value = 'inactive'
    } else {
      status.value = 'active'
    }
  };

  const addNumber = () => {
    if(newNumber.value.trim() !== '') {
      numbers.value.push(newNumber.value);
      newNumber.value = '';
    }
  };

  const deleteNumber = (index) => {
    numbers.value.splice(index, 1);
  }

</script>

<template>
  <h1>{{ name }}</h1>
  <p>{{ occupation }}</p>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <form @submit.prevent="addNumber">
    <label for="newNumber">Add Number</label>
    <input type="text" id="newNumber" name="newNumber" v-model="newNumber" />
    <button type="submit">Submit</button>
  </form>

  <h3>Numbers:</h3>
  <ul>
    <li v-for="(num, index) in numbers" :key="num">
      <span>{{ num }}</span>
      <button @click="deleteNumber(index)">x</button>
    </li>
  </ul>
  <!-- <a v-bind:href="link">Click for Google</a> -->
  <!-- <a :href="link">Click for Google</a> -->

  <hr />
  <!-- <button v-on:click="toggleStatus">Change status</button> -->
  <button @click="toggleStatus">Change status</button>

</template>

<style scoped>
h1 {
  color: red;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}

</style>