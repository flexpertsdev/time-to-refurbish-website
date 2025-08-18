<template>
  <div>
    <!-- Hero Section -->
    <section class="section-padding pt-32">
      <div class="container-custom">
        <h1 class="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-center mb-6">About Us</h1>
        <p class="text-xl text-center text-gray-600 max-w-3xl mx-auto">
          Transforming homes with exceptional craftsmanship since 2015
        </p>
      </div>
    </section>

    <!-- Story Section -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="font-serif text-4xl mb-6">Our Story</h2>
            <p class="text-gray-600 mb-4">
              Time To Refurbish was founded with a simple vision: to create exceptional living 
              spaces that exceed our clients' dreams. What started as a small team passionate 
              about quality craftsmanship has grown into South East London's premier luxury 
              renovation specialist.
            </p>
            <p class="text-gray-600 mb-4">
              Over the years, we've transformed hundreds of properties across Bromley, Greenwich, 
              Blackheath, and beyond. Each project reinforces our commitment to excellence, 
              attention to detail, and client satisfaction.
            </p>
            <p class="text-gray-600">
              Today, we're proud to be the trusted choice for discerning homeowners who demand 
              the very best in design, materials, and execution.
            </p>
          </div>
          <div class="aspect-[4/3] bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940"
              alt="Luxury Home"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <h2 class="font-serif text-4xl text-center mb-16">Our Values</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="text-center">
            <Award :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Excellence</h3>
            <p class="text-gray-600">We never compromise on quality, using only premium materials and skilled craftsmen</p>
          </div>
          <div class="text-center">
            <Users :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Partnership</h3>
            <p class="text-gray-600">We work closely with our clients, treating every project as if it were our own home</p>
          </div>
          <div class="text-center">
            <Clock :size="48" class="mx-auto mb-6 text-gray-400" />
            <h3 class="text-xl font-medium mb-4">Reliability</h3>
            <p class="text-gray-600">We deliver on time, on budget, with transparent communication throughout</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Founder Section -->
    <section class="section-padding">
      <div class="container-custom">
        <h2 class="font-serif text-4xl text-center mb-16">Meet Our Founder</h2>
        <div class="max-w-4xl mx-auto mb-20">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div class="aspect-[3/4] bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787"
                alt="Michal - Founder"
                class="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 class="text-3xl font-serif mb-4">Michal Kowalski</h3>
              <p class="text-accent font-medium mb-4">Founder & Master Craftsman</p>
              <p class="text-gray-600 mb-4">
                With over 15 years of experience in luxury renovations, Michal founded 
                Time To Refurbish with a simple vision: to bring exceptional craftsmanship 
                and personalized service to every project.
              </p>
              <p class="text-gray-600 mb-4">
                "Every home has unique potential. My passion is working closely with 
                homeowners to unlock that potential and create spaces that truly reflect 
                their lifestyle and aspirations."
              </p>
              <p class="text-gray-600">
                Michal personally oversees every project, ensuring the highest standards 
                of quality and attention to detail that our clients have come to expect.
              </p>
              <div class="mt-6 flex gap-4">
                <a href="tel:07883300410" class="inline-flex items-center gap-2 text-accent hover:underline">
                  <Phone :size="18" />
                  <span>07883 300410</span>
                </a>
                <a href="mailto:timetorefurbish@gmail.com" class="inline-flex items-center gap-2 text-accent hover:underline">
                  <Mail :size="18" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <h2 class="font-serif text-4xl text-center mb-16">Why Choose Us</h2>
        <div class="max-w-3xl mx-auto">
          <div class="space-y-8">
            <div class="flex gap-6">
              <Check :size="24" class="text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 class="text-xl font-medium mb-2">Experienced Team</h3>
                <p class="text-gray-600">Our skilled craftsmen bring decades of combined experience to every project</p>
              </div>
            </div>
            <div class="flex gap-6">
              <Check :size="24" class="text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 class="text-xl font-medium mb-2">Premium Materials</h3>
                <p class="text-gray-600">We source materials from leading European manufacturers for lasting quality</p>
              </div>
            </div>
            <div class="flex gap-6">
              <Check :size="24" class="text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 class="text-xl font-medium mb-2">Project Management</h3>
                <p class="text-gray-600">Dedicated project managers ensure smooth execution from start to finish</p>
              </div>
            </div>
            <div class="flex gap-6">
              <Check :size="24" class="text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 class="text-xl font-medium mb-2">10 Year Guarantee</h3>
                <p class="text-gray-600">Complete peace of mind with our comprehensive warranty on all work</p>
              </div>
            </div>
            <div class="flex gap-6">
              <Check :size="24" class="text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 class="text-xl font-medium mb-2">Aftercare Service</h3>
                <p class="text-gray-600">Ongoing support and maintenance to keep your investment pristine</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="section-padding bg-black text-white">
      <div class="container-custom">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="font-serif text-5xl mb-2">200+</div>
            <p class="text-gray-400">Projects Completed</p>
          </div>
          <div>
            <div class="font-serif text-5xl mb-2">8+</div>
            <p class="text-gray-400">Years Experience</p>
          </div>
          <div>
            <div class="font-serif text-5xl mb-2">100%</div>
            <p class="text-gray-400">Client Satisfaction</p>
          </div>
          <div>
            <div class="font-serif text-5xl mb-2">10yr</div>
            <p class="text-gray-400">Guarantee</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding">
      <div class="container-custom text-center">
        <h2 class="font-serif text-4xl md:text-5xl mb-6">Let's Work Together</h2>
        <p class="text-xl mb-8 text-gray-600">Experience the difference of working with true professionals</p>
        <NuxtLink to="/#contact" class="inline-block px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors">
          Start Your Project
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Award, Users, Clock, Check, Phone, Mail } from 'lucide-vue-next'

useHead({
  title: 'About Us | Time To Refurbish',
  meta: [
    { 
      name: 'description', 
      content: 'Learn about Time To Refurbish, South East London\'s premier luxury renovation specialists. Quality craftsmanship and exceptional service since 2015.' 
    }
  ]
})
</script>