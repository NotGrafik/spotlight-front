<script setup lang=ts>

import { defineProps } from 'vue';
import { MapPin, Heart } from 'lucide-vue-next';

const props = defineProps<{
    event: {
        name: string;
        img: string;
        start_date: Date;
        end_date?: Date;
        address: string;
    };
}>();

const likeElement = () => {
    console.log(`Liked event: ${props.event.name}`);
    const heart = document.getElementById(props.event.name + '_heart');
    if (heart) {
        heart.classList.toggle('fill-red-500');
    }

};

</script>
<template>

    <div class="flex w-full bg-red-50 h-28 relative">
        <div class="w-1/3 h-full">
            <img :src="props.event.img" alt="Event Image" class="w-full h-full object-cover">
        </div>
        <div class="w-full pl-2 text-sm flex flex-col justify-between">
            <div class="flex flex-col font-clash w-3/4" >
                <h2 class="text-base font-bold">{{ props.event.name }}</h2>
                <Heart :id="props.event.name + '_heart'" class="absolute top-4 right-4 size-4 text-red-500 cursor-pointer" @click="likeElement" />
                <div class="flex font-medium">
                    <p>
                        {{ new Date(props.event.start_date).toLocaleString('fr-FR', { day:"2-digit", month: 'long' }) }}
                    </p>
                    <p v-if="props.event.end_date">
                        - 
                        {{ new Date(props.event.end_date || "").toLocaleString('fr-FR', { day:"2-digit", month: 'long' }) }}

                    </p>
                </div>
            </div>
            <div class="flex gap-2">
                <MapPin class="size-4" />
                {{ props.event.address }}
            </div>
        </div>  
    </div>

</template>