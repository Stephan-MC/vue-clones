<template>
    <Navbar />
    <div class="container mx-auto">
        <slot />
    </div>
</template>

<script setup lang="ts">
import Navbar from "@components/airbnb/navbar.vue";
</script>

<style scoped></style>
