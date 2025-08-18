<template>
  <Transition name="fade">
    <button
      v-if="showButton"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-40 w-12 h-12 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
    >
      <ArrowUp :size="20" />
    </button>
  </Transition>
</template>

<script setup>
import { ArrowUp } from 'lucide-vue-next'

const showButton = ref(false)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    showButton.value = window.scrollY > 500
  })
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>