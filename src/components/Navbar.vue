<script setup lang="ts">

import { House, Heart, Users } from 'lucide-vue-next';

</script>

<template>
    <nav class="flex items-center justify-between p-4 bg-primary text-primary-foreground">
        <div class="flex items-center space-x-4">
            <a href="/" class="flex flex-col items-center text-lg font-bold">
                <House class="size-6 mr-2" />
                Home
            </a>
            <a href="/events" class="flex flex-col items-center text-lg font-bold">
                <Users class="size-6 mr-2" />
                Events
            </a>
        </div>
    </nav>
</template>