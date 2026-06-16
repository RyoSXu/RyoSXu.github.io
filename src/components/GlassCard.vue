<template>
  <div class="spotlight-wrapper group">
    <!-- Multi-layered glass panel -->
    <div class="glass-panel relative p-3 h-full flex flex-col">
      
      <!-- Glass Background Layer -->
      <div class="absolute inset-0 rounded-2xl overflow-hidden bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.4)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.05)] group-hover:bg-white/20 dark:group-hover:bg-white/10 transition-colors duration-500 pointer-events-none">
        <!-- Inner glare/sheen -->
        <div class="absolute inset-0 bg-gradient-to-br from-white/30 dark:from-white/10 via-white/5 dark:via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
      </div>
      
      <!-- Content wrapper -->
      <div class="relative z-10 flex flex-col h-full">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Simplified GlassCard without 3D tilt or spotlight tracking
</script>

<style scoped>
.spotlight-wrapper {
  position: relative;
  height: 100%;
}

.glass-panel {
  border-radius: 1rem;
}
</style>
