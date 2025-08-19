<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
    <nav class="container-custom">
      <div class="flex items-center justify-between h-20 lg:h-24">
        <!-- Logo -->
        <NuxtLink to="/" class="relative z-10">
          <img 
            src="/logo-optimized.png" 
            alt="Time To Refurbish" 
            class="h-8 lg:h-10 w-auto object-contain"
          />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-12">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.href" 
            class="text-sm font-medium tracking-wide text-gray-900 hover:text-accent transition-colors"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- Contact & Menu -->
        <div class="flex items-center space-x-6">
          <a 
            href="tel:07883300410" 
            class="hidden md:flex items-center space-x-2 text-sm font-medium"
          >
            <Phone :size="18" class="text-accent" />
            <span class="text-gray-900">07883 300410</span>
          </a>
          
          <!-- Mobile menu button -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="lg:hidden p-2"
          >
            <Menu v-if="!mobileMenuOpen" :size="24" class="text-gray-900" />
            <X v-else :size="24" class="text-gray-900" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <Transition name="slide">
        <div v-if="mobileMenuOpen" class="lg:hidden absolute top-full left-0 right-0 bg-white border-t">
          <div class="container-custom py-8 space-y-4">
            <NuxtLink 
              v-for="item in navigation" 
              :key="item.name"
              :to="item.href"
              @click="mobileMenuOpen = false"
              class="block py-2 text-lg font-medium text-gray-900 hover:text-accent transition-colors"
            >
              {{ item.name }}
            </NuxtLink>
            <a 
              href="tel:07883300410" 
              class="block pt-4 border-t"
            >
              <span class="text-sm text-gray-600">Call us</span>
              <div class="text-lg font-medium text-accent">07883 300410</div>
            </a>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup>
import { Menu, X, Phone } from 'lucide-vue-next'

const mobileMenuOpen = ref(false)

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
]
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>