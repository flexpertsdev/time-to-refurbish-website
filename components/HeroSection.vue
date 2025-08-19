<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=3270&auto=format&fit=crop"
        alt="Luxury kitchen"
        class="w-full h-full object-cover"
      />
      <!-- Gradient overlay for better text readability -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 text-center px-6">
      <h1 class="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 animate-fade-up">
        The Kitchen of<br/>Your Dreams
      </h1>
      <p class="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light tracking-wide animate-fade-up" style="animation-delay: 0.2s">
        Luxury renovations & bespoke design for discerning homeowners in South East London
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style="animation-delay: 0.4s">
        <NuxtLink 
          to="/visualize" 
          class="inline-block bg-accent text-white px-10 py-4 text-sm font-medium tracking-widest hover:bg-accent-dark transition-all uppercase transform hover:scale-105"
        >
          Visualise Your Space
        </NuxtLink>
        <NuxtLink 
          to="/contact" 
          class="inline-block bg-white text-black px-10 py-4 text-sm font-medium tracking-widest hover:bg-gray-100 transition-colors uppercase"
        >
          Start Your Project
        </NuxtLink>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <ChevronDown :size="24" class="text-white animate-bounce" />
    </div>
  </section>
</template>

<script setup>
import { ChevronDown } from 'lucide-vue-next'
</script>