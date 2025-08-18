<template>
  <section class="section-padding bg-white">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <h2 class="font-serif text-4xl md:text-5xl font-light mb-4">Client Testimonials</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Trusted by discerning homeowners across South East London
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div v-for="testimonial in testimonials" :key="testimonial.id" class="text-center">
          <!-- Stars -->
          <div class="flex justify-center mb-6">
            <Star v-for="n in 5" :key="n" :size="18" class="text-accent fill-current" />
          </div>
          
          <!-- Quote -->
          <p class="text-gray-700 mb-6 italic leading-relaxed">
            "{{ testimonial.quote }}"
          </p>
          
          <!-- Author -->
          <div>
            <div class="font-medium">{{ testimonial.name }}</div>
            <div class="text-sm text-gray-500">{{ testimonial.project }}</div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-16">
        <p class="text-gray-600 mb-6">Ready to transform your home?</p>
        <NuxtLink to="/contact" class="btn-primary">
          Start Your Project
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Star } from 'lucide-vue-next'

const testimonials = [
  {
    id: 1,
    quote: "Exceptional attention to detail. Our kitchen renovation exceeded all expectations. The team was professional and the results are simply stunning.",
    name: "Sarah & James Mitchell",
    project: "Kitchen Renovation, Blackheath"
  },
  {
    id: 2,
    quote: "The bathroom is now our personal spa. Quality workmanship throughout and delivered on time. Couldn't recommend highly enough.",
    name: "Emma Thompson",
    project: "Designer Bathroom, Greenwich"
  },
  {
    id: 3,
    quote: "Our flat renovation was handled with professionalism from start to finish. The attention to detail and quality of finish is outstanding.",
    name: "David Chen",
    project: "Luxury Flat Renovation, Bromley"
  }
]
</script>