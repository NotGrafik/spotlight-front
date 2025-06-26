<script setup lang="ts">

import { defineProps } from "vue";

import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

const props = defineProps<{
    events: Array<{
        name: string;
        img: string;
        startDate: Date;
        endDate?: Date;
        address: string;
    }>;
}>();

const plugin = Autoplay({
    delay: 3000,
    stopOnMouseEnter: true,
    stopOnInteraction: false,
});
</script>

<template>
    <Carousel
        class="relative w-full h-56"
        :plugins="[plugin]"
        @mouseenter="plugin.stop"
        @mouseleave="[plugin.reset(), plugin.play(), console.log('Running')]"
    >
        <CarouselContent>
            <CarouselItem v-for="event in events" :key="event.name" class="h-56">
                <Card
                    class="h-48 py-0"
                    :style="`background-image: url('${event.img}'); background-size: cover; background-position: center; min-height: 100%;`"
                >
                    <CardContent class="flex aspect-square items-center justify-center p-6 h-full">
                        <div class="w-full text-white bg-opacity-50 p-2 rounded">
                            <h2 class="text-lg font-bold ">{{ event.name }}</h2>
                        </div>
                    </CardContent>
                </Card>
            </CarouselItem>
        </CarouselContent>
    </Carousel>
</template>
