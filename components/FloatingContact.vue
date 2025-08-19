<template>
  <div class="fixed bottom-6 right-6 z-40">
    <!-- Expanded Options -->
    <Transition name="slide-up">
      <div v-if="isOpen" class="absolute bottom-20 right-0 flex flex-col gap-3 mb-3">
        <!-- Call Button -->
        <a 
          href="tel:07883300410"
          class="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all border border-gray-200 whitespace-nowrap"
        >
          <Phone :size="20" />
          <span class="text-sm font-medium">Call Now</span>
        </a>
        
        <!-- WhatsApp Button -->
        <a 
          href="https://wa.me/447883300410"
          target="_blank"
          class="flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
        >
          <MessageCircle :size="20" />
          <span class="text-sm font-medium">WhatsApp</span>
        </a>
        
        <!-- Form Button -->
        <a 
          href="#contact"
          @click="handleContactClick"
          class="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
        >
          <Mail :size="20" />
          <span class="text-sm font-medium">Get Quote</span>
        </a>
      </div>
    </Transition>
    
    <!-- Chat Bubble Button -->
    <button 
      @click="isOpen = !isOpen"
      class="relative w-16 h-16 bg-accent text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center group"
    >
      <Transition name="fade" mode="out-in">
        <X v-if="isOpen" :size="24" key="close" />
        <MessageSquare v-else :size="28" key="chat" />
      </Transition>
      
    </button>
  </div>
</template>

<script setup>
import { Phone, MessageCircle, Mail, MessageSquare, X } from 'lucide-vue-next'

const isOpen = ref(false)

const handleContactClick = (e) => {
  e.preventDefault()
  isOpen.value = false
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}

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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>