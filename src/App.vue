<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { Sun, Moon } from 'lucide-vue-next'
import About from './views/About.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="min-h-screen text-slate-800 dark:text-gray-200 relative overflow-x-hidden pb-24 transition-colors duration-500">
    <!-- Ambient Fixed Background -->
    <div class="fixed inset-0 z-0 pointer-events-none transition-colors duration-500 bg-slate-100 dark:bg-[#0b0c10]">
      <div class="absolute inset-0 opacity-50 dark:opacity-40">
        <div class="blob bg-blue-300/60 dark:bg-blue-600/60 w-[70vw] h-[70vw] top-[-20%] left-[-10%]" style="animation-duration: 12s;"></div>
        <div class="blob bg-purple-300/60 dark:bg-purple-600/60 w-[60vw] h-[60vw] top-[10%] right-[-10%]" style="animation-delay: -3s; animation-duration: 15s;"></div>
        <div class="blob bg-teal-200/60 dark:bg-emerald-600/50 w-[70vw] h-[70vw] bottom-[-20%] left-[0%]" style="animation-delay: -7s; animation-duration: 18s;"></div>
        <div class="blob bg-amber-200/50 dark:bg-amber-600/40 w-[60vw] h-[60vw] bottom-[10%] right-[10%]" style="animation-delay: -11s; animation-duration: 14s;"></div>
      </div>
    </div>

    <button
      @click="toggleDark()"
      class="fixed right-4 top-4 sm:right-6 sm:top-6 p-3 glass-liquid rounded-2xl shadow-lg dark:shadow-none text-slate-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-white/10 btn-jelly focus:outline-none flex items-center justify-center z-50 no-print"
      aria-label="切换深色模式"
    >
      <Sun v-if="isDark" class="w-4 h-4 md:w-5 md:h-5" />
      <Moon v-else class="w-4 h-4 md:w-5 md:h-5" />
    </button>

    <main class="relative max-w-5xl mx-auto px-4 sm:px-6 pt-14 sm:pt-16 z-10">
      <About />
    </main>
  </div>
</template>

<style>
@keyframes pulse {
  0%, 100% {
    transform: scale(1) translate(0, 0);
  }
  33% {
    transform: scale(1.1) translate(30px, -50px);
  }
  66% {
    transform: scale(0.9) translate(-20px, 20px);
  }
}
.animate-pulse {
  animation: pulse 10s infinite ease-in-out;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
