<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="relative w-full h-screen overflow-hidden">
    <video
      ref="heroVideo"
      class="absolute top-0 left-0 w-full h-full object-cover"
      autoplay
      muted
      loop
      playsinline
    >
      <source src="../assets/landing.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="relative z-10 flex items-center justify-center h-full">
      <div class="flex w-full h-screen flex-col gap-4 justify-end items-center p-6">
        <div class="flex flex-col items-center justify-center w-full gap-4">
          <Button class="bg-white text-black w-full"
                  @click="$router.push('/login')"
          > Se connecter
          </Button>
          <Button class="w-full">
            S'inscire
          </Button>
        </div>
      </div>
    </div>
  </div>
  
</template>
