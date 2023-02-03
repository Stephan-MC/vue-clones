<template>
    <div>
        <div class="relative">
            <img
                src="/storage/images/airbnb-room.png"
                class="aspect-square rounded-2xl"
            />
            <button class="absolute top-5 right-4">
                <FontAwesome :icon="faHeart" class="h-5" />
            </button>
            <div class="flex flex-col py-2">
                <div class="flex justify-between">
                    <span class="font-bold text-lg">Salobreña, Spain</span>
                    <span>⭐ 4.67</span>
                </div>
                <div class="flex flex-col gap-0 text-gray-400 text-base">
                    <span class="leading-none">4,736 kilometers away</span>
                    <span>Jan 13 - 19</span>
                </div>
                <div class="mt-2 flex gap-1 items-center">
                    <span class="font-bold text-black">$345</span>
                    <span class="font-light text-base text-black">night</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

library.add(faHeart);
</script>
