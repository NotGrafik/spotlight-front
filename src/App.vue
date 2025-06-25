<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="flex w-full h-screen flex-col justify-end items-center" style="background-image: url('src/assets/background.png'); background-size: cover;">
    <div class="flex flex-col items-center justify-center w-[85%] mb-12 gap-4">
      <Button class="bg-white text-black w-full"> Se connecter
      </Button>
      <Button class="w-full">
        S'inscire
      </Button>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
