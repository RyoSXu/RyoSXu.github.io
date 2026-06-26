<template>
  <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
    <!-- Header -->
    <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
        </div>
        <div>
          <h2 class="text-lg font-bold text-slate-800 dark:text-white">位图转矢量图 (PNG/JPG to SVG)</h2>
          <p class="text-sm text-slate-500 dark:text-slate-400">纯前端处理，安全无痕</p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      <!-- Left Panel: Controls & Upload -->
      <div class="lg:col-span-4 space-y-6">
        
        <!-- Upload Area -->
        <div 
          class="relative group border-2 border-dashed rounded-xl p-8 text-center transition-all"
          :class="isDragging ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/20' : 'border-slate-300 dark:border-slate-600 hover:border-teal-400 dark:hover:border-teal-500 bg-slate-50 dark:bg-slate-800/50'"
          @dragover.prevent="isDragging = true"
          @dragleave.prevent="isDragging = false"
          @drop.prevent="handleDrop"
        >
          <input 
            type="file" 
            ref="fileInput"
            accept=".png,.jpg,.jpeg" 
            class="hidden" 
            @change="handleFileSelect"
          />
          <div class="flex flex-col items-center justify-center space-y-3 cursor-pointer" @click="() => fileInput?.click()">
            <div class="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-500 dark:text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-400"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
            </div>
            <div>
              <p class="font-medium text-slate-700 dark:text-slate-300">点击上传 或 拖拽图片至此</p>
              <p class="text-xs text-slate-500 mt-1">支持 PNG/JPG (≤ 5MB，尺寸 ≤ 2000x2000)</p>
            </div>
          </div>
        </div>
        
        <!-- Error Message -->
        <div v-if="errorMessage" class="p-3 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm rounded-lg border border-red-200 dark:border-red-800 flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mt-0.5 shrink-0"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
          <span>{{ errorMessage }}</span>
        </div>

        <!-- Parameters & Actions -->
        <div class="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-200 dark:border-slate-700 space-y-6">
          
          <div class="space-y-4">
            <h3 class="font-medium text-slate-800 dark:text-white flex items-center justify-between">
              转换参数
              <button @click="resetParams" class="text-xs text-teal-600 dark:text-teal-400 hover:underline font-normal">重置默认</button>
            </h3>
            
            <div class="space-y-4">
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <label class="text-slate-600 dark:text-slate-400">色彩数量 (更少 = 更小尺寸)</label>
                  <span class="text-slate-800 dark:text-slate-200">{{ params.colors }}</span>
                </div>
                <input type="range" min="2" max="32" v-model.number="params.colors" class="w-full accent-teal-600" />
              </div>

              <div>
                <div class="flex justify-between text-sm mb-1">
                  <label class="text-slate-600 dark:text-slate-400">平滑度 (消除渐变造成的噪点)</label>
                  <span class="text-slate-800 dark:text-slate-200">{{ params.blurradius }}</span>
                </div>
                <input type="range" min="0" max="5" step="0.5" v-model.number="params.blurradius" class="w-full accent-teal-600" />
              </div>

              <div>
                <div class="flex justify-between text-sm mb-1">
                  <label class="text-slate-600 dark:text-slate-400">曲线简化 (更高 = 显著减小体积)</label>
                  <span class="text-slate-800 dark:text-slate-200">{{ params.simplify }}</span>
                </div>
                <input type="range" min="1" max="10" v-model.number="params.simplify" class="w-full accent-teal-600" />
              </div>
            </div>
          </div>

          <div class="pt-4 border-t border-slate-200 dark:border-slate-700 space-y-3">
            <button 
              @click="processImage" 
              :disabled="!originalImage || isProcessing"
              class="w-full py-3 rounded-xl font-medium text-white shadow-md transition-all flex items-center justify-center gap-2"
              :class="!originalImage || isProcessing ? 'bg-slate-400 cursor-not-allowed' : 'bg-teal-600 hover:bg-teal-700 hover:shadow-lg hover:-translate-y-0.5'"
            >
              <svg v-if="isProcessing" class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="m17 5-5-3-5 3"/><path d="m19 19-7 3-7-3"/></svg>
              {{ isProcessing ? '计算中...' : '生成 SVG' }}
            </button>

            <!-- Download Button placed under Generate -->
            <button 
              v-if="svgData"
              @click="downloadSvg"
              class="w-full py-2.5 rounded-xl font-medium border-2 border-teal-600 text-teal-600 dark:border-teal-500 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/30 transition-all flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              下载 SVG 矢量图
            </button>
          </div>

        </div>
      </div>

      <!-- Right Panel: Previews -->
      <div class="lg:col-span-8 flex flex-col justify-center">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <!-- Original Image Preview -->
          <div class="flex flex-col">
            <h4 class="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 text-center">原图 (上传)</h4>
            <div class="aspect-square bg-slate-100 dark:bg-slate-900 rounded-2xl border-2 border-slate-200 dark:border-slate-700 overflow-hidden relative flex items-center justify-center pattern-checkerboard shadow-inner">
              <img v-if="originalImage" :src="originalImage" class="w-full h-full object-contain p-2 drop-shadow-sm transition-opacity duration-300" />
              <div v-else class="text-slate-400 text-sm flex flex-col items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-50"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                <span>未选择文件</span>
              </div>
            </div>
          </div>

          <!-- SVG Output Preview -->
          <div class="flex flex-col">
            <h4 class="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 text-center">SVG (输出结果)</h4>
            <div class="aspect-square bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 overflow-hidden relative flex items-center justify-center pattern-checkerboard shadow-inner">
              <div v-if="svgData" v-html="svgData" class="w-full h-full p-2 [&>svg]:w-full [&>svg]:h-full [&>svg]:object-contain transition-opacity duration-300"></div>
              <div v-else class="text-slate-400 text-sm flex flex-col items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-50"><path d="M12 2v20"/><path d="m17 5-5-3-5 3"/><path d="m19 19-7 3-7-3"/></svg>
                <span>{{ isProcessing ? '转换中...' : '点击左侧按钮生成' }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const fileInput = ref<HTMLInputElement | null>(null)
const isDragging = ref(false)
const isProcessing = ref(false)
const errorMessage = ref<string>('')
const originalImage = ref<string | null>(null)
const svgData = ref<string | null>(null)

// 深度优化后的默认参数：专门解决生成 10MB 超大文件和卡顿假死问题
const defaultParams = {
  colors: 8,          // 大幅减少色彩级数（从默认16降到8），去除渐变带来的海量冗余色块
  blurradius: 2,      // 加入轻微高斯模糊，能够抹平由于抗锯齿和渐变造成的无数碎裂细小路径
  simplify: 5,        // [重要优化] 统一控制 ltres 和 qtres 曲线简化容差，值越高节点越少，体积越小
  pathomit: 16,       // 忽略低于此面积的杂色噪点碎片
}
const params = ref({ ...defaultParams })

let ImageTracer: any = null

onMounted(async () => {
  try {
    // @ts-ignore
    const module = await import('imagetracerjs')
    ImageTracer = module.default || module
  } catch (err) {
    console.error("Failed to load ImageTracer:", err)
  }
})

const resetParams = () => {
  params.value = { ...defaultParams }
}

const handleFileSelect = (e: Event) => {
  errorMessage.value = ''
  const target = e.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    validateAndLoadFile(target.files[0])
  }
}

