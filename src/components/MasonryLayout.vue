<template>
  <div class="columns-1 md:columns-2 gap-6 space-y-6">
    <div 
      v-for="(item, index) in items" 
      :key="index"
      class="break-inside-avoid mb-6"
    >
      <slot :item="item" :index="index"></slot>
    </div>
  </div>
</template>

<script setup lang="ts" generic="T">
defineProps<{
  items: T[]
}>()
</script>
