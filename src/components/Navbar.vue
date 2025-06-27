<script setup lang="ts">
import { ref } from 'vue';
import { House, Heart, User } from 'lucide-vue-next';
import Spotlight from '@/assets/spotlight.svg';

import { goToPage } from '@/lib/utils';

const lastVisitedPage = ref(localStorage.getItem('lastVisitedPage') || 'events');

</script>

<template>
  <nav class="fixed bottom-0 left-0 right-0 bg-black border-t border-zinc-600 text-white py-3 pb-6 px-6 rounded-t-2xl shadow-lg h-24">
    <div class="grid grid-cols-4 gap-4">
      <button @click="goToPage('home')" :class="'flex justify-center flex-col gap-1 items-center text-xs' + (lastVisitedPage === 'home' ? ' text-red-500' : ' text-muted-foreground')">
        <House class="w-6 h-6" />
        <span v-if="lastVisitedPage === 'home'">Events</span>
      </button>
      <button @click="goToPage('map')" :class="'flex justify-center flex-col gap-1 items-center text-xs' + (lastVisitedPage === 'map' ? ' text-red-500' : ' !fill-muted-foreground text-muted-foreground')">
        <Spotlight class="w-6 h-6 p-0.5" :class="(lastVisitedPage === 'map' ? ' !fill-red-500' : ' !fill-muted-foreground text-muted-foreground')" />
        <span v-if="lastVisitedPage === 'map'">Map</span>
      </button>
      <button @click="goToPage('favorites')" :class="'flex justify-center flex-col gap-1 items-center text-xs' + (lastVisitedPage === 'favorites' ? ' text-red-500' : ' text-muted-foreground')">
        <Heart class="w-6 h-6" />
        <span v-if="lastVisitedPage === 'favorites'">Favs</span>
      </button>
      <button @click="goToPage('profile')" :class="'flex justify-center flex-col gap-1 items-center text-xs' + (lastVisitedPage === 'profile' ? ' text-red-500' : ' text-muted-foreground')">
        <User class="w-6 h-6" />
        <span v-if="lastVisitedPage === 'profile'">Profile</span>
      </button>
    </div>
  </nav>
</template>
