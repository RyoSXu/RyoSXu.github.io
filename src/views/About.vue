<script setup lang="ts">
import { ref, computed } from 'vue'
import { useClipboard } from '@vueuse/core'
import { resumeData } from '../data/resume'
import GlassCard from '../components/GlassCard.vue'
import BaseItemCard from '../components/BaseItemCard.vue'
import { User, Download, FileText, BookOpen, X, Mail, Phone, Github, MapPin, GraduationCap, Briefcase, Cpu, Microscope, Code2, Activity, ShoppingBag, Send, FolderKanban, Info, Server, Gamepad2, ArrowRight } from 'lucide-vue-next'

const showResumePreview = ref(false)
const showToast = ref(false)

const { copy } = useClipboard()
const copyStatus = ref<'email' | 'phone' | null>(null)

const handleArticleClick = () => {
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 3000)
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
    
    const originalTitle = document.title
    document.title = '徐尚_个人简历'
    if (iframe.contentDocument) {
      iframe.contentDocument.title = '徐尚_个人简历'
    }
    
    iframe.contentWindow?.print()
    
    setTimeout(() => {
      document.title = originalTitle
    }, 500)
    
    setTimeout(() => {
      document.body.removeChild(iframe)
    }, 10000)
  }
}
</script>

<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 space-y-8">
          
          <!-- Header / Hero Section -->
          <header class="flex flex-col md:flex-row items-center justify-start gap-6 md:gap-8 relative z-10 print-break-before">
            <div class="shrink-0 relative flex items-center justify-center">
              <div class="absolute -inset-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-[14px] blur-xl opacity-20 dark:opacity-40 transition-opacity duration-500"></div>
              <img :src="resumeData.avatar" alt="Avatar" class="w-[90px] h-[120px] object-cover rounded-[14px] border border-white/50 dark:border-white/10 relative z-10 shadow-lg transition-transform duration-500" />
            </div>
            
            <div class="flex-1 flex flex-col justify-center gap-4 text-center md:text-left">
              <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
                {{ resumeData.name }}
              </h1>
              
              <div class="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <span v-if="age !== null" class="flex items-center gap-1.5 text-slate-500 dark:text-gray-400 text-sm">
                  <User class="w-4 h-4" /> {{ age }} 岁
                </span>
                <span class="flex items-center gap-1.5 text-slate-500 dark:text-gray-400 text-sm">
                  <MapPin class="w-4 h-4" /> {{ resumeData.location }}
                </span>
              </div>

              <div class="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <button @click="showResumePreview = true" class="no-print btn-glass">
                  <FileText class="w-4 h-4" /> 简历
                </button>
                <a :href="resumeData.contact.github" target="_blank" class="no-print btn-glass">
                  <Github class="w-4 h-4" /> GitHub
                </a>
              </div>
            </div>
          </header>
          
          <!-- Experience -->
          <section class="print-break-before">
            <h2 class="text-[18px] font-bold leading-none mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
              <Briefcase class="w-6 h-6 text-indigo-500 dark:text-indigo-400" /> 工作经历
            </h2>
            <div class="space-y-6">
              <BaseItemCard
                v-for="exp in resumeData.experience" 
                :key="exp.company"
                layout="horizontal"
                theme="indigo"
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
            <h2 class="text-[18px] font-bold leading-none mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
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
                      <div v-if="res.journalMetrics" class="absolute bottom-full left-0 md:left-1/2 md:-translate-x-1/2 mb-2 w-64 p-3 glass-liquid rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] dark:shadow-none opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-50 transform-gpu translate-y-2 group-hover/tooltip:translate-y-0 pointer-events-none cursor-default antialiased text-left font-sans">
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
                        <div class="absolute -bottom-1.5 left-6 md:left-1/2 md:-translate-x-1/2 w-3 h-3 glass-liquid !border-t-0 !border-l-0 rotate-45"></div>
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
            <h2 class="text-[18px] font-bold leading-none mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
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

        </div>

        <!-- Right Column: Skills & Contact -->
        <div class="space-y-8">
          
          <!-- Education -->
          <section>
            <GlassCard>
              <h2 class="text-[18px] font-bold leading-none mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                <GraduationCap class="w-5 h-5 text-emerald-500 dark:text-emerald-400" /> 教育经历
              </h2>
              <div class="flex flex-col gap-6">
                <div v-for="edu in resumeData.education" :key="edu.school">
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 bg-white rounded-lg p-1.5 flex items-center justify-center border border-slate-100 dark:border-transparent shrink-0 mt-0.5">
                      <img :src="edu.logo" :alt="edu.school" class="max-w-full max-h-full object-contain" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center gap-1.5 mb-1">
                        <h3 class="font-bold text-slate-900 dark:text-white text-[15px] whitespace-nowrap">{{ edu.school }}</h3>
                        <div v-if="edu.tags" class="flex items-center gap-1.5">
                          <span v-for="tag in edu.tags" :key="tag" class="tag-glass bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/20 dark:border-emerald-500/30">
                            {{ tag }}
                          </span>
                        </div>
                      </div>
                      <div class="text-sm text-slate-600 dark:text-gray-300">
                        <p class="text-slate-500 dark:text-gray-400 text-[13px] font-mono tracking-tight mb-1">{{ edu.period }}</p>
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
              <h2 class="text-[18px] font-bold leading-none mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                <Send class="w-5 h-5 text-cyan-500 dark:text-cyan-400" /> 联系方式
              </h2>
              <ul class="space-y-4 text-sm">
                <li class="flex items-center gap-3 group/item relative cursor-pointer w-fit" @click="handleCopy(resumeData.contact.email, 'email')">
                  <Mail class="w-4 h-4 text-slate-500 dark:text-gray-400 group-hover/item:text-blue-500 transition-colors shrink-0" />
                  <span class="text-slate-700 dark:text-gray-300 group-hover/item:text-blue-600 dark:group-hover/item:text-white transition-colors">{{ resumeData.contact.email }}</span>
                  <div class="absolute left-10 top-full mt-2 px-2.5 py-1.5 glass-liquid text-slate-700 dark:text-gray-200 text-xs rounded-md opacity-0 group-hover/item:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-xl">
                    {{ copyStatus === 'email' ? '已复制！' : '点击复制' }}
                    <div class="absolute -top-1.5 left-4 w-2.5 h-2.5 glass-liquid !border-r-0 !border-b-0 rotate-45"></div>
                  </div>
                </li>
                <li class="flex items-center gap-3 group/item relative cursor-pointer w-fit" @click="handleCopy(resumeData.contact.phone, 'phone')">
                  <Phone class="w-4 h-4 text-slate-500 dark:text-gray-400 group-hover/item:text-blue-500 transition-colors shrink-0" />
                  <span class="text-slate-700 dark:text-gray-300 group-hover/item:text-blue-600 dark:group-hover/item:text-white transition-colors">{{ resumeData.contact.phone }}</span>
                  <div class="absolute left-10 top-full mt-2 px-2.5 py-1.5 glass-liquid text-slate-700 dark:text-gray-200 text-xs rounded-md opacity-0 group-hover/item:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-xl">
                    {{ copyStatus === 'phone' ? '已复制！' : '点击复制' }}
                    <div class="absolute -top-1.5 left-4 w-2.5 h-2.5 glass-liquid !border-r-0 !border-b-0 rotate-45"></div>
                  </div>
                </li>
              </ul>
            </GlassCard>
          </section>

          <!-- Skills -->
          <section>
            <GlassCard>
              <h2 class="text-[18px] font-bold leading-none mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                <Cpu class="w-5 h-5 text-fuchsia-500 dark:text-fuchsia-400" /> 技术栈
              </h2>
              <div class="space-y-6">
                <div v-for="category in resumeData.skills" :key="category.name">
                  <p class="text-xs text-slate-500 dark:text-gray-500 mb-3 uppercase tracking-widest font-semibold">{{ category.name }}</p>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="skill in category.skills" :key="skill" 
                          class="px-2.5 py-1 glass-liquid text-slate-700 dark:text-gray-300 rounded-md text-sm transition-colors hover:bg-white/50 dark:hover:bg-white/10">
                      {{ skill }}
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </section>
        </div>

        <!-- Open Source & Practice -->
        <section class="lg:col-span-3 print-break-before" data-portfolio-section>
          <h2 class="text-[18px] font-bold leading-none mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
            <Code2 class="w-6 h-6 text-amber-500 dark:text-amber-400" /> 开源与实践
          </h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BaseItemCard
              layout="vertical"
              theme="amber"
              tagTheme="amber"
              title="RyoMonitor × RyoAuthGate"
              description="面向个人 VPS 的 Go 服务组合：RyoMonitor 负责资源与服务状态采集，RyoAuthGate 通过 Caddy forward-auth 为多个子域提供统一密码登录。两者均已部署并持续运行于个人 VPS。"
              :tags="['Go', 'Linux', 'systemd', 'Caddy', 'SSO']"
            >
              <template #icon>
                <Server class="w-6 h-6 text-amber-500 dark:text-amber-400" />
              </template>
              <template #content-extra>
                <div class="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-gray-400">
                  <span class="px-2.5 py-1 rounded-lg bg-black/5 dark:bg-white/5">GitHub</span>
                  <ArrowRight class="w-3.5 h-3.5" />
                  <span class="px-2.5 py-1 rounded-lg bg-black/5 dark:bg-white/5">Go Binary</span>
                  <ArrowRight class="w-3.5 h-3.5" />
                  <span class="px-2.5 py-1 rounded-lg bg-black/5 dark:bg-white/5">systemd</span>
                  <ArrowRight class="w-3.5 h-3.5" />
                  <span class="px-2.5 py-1 rounded-lg bg-black/5 dark:bg-white/5">Caddy / HTTPS</span>
                </div>
              </template>
              <template #footer-extra>
                <div class="flex flex-wrap items-center gap-5 no-print">
                  <a href="https://github.com/RyoSXu/RyoMonitor" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-amber-600 dark:text-amber-400 hover:text-amber-500 dark:hover:text-amber-300 text-sm font-medium transition-colors">
                    <Github class="w-4 h-4" /> RyoMonitor
                  </a>
                  <a href="https://github.com/RyoSXu/RyoAuthGate" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-amber-600 dark:text-amber-400 hover:text-amber-500 dark:hover:text-amber-300 text-sm font-medium transition-colors">
                    <Github class="w-4 h-4" /> RyoAuthGate
                  </a>
                </div>
              </template>
            </BaseItemCard>

            <BaseItemCard
              layout="vertical"
              theme="amber"
              tagTheme="amber"
              title="d2-ai-context"
              description="读取 Bungie Manifest 与用户只读 Profile 数据，将装备、perk、socket 和 craftable 等信息整理为 AI 可直接读取和检索的本地上下文，用于讨论 build、武器 roll 与刷取优先级。"
              :tags="['Python', 'Bungie API', 'OAuth', 'SQLite', 'AI Context']"
            >
              <template #icon>
                <Gamepad2 class="w-6 h-6 text-amber-500 dark:text-amber-400" />
              </template>
              <template #footer-extra>
                <a href="https://github.com/RyoSXu/d2-ai-context" target="_blank" rel="noopener noreferrer" class="no-print inline-flex items-center gap-1.5 text-amber-600 dark:text-amber-400 hover:text-amber-500 dark:hover:text-amber-300 text-sm font-medium transition-colors">
                  <Github class="w-4 h-4" /> 查看源代码
                </a>
              </template>
            </BaseItemCard>
          </div>
        </section>

      <!-- Resume Preview Modal -->
      <Teleport to="body">
        <div v-if="showResumePreview" class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 no-print">
          <div class="absolute inset-0 bg-slate-900/20 dark:bg-black/40 backdrop-blur-sm" @click="showResumePreview = false"></div>
          <div class="relative w-full max-w-[210mm] h-[90vh] mx-auto glass-liquid rounded-2xl shadow-2xl overflow-hidden flex flex-col ring-1 ring-black/5 dark:ring-white/10">
            <div class="flex justify-between items-center py-2 px-4 border-b border-slate-200/50 dark:border-white/10">
              <h3 class="text-lg font-bold text-slate-800 dark:text-gray-100 flex items-center gap-2">
                <FileText class="w-5 h-5 text-blue-500 dark:text-blue-400" />
                简历预览
              </h3>
              <div class="flex items-center gap-2">
                <button @click="printResume" class="h-9 px-4 rounded-xl text-sm font-medium flex items-center gap-2 text-slate-700 dark:text-gray-200 hover:bg-white/40 dark:hover:bg-white/10 transition-colors btn-jelly">
                  <Download class="w-4 h-4" /> 下载 PDF
                </button>
                <button @click="showResumePreview = false" class="w-9 h-9 rounded-xl flex items-center justify-center text-slate-700 dark:text-gray-200 hover:bg-white/40 dark:hover:bg-white/10 transition-colors btn-jelly">
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

      <!-- Toast Notification -->
      <Teleport to="body">
        <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="transform translate-y-4 opacity-0"
          enter-to-class="transform translate-y-0 opacity-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="transform translate-y-0 opacity-100"
          leave-to-class="transform translate-y-4 opacity-0"
        >
          <div v-if="showToast" class="fixed bottom-10 left-1/2 -translate-x-1/2 z-[200] flex items-center gap-3 px-5 py-3.5 glass-liquid rounded-2xl shadow-2xl text-slate-800 dark:text-gray-100 no-print">
            <Info class="w-5 h-5 text-blue-500 dark:text-blue-400 shrink-0" />
            <span class="font-medium text-[15px] leading-none">该文章正在编辑出版中</span>
          </div>
        </Transition>
      </Teleport>
    </div>
  </div>
</template>

<style>
</style>
