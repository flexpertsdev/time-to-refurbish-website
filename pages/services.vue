<template>
  <div>
    <!-- Hero Section -->
    <section class="section-padding pt-32">
      <div class="container-custom">
        <h1 class="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-center mb-6">Our Services</h1>
        <p class="text-xl text-center text-gray-600 max-w-3xl mx-auto">
          From bespoke kitchens to complete renovations, we offer comprehensive luxury refurbishment services
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink 
            v-for="service in services" 
            :key="service.path"
            :to="service.path"
            class="group block"
          >
            <div class="aspect-[4/3] bg-gray-100 overflow-hidden mb-6">
              <img 
                :src="service.image"
                :alt="service.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 class="text-2xl font-medium mb-3">{{ service.title }}</h3>
            <p class="text-gray-600 mb-4">{{ service.description }}</p>
            <span class="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
              Learn More <ArrowRight :size="16" />
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding bg-black text-white">
      <div class="container-custom text-center">
        <h2 class="font-serif text-4xl md:text-5xl mb-6">Ready to Transform Your Space?</h2>
        <p class="text-xl mb-8 text-gray-300">Let's discuss your project</p>
        <NuxtLink to="/#contact" class="inline-block px-8 py-4 bg-white text-black hover:bg-gray-100 transition-colors">
          Get Started
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'

const services = [
  {
    path: '/services/kitchens',
    title: 'Bespoke Kitchens',
    description: 'Custom-designed kitchens that blend aesthetics with functionality',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2940'
  },
  {
    path: '/services/bathrooms',
    title: 'Designer Bathrooms',
    description: 'Luxurious bathrooms and spa-quality wet rooms',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2940'
  },
  {
    path: '/services/wardrobes',
    title: 'Fitted Wardrobes',
    description: 'Bespoke storage solutions for any space',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2940'
  },
  {
    path: '/services/renovations',
    title: 'Complete Renovations',
    description: 'Full property refurbishment from design to completion',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2940'
  },
  {
    path: '/services/spa',
    title: 'Home Spa & Wellness',
    description: 'Jacuzzi installation and wellness room creation',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2940'
  },
  {
    path: '/services/smart-home',
    title: 'Smart Home',
    description: 'Intelligent home automation and integration',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2940'
  }
]

useHead({
  title: 'Our Services | Time To Refurbish',
  meta: [
    { 
      name: 'description', 
      content: 'Luxury renovation services in South East London. Bespoke kitchens, designer bathrooms, fitted wardrobes, and complete property refurbishment.' 
    }
  ]
})
</script>