const handleDrop = (e: DragEvent) => {
  errorMessage.value = ''
  isDragging.value = false
  if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
    validateAndLoadFile(e.dataTransfer.files[0])
  }
}

const validateAndLoadFile = (file: File) => {
  const validTypes = ['image/png', 'image/jpeg', 'image/jpg']
  if (!validTypes.includes(file.type.toLowerCase())) {
    errorMessage.value = '仅支持 PNG 或 JPG 格式图片'
    return
  }

  const MAX_SIZE_MB = 5
  if (file.size > MAX_SIZE_MB * 1024 * 1024) {
    errorMessage.value = `文件过大，限制在 ${MAX_SIZE_MB}MB 以内`
    return
  }

  const reader = new FileReader()
  reader.onload = (e) => {
    const dataUrl = e.target?.result as string
    
    const img = new Image()
    img.onload = () => {
      const MAX_PIXELS = 2000
      if (img.width > MAX_PIXELS || img.height > MAX_PIXELS) {
        errorMessage.value = `图片尺寸过大 (${img.width}x${img.height})，限制在 ${MAX_PIXELS}x${MAX_PIXELS} 以内`
        return
      }
      
      originalImage.value = dataUrl
      svgData.value = null 
      errorMessage.value = ''
    }
    img.onerror = () => {
      errorMessage.value = '解析图片失败，请重试'
    }
    img.src = dataUrl
  }
  reader.onerror = () => {
    errorMessage.value = '读取文件失败，请重试'
  }
  
  reader.readAsDataURL(file)
}

