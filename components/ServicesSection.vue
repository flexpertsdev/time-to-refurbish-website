<template>
  <section class="section-padding bg-white">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div class="accent-line"></div>
        <h2 class="font-serif text-4xl md:text-5xl font-light mb-4">Our Expertise</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Transforming spaces with meticulous attention to detail and uncompromising quality
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        <div v-for="service in services" :key="service.id" class="group card-hover">
          <!-- Service Image -->
          <div class="aspect-[4/3] mb-6 overflow-hidden">
            <img 
              :src="service.image" 
              :alt="service.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          <!-- Service Info -->
          <h3 class="font-serif text-2xl mb-3">{{ service.title }}</h3>
          <p class="text-gray-600 mb-4 leading-relaxed">{{ service.description }}</p>
          <NuxtLink 
            :to="service.link"
            class="inline-flex items-center gap-2 text-sm font-medium tracking-wider hover:text-accent transition-colors group/link"
          >
            Learn More 
            <ArrowRight :size="16" class="transition-transform group-hover/link:translate-x-1" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'

const services = [
  {
    id: 1,
    title: 'Bespoke Kitchens',
    description: 'Custom-designed kitchens tailored to your lifestyle, featuring premium materials and smart storage solutions.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2968&auto=format&fit=crop',
    link: '/services/kitchens'
  },
  {
    id: 2,
    title: 'Designer Bathrooms',
    description: 'Spa-inspired bathrooms with luxury fixtures, underfloor heating, and bespoke vanity units.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2940&auto=format&fit=crop',
    link: '/services/bathrooms'
  },
  {
    id: 3,
    title: 'Fitted Wardrobes',
    description: 'Elegant storage solutions maximizing space with custom interiors and premium finishes.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2832&auto=format&fit=crop',
    link: '/services/wardrobes'
  },
  {
    id: 4,
    title: 'Luxury Flat Renovations',
    description: 'Complete flat transformations with attention to every detail, from flooring to lighting design.',
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=2940&auto=format&fit=crop',
    link: '/services/renovations'
  },
  {
    id: 5,
    title: 'Spa & Wellness',
    description: 'Home spa installations including jacuzzis, steam rooms, and wellness spaces.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2940&auto=format&fit=crop',
    link: '/services/spa'
  },
  {
    id: 6,
    title: 'Smart Home Integration',
    description: 'Seamlessly integrate technology into your luxury renovation for ultimate convenience.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2940&auto=format&fit=crop',
    link: '/services/smart-home'
  }
]
</script>