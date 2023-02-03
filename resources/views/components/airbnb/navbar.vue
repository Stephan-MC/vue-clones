<template>
    <header class="container mx-auto flex flex-col px-8 h-52">
        <div class="flex items-center justify-center flex-grow">
            Show total prices up front.&nbsp;<a href="" class="underline"
                >Learn more</a
            >
        </div>

        <nav class="flex justify-between items-center sticky top-0 flex-grow">
            <a href="" class="text-pink-500"><Logo /></a>
            <div
                class="flex gap-14 items-center justify-center border rounded-full border-gray-400/40 p-2 shadow"
            >
                <button class="font-bold">Anywhere</button>
                <button class="font-bold">Any week</button>
                <button class="flex items-center justify-center gap-2">
                    <span>Add Guest</span>
                    <div
                        class="bg-airbnb-pink h-10 aspect-square flex items-center justify-center rounded-full"
                    >
                        <FontAwesome :icon="faMagnifyingGlass" />
                    </div>
                </button>
            </div>
            <div class="flex gap-8 items-center">
                <span>Airbnb your home</span>
                <button class="flex items-center justify-center">
                    <FontAwesome :icon="faGlobe" class="h-4" />
                </button>
                <div class="flex gap-5 items-center">
                    <button class="flex items-center justify-center">
                        <fontAwesome :icon="faBars" class="h-4" />
                    </button>
                    <button class="flex items-center justify-center">
                        <fontAwesome :icon="faCircleUser" class="h-8" />
                    </button>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
import Logo from "@components/airbnb/logo.vue";
import {
    faGlobe,
    faMagnifyingGlass,
    faBars,
    faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faGlobe, faMagnifyingGlass, faBars, faCircleUser);
</script>

<style scoped></style>
