<template>
  <section class="section-padding bg-black text-white">
    <div class="container-custom text-center">
      <h2 class="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">Ready to Transform Your Space?</h2>
      <p class="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
        Let's discuss your project and bring your vision to life
      </p>
      <a 
        href="#contact"
        @click="scrollToContact"
        class="inline-block px-10 py-4 bg-white text-black font-medium hover:bg-gray-100 transition-all transform hover:scale-105"
      >
        Contact Us
      </a>
    </div>
  </section>
</template>

<script setup>
const scrollToContact = (e) => {
  e.preventDefault()
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>