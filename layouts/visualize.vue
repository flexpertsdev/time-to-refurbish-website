<template>
  <div class="min-h-screen">
    <!-- Header -->
    <TheHeader />
    
    <!-- Main Content -->
    <main class="pt-20 lg:pt-24">
      <slot />
    </main>
    
    <!-- No footer or floating buttons on visualize page -->
  </div>
</template>

<script setup>
// Add smooth scrolling behavior
useHead({
  htmlAttrs: {
    class: 'scroll-smooth'
  }
})
</script>