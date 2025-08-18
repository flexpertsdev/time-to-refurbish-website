<template>
  <div>
    <!-- Hero Section -->
    <section class="section-padding pt-32">
      <div class="container-custom">
        <h1 class="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-center mb-6">Our Work</h1>
        <p class="text-xl text-center text-gray-600 max-w-3xl mx-auto">
          Explore our portfolio of luxury renovations across South East London
        </p>
      </div>
    </section>

    <!-- Filter Tabs -->
    <section class="pb-8">
      <div class="container-custom">
        <div class="flex flex-wrap justify-center gap-4">
          <button
            v-for="category in categories"
            :key="category"
            @click="activeCategory = category"
            class="px-6 py-2 border-2 transition-all"
            :class="activeCategory === category ? 'border-black bg-black text-white' : 'border-gray-300 hover:border-gray-400'"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="section-padding pt-0">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="group cursor-pointer"
            @click="openProject(project)"
          >
            <div class="aspect-[4/3] bg-gray-100 overflow-hidden mb-4">
              <img 
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 class="text-xl font-medium mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 text-sm">{{ project.location }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Modal -->
    <Transition name="modal">
      <div v-if="selectedProject" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" @click="selectedProject = null">
        <div class="bg-white max-w-4xl w-full max-h-[90vh] overflow-auto" @click.stop>
          <div class="relative">
            <button @click="selectedProject = null" class="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 flex items-center justify-center">
              <X :size="20" />
            </button>
            <img :src="selectedProject.image" :alt="selectedProject.title" class="w-full">
          </div>
          <div class="p-8">
            <h2 class="font-serif text-3xl mb-2">{{ selectedProject.title }}</h2>
            <p class="text-gray-600 mb-4">{{ selectedProject.location }}</p>
            <p class="text-gray-600 mb-6">{{ selectedProject.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="feature in selectedProject.features" :key="feature" class="px-3 py-1 bg-gray-100 text-sm">
                {{ feature }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- CTA -->
    <section class="section-padding bg-black text-white">
      <div class="container-custom text-center">
        <h2 class="font-serif text-4xl md:text-5xl mb-6">See Your Project Here</h2>
        <p class="text-xl mb-8 text-gray-300">Let's create something extraordinary together</p>
        <NuxtLink to="/#contact" class="inline-block px-8 py-4 bg-white text-black hover:bg-gray-100 transition-colors">
          Start Your Project
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { X } from 'lucide-vue-next'

const activeCategory = ref('All')
const selectedProject = ref(null)

const categories = ['All', 'Kitchens', 'Bathrooms', 'Full Renovations', 'Wardrobes']

const projects = [
  {
    id: 1,
    title: 'Contemporary Kitchen',
    location: 'Blackheath, London',
    category: 'Kitchens',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2940',
    description: 'A stunning contemporary kitchen featuring handleless cabinets, quartz worktops, and integrated Miele appliances.',
    features: ['Handleless Design', 'Quartz Worktops', 'Miele Appliances', 'Wine Cooler']
  },
  {
    id: 2,
    title: 'Master Bathroom Suite',
    location: 'Greenwich, London',
    category: 'Bathrooms',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2940',
    description: 'Luxurious master bathroom with freestanding tub, walk-in rain shower, and heated marble floors.',
    features: ['Marble Flooring', 'Rain Shower', 'Freestanding Tub', 'Underfloor Heating']
  },
  {
    id: 3,
    title: 'Victorian Flat Renovation',
    location: 'Bromley, London',
    category: 'Full Renovations',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2940',
    description: 'Complete renovation of a Victorian flat, preserving period features while adding modern luxury.',
    features: ['Period Features', 'Open Plan Living', 'Smart Home', 'Bespoke Joinery']
  },
  {
    id: 4,
    title: 'Walk-in Wardrobe',
    location: 'Dulwich, London',
    category: 'Wardrobes',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2940',
    description: 'Custom walk-in wardrobe with LED lighting, mirror panels, and luxury finishes.',
    features: ['LED Lighting', 'Mirror Panels', 'Shoe Display', 'Jewelry Drawers']
  },
  {
    id: 5,
    title: 'Modern Kitchen Diner',
    location: 'Lewisham, London',
    category: 'Kitchens',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=2940',
    description: 'Open-plan kitchen diner with bi-fold doors to garden, perfect for entertaining.',
    features: ['Island Unit', 'Bi-fold Doors', 'Wine Storage', 'Breakfast Bar']
  },
  {
    id: 6,
    title: 'Spa Bathroom',
    location: 'Beckenham, London',
    category: 'Bathrooms',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2940',
    description: 'Spa-inspired bathroom with jacuzzi tub, steam shower, and natural stone finishes.',
    features: ['Jacuzzi Tub', 'Steam Shower', 'Natural Stone', 'Mood Lighting']
  }
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return projects
  return projects.filter(p => p.category === activeCategory.value)
})

const openProject = (project) => {
  selectedProject.value = project
}

useHead({
  title: 'Portfolio | Time To Refurbish',
  meta: [
    { 
      name: 'description', 
      content: 'View our portfolio of luxury kitchen, bathroom, and property renovations in South East London. See the quality of our craftsmanship.' 
    }
  ]
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>