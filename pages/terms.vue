<template>
  <div>
    <section class="section-padding pt-32">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <h1 class="font-serif text-4xl md:text-5xl mb-8">Terms of Service</h1>
          <div class="prose prose-gray max-w-none">
            <p class="text-gray-600 mb-6">Last updated: {{ new Date().toLocaleDateString() }}</p>
            
            <h2 class="text-2xl font-medium mt-8 mb-4">Services</h2>
            <p class="text-gray-600 mb-4">
              Time To Refurbish Ltd provides luxury renovation and refurbishment services including 
              kitchen design and installation, bathroom renovations, fitted wardrobes, and complete 
              property refurbishments.
            </p>

            <h2 class="text-2xl font-medium mt-8 mb-4">Quotations</h2>
            <p class="text-gray-600 mb-4">
              All quotations are valid for 30 days from the date of issue. Prices are subject to 
              change based on material costs and scope modifications.
            </p>

            <h2 class="text-2xl font-medium mt-8 mb-4">Payment Terms</h2>
            <p class="text-gray-600 mb-4">
              Payment schedules will be agreed upon contract signing. Typically, we require a 
              deposit to commence work with staged payments throughout the project.
            </p>

            <h2 class="text-2xl font-medium mt-8 mb-4">Warranty</h2>
            <p class="text-gray-600 mb-4">
              We provide a comprehensive 10-year guarantee on all workmanship. Material warranties 
              are as per manufacturer specifications.
            </p>

            <h2 class="text-2xl font-medium mt-8 mb-4">Contact</h2>
            <p class="text-gray-600">
              For questions about these terms, please contact us at 
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
  title: 'Terms of Service | Time To Refurbish',
  meta: [
    { 
      name: 'description', 
      content: 'Terms of service for Time To Refurbish. Our service agreements, warranties, and payment terms.' 
    }
  ]
})
</script>