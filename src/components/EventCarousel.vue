<script setup lang="ts">
import { defineProps, onMounted, ref, watch, onUnmounted } from "vue";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Heart } from 'lucide-vue-next';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

const eventName = ref('');
const emblaMainApi = ref();

const props = defineProps<{
    events: Array<{
        name: string;
        img: string;
        startDate: Date;
        endDate?: Date;
        address: string;
    }>;
}>();

onMounted(() => {
    if (props.events.length > 0) {
        eventName.value = props.events[0].name; // Initialiser avec le premier événement
    }
});

const plugin = Autoplay({
    delay: 3000,
    stopOnMouseEnter: true,
    stopOnInteraction: false,
});

// Fonction pour mettre à jour le nom de l'événement
const updateEventName = (api: any) => {
    if (api && props.events.length > 0) {
        const selectedIndex = api.selectedScrollSnap();
        eventName.value = props.events[selectedIndex]?.name || '';
    }
};

// Fonction appelée quand l'API du carrousel est initialisée
const setApi = (api: any) => {
    emblaMainApi.value = api;
    if (api) {
        // Mettre à jour le nom initial
        updateEventName(api);
        
        // Écouter les changements de slide
        api.on('select', () => {
            updateEventName(api);
        });
    }
};

onMounted(() => {
    // Initialiser avec le premier événement si disponible
    if (props.events.length > 0) {
        eventName.value = props.events[0].name;
    }
});

onUnmounted(() => {
    // Nettoyer les listeners
    if (emblaMainApi.value) {
        emblaMainApi.value.off('select');
    }
});
</script>

<template>
    <Carousel
        class="relative w-full h-56"
        :plugins="[plugin]"
        @init-api="setApi"
        @mouseenter="plugin.stop"
        @mouseleave="[plugin.reset(), plugin.play(), console.log('Running')]"
    >
        <CarouselContent>
            <CarouselItem v-for="event in events" :key="event.name" class="h-56">
                <Card
                    class="h-48 py-0"
                    :style="`background-image: url('${event.img}'); background-size: cover; background-position: center; min-height: 100%;`"
                >
                    <!-- <CardContent class="flex aspect-square items-center justify-center p-6 h-full">
                        <div class="w-full text-white bg-opacity-50 p-2 rounded">
                            <h2 class="text-lg font-bold">{{ event.name }}</h2>
                        </div>
                    </CardContent> -->
                </Card>
            </CarouselItem>
        </CarouselContent>
    </Carousel>
    <div class="flex flex-row justify-start items-center w-full my-4 gap-1">
        <MapPin class="size-6 text-white" />
        <h1 class="text-white text-xs font-bold">{{ eventName }}</h1>
    </div>
</template>