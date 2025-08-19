<template>
  <section id="contact" class="section-padding bg-gray-50">
    <div class="container-custom">
      <div class="max-w-2xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h2 class="font-serif text-4xl md:text-5xl font-light mb-4">Let's Talk</h2>
          <p class="text-gray-600">Tell us about your dream project</p>
        </div>

        <!-- Form Container -->
        <div class="bg-white p-8 md:p-12">
          <!-- Progress Indicator -->
          <div class="flex justify-center mb-8">
            <div class="flex space-x-2">
              <div 
                v-for="i in totalSteps" 
                :key="i"
                class="w-2 h-2 rounded-full transition-colors"
                :class="i <= currentStep ? 'bg-black' : 'bg-gray-300'"
              ></div>
            </div>
          </div>

          <!-- Form Steps -->
          <form @submit.prevent="handleSubmit" class="space-y-8">
            <!-- Step 1: Name -->
            <Transition name="fade" mode="out-in">
              <div v-if="currentStep === 1" key="step1">
                <label class="block text-2xl font-light mb-6">What's your name?</label>
                <input 
                  v-model="formData.name"
                  type="text"
                  class="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-black focus:outline-none text-lg"
                  placeholder="John Smith"
                  required
                />
              </div>

              <!-- Step 2: Project Type -->
              <div v-else-if="currentStep === 2" key="step2">
                <label class="block text-2xl font-light mb-6">What's your project about?</label>
                <div class="grid grid-cols-2 gap-4">
                  <button
                    v-for="type in projectTypes"
                    :key="type"
                    type="button"
                    @click="selectProjectType(type)"
                    class="p-4 border-2 transition-all text-left"
                    :class="formData.projectType === type ? 'border-accent bg-accent text-white' : 'border-gray-300 hover:border-gray-400'"
                  >
                    {{ type }}
                  </button>
                </div>
                <Transition name="fade">
                  <div v-if="formData.projectType === 'Something else'" class="mt-6">
                    <textarea 
                      v-model="formData.otherDetails"
                      class="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none"
                      placeholder="Tell us more about your project..."
                      rows="4"
                    ></textarea>
                  </div>
                </Transition>
              </div>

              <!-- Step 3: Room -->
              <div v-else-if="currentStep === 3" key="step3">
                <label class="block text-2xl font-light mb-6">Which room would you like to transform?</label>
                <div class="grid grid-cols-2 gap-4">
                  <button
                    v-for="room in rooms"
                    :key="room"
                    type="button"
                    @click="selectRoom(room)"
                    class="p-4 border-2 transition-all"
                    :class="formData.room === room ? 'border-black bg-black text-white' : 'border-gray-300 hover:border-gray-400'"
                  >
                    {{ room }}
                  </button>
                </div>
              </div>

              <!-- Step 4: Budget -->
              <div v-else-if="currentStep === 4" key="step4">
                <label class="block text-2xl font-light mb-6">What's your budget range?</label>
                <div class="space-y-3">
                  <button
                    v-for="budget in budgets"
                    :key="budget.value"
                    type="button"
                    @click="selectBudget(budget.value)"
                    class="w-full p-4 border-2 text-left transition-all"
                    :class="formData.budget === budget.value ? 'border-black bg-black text-white' : 'border-gray-300 hover:border-gray-400'"
                  >
                    {{ budget.label }}
                  </button>
                </div>
              </div>

              <!-- Step 5: Contact -->
              <div v-else-if="currentStep === 5" key="step5">
                <label class="block text-2xl font-light mb-6">How can we reach you?</label>
                <div class="space-y-4">
                  <input 
                    v-model="formData.email"
                    type="email"
                    class="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-black focus:outline-none text-lg"
                    placeholder="email@example.com"
                    required
                  />
                  <input 
                    v-model="formData.phone"
                    type="tel"
                    class="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-black focus:outline-none text-lg"
                    placeholder="07XXX XXXXXX"
                    required
                  />
                </div>
              </div>

              <!-- Success -->
              <div v-else-if="currentStep === 6" key="success" class="text-center py-12">
                <CheckCircle :size="48" class="text-green-600 mx-auto mb-4" />
                <h3 class="text-2xl font-light mb-2">Thank You!</h3>
                <p class="text-gray-600">We'll be in touch within 24 hours.</p>
              </div>
            </Transition>

            <!-- Navigation -->
            <div class="flex justify-between items-center pt-8" v-if="currentStep < 6">
              <button
                v-if="currentStep > 1"
                type="button"
                @click="previousStep"
                class="text-gray-600 hover:text-black transition-colors"
              >
                ← Back
              </button>
              <div v-else></div>

              <button
                v-if="currentStep < 5"
                type="button"
                @click="nextStep"
                :disabled="!canProceed"
                class="px-6 py-2 bg-black text-white disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors hover:bg-accent"
              >
                Next →
              </button>
              <button
                v-else
                type="submit"
                class="px-6 py-2 bg-black text-white transition-colors hover:bg-accent"
              >
                Submit
              </button>
            </div>
          </form>

          <!-- Escape Hatch -->
          <div class="text-center mt-8 pt-8 border-t">
            <p class="text-gray-600 mb-2">Prefer to chat?</p>
            <a href="tel:07883300410" class="text-lg font-medium">
              Call us: 07883 300410
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircle } from 'lucide-vue-next'

