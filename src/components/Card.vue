<script setup>
import { defineProps } from 'vue';

defineProps({
    bg: {
        type: String,
        default: 'bg-blue-400'
    }
});
</script>

<template>
    <div :class="`${bg} rounded-lg p-10 mx-10 text-white`">
        <slot></slot>
    </div>
</template>