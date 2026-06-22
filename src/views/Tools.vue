<template>
  <div class="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
    <div class="relative group">
      <div class="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-xl opacity-20 dark:opacity-40 animate-pulse"></div>
      <div class="relative bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 p-10 rounded-2xl shadow-xl">
        <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
          实用工具集
        </h1>
        <p class="text-slate-600 dark:text-gray-300 text-lg mb-8 max-w-md mx-auto">
          我常用的一些在线工具与代码片段正在整理中，敬请期待。您可以先前往「简介」页面了解我的过往经历。
        </p>
        <router-link to="/about" class="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:-translate-y-0.5">
          查看简介
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
