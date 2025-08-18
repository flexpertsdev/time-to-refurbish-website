<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[60vh] flex items-center justify-center">
      <div class="absolute inset-0 bg-black/40"></div>
      <img 
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2940" 
        alt="Fitted Wardrobes"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="relative z-10 text-center text-white">
        <h1 class="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-6">Fitted Wardrobes</h1>
        <p class="text-xl font-light">Bespoke storage solutions for discerning homeowners</p>
      </div>
    </section>

    <!-- Introduction -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-lg text-gray-600 leading-relaxed">
            Maximize your space with our custom fitted wardrobes. Designed to fit perfectly 
            into any room, our bespoke storage solutions combine elegant aesthetics with 
            intelligent organization, creating wardrobes that are as beautiful as they are functional.
          </p>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <h2 class="font-serif text-4xl md:text-5xl text-center mb-16">Wardrobe Excellence</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div class="text-center">
            <Maximize2 :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Floor to Ceiling</h3>
            <p class="text-gray-600">Maximize every inch of available space with full-height designs</p>
          </div>
          <div class="text-center">
            <Layers :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Custom Interiors</h3>
            <p class="text-gray-600">Tailored organization with drawers, shelves, and hanging systems</p>
          </div>
          <div class="text-center">
            <Lightbulb :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">LED Lighting</h3>
            <p class="text-gray-600">Integrated lighting systems with motion sensors for perfect visibility</p>
          </div>
          <div class="text-center">
            <PanelTop :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Sliding Doors</h3>
            <p class="text-gray-600">Space-saving sliding systems with soft-close mechanisms</p>
          </div>
          <div class="text-center">
            <Palette :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Premium Finishes</h3>
            <p class="text-gray-600">Choose from wood veneers, high-gloss lacquers, or mirrored panels</p>
          </div>
          <div class="text-center">
            <Lock :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Secure Storage</h3>
            <p class="text-gray-600">Optional integrated safes and lockable compartments</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Wardrobe Styles -->
    <section class="section-padding">
      <div class="container-custom">
        <h2 class="font-serif text-4xl md:text-5xl text-center mb-16">Design Styles</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div class="aspect-square bg-gray-100 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2940"
                alt="Walk-in Wardrobe"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-2xl font-medium mb-3">Walk-in Wardrobes</h3>
            <p class="text-gray-600 mb-4">
              Transform spare rooms or large alcoves into luxurious dressing rooms with 
              island units, seating areas, and full-length mirrors.
            </p>
            <ul class="space-y-2 text-gray-600">
              <li>• Central island storage</li>
              <li>• Dedicated shoe displays</li>
              <li>• Jewelry drawers with velvet lining</li>
              <li>• Vanity areas with seating</li>
            </ul>
          </div>
          <div>
            <div class="aspect-square bg-gray-100 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2940"
                alt="Built-in Wardrobe"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-2xl font-medium mb-3">Built-in Wardrobes</h3>
            <p class="text-gray-600 mb-4">
              Seamlessly integrated storage that becomes part of your room's architecture, 
              with doors that match your interior design perfectly.
            </p>
            <ul class="space-y-2 text-gray-600">
              <li>• Alcove and chimney breast solutions</li>
              <li>• Angled ceiling adaptations</li>
              <li>• Invisible handle options</li>
              <li>• Color-matched to walls</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Organization Features -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <h2 class="font-serif text-4xl md:text-5xl text-center mb-16">Intelligent Organization</h2>
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Shirt :size="40" class="mx-auto mb-3 text-gray-400" />
              <p class="text-sm">Shirt Rails</p>
            </div>
            <div>
              <Package :size="40" class="mx-auto mb-3 text-gray-400" />
              <p class="text-sm">Shoe Racks</p>
            </div>
            <div>
              <Watch :size="40" class="mx-auto mb-3 text-gray-400" />
              <p class="text-sm">Watch Winders</p>
            </div>
            <div>
              <Gem :size="40" class="mx-auto mb-3 text-gray-400" />
              <p class="text-sm">Jewelry Trays</p>
            </div>
            <div>
              <Briefcase :size="40" class="mx-auto mb-3 text-gray-400" />
              <p class="text-sm">Bag Storage</p>
            </div>
            <div>
              <Glasses :size="40" class="mx-auto mb-3 text-gray-400" />
              <p class="text-sm">Accessory Drawers</p>
            </div>
            <div>
              <Square :size="40" class="mx-auto mb-3 text-gray-400" />
              <p class="text-sm">Pull-out Mirrors</p>
            </div>
            <div>
              <Wind :size="40" class="mx-auto mb-3 text-gray-400" />
              <p class="text-sm">Tie Racks</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding bg-black text-white">
      <div class="container-custom text-center">
        <h2 class="font-serif text-4xl md:text-5xl mb-6">Design Your Perfect Wardrobe</h2>
        <p class="text-xl mb-8 text-gray-300">Free design consultation and 3D visualization</p>
        <NuxtLink to="/#contact" class="inline-block px-8 py-4 bg-white text-black hover:bg-gray-100 transition-colors">
          Book Consultation
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { 
  Maximize2, Layers, Lightbulb, PanelTop, Palette, Lock,
  Shirt, Package, Watch, Gem, Briefcase, Glasses, Square, Wind
} from 'lucide-vue-next'

useHead({
  title: 'Fitted Wardrobes & Walk-in Closets | Time To Refurbish',
  meta: [
    { 
      name: 'description', 
      content: 'Bespoke fitted wardrobes and walk-in closets in South East London. Custom storage solutions with premium finishes and intelligent organization systems.' 
    }
  ]
})
</script>