<template>
    <div v-if="side === 'left'"
        class="opacity-0 absolute top-[50%] -translate-y-1/2 transition-all duration-300 z-1 left-2 translate-x-2 -rotate-90 group-hover:opacity-100 group-hover:-translate-x-2">
        <LeafIcon />
        <LeafIcon class="-translate-y-3.5 -translate-x-2.5 -rotate-90 w-5 h-5" />
    </div>

    <div v-else
        class="opacity-0 absolute top-[50%] -translate-y-1/2 transition-all duration-300 z-1 right-2 -translate-x-2 rotate-90 group-hover:opacity-100 group-hover:translate-x-2">
        <LeafIcon />
        <LeafIcon class="-translate-y-3.5 -translate-x-2.5 -rotate-90 w-5 h-5" />
    </div>
</template>


<script setup>
import LeafIcon from './LeafIcon.vue'

defineProps({
    side: {
        type: String,
        required: true,
        validator: v => ['left', 'right'].includes(v)
    }
})
</script>
