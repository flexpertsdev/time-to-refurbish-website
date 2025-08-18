<template>
  <div class="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
    <!-- Expanded Options -->
    <Transition name="slide-up">
      <div v-if="isOpen" class="flex flex-col gap-3">
        <!-- Call Button -->
        <a 
          href="tel:07883300410"
          class="flex items-center gap-3 bg-white text-black px-4 py-3 shadow-lg hover:shadow-xl transition-all border border-gray-200"
        >
          <Phone :size="20" />
          <span class="text-sm font-medium">Call Now</span>
        </a>
        
        <!-- WhatsApp Button -->
        <a 
          href="https://wa.me/447883300410"
          target="_blank"
          class="flex items-center gap-3 bg-green-500 text-white px-4 py-3 shadow-lg hover:shadow-xl transition-all"
        >
          <MessageCircle :size="20" />
          <span class="text-sm font-medium">WhatsApp</span>
        </a>
        
        <!-- Form Button -->
        <NuxtLink 
          to="/contact"
          class="flex items-center gap-3 bg-black text-white px-4 py-3 shadow-lg hover:shadow-xl transition-all"
        >
          <Mail :size="20" />
          <span class="text-sm font-medium">Get Quote</span>
        </NuxtLink>
      </div>
    </Transition>
    
    <!-- Main Toggle Button -->
    <button 
      @click="isOpen = !isOpen"
      class="w-14 h-14 bg-accent text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105"
      :class="isOpen ? 'rotate-45' : ''"
    >
      <Plus :size="24" />
    </button>
  </div>
</template>

<script setup>
import { Phone, MessageCircle, Mail, Plus } from 'lucide-vue-next'

const isOpen = ref(false)

// Close when clicking outside
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.fixed.bottom-6.right-6')) {
      isOpen.value = false
    }
  })
})
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

button {
  transition: transform 0.3s ease;
}
</style>