// 【核心抗卡顿优化】:
// SVG 是矢量图，本身支持无限放大无损。但如果把一张 1024x1024 或 2000x2000 的位图丢给纯 JS 计算
// 浏览器会卡死（处理几百万像素的轮廓）。
// 这个函数会在运算前，将用户图片在 Canvas 里等比缩小到一个安全尺寸 (例如最大 500 像素)。
// 这样在保持整体外形的同时，大幅过滤掉了锯齿噪点，运算速度提升数十倍，同时生成的 SVG 文件体积能减少 90% 以上。
const getOptimizedImageData = (dataUrl: string, maxSize: number = 500): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => {
      let { width, height } = img
      // 已经够小就不处理
      if (width <= maxSize && height <= maxSize) {
        resolve(dataUrl)
        return
      }
      
      const ratio = Math.min(maxSize / width, maxSize / height)
      width = Math.floor(width * ratio)
      height = Math.floor(height * ratio)
      
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext('2d')
      if (ctx) {
        // 使用 clearRect 保留原本的透明通道
        ctx.clearRect(0, 0, width, height)
        // 开启平滑抗锯齿
        ctx.imageSmoothingEnabled = true
        ctx.imageSmoothingQuality = 'high'
        ctx.drawImage(img, 0, 0, width, height)
        resolve(canvas.toDataURL('image/png'))
      } else {
        resolve(dataUrl)
      }
    }
    img.onerror = () => resolve(dataUrl)
    img.src = dataUrl
  })
}

const processImage = async () => {
  if (!originalImage.value || !ImageTracer) return
  
  isProcessing.value = true
  errorMessage.value = ''
  
  // 留出一点点时间让 Vue 把 loading 的 UI 渲染出来，避免主线程一进入计算直接卡住画面
  await new Promise(r => setTimeout(r, 80))

  try {
    // 1. 预处理抗卡顿降噪
    const optimizedDataUrl = await getOptimizedImageData(originalImage.value, 500)

    // 2. 映射简化参数 (使用自定义的 simplify 值同时控制线性与二次曲线容差)
    const tracerOptions = {
      colors: params.value.colors,
      blurradius: params.value.blurradius,
      blurdelta: 20,       
      pathomit: params.value.pathomit,
      ltres: params.value.simplify, 
      qtres: params.value.simplify,
      scale: 1,
    }

    // 3. 执行纯前端 JS 矢量化
    setTimeout(() => {
      try {
        ImageTracer.imageToSVG(
          optimizedDataUrl,
          (svgStr: string) => {
            // Fix SVG scaling by injecting viewBox if missing
            const match = svgStr.match(/<svg[^>]*width="(\d*\.?\d+)"[^>]*height="(\d*\.?\d+)"/i)
            if (match && !svgStr.includes('viewBox')) {
               const w = match[1]
               const h = match[2]
               svgStr = svgStr.replace('<svg ', `<svg viewBox="0 0 ${w} ${h}" `)
            }
            svgData.value = svgStr
            isProcessing.value = false
          },
          tracerOptions
        )
      } catch (err) {
        console.error("Tracing error:", err)
        errorMessage.value = "转换失败，可能是图片色块依然过于复杂。"
        isProcessing.value = false
      }
    }, 20)
  } catch (err) {
    console.error("Optimize error:", err)
    errorMessage.value = "图片预处理失败。"
    isProcessing.value = false
  }
}

const downloadSvg = () => {
  if (!svgData.value) return
  
  const blob = new Blob([svgData.value], { type: 'image/svg+xml;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `traced_${new Date().getTime()}.svg`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
</script>

<style scoped>
.pattern-checkerboard {
  background-color: #f1f5f9;
  background-image: linear-gradient(45deg, #e2e8f0 25%, transparent 25%), 
                    linear-gradient(-45deg, #e2e8f0 25%, transparent 25%), 
                    linear-gradient(45deg, transparent 75%, #e2e8f0 75%), 
                    linear-gradient(-45deg, transparent 75%, #e2e8f0 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
}
:global(.dark) .pattern-checkerboard {
  background-color: #0f172a;
  background-image: linear-gradient(45deg, #1e293b 25%, transparent 25%), 
                    linear-gradient(-45deg, #1e293b 25%, transparent 25%), 
                    linear-gradient(45deg, transparent 75%, #1e293b 75%), 
                    linear-gradient(-45deg, transparent 75%, #1e293b 75%);
}
</style>
