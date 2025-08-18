<template>
  <section class="section-padding bg-gray-50">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <h2 class="font-serif text-4xl md:text-5xl font-light mb-4">See Our Work</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Witness the transformation. Drag to reveal the stunning results.
        </p>
      </div>

      <!-- Slider Container -->
      <div class="max-w-4xl mx-auto">
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
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=3270&auto=format&fit=crop"
            alt="After renovation"
            class="absolute inset-0 w-full h-full object-cover"
          />
          
          <!-- Before Image (Top layer with clip) -->
          <div 
            class="absolute inset-0 overflow-hidden"
            :style="`clip-path: inset(0 ${100 - sliderPosition}% 0 0)`"
          >
            <img 
              src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?q=80&w=3270&auto=format&fit=crop"
              alt="Before renovation"
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

        <!-- Project Info -->
        <div class="mt-8 text-center">
          <h3 class="font-serif text-2xl mb-2">Luxury Kitchen Renovation</h3>
          <p class="text-gray-600">Bromley, South East London</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ChevronsLeftRight } from 'lucide-vue-next'

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