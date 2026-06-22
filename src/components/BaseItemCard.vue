<template>
  <GlassCard class="flex flex-col h-full">
    <!-- Icon or Image -->
    <div v-if="hasIconArea" class="w-12 h-12 bg-black/5 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-center mb-3 shrink-0">
      <slot name="icon"></slot>
    </div>
    <div v-if="image" class="mb-3 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 shrink-0">
      <img :src="image" :alt="title" class="w-full h-32 object-cover opacity-90 dark:opacity-80 hover:opacity-100 transition-opacity" />
    </div>

    <!-- Top Badge / Header extra (For vertical layout) -->
    <div v-if="layout === 'vertical' && (badge || $slots['header-extra'])" class="flex items-center gap-3 mb-2 shrink-0">
      <span v-if="badge" :class="themeClasses.badge">
        {{ badge }}
      </span>
      <slot name="header-extra"></slot>
    </div>

    <!-- Title Row -->
    <div :class="['shrink-0', layout === 'horizontal' ? 'flex justify-between items-center mb-1 flex-wrap gap-2' : 'mb-2']">
      <div :class="layout === 'horizontal' ? 'flex items-center flex-wrap gap-2 flex-1 pr-4' : ''">
        <!-- Inline badge for horizontal layout -->
        <span v-if="layout === 'horizontal' && badge" :class="themeClasses.badge">
          {{ badge }}
        </span>
        
        <h3 class="text-[15px] font-bold leading-none text-slate-900 dark:text-white">{{ title }}</h3>
        
        <span v-if="subtitle || $slots.subtitle" :class="['font-medium text-sm', layout === 'horizontal' ? themeClasses.text : 'block mt-1 text-slate-500 dark:text-gray-400']">
          <slot name="subtitle">{{ subtitle }}</slot>
        </span>
        <span v-if="meta" class="text-slate-400 dark:text-gray-500 font-normal text-sm">
          <span v-if="layout === 'horizontal'">· </span>{{ meta }}
        </span>
      </div>
      <span v-if="period" class="text-slate-500 dark:text-gray-400 text-[13px] font-mono shrink-0" :class="layout === 'vertical' ? 'block mt-1' : ''">
        {{ period }}
      </span>
    </div>

    <!-- Description -->
    <p v-if="description" class="text-slate-600 dark:text-gray-300 text-sm leading-relaxed" :class="{'mb-3': $slots['content-extra'] || tags?.length || $slots['footer-extra']}">
      {{ description }}
    </p>

    <div v-if="$slots['content-extra']" class="mb-3">
      <slot name="content-extra"></slot>
    </div>

    <!-- Tags -->
    <div v-if="tags && tags.length" class="flex flex-wrap gap-1.5 mt-auto pt-3 shrink-0">
      <span v-for="tag in tags" :key="tag" :class="tagThemeClasses.badge">
        {{ tag }}
      </span>
    </div>

    <div v-if="$slots['footer-extra']" class="mt-auto pt-2">
      <slot name="footer-extra"></slot>
    </div>
  </GlassCard>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import GlassCard from './GlassCard.vue'

const props = withDefaults(defineProps<{
  title: string
  subtitle?: string
  meta?: string
  period?: string
  description?: string
  image?: string
  badge?: string
  tags?: string[]
  theme?: 'blue' | 'purple' | 'rose' | 'amber' | 'neutral' | 'indigo' | 'teal' | 'fuchsia' | 'emerald'
  tagTheme?: 'blue' | 'purple' | 'rose' | 'amber' | 'neutral' | 'indigo' | 'teal' | 'fuchsia' | 'emerald'
  layout?: 'horizontal' | 'vertical'
}>(), {
  theme: 'blue',
  tagTheme: 'neutral',
  layout: 'vertical'
})

const slots = useSlots()
const hasIconArea = computed(() => !!slots.icon)

const getThemeClasses = (theme: string) => {
  switch (theme) {
    case 'blue':
      return {
        badge: 'tag-glass bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/20 dark:border-blue-500/30',
        text: 'text-blue-600 dark:text-blue-300'
      }
    case 'purple':
      return {
        badge: 'tag-glass bg-purple-500/10 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-500/20 dark:border-purple-500/30',
        text: 'text-purple-600 dark:text-purple-300'
      }
    case 'rose':
      return {
        badge: 'tag-glass bg-rose-500/10 dark:bg-rose-500/20 text-rose-700 dark:text-rose-300 border-rose-500/20 dark:border-rose-500/30',
        text: 'text-rose-600 dark:text-rose-300'
      }
    case 'amber':
      return {
        badge: 'tag-glass bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/20 dark:border-amber-500/30',
        text: 'text-amber-600 dark:text-amber-300'
      }
    case 'indigo':
      return {
        badge: 'tag-glass bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border-indigo-500/20 dark:border-indigo-500/30',
        text: 'text-indigo-600 dark:text-indigo-300'
      }
    case 'teal':
      return {
        badge: 'tag-glass bg-teal-500/10 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300 border-teal-500/20 dark:border-teal-500/30',
        text: 'text-teal-600 dark:text-teal-300'
      }
    case 'fuchsia':
      return {
        badge: 'tag-glass bg-fuchsia-500/10 dark:bg-fuchsia-500/20 text-fuchsia-700 dark:text-fuchsia-300 border-fuchsia-500/20 dark:border-fuchsia-500/30',
        text: 'text-fuchsia-600 dark:text-fuchsia-300'
      }
    case 'emerald':
      return {
        badge: 'tag-glass bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/20 dark:border-emerald-500/30',
        text: 'text-emerald-600 dark:text-emerald-300'
      }
    default:
      return {
        badge: 'tag-glass bg-black/5 dark:bg-white/10 border-slate-200/50 dark:border-white/10 text-slate-700 dark:text-gray-300',
        text: 'text-slate-600 dark:text-gray-300'
      }
  }
}

const themeClasses = computed(() => getThemeClasses(props.theme))
const tagThemeClasses = computed(() => {
  const themeToUse = props.tagTheme && props.tagTheme !== 'neutral' ? props.tagTheme : props.theme
  return getThemeClasses(themeToUse)
})

</script>
