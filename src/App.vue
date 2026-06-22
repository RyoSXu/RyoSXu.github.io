<script setup lang="ts">
import { ref, computed } from 'vue'
import { useDark, useToggle, useClipboard } from '@vueuse/core'
import { resumeData } from './data/resume'
import GlassCard from './components/GlassCard.vue'
import BaseItemCard from './components/BaseItemCard.vue'
import MasonryLayout from './components/MasonryLayout.vue'
import { User, Download, FileText, BookOpen, X, Mail, Phone, Github, MapPin, GraduationCap, Briefcase, Cpu, Microscope, Code2, Activity, ShoppingBag, Sun, Moon, Send, FolderKanban } from 'lucide-vue-next'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const showResumePreview = ref(false)

const { copy } = useClipboard()
const copyStatus = ref<'email' | 'phone' | null>(null)

const handleArticleClick = () => {
  window.alert('该文章正在编辑出版中')
}

const handleCopy = (text: string, type: 'email' | 'phone') => {
  let copyText = text
  if (type === 'phone') {
    copyText = text.replace(/[\s\-()]/g, '')
  }
  copy(copyText)
  copyStatus.value = type
  setTimeout(() => {
    if (copyStatus.value === type) copyStatus.value = null
  }, 2000)
}

const age = computed(() => {
  if (!resumeData.birthdate) return null;
  const birthDate = new Date(resumeData.birthdate);
  const today = new Date();
  let a = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    a--;
  }
  return a;
})

