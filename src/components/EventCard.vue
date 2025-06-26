<script setup lang=ts>

import { defineProps } from 'vue';
import { MapPin, Heart } from 'lucide-vue-next';

const props = defineProps<{
    event: {
        name: string;
        img: string;
        startDate: Date;
        endDate?: Date;
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

    <div class="flex w-full text-secondary h-26 relative">
        <div class="w-26 h-26 shrink-0 overflow-hidden rounded-md">
            <img
                :src="props.event.img"
                alt="Event Image"
                class="w-full h-full object-cover"
            />
        </div>
        <div class="w-full pl-2 text-sm flex flex-col justify-between">
            <div class="flex flex-col w-4/5" >
                <h2 class="text-base font-bold">{{ props.event.name }}</h2>
                <Heart :id="props.event.name + '_heart'" class="absolute top-4 right-4 size-4 text-red-500 cursor-pointer" @click="likeElement" />
                <div class="flex font-medium">
                    <p>
                        {{ new Date(props.event.startDate).toLocaleString('fr-FR', { day:"2-digit", month: 'long' }) }}
                    </p>
                    <p v-if="props.event.endDate">
                        - 
                        {{ new Date(props.event.endDate || "").toLocaleString('fr-FR', { day:"2-digit", month: 'long' }) }}

                    </p>
                </div>
            </div>
            <div class="flex gap-2 item-center">
                <MapPin class="size-4" />
                {{ props.event.address }}
            </div>
        </div>  
    </div>

</template>