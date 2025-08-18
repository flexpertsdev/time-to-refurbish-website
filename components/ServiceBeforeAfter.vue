<template>
  <div 
    ref="sliderContainer"
    class="relative aspect-[16/10] overflow-hidden cursor-ew-resize select-none"
    @mousedown="startDrag"
    @mousemove="onDrag"
    @mouseup="endDrag"
    @mouseleave="endDrag"
    @touchstart="startDrag"
    @touchmove="onDrag"
    @touchend="endDrag"
  >
    <!-- After Image (Bottom layer) -->
    <img 
      :src="afterImage"
      :alt="afterAlt"
      class="absolute inset-0 w-full h-full object-cover"
    />
    
    <!-- Before Image (Top layer with clip) -->
    <div 
      class="absolute inset-0 overflow-hidden"
      :style="`clip-path: inset(0 ${100 - sliderPosition}% 0 0)`"
    >
      <img 
        :src="beforeImage"
        :alt="beforeAlt"
        class="absolute inset-0 w-full h-full object-cover"
      />
    </div>
    
    <!-- Slider Handle -->
    <div 
      class="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
      :style="`left: ${sliderPosition}%`"
    >
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
        <ChevronsLeftRight :size="20" class="text-gray-700" />
      </div>
    </div>

    <!-- Labels -->
    <div class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-sm font-medium">
      BEFORE
    </div>
    <div class="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-sm font-medium">
      AFTER
    </div>
  </div>
</template>

<script setup>
import { ChevronsLeftRight } from 'lucide-vue-next'

const props = defineProps({
  beforeImage: {
    type: String,
    required: true
  },
  afterImage: {
    type: String,
    required: true
  },
  beforeAlt: {
    type: String,
    default: 'Before renovation'
  },
  afterAlt: {
    type: String,
    default: 'After renovation'
  }
})

const sliderPosition = ref(50)
const isDragging = ref(false)
const sliderContainer = ref(null)

const startDrag = (e) => {
  isDragging.value = true
  updatePosition(e)
}

const onDrag = (e) => {
  if (!isDragging.value) return
  updatePosition(e)
}

const endDrag = () => {
  isDragging.value = false
}

const updatePosition = (e) => {
  if (!sliderContainer.value) return
  
  const rect = sliderContainer.value.getBoundingClientRect()
  const x = e.type.includes('touch') ? e.touches[0].clientX : e.clientX
  const position = ((x - rect.left) / rect.width) * 100
  
  sliderPosition.value = Math.max(0, Math.min(100, position))
}
</script>