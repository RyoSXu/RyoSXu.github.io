<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { Sun, Moon, Home, User, Wrench } from 'lucide-vue-next'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const route = useRoute()

const navItems = [
  { name: '主页', path: '/', icon: Home },
  { name: '简介', path: '/about', icon: User },
  { name: '工具', path: '/tools', icon: Wrench },
]

const transitionName = ref('slide-forward')

watch(() => route.path, (to, from) => {
  const toIndex = navItems.findIndex(item => item.path === to)
  const fromIndex = navItems.findIndex(item => item.path === from)
  // If moving right (e.g. index 0 -> 1)
  transitionName.value = toIndex > fromIndex ? 'slide-forward' : 'slide-backward'
})
</script>

<template>
  <div class="min-h-screen text-slate-800 dark:text-gray-200 relative overflow-hidden pb-32 transition-colors duration-500">
    <!-- Ambient Fixed Background -->
    <div class="fixed inset-0 z-0 pointer-events-none transition-colors duration-500 bg-slate-100 dark:bg-[#0b0c10]">
      <div class="absolute inset-0 opacity-50 dark:opacity-40">
        <div class="blob bg-blue-300/60 dark:bg-blue-600/60 w-[70vw] h-[70vw] top-[-20%] left-[-10%]" style="animation-duration: 12s;"></div>
        <div class="blob bg-purple-300/60 dark:bg-purple-600/60 w-[60vw] h-[60vw] top-[10%] right-[-10%]" style="animation-delay: -3s; animation-duration: 15s;"></div>
        <div class="blob bg-teal-200/60 dark:bg-emerald-600/50 w-[70vw] h-[70vw] bottom-[-20%] left-[0%]" style="animation-delay: -7s; animation-duration: 18s;"></div>
        <div class="blob bg-amber-200/50 dark:bg-amber-600/40 w-[60vw] h-[60vw] bottom-[10%] right-[10%]" style="animation-delay: -11s; animation-duration: 14s;"></div>
      </div>
    </div>

    <!-- Top Navigation Bar -->
    <nav class="fixed top-0 left-0 right-0 z-50 mt-6 no-print pointer-events-none px-4 sm:px-6">
      <div class="relative max-w-5xl mx-auto flex items-center justify-center">
        <!-- Tab Bar -->
        <div class="pointer-events-auto flex items-center gap-1 md:gap-2 p-1.5 glass-liquid rounded-2xl shadow-lg dark:shadow-none transition-colors duration-500">
          <router-link 
            v-for="item in navItems" 
            :key="item.path" 
            :to="item.path"
            class="relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium btn-jelly"
            :class="[
              route.path === item.path || (item.path !== '/' && route.path.startsWith(item.path + '/'))
                ? 'text-blue-600 dark:text-blue-400 bg-white/50 dark:bg-white/10 shadow-sm' 
                : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/20 dark:hover:bg-white/5'
            ]"
          >
            <component :is="item.icon" class="w-4 h-4" />
            <span class="hidden sm:inline">{{ item.name }}</span>
          </router-link>
        </div>
        
        <!-- Theme Toggle -->
        <button @click="toggleDark()" class="pointer-events-auto fixed right-6 top-6 p-3 glass-liquid rounded-2xl shadow-lg dark:shadow-none text-slate-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-white/10 btn-jelly focus:outline-none flex items-center justify-center z-50">
          <Sun v-if="isDark" class="w-4 h-4 md:w-5 md:h-5" />
          <Moon v-else class="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>
    </nav>

    <!-- Main Content Route View -->
    <div class="max-w-5xl mx-auto px-4 sm:px-6 pt-28 z-10">
      <div class="relative w-full">
        <router-view v-slot="{ Component }">
          <transition :name="transitionName">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
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

/* Page Transitions */
.slide-forward-enter-active,
.slide-forward-leave-active,
.slide-backward-enter-active,
.slide-backward-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}

.slide-forward-leave-active,
.slide-backward-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.slide-forward-enter-from {
  opacity: 0;
  transform: translateX(40px);
}
.slide-forward-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}

.slide-backward-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}
.slide-backward-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
</style>
