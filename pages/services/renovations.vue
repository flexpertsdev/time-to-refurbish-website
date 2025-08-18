<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[60vh] flex items-center justify-center">
      <div class="absolute inset-0 bg-black/40"></div>
      <img 
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2940" 
        alt="Luxury Flat Renovation"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="relative z-10 text-center text-white">
        <h1 class="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-6">Complete Renovations</h1>
        <p class="text-xl font-light">Transforming spaces into luxury homes</p>
      </div>
    </section>

    <!-- Introduction -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-lg text-gray-600 leading-relaxed">
            From Victorian conversions to modern penthouses, we specialize in complete 
            property renovations that enhance both lifestyle and value. Our comprehensive 
            service covers every aspect from design to completion.
          </p>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <h2 class="font-serif text-4xl md:text-5xl text-center mb-16">Full Service Renovation</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div class="text-center">
            <Home :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Complete Refurbishment</h3>
            <p class="text-gray-600">End-to-end renovation of entire properties</p>
          </div>
          <div class="text-center">
            <Ruler :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Space Planning</h3>
            <p class="text-gray-600">Optimize layouts for modern luxury living</p>
          </div>
          <div class="text-center">
            <Zap :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Electrical & Plumbing</h3>
            <p class="text-gray-600">Complete rewiring and replumbing to current standards</p>
          </div>
          <div class="text-center">
            <Layers :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Flooring</h3>
            <p class="text-gray-600">Premium hardwood, marble, and designer tiles</p>
          </div>
          <div class="text-center">
            <Paintbrush :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Decoration</h3>
            <p class="text-gray-600">Professional painting and luxury wall coverings</p>
          </div>
          <div class="text-center">
            <Key :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Project Management</h3>
            <p class="text-gray-600">Single point of contact throughout your project</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Property Types -->
    <section class="section-padding">
      <div class="container-custom">
        <h2 class="font-serif text-4xl md:text-5xl text-center mb-16">Property Expertise</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 class="text-2xl font-medium mb-4">Period Properties</h3>
            <p class="text-gray-600 mb-4">
              Sensitive restoration of Victorian and Edwardian homes, preserving original 
              features while introducing modern luxury.
            </p>
            <ul class="space-y-2 text-gray-600">
              <li>• Cornicing and ceiling rose restoration</li>
              <li>• Sash window refurbishment</li>
              <li>• Period-appropriate fixtures</li>
              <li>• Modern insulation and heating</li>
            </ul>
          </div>
          <div>
            <h3 class="text-2xl font-medium mb-4">Modern Apartments</h3>
            <p class="text-gray-600 mb-4">
              Contemporary renovations for penthouses and luxury flats, maximizing space 
              and natural light.
            </p>
            <ul class="space-y-2 text-gray-600">
              <li>• Open-plan living spaces</li>
              <li>• Floor-to-ceiling windows</li>
              <li>• Smart home integration</li>
              <li>• Premium appliances throughout</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding bg-black text-white">
      <div class="container-custom text-center">
        <h2 class="font-serif text-4xl md:text-5xl mb-6">Ready to Transform Your Property?</h2>
        <p class="text-xl mb-8 text-gray-300">Let's discuss your renovation project</p>
        <NuxtLink to="/#contact" class="inline-block px-8 py-4 bg-white text-black hover:bg-gray-100 transition-colors">
          Schedule Consultation
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Home, Ruler, Zap, Layers, Paintbrush, Key } from 'lucide-vue-next'

useHead({
  title: 'Complete Property Renovations | Time To Refurbish',
  meta: [
    { 
      name: 'description', 
      content: 'Luxury flat and property renovations in South East London. Complete refurbishment services from design to completion for discerning homeowners.' 
    }
  ]
})
</script>