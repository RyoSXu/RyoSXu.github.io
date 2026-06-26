<template>
  <div class="py-12 px-4 max-w-7xl mx-auto min-h-[80vh]">
    <div class="mb-6">
      <router-link to="/tools" class="inline-flex items-center text-slate-500 hover:text-teal-600 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="m15 18-6-6 6-6"/></svg>
        返回工具集
      </router-link>
    </div>
    
    <ImageTracer />
  </div>
</template>

<script setup lang="ts">
import ImageTracer from '../../components/tools/ImageTracer.vue'
</script>
