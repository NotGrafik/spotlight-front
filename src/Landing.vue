<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="flex w-full h-screen flex-col justify-end items-center" style="background-image: url('src/assets/background.png'); background-size: cover;">
    <div class="flex flex-col items-center justify-center w-[85%] mb-12 gap-4">
      <Button class="bg-white text-black w-full"
              @click="$router.push('/login')"
      > Se connecter
      </Button>
      <Button class="w-full">
        S'inscire
      </Button>
    </div>
  </div>
</template>
