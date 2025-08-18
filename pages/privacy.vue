<template>
  <div>
    <section class="section-padding pt-32">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <h1 class="font-serif text-4xl md:text-5xl mb-8">Privacy Policy</h1>
          <div class="prose prose-gray max-w-none">
            <p class="text-gray-600 mb-6">Last updated: {{ new Date().toLocaleDateString() }}</p>
            
            <h2 class="text-2xl font-medium mt-8 mb-4">Information We Collect</h2>
            <p class="text-gray-600 mb-4">
              We collect information you provide directly to us, such as when you request a consultation, 
              submit a contact form, or communicate with us via phone or email.
            </p>

            <h2 class="text-2xl font-medium mt-8 mb-4">How We Use Your Information</h2>
            <p class="text-gray-600 mb-4">
              We use the information we collect to provide our services, communicate with you, 
              and improve our website and services.
            </p>

            <h2 class="text-2xl font-medium mt-8 mb-4">Data Protection</h2>
            <p class="text-gray-600 mb-4">
              We implement appropriate technical and organizational measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 class="text-2xl font-medium mt-8 mb-4">Contact Us</h2>
            <p class="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at 
              <a href="mailto:timetorefurbish@gmail.com" class="underline">timetorefurbish@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Privacy Policy | Time To Refurbish',
  meta: [
    { 
      name: 'description', 
      content: 'Privacy policy for Time To Refurbish. Learn how we collect, use, and protect your personal information.' 
    }
  ]
})
</script>