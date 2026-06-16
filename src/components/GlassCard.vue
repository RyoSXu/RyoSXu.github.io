<template>
  <div 
    class="spotlight-wrapper group will-change-transform" 
    @mousemove="handleMouseMove" 
    @mouseleave="handleMouseLeave"
    ref="cardRef"
    :style="cardStyle"
  >
    <!-- Multi-layered glass panel -->
    <div class="glass-panel relative p-3 h-full flex flex-col">
      
      <!-- Glass Background Layer -->
      <div class="absolute inset-0 rounded-2xl overflow-hidden bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.4)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.05)] group-hover:bg-white/20 dark:group-hover:bg-white/10 transition-colors duration-500 pointer-events-none">
        <!-- Inner glare/sheen -->
        <div class="absolute inset-0 bg-gradient-to-br from-white/30 dark:from-white/10 via-white/5 dark:via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
        <!-- Spotlight Effect -->
        <div class="spotlight-effect absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none w-[1000px] h-[1000px] left-0 top-0" style="transform: translate3d(calc(var(--mouse-x, 0px) - 500px), calc(var(--mouse-y, 0px) - 500px), 0);"></div>
      </div>
      
      <!-- Content wrapper -->
      <div class="relative z-10 flex flex-col h-full">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const cardRef = ref<HTMLElement | null>(null)
const mousePos = ref({ x: 0, y: 0 })
const isHovered = ref(false)
let ticking = false

const handleMouseMove = (e: MouseEvent) => {
  if (!cardRef.value) return
  isHovered.value = true
  
  if (!ticking) {
    window.requestAnimationFrame(() => {
      if (!cardRef.value || !isHovered.value) {
        ticking = false
        return
      }
      const rect = cardRef.value.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      cardRef.value.style.setProperty('--mouse-x', `${x}px`)
      cardRef.value.style.setProperty('--mouse-y', `${y}px`)

      // Calculate tilt percentages (-0.5 to 0.5)
      mousePos.value = {
        x: (x / rect.width) - 0.5,
        y: (y / rect.height) - 0.5
      }
      ticking = false
    })
    ticking = true
  }
}

const handleMouseLeave = () => {
  isHovered.value = false
  mousePos.value = { x: 0, y: 0 }
}

const cardStyle = computed(() => {
  if (!isHovered.value) {
    return {
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
    }
  }
  // Max rotation angles
  const rotateX = mousePos.value.y * -4 // Subtle tilt
  const rotateY = mousePos.value.x * 4
  return {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    transition: 'transform 0s'
  }
})
</script>
