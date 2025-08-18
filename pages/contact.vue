<template>
  <div>
    <!-- Hero Section -->
    <section class="section-padding pt-32">
      <div class="container-custom">
        <h1 class="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-center mb-6">Contact Us</h1>
        <p class="text-xl text-center text-gray-600 max-w-3xl mx-auto">
          Ready to transform your space? Let's discuss your project
        </p>
      </div>
    </section>

    <!-- Contact Form First -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="max-w-2xl mx-auto mb-20">
          <ContactForm />
        </div>

        <!-- Contact Info Below -->
        <div class="border-t pt-16">
          <h2 class="text-3xl font-serif text-center mb-12">Other Ways to Reach Us</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div class="text-center">
              <Phone :size="32" class="mx-auto mb-4 text-accent" />
              <h3 class="text-xl font-medium mb-2">Call Us</h3>
              <a href="tel:07883300410" class="text-lg text-gray-600 hover:text-accent transition-colors">
                07883 300410
              </a>
            </div>
            <div class="text-center">
              <Mail :size="32" class="mx-auto mb-4 text-accent" />
              <h3 class="text-xl font-medium mb-2">Email Us</h3>
              <a href="mailto:timetorefurbish@gmail.com" class="text-lg text-gray-600 hover:text-accent transition-colors">
                timetorefurbish@gmail.com
              </a>
            </div>
            <div class="text-center">
              <MapPin :size="32" class="mx-auto mb-4 text-accent" />
              <h3 class="text-xl font-medium mb-2">Service Area</h3>
              <p class="text-lg text-gray-600">
                South East London
              </p>
            </div>
          </div>

          <!-- Social Links -->
          <div class="mt-16 text-center">
            <h3 class="text-xl font-medium mb-6">Follow Us & Read Reviews</h3>
            <div class="flex justify-center gap-6">
              <a 
                href="https://www.facebook.com/p/Time-To-Refurbish-Ltd-100063716661128/" 
                target="_blank"
                class="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 hover:border-accent hover:text-accent transition-all"
              >
                <Facebook :size="20" />
                <span>Facebook</span>
              </a>
              <a 
                href="https://www.checkatrade.com/trades/timetorefurbishltd/reviews" 
                target="_blank"
                class="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 hover:border-accent hover:text-accent transition-all"
              >
                <Star :size="20" />
                <span>Checkatrade Reviews</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Areas -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <h2 class="font-serif text-4xl text-center mb-12">Areas We Cover</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div class="text-gray-600">Bromley</div>
          <div class="text-gray-600">Greenwich</div>
          <div class="text-gray-600">Blackheath</div>
          <div class="text-gray-600">Lewisham</div>
          <div class="text-gray-600">Dulwich</div>
          <div class="text-gray-600">Beckenham</div>
          <div class="text-gray-600">Chislehurst</div>
          <div class="text-gray-600">Orpington</div>
          <div class="text-gray-600">Sidcup</div>
          <div class="text-gray-600">Eltham</div>
          <div class="text-gray-600">Catford</div>
          <div class="text-gray-600">Forest Hill</div>
        </div>
      </div>
    </section>

    <!-- Office Hours -->
    <section class="section-padding">
      <div class="container-custom text-center">
        <h2 class="font-serif text-4xl mb-8">Office Hours</h2>
        <div class="max-w-md mx-auto">
          <div class="grid grid-cols-2 gap-4 text-left">
            <div class="text-gray-600">Monday - Friday</div>
            <div class="font-medium">8:00 AM - 6:00 PM</div>
            <div class="text-gray-600">Saturday</div>
            <div class="font-medium">9:00 AM - 4:00 PM</div>
            <div class="text-gray-600">Sunday</div>
            <div class="font-medium">By Appointment</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Phone, Mail, MapPin, Facebook, Star } from 'lucide-vue-next'

useHead({
  title: 'Contact Us | Time To Refurbish',
  meta: [
    { 
      name: 'description', 
      content: 'Contact Time To Refurbish for luxury kitchen and bathroom renovations in South East London. Call 07883 300410 for a free consultation.' 
    }
  ]
})
</script>