const printResume = () => {
  const iframe = document.createElement('iframe')
  iframe.style.position = 'fixed'
  iframe.style.width = '0'
  iframe.style.height = '0'
  iframe.src = './resume.html'
  document.body.appendChild(iframe)
  
  iframe.onload = () => {
    try {
      const style = iframe.contentDocument?.createElement('style')
      if (style) {
        style.textContent = `
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        `
        iframe.contentDocument?.head.appendChild(style)
      }
    } catch (e) {
      console.warn('Could not inject print styles', e)
    }
    iframe.contentWindow?.print()
    setTimeout(() => {
      document.body.removeChild(iframe)
    }, 10000)
  }
}
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
    <!-- Theme Toggle -->
    <button @click="toggleDark()" class="no-print fixed top-6 right-6 p-3 rounded-xl bg-white/40 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/10 hover:bg-white/60 dark:hover:bg-white/20 transition-all z-50 shadow-sm dark:shadow-none">
      <Sun v-if="isDark" class="w-5 h-5 text-yellow-300" />
      <Moon v-else class="w-5 h-5 text-slate-700" />
    </button>

    <!-- Background Animated Blobs (Moved to fixed container above) -->

    <div class="max-w-5xl mx-auto px-4 sm:px-6 pt-20 relative z-10">

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Left Column: Main Content -->
        <div class="lg:col-span-2 space-y-8">
          
          <!-- Header / Hero Section -->
          <header class="flex flex-col md:flex-row items-center md:items-center justify-start gap-8 relative z-10 print-break-before">
            <div class="shrink-0 relative group">
              <div class="absolute -inset-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-[14px] blur-xl opacity-20 dark:opacity-40 group-hover:opacity-30 dark:group-hover:opacity-50 transition-opacity duration-500"></div>
              <img :src="resumeData.avatar" alt="Avatar" class="w-24 md:w-28 h-auto rounded-[14px] border border-white/50 dark:border-white/10 relative z-10 shadow-lg transition-transform duration-500 group-hover:scale-[1.02]" />
            </div>
            
            <div class="flex-1 text-center md:text-left">
              <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
                {{ resumeData.name }}
              </h1>
              
              <div class="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6">
                <span v-if="age !== null" class="flex items-center gap-1.5 text-slate-500 dark:text-gray-400 text-sm">
                  <User class="w-4 h-4" /> {{ age }} 岁
                </span>
                <span class="flex items-center gap-1.5 text-slate-500 dark:text-gray-400 text-sm">
                  <MapPin class="w-4 h-4" /> {{ resumeData.location }}
                </span>
              </div>

              <div class="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <button @click="showResumePreview = true" class="no-print px-5 py-2 bg-white/60 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 active:scale-95 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white rounded-xl font-medium transition duration-150 ease-out shadow-sm hover:shadow-md dark:shadow-none hover:scale-105 flex items-center gap-2 will-change-transform">
                  <FileText class="w-4 h-4" /> 简历
                </button>
                <a :href="resumeData.contact.github" target="_blank" class="no-print px-5 py-2 bg-white/60 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 active:scale-95 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white rounded-xl font-medium transition duration-150 ease-out shadow-sm hover:shadow-md dark:shadow-none hover:scale-105 flex items-center gap-2 will-change-transform">
                  <Github class="w-4 h-4" /> GitHub
                </a>
              </div>
            </div>
          </header>
          
          <!-- Experience -->
          <section class="print-break-before">
            <h2 class="text-[18px] font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
              <Briefcase class="w-6 h-6 text-blue-500 dark:text-blue-400" /> 工作经历
            </h2>
            <div class="space-y-6">
              <BaseItemCard
                v-for="exp in resumeData.experience" 
                :key="exp.company"
                layout="horizontal"
                theme="blue"
                :title="exp.company"
                :subtitle="exp.role"
                :meta="exp.location"
                :period="exp.period"
                :badge="exp.type"
                :description="exp.description"
              />
            </div>
          </section>

          <!-- Research -->
          <section class="print-break-before">
            <h2 class="text-[18px] font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
              <Microscope class="w-6 h-6 text-purple-500 dark:text-purple-400" /> 学术研究
            </h2>
            <div class="space-y-6">
              <BaseItemCard
                v-for="res in resumeData.research" 
                :key="res.title"
                layout="vertical"
                theme="purple"
                tagTheme="neutral"
                :title="res.title"
                :description="res.description"
                :tags="res.tags"
              >
                <template #content-extra v-if="res.highlights.length">
                  <ul class="space-y-2">
                    <li v-for="(highlight, i) in res.highlights" :key="i" class="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-300">
                      <div class="w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-purple-400 mt-1.5 shrink-0"></div>
                      <span>{{ highlight }}</span>
                    </li>
                  </ul>
                </template>
                <template #footer-extra>
                  <div class="flex flex-wrap items-center gap-6">
                    <div class="relative group/tooltip inline-flex items-center">
                      <button @click="handleArticleClick" class="no-print inline-flex items-center gap-1.5 text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 text-sm font-medium transition-colors cursor-pointer text-left">
                        <BookOpen class="w-4 h-4" /> 查看原文
                      </button>
                      
                      <!-- Hover Tooltip -->
                      <div v-if="res.journalMetrics" class="absolute bottom-full left-0 md:left-1/2 md:-translate-x-1/2 mb-2 w-64 p-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] dark:shadow-none border border-slate-200 dark:border-white/10 opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-50 transform-gpu translate-y-2 group-hover/tooltip:translate-y-0 pointer-events-none cursor-default antialiased text-left font-sans">
                        <div class="font-bold text-slate-900 dark:text-white pb-1 mb-1 text-[13px] leading-tight">
                          {{ res.status }}
                        </div>
                        <div class="space-y-1.5 text-xs">
                          <div class="flex justify-between items-center">
                            <span class="text-slate-500 dark:text-gray-400">出版社</span>
                            <span class="font-bold text-purple-600 dark:text-purple-400">{{ res.journalMetrics.publisher }}</span>
                          </div>
                          <div class="flex justify-between items-center">
                            <span class="text-slate-500 dark:text-gray-400">影响因子</span>
                            <span class="font-bold text-purple-600 dark:text-purple-400">{{ res.journalMetrics.if }} <span class="text-slate-500 dark:text-gray-400 font-normal text-[10px] ml-0.5">(5年: {{ res.journalMetrics.if5 }})</span></span>
                          </div>
                          <div class="flex justify-between items-center">
                            <span class="text-slate-500 dark:text-gray-400">JCR 分区</span>
                            <span class="font-medium px-1.5 py-0.5 bg-purple-50 dark:bg-purple-500/10 rounded text-purple-600 dark:text-purple-400">{{ res.journalMetrics.jcr }}</span>
                          </div>
                          <div class="flex justify-between items-center">
                            <span class="text-slate-500 dark:text-gray-400">中科院分区</span>
                            <span class="font-medium px-1.5 py-0.5 bg-purple-50 dark:bg-purple-500/10 rounded text-purple-600 dark:text-purple-400">{{ res.journalMetrics.cas }}</span>
                          </div>
                        </div>
                        <div class="absolute -bottom-1.5 left-6 md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-r border-slate-200 dark:border-white/10 rotate-45"></div>
                      </div>
                    </div>
                    
                    <a v-if="res.githubUrl" :href="res.githubUrl" target="_blank" class="no-print inline-flex items-center gap-1.5 text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 text-sm font-medium transition-colors">
                      <Github class="w-4 h-4" /> 查看源代码
                    </a>
                  </div>
                </template>
              </BaseItemCard>
            </div>
          </section>

          <!-- Project Experience -->
          <section class="print-break-before">
            <h2 class="text-[18px] font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
              <FolderKanban class="w-6 h-6 text-rose-500 dark:text-rose-400" /> 项目经历
            </h2>
            <div class="space-y-6">
              <BaseItemCard
                v-for="item in resumeData.projectExperience" 
                :key="item.title"
                layout="vertical"
                theme="rose"
                tagTheme="rose"
                :title="item.title"
                :description="item.description"
                :image="item.image"
                :tags="item.tags"
              >
                <template #icon v-if="item.icon || !item.image">
                  <Activity v-if="item.icon === 'activity'" class="w-6 h-6 text-rose-500 dark:text-rose-400" />
                  <ShoppingBag v-else-if="item.icon === 'shopping-bag'" class="w-6 h-6 text-rose-500 dark:text-rose-400" />
                  <Code2 v-else class="w-6 h-6 text-rose-500 dark:text-rose-400" />
                </template>
              </BaseItemCard>
            </div>
          </section>

          <!-- Projects (Masonry) -->
          <section class="print-break-before">
            <h2 class="text-[18px] font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
              <Code2 class="w-6 h-6 text-amber-500 dark:text-amber-400" /> 软件开发
            </h2>
            <MasonryLayout :items="resumeData.projects">
              <template #default="{ item }">
                <BaseItemCard
                  layout="vertical"
                  theme="amber"
                  tagTheme="amber"
                  :title="item.title"
                  :description="item.description"
                  :image="item.image"
                  :tags="item.tags"
                >
                  <template #icon v-if="item.icon || !item.image">
                    <Activity v-if="item.icon === 'activity'" class="w-6 h-6 text-amber-500 dark:text-amber-400" />
                    <ShoppingBag v-else-if="item.icon === 'shopping-bag'" class="w-6 h-6 text-amber-500 dark:text-amber-400" />
                    <Code2 v-else class="w-6 h-6 text-amber-500 dark:text-amber-400" />
                  </template>
                </BaseItemCard>
              </template>
            </MasonryLayout>
          </section>

        </div>

        <!-- Right Column: Skills & Contact -->
        <div class="space-y-8">
          
          <!-- Education -->
          <section>
            <GlassCard>
              <h2 class="text-[18px] font-bold mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                <GraduationCap class="w-5 h-5 text-emerald-500 dark:text-emerald-400" /> 教育经历
              </h2>
              <div class="flex flex-col gap-6">
                <div v-for="edu in resumeData.education" :key="edu.school">
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 bg-white rounded-lg p-1.5 flex items-center justify-center border border-slate-100 dark:border-transparent shrink-0 mt-0.5">
                      <img :src="edu.logo" :alt="edu.school" class="max-w-full max-h-full object-contain" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="flex justify-between items-baseline mb-1.5 gap-1.5">
                        <div class="flex items-center gap-1.5">
                          <h3 class="font-bold text-slate-900 dark:text-white text-[15px] whitespace-nowrap">{{ edu.school }}</h3>
                          <div v-if="edu.tags" class="flex items-center gap-1">
                            <span v-for="tag in edu.tags" :key="tag" class="px-1 py-0.5 text-[10px] font-bold tracking-wide bg-emerald-100/80 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 rounded leading-none shrink-0 border border-emerald-200/50 dark:border-emerald-500/20 shadow-sm">
                              {{ tag }}
                            </span>
                          </div>
                        </div>
                        <span class="text-slate-500 dark:text-gray-400 text-[13px] font-mono shrink-0 tracking-tight">{{ edu.period }}</span>
                      </div>
                      <div class="text-sm text-slate-600 dark:text-gray-300">
                        <p>{{ edu.college }}</p>
                        <p class="text-emerald-600 dark:text-emerald-300 font-medium mt-1">{{ edu.major }} · {{ edu.degree }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </section>

          <!-- Contact -->
          <section>
            <GlassCard>
              <h2 class="text-[18px] font-bold mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                <Send class="w-5 h-5 text-cyan-500 dark:text-cyan-400" /> 联系方式
              </h2>
              <ul class="space-y-4 text-sm">
                <li class="flex items-center gap-3 group/item relative cursor-pointer w-fit" @click="handleCopy(resumeData.contact.email, 'email')">
                  <Mail class="w-4 h-4 text-slate-500 dark:text-gray-400 group-hover/item:text-blue-500 transition-colors shrink-0" />
                  <span class="text-slate-700 dark:text-gray-300 group-hover/item:text-blue-600 dark:group-hover/item:text-white transition-colors">{{ resumeData.contact.email }}</span>
                  <div class="absolute left-10 top-full mt-2 px-2.5 py-1.5 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-gray-200 text-xs rounded-md opacity-0 group-hover/item:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-xl">
                    {{ copyStatus === 'email' ? '已复制！' : '点击复制' }}
                    <div class="absolute -top-1.5 left-4 w-2.5 h-2.5 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-t border-l border-slate-200 dark:border-slate-700 rotate-45"></div>
                  </div>
                </li>
                <li class="flex items-center gap-3 group/item relative cursor-pointer w-fit" @click="handleCopy(resumeData.contact.phone, 'phone')">
                  <Phone class="w-4 h-4 text-slate-500 dark:text-gray-400 group-hover/item:text-blue-500 transition-colors shrink-0" />
                  <span class="text-slate-700 dark:text-gray-300 group-hover/item:text-blue-600 dark:group-hover/item:text-white transition-colors">{{ resumeData.contact.phone }}</span>
                  <div class="absolute left-10 top-full mt-2 px-2.5 py-1.5 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-gray-200 text-xs rounded-md opacity-0 group-hover/item:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-xl">
                    {{ copyStatus === 'phone' ? '已复制！' : '点击复制' }}
                    <div class="absolute -top-1.5 left-4 w-2.5 h-2.5 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-t border-l border-slate-200 dark:border-slate-700 rotate-45"></div>
                  </div>
                </li>
              </ul>
            </GlassCard>
          </section>

          <!-- Skills -->
          <section>
            <GlassCard>
              <h2 class="text-[18px] font-bold mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                <Cpu class="w-5 h-5 text-cyan-500 dark:text-cyan-400" /> 技术栈
              </h2>
              <div class="space-y-6">
                <div v-for="category in resumeData.skills" :key="category.name">
                  <p class="text-xs text-slate-500 dark:text-gray-500 mb-3 uppercase tracking-widest font-semibold">{{ category.name }}</p>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="skill in category.skills" :key="skill" 
                          class="px-2.5 py-1 bg-white/20 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 text-slate-700 dark:text-gray-300 rounded-md text-sm transition-colors hover:bg-white/40 dark:hover:bg-white/10">
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

    <!-- Resume Preview Modal -->
    <Teleport to="body">
      <div v-if="showResumePreview" class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 no-print">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="showResumePreview = false"></div>
        <div class="relative w-full max-w-[210mm] h-[90vh] mx-auto bg-white/60 dark:bg-[#0b0c10]/60 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-white/40 dark:border-white/10 ring-1 ring-black/5 dark:ring-white/10">
          <div class="flex justify-between items-center p-5 border-b border-slate-200/50 dark:border-white/10">
            <h3 class="text-lg font-bold text-slate-800 dark:text-gray-100 flex items-center gap-2">
              <FileText class="w-5 h-5 text-blue-500 dark:text-blue-400" />
              简历预览
            </h3>
            <div class="flex items-center gap-3">
              <button @click="printResume" class="px-5 py-2 bg-blue-500/90 hover:bg-blue-600 dark:bg-blue-600/80 dark:hover:bg-blue-500 text-white rounded-xl font-medium transition-all shadow-sm hover:shadow-md active:scale-95 flex items-center gap-2 text-sm backdrop-blur-md">
                <Download class="w-4 h-4" /> 下载 PDF
              </button>
              <button @click="showResumePreview = false" class="p-2 bg-slate-200/50 hover:bg-slate-300/50 dark:bg-white/5 dark:hover:bg-white/10 rounded-full transition-colors backdrop-blur-md text-slate-600 dark:text-gray-300">
                <X class="w-5 h-5" />
              </button>
            </div>
          </div>
          <div class="flex-1 overflow-hidden flex justify-center bg-slate-100/30 dark:bg-black/20">
            <iframe src="./resume.html" class="w-full h-full bg-white mx-auto border-none" title="Resume Preview"></iframe>
          </div>
        </div>
      </div>
    </Teleport>
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
