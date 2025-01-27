<script setup>
    import { defineProps } from 'vue';

    defineProps({
        title: {
            type: String,
            default: 'Welcome to the football leagues'
        },
        subtitle: {
          type: String,
          default: 'Explore the leagues and players'
        }
    });
</script>

<template>
    <section class="bg-blue-600 mb-4 py-5">
    <div class="flex flex-col items-center max-w-7xl mx-auto text-center">
        <!-- <div class="text-center"> -->
            <h1 class="custom-title">
                {{ title }}
            </h1>
            <p class="my-4 text-xl text-white">
                {{ subtitle }}
            </p>
        </div>
    <!-- </div> -->
    </section>
</template>

<style scoped>
.custom-title {
  font-size: 1.875rem; 
  font-weight: 700;   
  color: white;
}
</style>
