<script setup lang="ts">
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
</script>

<template>
  <div class="overflow-x-auto pb-2" style="scrollbar-width: thin;">
  <ToggleGroup type="single" class="gap-2 flex-nowrap min-w-max">
    <ToggleGroupItem value="all" aria-label="Toggle bold" class="p-2 border-zinc-600 border rounded-lg">
      <h1 class="font-xs">Tout</h1>
    </ToggleGroupItem>
    <ToggleGroupItem value="hip-hop" aria-label="Toggle bold" class="p-4 border-zinc-600 border rounded-lg">
      <h1 class="font-xs ">Hip-Hop</h1>
    </ToggleGroupItem>
    <ToggleGroupItem value="rock" aria-label="Toggle bold" class="p-2 border-zinc-600 border rounded-lg">
      <h1 class="font-xs">Rock</h1>
    </ToggleGroupItem>
    <ToggleGroupItem value="jazz" aria-label="Toggle bold" class="p-2 border-zinc-600 border rounded-lg">
      <h1 class="font-xs">Jazz</h1>
    </ToggleGroupItem>
    <ToggleGroupItem value="electro" aria-label="Toggle bold" class="p-4 border-zinc-600 border rounded-lg">
      <h1 class="font-xs">Electro</h1>
    </ToggleGroupItem>
    <ToggleGroupItem value="pop" aria-label="Toggle bold" class="p-2 border-zinc-600 border rounded-lg">
      <h1 class="font-xs">Pop</h1>
    </ToggleGroupItem>
    <ToggleGroupItem value="classical" aria-label="Toggle bold" class="p-4 border-zinc-600 border rounded-lg">
      <h1 class="font-xs">Classique</h1>
    </ToggleGroupItem>
    <ToggleGroupItem value="reggae" aria-label="Toggle bold" class="p-4 border-zinc-600 border rounded-lg">
      <h1 class="font-xs">Reggae</h1>
    </ToggleGroupItem>
  </ToggleGroup>
</div>
</template>