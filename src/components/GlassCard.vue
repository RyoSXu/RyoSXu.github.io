<template>
  <div 
    class="spotlight-wrapper group" 
    @mousemove="handleMouseMove" 
    @mouseleave="handleMouseLeave"
    ref="cardRef"
    :style="cardStyle"
  >
    <!-- Multi-layered glass panel -->
    <div class="glass-panel relative overflow-hidden bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.4)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.05)] transition-colors duration-500 p-6 h-full flex flex-col group-hover:bg-white/20 dark:group-hover:bg-white/10">
      
      <!-- Inner glare/sheen -->
      <div class="absolute inset-0 bg-gradient-to-br from-white/30 dark:from-white/10 via-white/5 dark:via-transparent to-transparent opacity-40 pointer-events-none group-hover:opacity-70 transition-opacity duration-500"></div>
      
      <!-- Content wrapper -->
      <div class="relative z-10 flex flex-col h-full" style="transform: translateZ(10px);">
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

const handleMouseMove = (e: MouseEvent) => {
  if (!cardRef.value) return
  isHovered.value = true
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
}

const handleMouseLeave = () => {
  isHovered.value = false
  mousePos.value = { x: 0, y: 0 }
}

const cardStyle = computed(() => {
  if (!isHovered.value) {
    return {
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
    }
  }
  // Max rotation angles
  const rotateX = mousePos.value.y * -4 // Subtle tilt
  const rotateY = mousePos.value.x * 4
  return {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`,
    transition: 'transform 0.1s ease-out'
  }
})
</script>
