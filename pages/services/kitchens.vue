<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[60vh] flex items-center justify-center">
      <div class="absolute inset-0 bg-black/40"></div>
      <img 
        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2940" 
        alt="Luxury Kitchen"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="relative z-10 text-center text-white">
        <h1 class="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-6">Bespoke Kitchens</h1>
        <p class="text-xl font-light">Where culinary dreams come to life</p>
      </div>
    </section>

    <!-- Introduction -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-lg text-gray-600 leading-relaxed mb-8">
            Transform your kitchen into the heart of your home with our bespoke design service. 
            From contemporary minimalism to classic elegance, we create kitchens that perfectly 
            blend aesthetics with functionality, tailored to your lifestyle and culinary ambitions.
          </p>
          <div class="flex justify-center gap-8 text-center">
            <div>
              <div class="text-3xl font-serif text-accent mb-2">200+</div>
              <div class="text-sm text-gray-600">Kitchens Installed</div>
            </div>
            <div>
              <div class="text-3xl font-serif text-accent mb-2">10yr</div>
              <div class="text-sm text-gray-600">Guarantee</div>
            </div>
            <div>
              <div class="text-3xl font-serif text-accent mb-2">5★</div>
              <div class="text-sm text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Before/After Showcase -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <h2 class="font-serif text-4xl md:text-5xl text-center mb-16">Recent Transformations</h2>
        <div class="max-w-4xl mx-auto mb-8">
          <ServiceBeforeAfter
            :beforeImage="'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?q=80&w=3270'"
            :afterImage="'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=3270'"
            beforeAlt="Kitchen before renovation"
            afterAlt="Kitchen after renovation"
          />
        </div>
        <div class="text-center">
          <h3 class="font-serif text-2xl mb-2">Modern Kitchen Renovation</h3>
          <p class="text-gray-600 mb-4">Blackheath, London - £85,000</p>
          <NuxtLink to="/portfolio" class="text-accent hover:underline">View More Projects →</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <h2 class="font-serif text-4xl md:text-5xl text-center mb-16">Our Kitchen Excellence</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div class="text-center">
            <Palette :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Custom Design</h3>
            <p class="text-gray-600">Every kitchen is uniquely designed to reflect your personal style and maximize your space</p>
          </div>
          <div class="text-center">
            <Gem :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Premium Materials</h3>
            <p class="text-gray-600">Only the finest materials from leading European manufacturers</p>
          </div>
          <div class="text-center">
            <Sparkles :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Smart Integration</h3>
            <p class="text-gray-600">Seamlessly integrate the latest smart home technology and appliances</p>
          </div>
          <div class="text-center">
            <Ruler :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Precision Craftsmanship</h3>
            <p class="text-gray-600">Meticulous attention to detail in every aspect of construction</p>
          </div>
          <div class="text-center">
            <Clock :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Timely Delivery</h3>
            <p class="text-gray-600">Professional project management ensures on-time completion</p>
          </div>
          <div class="text-center">
            <Shield :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">10 Year Guarantee</h3>
            <p class="text-gray-600">Complete peace of mind with our comprehensive warranty</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Guide -->
    <section class="section-padding">
      <div class="container-custom">
        <h2 class="font-serif text-4xl md:text-5xl text-center mb-16">Investment Guide</h2>
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="border-2 border-gray-200 p-6 hover:border-accent transition-colors">
              <h3 class="text-xl font-medium mb-2">Essential</h3>
              <div class="text-3xl font-serif mb-4">£25-50k</div>
              <ul class="space-y-2 text-gray-600 text-sm">
                <li>• Quality cabinets</li>
                <li>• Laminate worktops</li>
                <li>• Standard appliances</li>
                <li>• Basic lighting</li>
              </ul>
            </div>
            <div class="border-2 border-accent p-6 relative">
              <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white px-3 py-1 text-xs">MOST POPULAR</div>
              <h3 class="text-xl font-medium mb-2">Premium</h3>
              <div class="text-3xl font-serif mb-4">£50-100k</div>
              <ul class="space-y-2 text-gray-600 text-sm">
                <li>• Bespoke cabinetry</li>
                <li>• Quartz/granite worktops</li>
                <li>• Premium appliances</li>
                <li>• Designer lighting</li>
              </ul>
            </div>
            <div class="border-2 border-gray-200 p-6 hover:border-accent transition-colors">
              <h3 class="text-xl font-medium mb-2">Luxury</h3>
              <div class="text-3xl font-serif mb-4">£100k+</div>
              <ul class="space-y-2 text-gray-600 text-sm">
                <li>• Custom everything</li>
                <li>• Marble surfaces</li>
                <li>• Professional appliances</li>
                <li>• Smart integration</li>
              </ul>
            </div>
          </div>
          <p class="text-center text-gray-600 mt-8">
            *Prices are indicative for average-sized kitchens in South East London
          </p>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <h2 class="font-serif text-4xl md:text-5xl text-center mb-16">Our Process</h2>
        <div class="max-w-4xl mx-auto">
          <div class="space-y-12">
            <div class="flex gap-8">
              <div class="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-medium">1</div>
              <div class="flex-1">
                <h3 class="text-xl font-medium mb-2">Design Consultation</h3>
                <p class="text-gray-600">We begin with an in-depth consultation to understand your vision, lifestyle, and requirements</p>
              </div>
            </div>
            <div class="flex gap-8">
              <div class="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-medium">2</div>
              <div class="flex-1">
                <h3 class="text-xl font-medium mb-2">3D Visualization</h3>
                <p class="text-gray-600">Experience your new kitchen in stunning 3D before construction begins</p>
              </div>
            </div>
            <div class="flex gap-8">
              <div class="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-medium">3</div>
              <div class="flex-1">
                <h3 class="text-xl font-medium mb-2">Expert Installation</h3>
                <p class="text-gray-600">Our skilled craftsmen bring your design to life with precision and care</p>
              </div>
            </div>
            <div class="flex gap-8">
              <div class="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-medium">4</div>
              <div class="flex-1">
                <h3 class="text-xl font-medium mb-2">Final Styling</h3>
                <p class="text-gray-600">We add the finishing touches that make your kitchen truly exceptional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-padding">
      <div class="container-custom">
        <h2 class="font-serif text-4xl md:text-5xl text-center mb-16">Frequently Asked Questions</h2>
        <div class="max-w-3xl mx-auto space-y-8">
          <div>
            <h3 class="text-xl font-medium mb-3">How long does a kitchen renovation take?</h3>
            <p class="text-gray-600">Typically 4-6 weeks from start to finish, depending on the complexity of the project. We provide a detailed timeline during consultation.</p>
          </div>
          <div>
            <h3 class="text-xl font-medium mb-3">Do you handle all aspects including plumbing and electrical?</h3>
            <p class="text-gray-600">Yes, we're a full-service company. Our team includes certified plumbers and electricians, ensuring seamless project management.</p>
          </div>
          <div>
            <h3 class="text-xl font-medium mb-3">Can I live in my home during renovation?</h3>
            <p class="text-gray-600">Yes, we set up temporary kitchen facilities and work efficiently to minimize disruption to your daily life.</p>
          </div>
          <div>
            <h3 class="text-xl font-medium mb-3">What brands do you work with?</h3>
            <p class="text-gray-600">We partner with premium brands including Miele, Bosch, Siemens for appliances, and various European manufacturers for cabinetry.</p>
          </div>
          <div>
            <h3 class="text-xl font-medium mb-3">Do you offer finance options?</h3>
            <p class="text-gray-600">We can recommend trusted finance partners. Most clients pay in staged installments aligned with project milestones.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding bg-black text-white">
      <div class="container-custom text-center">
        <h2 class="font-serif text-4xl md:text-5xl mb-6">Ready to Create Your Dream Kitchen?</h2>
        <p class="text-xl mb-8 text-gray-300">Let's discuss how we can transform your space</p>
        <NuxtLink to="/#contact" class="inline-block px-8 py-4 bg-white text-black hover:bg-gray-100 transition-colors">
          Start Your Project
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Palette, Gem, Sparkles, Ruler, Clock, Shield } from 'lucide-vue-next'

useHead({
  title: 'Bespoke Kitchen Design & Installation | Time To Refurbish',
  meta: [
    { 
      name: 'description', 
      content: 'Luxury bespoke kitchen design and installation in South East London. Premium materials, smart technology integration, and exceptional craftsmanship.' 
    }
  ]
})
</script>