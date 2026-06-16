<template>
  <div 
    class="spotlight-wrapper group" 
    @mousemove="handleMouseMove" 
    ref="cardRef"
  >
    <div class="glass-panel relative overflow-hidden bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-colors duration-500 p-6 h-full flex flex-col">
      <!-- Glow effect inside card -->
      <div class="absolute inset-0 bg-gradient-to-br from-white/40 dark:from-white/10 to-transparent opacity-50 pointer-events-none"></div>
      
      <!-- Content wrapper to stay above the glow -->
      <div class="relative z-10 flex flex-col h-full">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const cardRef = ref<HTMLElement | null>(null)

const handleMouseMove = (e: MouseEvent) => {
  if (!cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  cardRef.value.style.setProperty('--mouse-x', `${x}px`)
  cardRef.value.style.setProperty('--mouse-y', `${y}px`)
}
</script>
