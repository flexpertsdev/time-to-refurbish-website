<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[60vh] flex items-center justify-center">
      <div class="absolute inset-0 bg-black/40"></div>
      <img 
        src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2940" 
        alt="Home Spa"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="relative z-10 text-center text-white">
        <h1 class="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-6">Home Spa & Wellness</h1>
        <p class="text-xl font-light">Your personal sanctuary of relaxation</p>
      </div>
    </section>

    <!-- Introduction -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-lg text-gray-600 leading-relaxed">
            Create the ultimate wellness retreat in your own home. From jacuzzi installations 
            to complete spa rooms, we design and build luxurious spaces dedicated to relaxation 
            and rejuvenation.
          </p>
        </div>
      </div>
    </section>

    <!-- Spa Features -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <h2 class="font-serif text-4xl md:text-5xl text-center mb-16">Spa Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div class="text-center">
            <Droplets :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Jacuzzi & Hot Tubs</h3>
            <p class="text-gray-600">Premium hydrotherapy systems with jets and bubble features</p>
          </div>
          <div class="text-center">
            <Cloud :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Steam Rooms</h3>
            <p class="text-gray-600">Custom-built steam rooms with aromatherapy systems</p>
          </div>
          <div class="text-center">
            <Flame :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Saunas</h3>
            <p class="text-gray-600">Traditional and infrared saunas in cedar or hemlock</p>
          </div>
          <div class="text-center">
            <Sparkles :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Chromotherapy</h3>
            <p class="text-gray-600">Color-changing LED systems for mood enhancement</p>
          </div>
          <div class="text-center">
            <Music :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Audio Systems</h3>
            <p class="text-gray-600">Waterproof speakers for immersive relaxation</p>
          </div>
          <div class="text-center">
            <Thermometer :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Climate Control</h3>
            <p class="text-gray-600">Precise temperature and humidity management</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Jacuzzi Special -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="font-serif text-4xl md:text-5xl mb-6">Jacuzzi Installation Excellence</h2>
            <p class="text-lg text-gray-600 mb-6">
              As specialists in luxury jacuzzi installation, we handle every aspect of bringing 
              spa-quality hydrotherapy to your home.
            </p>
            <div class="space-y-4">
              <div class="flex gap-4">
                <Check :size="24" class="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 class="font-medium mb-1">Expert Planning</h4>
                  <p class="text-gray-600">Site assessment and structural evaluation</p>
                </div>
              </div>
              <div class="flex gap-4">
                <Check :size="24" class="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 class="font-medium mb-1">Premium Brands</h4>
                  <p class="text-gray-600">Jacuzzi®, Villeroy & Boch, and Duravit</p>
                </div>
              </div>
              <div class="flex gap-4">
                <Check :size="24" class="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 class="font-medium mb-1">Full Installation</h4>
                  <p class="text-gray-600">Plumbing, electrical, and all finishing work</p>
                </div>
              </div>
              <div class="flex gap-4">
                <Check :size="24" class="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 class="font-medium mb-1">Maintenance Support</h4>
                  <p class="text-gray-600">Ongoing service and care packages</p>
                </div>
              </div>
            </div>
          </div>
          <div class="aspect-[4/3] bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2940"
              alt="Luxury Jacuzzi Installation"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding bg-black text-white">
      <div class="container-custom text-center">
        <h2 class="font-serif text-4xl md:text-5xl mb-6">Create Your Home Spa</h2>
        <p class="text-xl mb-8 text-gray-300">Transform your bathroom into a wellness retreat</p>
        <NuxtLink to="/#contact" class="inline-block px-8 py-4 bg-white text-black hover:bg-gray-100 transition-colors">
          Start Your Project
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Droplets, Cloud, Flame, Sparkles, Music, Thermometer, Check } from 'lucide-vue-next'

useHead({
  title: 'Home Spa & Jacuzzi Installation | Time To Refurbish',
  meta: [
    { 
      name: 'description', 
      content: 'Luxury home spa and jacuzzi installation in South East London. Steam rooms, saunas, and complete wellness room design for ultimate relaxation.' 
    }
  ]
})
</script>