<script setup lang="ts">
import { ref, computed } from 'vue'
import { useDark, useToggle, useClipboard } from '@vueuse/core'
import { resumeData } from './data/resume'
import GlassCard from './components/GlassCard.vue'
import MasonryLayout from './components/MasonryLayout.vue'
import { User, Download, FileText, X, Mail, Phone, Github, MapPin, GraduationCap, Briefcase, Cpu, Microscope, Code2, Activity, ShoppingBag, Sun, Moon, Send, FolderKanban } from 'lucide-vue-next'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const showResumePreview = ref(false)

const { copy } = useClipboard()
const copyStatus = ref<'email' | 'phone' | null>(null)

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
    <button @click="toggleDark()" class="no-print fixed top-6 right-6 p-3 rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/10 hover:bg-white/60 dark:hover:bg-white/20 transition-all z-50 shadow-sm dark:shadow-none">
      <Sun v-if="isDark" class="w-5 h-5 text-yellow-300" />
      <Moon v-else class="w-5 h-5 text-slate-700" />
    </button>

    <!-- Background Animated Blobs (Moved to fixed container above) -->

    <div class="max-w-5xl mx-auto px-4 sm:px-6 pt-20">

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Left Column: Main Content -->
        <div class="lg:col-span-2 space-y-12">
          
          <!-- Header / Hero Section -->
          <header v-motion-slide-visible-once-bottom class="flex flex-col md:flex-row items-center md:items-center justify-start gap-8 relative z-10 print-break-before">
            <div class="shrink-0 relative group">
              <div class="absolute -inset-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur-xl opacity-20 dark:opacity-40 group-hover:opacity-30 dark:group-hover:opacity-50 transition-opacity duration-500"></div>
              <img :src="resumeData.avatar" alt="Avatar" class="w-24 md:w-28 h-auto rounded-2xl border border-white/50 dark:border-white/10 relative z-10 shadow-lg transition-transform duration-500 group-hover:scale-[1.02]" />
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
                <button @click="showResumePreview = true" class="no-print px-5 py-2 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-gray-200 active:scale-95 text-white dark:text-slate-900 rounded-xl font-medium transition duration-150 ease-out shadow-sm hover:shadow-lg hover:scale-105 flex items-center gap-2 will-change-transform">
                  <FileText class="w-4 h-4" /> 简历
                </button>
                <a :href="resumeData.contact.github" target="_blank" class="no-print px-5 py-2 bg-white/60 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 active:scale-95 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white rounded-xl font-medium transition duration-150 ease-out shadow-sm hover:shadow-md dark:shadow-none hover:scale-105 flex items-center gap-2 will-change-transform">
                  <Github class="w-4 h-4" /> GitHub
                </a>
              </div>
            </div>
          </header>
          
          <!-- Experience -->
          <section v-motion-slide-visible-once-bottom class="print-break-before">
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
              <Briefcase class="w-6 h-6 text-blue-500 dark:text-blue-400" /> 工作经历
            </h2>
            <div class="space-y-6">
              <GlassCard v-for="exp in resumeData.experience" :key="exp.company">
                <div class="flex justify-between items-center mb-1 flex-wrap gap-2">
                  <div class="flex items-center flex-wrap gap-2 flex-1 pr-4">
                    <span v-if="exp.type" class="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 rounded text-[11px] border border-blue-200 dark:border-blue-500/30 font-bold leading-none shrink-0">{{ exp.type }}</span>
                    <h3 class="text-base font-bold text-slate-900 dark:text-white">{{ exp.company }}</h3>
                    <span class="text-blue-600 dark:text-blue-300 font-medium text-sm">{{ exp.role }}</span>
                    <span v-if="exp.location" class="text-slate-400 dark:text-gray-500 font-normal text-sm">· {{ exp.location }}</span>
                  </div>
                  <span class="text-slate-500 dark:text-gray-400 text-sm font-mono shrink-0">{{ exp.period }}</span>
                </div>
                <p class="text-slate-600 dark:text-gray-300 text-sm leading-relaxed mt-2">
                  {{ exp.description }}
                </p>
              </GlassCard>
            </div>
          </section>

          <!-- Research -->
          <section v-motion-slide-visible-once-bottom class="print-break-before">
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
              <Microscope class="w-6 h-6 text-purple-500 dark:text-purple-400" /> 学术研究
            </h2>
            <div class="space-y-6">
              <GlassCard v-for="res in resumeData.research" :key="res.title">
                <div class="flex items-center gap-3 mb-4">
                  <span class="bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30 text-xs font-bold px-2.5 py-1 rounded-full">{{ res.status }}</span>
                </div>
                <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">{{ res.title }}</h3>
                <p class="text-slate-600 dark:text-gray-300 text-sm leading-relaxed mb-4">{{ res.description }}</p>
                
                <ul class="space-y-2 mb-6" v-if="res.highlights.length">
                  <li v-for="(highlight, i) in res.highlights" :key="i" class="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-300">
                    <div class="w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-purple-400 mt-1.5 shrink-0"></div>
                    <span>{{ highlight }}</span>
                  </li>
                </ul>

                <div class="flex flex-wrap gap-2 mb-6">
                  <span v-for="tag in res.tags" :key="tag" class="px-2.5 py-1 bg-black/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-md text-xs text-slate-600 dark:text-gray-300">
                    {{ tag }}
                  </span>
                </div>

                <a v-if="res.githubUrl" :href="res.githubUrl" target="_blank" class="no-print inline-flex items-center gap-1.5 text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 text-sm font-medium transition-colors">
                  <Github class="w-4 h-4" /> 查看源代码
                </a>
              </GlassCard>
            </div>
          </section>

          <!-- Project Experience -->
          <section v-motion-slide-visible-once-bottom class="print-break-before">
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
              <FolderKanban class="w-6 h-6 text-rose-500 dark:text-rose-400" /> 项目经历
            </h2>
            <div class="space-y-6">
              <GlassCard v-for="item in resumeData.projectExperience" :key="item.title">
                <div class="w-12 h-12 bg-black/5 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-center mb-5" v-if="item.icon || !item.image">
                  <Activity v-if="item.icon === 'activity'" class="w-6 h-6 text-rose-500 dark:text-rose-400" />
                  <ShoppingBag v-else-if="item.icon === 'shopping-bag'" class="w-6 h-6 text-rose-500 dark:text-rose-400" />
                  <Code2 v-else class="w-6 h-6 text-rose-500 dark:text-rose-400" />
                </div>
                <div v-if="item.image" class="mb-5 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10">
                  <img :src="item.image" :alt="item.title" class="w-full h-32 object-cover opacity-90 dark:opacity-80 hover:opacity-100 transition-opacity" />
                </div>

                <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">{{ item.title }}</h3>
                <p class="text-slate-600 dark:text-gray-300 text-sm leading-relaxed mb-5">{{ item.description }}</p>
                
                <div class="flex flex-wrap gap-2 mt-auto">
                  <span v-for="tag in item.tags" :key="tag" class="px-2.5 py-1 bg-rose-100 dark:bg-rose-500/10 text-rose-700 dark:text-rose-300/90 border border-transparent dark:border-rose-500/20 rounded-md text-xs">
                    {{ tag }}
                  </span>
                </div>
              </GlassCard>
            </div>
          </section>

          <!-- Projects (Masonry) -->
          <section v-motion-slide-visible-once-bottom class="print-break-before">
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
              <Code2 class="w-6 h-6 text-amber-500 dark:text-amber-400" /> 软件开发
            </h2>
            <MasonryLayout :items="resumeData.projects">
              <template #default="{ item }">
                <GlassCard>
                  <div class="w-12 h-12 bg-black/5 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-center mb-5" v-if="item.icon || !item.image">
                    <Activity v-if="item.icon === 'activity'" class="w-6 h-6 text-amber-500 dark:text-amber-400" />
                    <ShoppingBag v-else-if="item.icon === 'shopping-bag'" class="w-6 h-6 text-amber-500 dark:text-amber-400" />
                    <Code2 v-else class="w-6 h-6 text-amber-500 dark:text-amber-400" />
                  </div>
                  <div v-if="item.image" class="mb-5 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10">
                    <img :src="item.image" :alt="item.title" class="w-full h-32 object-cover opacity-90 dark:opacity-80 hover:opacity-100 transition-opacity" />
                  </div>

                  <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-3">{{ item.title }}</h3>
                  <p class="text-slate-600 dark:text-gray-300 text-sm leading-relaxed mb-5">{{ item.description }}</p>
                  
                  <div class="flex flex-wrap gap-2 mt-auto">
                    <span v-for="tag in item.tags" :key="tag" class="px-2 py-1 bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300/90 rounded text-xs">
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
          
          <!-- Education -->
          <section v-motion-slide-visible-once-bottom>
            <GlassCard>
              <h2 class="text-lg font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
                <GraduationCap class="w-5 h-5 text-emerald-500 dark:text-emerald-400" /> 教育经历
              </h2>
              <div class="flex flex-col gap-6">
                <div v-for="edu in resumeData.education" :key="edu.school">
                  <div class="flex items-center gap-4 mb-3">
                    <div class="w-10 h-10 bg-white rounded-lg p-1.5 flex items-center justify-center border border-slate-100 dark:border-transparent shrink-0">
                      <img :src="edu.logo" :alt="edu.school" class="max-w-full max-h-full object-contain" />
                    </div>
                    <div>
                      <h3 class="font-bold text-slate-900 dark:text-white text-base">{{ edu.school }}</h3>
                      <p class="text-slate-500 dark:text-gray-400 text-sm font-mono">{{ edu.period }}</p>
                    </div>
                  </div>
                  <div class="text-sm text-slate-600 dark:text-gray-300 pl-14">
                    <p>{{ edu.college }}</p>
                    <p class="text-emerald-600 dark:text-emerald-300 font-medium mt-1">{{ edu.major }} · {{ edu.degree }}</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </section>

          <!-- Contact -->
          <section v-motion-slide-visible-once-bottom>
            <GlassCard>
              <h2 class="text-lg font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
                <Send class="w-5 h-5 text-purple-500 dark:text-purple-400" /> 联系方式
              </h2>
              <ul class="space-y-4 text-sm">
                <li class="flex items-center gap-3 group/item relative cursor-pointer w-fit" @click="handleCopy(resumeData.contact.email, 'email')">
                  <div class="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center shrink-0 group-hover/item:bg-blue-100 dark:group-hover/item:bg-blue-900/30 transition-colors">
                    <Mail class="w-4 h-4 text-slate-500 dark:text-gray-400 group-hover/item:text-blue-500" />
                  </div>
                  <span class="text-slate-700 dark:text-gray-300 group-hover/item:text-blue-600 dark:group-hover/item:text-white transition-colors">{{ resumeData.contact.email }}</span>
                  <div class="absolute left-10 -top-8 px-2 py-1 bg-slate-800 dark:bg-slate-700 text-white text-xs rounded opacity-0 group-hover/item:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 shadow-lg">
                    {{ copyStatus === 'email' ? '已复制！' : '点击复制' }}
                    <div class="absolute -bottom-1 left-4 w-2 h-2 bg-slate-800 dark:bg-slate-700 rotate-45"></div>
                  </div>
                </li>
                <li class="flex items-center gap-3 group/item relative cursor-pointer w-fit" @click="handleCopy(resumeData.contact.phone, 'phone')">
                  <div class="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center shrink-0 group-hover/item:bg-blue-100 dark:group-hover/item:bg-blue-900/30 transition-colors">
                    <Phone class="w-4 h-4 text-slate-500 dark:text-gray-400 group-hover/item:text-blue-500" />
                  </div>
                  <span class="text-slate-700 dark:text-gray-300 group-hover/item:text-blue-600 dark:group-hover/item:text-white transition-colors">{{ resumeData.contact.phone }}</span>
                  <div class="absolute left-10 -top-8 px-2 py-1 bg-slate-800 dark:bg-slate-700 text-white text-xs rounded opacity-0 group-hover/item:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 shadow-lg">
                    {{ copyStatus === 'phone' ? '已复制！' : '点击复制' }}
                    <div class="absolute -bottom-1 left-4 w-2 h-2 bg-slate-800 dark:bg-slate-700 rotate-45"></div>
                  </div>
                </li>
              </ul>
            </GlassCard>
          </section>

          <!-- Skills -->
          <section v-motion-slide-visible-once-bottom :delay="200">
            <GlassCard>
              <h2 class="text-lg font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
                <Cpu class="w-5 h-5 text-blue-500 dark:text-blue-400" /> 技术栈
              </h2>
              <div class="space-y-6">
                <div v-for="category in resumeData.skills" :key="category.name">
                  <p class="text-xs text-slate-500 dark:text-gray-500 mb-3 uppercase tracking-widest font-semibold">{{ category.name }}</p>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="skill in category.skills" :key="skill" 
                          class="px-2.5 py-1 bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-200 rounded-md text-sm">
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
        <div class="relative w-full max-w-4xl h-[90vh] bg-slate-50 dark:bg-[#0b0c10] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200 dark:border-white/10">
          <div class="flex justify-between items-center p-4 border-b border-slate-200 dark:border-white/10">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <FileText class="w-5 h-5 text-blue-500" />
              简历预览
            </h3>
            <div class="flex items-center gap-3">
              <button @click="printResume" class="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors shadow-md flex items-center gap-2 text-sm">
                <Download class="w-4 h-4" /> 下载 PDF
              </button>
              <button @click="showResumePreview = false" class="p-2 hover:bg-slate-200 dark:hover:bg-white/10 rounded-full transition-colors">
                <X class="w-5 h-5 text-slate-500 dark:text-gray-400" />
              </button>
            </div>
          </div>
          <div class="flex-1 overflow-hidden p-2 bg-slate-200/50 dark:bg-black/50">
            <iframe src="./resume.html" class="w-full h-full border border-slate-200 dark:border-white/10 bg-white shadow-sm rounded-lg" title="Resume Preview"></iframe>
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
