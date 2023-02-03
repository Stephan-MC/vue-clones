<template>
    <button
        class="flex flex-col items-center justify-center gap-3 p-2 hover:text-slate-900 hover:font-semibold"
        :class="{
            'font-semibold border-b border-black text-black': active,
            'text-gray-700': !active,
        }"
    >
        <FontAwesome :icon="icon" class="h-5" />
        <span v-html="title" class="text-sm"></span>
    </button>
</template>

<script lang="ts" setup>
import { library, IconDefinition } from "@fortawesome/fontawesome-svg-core";
interface IconLink {
    title: string;
    active?: boolean;
    icon: IconDefinition;
}
defineProps<IconLink>();
</script>