const currentStep = ref(1)
const totalSteps = 5

const formData = reactive({
  name: '',
  projectType: '',
  otherDetails: '',
  room: '',
  budget: '',
  email: '',
  phone: ''
})

const projectTypes = [
  'Kitchen Renovation',
  'Bathroom Remodel',
  'Complete Refurbishment',
  'Fitted Wardrobes',
  'Smart Home Installation',
  'Something else'
]

const rooms = ['Kitchen', 'Bathroom', 'Bedroom', 'Living Room', 'Whole Flat', 'Other']
const budgets = [
  { value: '25-50k', label: '£25,000 - £50,000' },
  { value: '50-100k', label: '£50,000 - £100,000' },
  { value: '100-200k', label: '£100,000 - £200,000' },
  { value: '200k+', label: '£200,000+' }
]

const canProceed = computed(() => {
  switch(currentStep.value) {
    case 1: return formData.name.length > 0
    case 2: return formData.projectType.length > 0 && 
                  (formData.projectType !== 'Something else' || formData.otherDetails.length > 0)
    case 3: return formData.room.length > 0
    case 4: return formData.budget.length > 0
    case 5: return formData.email.length > 0 && formData.phone.length > 0
    default: return false
  }
})

const selectProjectType = (type) => {
  formData.projectType = type
  if (type !== 'Something else') {
    setTimeout(() => nextStep(), 300)
  }
}

const selectRoom = (room) => {
  formData.room = room
  setTimeout(() => nextStep(), 300)
}

const selectBudget = (budget) => {
  formData.budget = budget
  setTimeout(() => nextStep(), 300)
}

const nextStep = () => {
  if (canProceed.value && currentStep.value < totalSteps) {
    currentStep.value++
  }
}

const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const handleSubmit = async () => {
  // Submit to Netlify Forms
  const formDataToSubmit = new FormData()
  formDataToSubmit.append('form-name', 'contact')
  formDataToSubmit.append('name', formData.name)
  formDataToSubmit.append('projectType', formData.projectType)
  if (formData.otherDetails) {
    formDataToSubmit.append('otherDetails', formData.otherDetails)
  }
  formDataToSubmit.append('room', formData.room)
  formDataToSubmit.append('budget', formData.budget)
  formDataToSubmit.append('email', formData.email)
  formDataToSubmit.append('phone', formData.phone)

  try {
    await fetch('/', {
      method: 'POST',
      body: formDataToSubmit
    })
    currentStep.value = 6
  } catch (error) {
    console.error('Form submission error:', error)
    alert('There was an error submitting the form. Please try again or call us directly.')
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>