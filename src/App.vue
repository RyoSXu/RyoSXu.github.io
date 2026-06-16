<script setup lang="ts">
import { resumeData } from './data/resume'
import GlassCard from './components/GlassCard.vue'
import MasonryLayout from './components/MasonryLayout.vue'
import { Download, Mail, Phone, Github, MapPin, GraduationCap, Briefcase, Cpu, Microscope, Code2, Activity, ShoppingBag } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen relative overflow-hidden pb-32">
    <!-- Background Animated Blobs -->
    <div class="blob bg-blue-500/40 w-96 h-96 top-0 left-[-10%] mix-blend-screen"></div>
    <div class="blob bg-purple-500/40 w-96 h-96 top-[20%] right-[-10%] mix-blend-screen animation-delay-2000"></div>
    <div class="blob bg-emerald-500/30 w-80 h-80 bottom-[10%] left-[20%] mix-blend-screen animation-delay-4000"></div>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 pt-20">
      
      <!-- Header / Hero Section -->
      <header class="flex flex-col md:flex-row items-center gap-8 mb-20 relative z-10 print-break-before">
        <div class="shrink-0 relative">
          <div class="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-40"></div>
          <img :src="resumeData.avatar" alt="Avatar" class="w-40 h-40 rounded-full object-cover border-2 border-white/20 relative z-10 shadow-2xl" />
        </div>
        <div class="text-center md:text-left">
          <h1 class="text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            你好，我是 <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">{{ resumeData.name }}</span>
          </h1>
          
          <div class="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-6">
            <span v-for="kw in resumeData.keywords" :key="kw" class="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/10">
              {{ kw }}
            </span>
            <span class="flex items-center gap-1 text-gray-400 text-sm ml-2">
              <MapPin class="w-4 h-4" /> {{ resumeData.location }}
            </span>
          </div>

          <div class="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <button onclick="window.print()" class="no-print px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors shadow-lg shadow-blue-500/25 flex items-center gap-2">
              <Download class="w-4 h-4" /> 生成 PDF 简历
            </button>
            <a :href="resumeData.contact.github" target="_blank" class="no-print px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white rounded-xl font-medium transition-colors flex items-center gap-2">
              <Github class="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Left Column: Experience & Education -->
        <div class="lg:col-span-2 space-y-12">
          
          <!-- Experience -->
          <section>
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase class="w-6 h-6 text-blue-400" /> 工作经历
            </h2>
            <div class="space-y-6">
              <GlassCard v-for="exp in resumeData.experience" :key="exp.company">
                <div class="flex justify-between items-start mb-2 flex-wrap gap-2">
                  <div>
                    <h3 class="text-lg font-bold text-white">{{ exp.company }}</h3>
                    <p class="text-blue-300 font-medium text-sm">{{ exp.role }} <span v-if="exp.location">· {{ exp.location }}</span></p>
                  </div>
                  <span class="text-gray-400 text-sm font-mono bg-white/5 px-2 py-1 rounded">{{ exp.period }}</span>
                </div>
                <p class="text-gray-300 text-sm leading-relaxed mt-4">
                  {{ exp.description }}
                </p>
              </GlassCard>
            </div>
          </section>

          <!-- Education -->
          <section class="print-break-before">
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap class="w-6 h-6 text-emerald-400" /> 教育经历
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <GlassCard v-for="edu in resumeData.education" :key="edu.school">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 bg-white rounded-lg p-1 flex items-center justify-center">
                    <img :src="edu.logo" :alt="edu.school" class="max-w-full max-h-full object-contain" />
                  </div>
                  <div>
                    <h3 class="font-bold text-white">{{ edu.school }}</h3>
                    <p class="text-gray-400 text-xs font-mono">{{ edu.period }}</p>
                  </div>
                </div>
                <div class="text-sm text-gray-300">
                  <p>{{ edu.college }}</p>
                  <p class="text-emerald-300 font-medium mt-1">{{ edu.major }} · {{ edu.degree }}</p>
                </div>
              </GlassCard>
            </div>
          </section>

          <!-- Research -->
          <section class="print-break-before">
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
              <Microscope class="w-6 h-6 text-purple-400" /> 学术研究
            </h2>
            <div class="space-y-6">
              <GlassCard v-for="res in resumeData.research" :key="res.title">
                <div class="flex items-center gap-3 mb-4">
                  <span class="bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold px-2.5 py-1 rounded-full">{{ res.status }}</span>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">{{ res.title }}</h3>
                <p class="text-gray-300 text-sm leading-relaxed mb-4">{{ res.description }}</p>
                
                <ul class="space-y-2 mb-6" v-if="res.highlights.length">
                  <li v-for="(highlight, i) in res.highlights" :key="i" class="flex items-start gap-2 text-sm text-gray-300">
                    <div class="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0"></div>
                    <span>{{ highlight }}</span>
                  </li>
                </ul>

                <div class="flex flex-wrap gap-2 mb-6">
                  <span v-for="tag in res.tags" :key="tag" class="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-300">
                    {{ tag }}
                  </span>
                </div>

                <a v-if="res.githubUrl" :href="res.githubUrl" target="_blank" class="no-print inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
                  <Github class="w-4 h-4" /> 查看源代码
                </a>
              </GlassCard>
            </div>
          </section>

          <!-- Projects (Masonry) -->
          <section class="print-break-before">
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
              <Code2 class="w-6 h-6 text-amber-400" /> 软件开发
            </h2>
            <MasonryLayout :items="resumeData.projects">
              <template #default="{ item }">
                <GlassCard>
                  <div class="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-5" v-if="item.icon || !item.image">
                    <Activity v-if="item.icon === 'activity'" class="w-6 h-6 text-amber-400" />
                    <ShoppingBag v-else-if="item.icon === 'shopping-bag'" class="w-6 h-6 text-amber-400" />
                    <Code2 v-else class="w-6 h-6 text-amber-400" />
                  </div>
                  <div v-if="item.image" class="mb-5 rounded-xl overflow-hidden border border-white/10">
                    <img :src="item.image" :alt="item.title" class="w-full h-32 object-cover opacity-80 hover:opacity-100 transition-opacity" />
                  </div>

                  <h3 class="text-lg font-bold text-white mb-3">{{ item.title }}</h3>
                  <p class="text-gray-300 text-sm leading-relaxed mb-5">{{ item.description }}</p>
                  
                  <div class="flex flex-wrap gap-2 mt-auto">
                    <span v-for="tag in item.tags" :key="tag" class="px-2 py-1 bg-amber-500/10 text-amber-300/90 rounded text-xs">
                      {{ tag }}
                    </span>
                  </div>
                </GlassCard>
              </template>
            </MasonryLayout>
          </section>

        </div>

        <!-- Right Column: Skills & Contact -->
        <div class="space-y-8">
          
          <!-- Contact -->
          <section>
            <GlassCard>
              <h2 class="text-lg font-bold mb-5 flex items-center gap-2 text-white">
                联系方式
              </h2>
              <ul class="space-y-4 text-sm">
                <li class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Mail class="w-4 h-4 text-gray-400" />
                  </div>
                  <a :href="'mailto:' + resumeData.contact.email" class="text-gray-300 hover:text-white transition-colors">{{ resumeData.contact.email }}</a>
                </li>
                <li class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Phone class="w-4 h-4 text-gray-400" />
                  </div>
                  <span class="text-gray-300">{{ resumeData.contact.phone }}</span>
                </li>
              </ul>
            </GlassCard>
          </section>

          <!-- Skills -->
          <section>
            <GlassCard>
              <h2 class="text-lg font-bold mb-6 flex items-center gap-2 text-white">
                <Cpu class="w-5 h-5 text-blue-400" /> 技术栈
              </h2>
              <div class="space-y-6">
                <div v-for="category in resumeData.skills" :key="category.name">
                  <p class="text-xs text-gray-500 mb-3 uppercase tracking-widest font-semibold">{{ category.name }}</p>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="skill in category.skills" :key="skill" 
                          class="px-2.5 py-1 bg-white/5 border border-white/10 text-gray-200 rounded-md text-sm">
                      {{ skill }}
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </section>
        </div>

      </div>
    </div>
  </div>
</template>

<style>
/* Add keyframes for blob animation */
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
