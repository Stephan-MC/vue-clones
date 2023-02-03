<template layout="airbnb/default">
    <div class="px-6 flex gap-2">
        <IconLink title="Tropical" :icon="faPagelines" />
        <IconLink title="OMG!" :icon="faRocket" />
        <IconLink title="Amazing pools" :icon="faWaterLadder" />
        <IconLink title="Arctic" :icon="faPagelines" />
        <IconLink title="Private rooms" :icon="faPagelines" />
        <IconLink title="Ski-in/out" :icon="faPagelines" />
    </div>
    <div
        class="grid airbnb-tablet:grid-cols-2 airbnb-laptop:grid-cols-3 airbnb-desktop:grid-cols-4 px-6 gap-6 mt-4"
    >
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
    </div>
</template>

<script setup lang="ts">
import IconLink from "@components/airbnb/icon-link.vue";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";
import { faRocket, faWaterLadder } from "@fortawesome/free-solid-svg-icons";
import RoomCard from "@components/airbnb/RoomCard.vue";
</script>

<style lang="scss" scoped></style>
