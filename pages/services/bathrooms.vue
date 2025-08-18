<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[60vh] flex items-center justify-center">
      <div class="absolute inset-0 bg-black/40"></div>
      <img 
        src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2940" 
        alt="Designer Bathroom"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="relative z-10 text-center text-white">
        <h1 class="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-6">Designer Bathrooms</h1>
        <p class="text-xl font-light">Your personal sanctuary of luxury</p>
      </div>
    </section>

    <!-- Introduction -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-lg text-gray-600 leading-relaxed">
            Create your perfect retreat with our designer bathroom service. From spa-inspired 
            wet rooms to elegant powder rooms, we combine luxury materials with innovative 
            design to craft bathrooms that are both beautiful and functional.
          </p>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <h2 class="font-serif text-4xl md:text-5xl text-center mb-16">Luxury Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div class="text-center">
            <Droplets :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Spa-Quality Fixtures</h3>
            <p class="text-gray-600">Premium rain showers, jacuzzi tubs, and luxury fixtures from leading brands</p>
          </div>
          <div class="text-center">
            <Sparkles :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Natural Materials</h3>
            <p class="text-gray-600">Marble, granite, and natural stone create timeless elegance</p>
          </div>
          <div class="text-center">
            <Sun :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Intelligent Lighting</h3>
            <p class="text-gray-600">Mood-enhancing LED systems with dimming and color control</p>
          </div>
          <div class="text-center">
            <Thermometer :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Underfloor Heating</h3>
            <p class="text-gray-600">Luxurious warmth underfoot with energy-efficient heating systems</p>
          </div>
          <div class="text-center">
            <Volume2 :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Sound Systems</h3>
            <p class="text-gray-600">Integrated waterproof audio for the ultimate relaxation experience</p>
          </div>
          <div class="text-center">
            <Eye :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Smart Mirrors</h3>
            <p class="text-gray-600">LED-lit mirrors with demisting, Bluetooth, and touch controls</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Bathroom Types -->
    <section class="section-padding">
      <div class="container-custom">
        <h2 class="font-serif text-4xl md:text-5xl text-center mb-16">Bathroom Solutions</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="group">
            <div class="aspect-[4/3] bg-gray-100 overflow-hidden mb-6">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2940"
                alt="Master Bathroom"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 class="text-2xl font-medium mb-3">Master Bathrooms</h3>
            <p class="text-gray-600">Spacious sanctuaries with dual vanities, walk-in showers, and freestanding tubs</p>
          </div>
          <div class="group">
            <div class="aspect-[4/3] bg-gray-100 overflow-hidden mb-6">
              <img 
                src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2940"
                alt="Wet Room"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 class="text-2xl font-medium mb-3">Wet Rooms</h3>
            <p class="text-gray-600">Open-plan luxury with seamless drainage and waterproof design</p>
          </div>
          <div class="group">
            <div class="aspect-[4/3] bg-gray-100 overflow-hidden mb-6">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2940"
                alt="En-Suite"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 class="text-2xl font-medium mb-3">En-Suite Bathrooms</h3>
            <p class="text-gray-600">Compact luxury perfectly integrated with your bedroom</p>
          </div>
          <div class="group">
            <div class="aspect-[4/3] bg-gray-100 overflow-hidden mb-6">
              <img 
                src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2940"
                alt="Powder Room"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 class="text-2xl font-medium mb-3">Powder Rooms</h3>
            <p class="text-gray-600">Elegant guest bathrooms that make a lasting impression</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Special Feature - Jacuzzi -->
    <section class="section-padding bg-black text-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="font-serif text-4xl md:text-5xl mb-6">Jacuzzi Installation Specialists</h2>
            <p class="text-lg text-gray-300 mb-6">
              Transform your bathroom into a private spa with our premium jacuzzi installation service. 
              We handle everything from plumbing and electrical work to the perfect positioning for 
              ultimate relaxation.
            </p>
            <ul class="space-y-3 text-gray-300">
              <li class="flex items-start gap-3">
                <Check :size="20" class="mt-1 flex-shrink-0" />
                <span>Expert installation by certified technicians</span>
              </li>
              <li class="flex items-start gap-3">
                <Check :size="20" class="mt-1 flex-shrink-0" />
                <span>Premium brands including Jacuzzi®, Villeroy & Boch</span>
              </li>
              <li class="flex items-start gap-3">
                <Check :size="20" class="mt-1 flex-shrink-0" />
                <span>Full waterproofing and safety compliance</span>
              </li>
              <li class="flex items-start gap-3">
                <Check :size="20" class="mt-1 flex-shrink-0" />
                <span>Optional chromotherapy and aromatherapy systems</span>
              </li>
            </ul>
          </div>
          <div class="aspect-[4/3] bg-gray-800">
            <img 
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2940"
              alt="Luxury Jacuzzi"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding">
      <div class="container-custom text-center">
        <h2 class="font-serif text-4xl md:text-5xl mb-6">Create Your Perfect Bathroom</h2>
        <p class="text-xl mb-8 text-gray-600">Let's design a space where luxury meets relaxation</p>
        <NuxtLink to="/#contact" class="inline-block px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors">
          Book Consultation
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Droplets, Sparkles, Sun, Thermometer, Volume2, Eye, Check } from 'lucide-vue-next'

useHead({
  title: 'Designer Bathrooms & Jacuzzi Installation | Time To Refurbish',
  meta: [
    { 
      name: 'description', 
      content: 'Luxury bathroom design and jacuzzi installation in South East London. Spa-quality fixtures, wet rooms, and premium materials for your perfect sanctuary.' 
    }
  ]
})
</script>