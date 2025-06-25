<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue'
</script>

<template>
  <div
    class="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10"
    style="background-image: url('src/assets/background.png'); background-size: cover;"
  >
    <div class="flex flex-col items-center justify-center w-full">
      <LoginForm class="w-full" />
    </div>
  </div>
</template>
