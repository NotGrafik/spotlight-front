<script setup lang="ts">
import EventCard from "@/components/EventCard.vue";
import { onMounted, ref } from "vue";

let events = ref([]);

onMounted(() => {
    fetch('/api/events/toulouse')
        .then(response => response.json())
        .then(data => {
            events.value = data;
            console.log('Events fetched successfully:', events.value);
        })
        .catch(error => {
            console.error('Error fetching events:', error);
        });

});

</script>

<template>
    <div class="flex flex-col items-center justify-center w-full h-screen p-6 bg-foreground">
        <div class="flex flex-col items-center w-full overflow-y-auto">
            <h1 class="text-3xl font-bold text-primary-foreground mb-6">Upcoming Events</h1>
            <div class="flex flex-col items-center justify-center w-full gap-4">
                <EventCard v-for="event in events"  :event="event" />
            </div>
        </div>
    </div>
</template>
