<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[40vh] flex items-center justify-center bg-gradient-to-br from-accent to-accent-dark">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="relative z-10 text-center text-white">
        <h1 class="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-6">Visualize Your Dream Space</h1>
        <p class="text-xl font-light max-w-2xl mx-auto">
          See your room transformed with AI-powered design visualization in minutes
        </p>
      </div>
    </section>

    <!-- Wizard Section -->
    <RemodelWizard />
  </div>
</template>

<script setup>
useHead({
  title: 'Visualize Your Space | Time To Refurbish',
  meta: [
    { 
      name: 'description', 
      content: 'Transform your space with AI visualization. See how your kitchen, bathroom, or living room could look with our design tool.' 
    }
  ]
})
</script>