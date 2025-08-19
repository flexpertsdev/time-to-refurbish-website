<template>
  <footer class="bg-black text-white">
    <div class="container-custom py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <img 
            src="/logo-optimized.png" 
            alt="Time To Refurbish" 
            class="h-8 mb-6 brightness-0 invert"
          />
          <p class="text-gray-400 mb-6 max-w-md">
            Luxury renovations and bespoke design for discerning homeowners in South East London.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <Facebook :size="20" />
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <Instagram :size="20" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="font-medium mb-6">Quick Links</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/services" class="text-gray-400 hover:text-white transition-colors">
                Services
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/portfolio" class="text-gray-400 hover:text-white transition-colors">
                Portfolio
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="text-gray-400 hover:text-white transition-colors">
                About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="text-gray-400 hover:text-white transition-colors">
                Contact
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="font-medium mb-6">Get In Touch</h3>
          <ul class="space-y-3 text-gray-400">
            <li>
              <a href="tel:07883300410" class="hover:text-white transition-colors">
                07883 300410
              </a>
            </li>
            <li>
              <a href="mailto:timetorefurbish@gmail.com" class="hover:text-white transition-colors">
                timetorefurbish@gmail.com
              </a>
            </li>
            <li>Bromley, South East London</li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 mt-12 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-gray-400 text-sm">
            © {{ currentYear }} Time To Refurbish Ltd. All rights reserved.
          </p>
          <div class="flex space-x-6 text-sm">
            <NuxtLink to="/privacy" class="text-gray-400 hover:text-white transition-colors">
              Privacy
            </NuxtLink>
            <NuxtLink to="/terms" class="text-gray-400 hover:text-white transition-colors">
              Terms
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Facebook, Instagram } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()
</script>