<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[60vh] flex items-center justify-center">
      <div class="absolute inset-0 bg-black/40"></div>
      <img 
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2940" 
        alt="Smart Home"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="relative z-10 text-center text-white">
        <h1 class="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-6">Smart Home Integration</h1>
        <p class="text-xl font-light">Intelligent living for the modern home</p>
      </div>
    </section>

    <!-- Introduction -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-lg text-gray-600 leading-relaxed">
            Elevate your living experience with seamless smart home technology. From automated 
            lighting to integrated security, we create intelligent homes that respond to your 
            lifestyle while maintaining elegant aesthetics.
          </p>
        </div>
      </div>
    </section>

    <!-- Smart Features -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <h2 class="font-serif text-4xl md:text-5xl text-center mb-16">Intelligent Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div class="text-center">
            <Lightbulb :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Smart Lighting</h3>
            <p class="text-gray-600">Automated scenes, dimming, and color control via app or voice</p>
          </div>
          <div class="text-center">
            <Thermometer :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Climate Control</h3>
            <p class="text-gray-600">Intelligent heating and cooling that learns your preferences</p>
          </div>
          <div class="text-center">
            <Shield :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Security Systems</h3>
            <p class="text-gray-600">Smart locks, cameras, and alarm systems with remote monitoring</p>
          </div>
          <div class="text-center">
            <Music :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Multi-room Audio</h3>
            <p class="text-gray-600">Whole-home audio systems with zone control</p>
          </div>
          <div class="text-center">
            <Tv :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Home Cinema</h3>
            <p class="text-gray-600">4K projectors, surround sound, and automated screens</p>
          </div>
          <div class="text-center">
            <Smartphone :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Voice Control</h3>
            <p class="text-gray-600">Integration with Alexa, Google, and Siri</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Brands -->
    <section class="section-padding">
      <div class="container-custom">
        <h2 class="font-serif text-4xl md:text-5xl text-center mb-16">Trusted Partners</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <p class="text-lg font-medium">Control4</p>
            <p class="text-sm text-gray-600">Home Automation</p>
          </div>
          <div class="text-center">
            <p class="text-lg font-medium">Lutron</p>
            <p class="text-sm text-gray-600">Lighting Control</p>
          </div>
          <div class="text-center">
            <p class="text-lg font-medium">Sonos</p>
            <p class="text-sm text-gray-600">Audio Systems</p>
          </div>
          <div class="text-center">
            <p class="text-lg font-medium">Nest</p>
            <p class="text-sm text-gray-600">Climate & Security</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding bg-black text-white">
      <div class="container-custom text-center">
        <h2 class="font-serif text-4xl md:text-5xl mb-6">Upgrade to Smart Living</h2>
        <p class="text-xl mb-8 text-gray-300">Discover the possibilities of home automation</p>
        <NuxtLink to="/#contact" class="inline-block px-8 py-4 bg-white text-black hover:bg-gray-100 transition-colors">
          Get Started
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Lightbulb, Thermometer, Shield, Music, Tv, Smartphone } from 'lucide-vue-next'

useHead({
  title: 'Smart Home Integration & Automation | Time To Refurbish',
  meta: [
    { 
      name: 'description', 
      content: 'Smart home installation in South East London. Home automation, intelligent lighting, climate control, and integrated security systems.' 
    }
  ]
})
</script>