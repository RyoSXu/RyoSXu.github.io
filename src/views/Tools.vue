<template>
  <div class="py-12 px-4 max-w-7xl mx-auto min-h-[80vh]">
    <!-- Header -->
    <div class="text-center mb-16">
      <h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
        实用工具集
      </h1>
      <p class="text-slate-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
        收集并构建了一些提升效率的纯前端小工具。所有工具都在您的浏览器本地运行，安全且保护隐私。
      </p>
    </div>

    <!-- Tools Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <!-- Image Tracer Card -->
      <router-link to="/tools/svg-converter" class="group block h-full">
        <div class="h-full bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
          <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-teal-500/30 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
          </div>
          <h2 class="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
            图片转 SVG 矢量图
          </h2>
          <p class="text-slate-600 dark:text-slate-400 flex-1">
            纯前端位图转换工具，支持 PNG/JPG 转 SVG。自定义细节和色彩，本地渲染不上传服务器。
          </p>
          <div class="mt-6 flex items-center text-teal-600 dark:text-teal-400 font-medium text-sm">
            <span>开始使用</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
        </div>
      </router-link>

    </div>
  </div>
</template>

<script setup lang="ts">
</script>
