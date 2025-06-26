<script setup lang="ts">
import EventCard from "@/components/EventCard.vue";

let events = [
    {
        name: "Vue.js Conference 2024",
        img: "https://example.com/vue-conference.jpg",
        start_date: new Date("2024-05-15T09:00:00Z"),
        end_date: new Date("2024-05-17T17:00:00Z"),
        address: "123 Vue St, Framework City",
    },
    {
        name: "JavaScript Summit 2024",
        img: "https://example.com/js-summit.jpg",
        start_date: new Date("2024-06-10T10:00:00Z"),
        end_date: new Date("2024-06-12T16:00:00Z"),
        address: "456 JS Ave, Tech Town",
    },
    {
        name: "Frontend Masters Workshop",
        img: "https://example.com/frontend-masters.jpg",
        start_date: new Date("2024-07-20T08:30:00Z"),
        address: "789 Dev Blvd, Code City",
    },
];
</script>

<template>
    <div class="flex flex-col items-center justify-center w-full h-screen p-6 bg-foreground">
        <div class="flex flex-col items-center justify-center w-full">
            <h1 class="text-3xl font-bold text-primary-foreground mb-6">Upcoming Events</h1>
            <div class="flex flex-col items-center justify-center w-full gap-4">
                <EventCard v-for="event in events" :key="event.name" :event="event" />
            </div>
        </div>
    </div>
</template>
