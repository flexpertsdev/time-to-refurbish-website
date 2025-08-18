<template>
  <div class="min-h-screen">
    <!-- Header -->
    <TheHeader />
    
    <!-- Main Content -->
    <main class="pt-20 lg:pt-24">
      <slot />
    </main>
    
    <!-- Footer -->
    <TheFooter />
    
    <!-- Back to Top Button -->
    <BackToTop />
    
    <!-- Floating Contact Button -->
    <FloatingContact />
  </div>
</template>

<script setup>
// Add smooth scrolling behavior
useHead({
  htmlAttrs: {
    class: 'scroll-smooth'
  }
})

// Structured data is added via nuxt.config.ts
</script>
