<template>
  <div class="min-h-screen py-20 pb-32 md:pb-20">
    <div class="container-custom">
      <!-- Progress Bar -->
      <div class="max-w-3xl mx-auto mb-12">
        <div class="flex items-center justify-between mb-4">
          <div v-for="i in totalSteps" :key="i" class="flex-1">
            <div class="relative">
              <div 
                class="h-1 transition-all duration-500"
                :class="i <= currentStep ? 'bg-accent' : 'bg-gray-200'"
              ></div>
              <div 
                class="absolute -top-3 left-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium transition-all"
                :class="i <= currentStep ? 'bg-accent text-white' : 'bg-gray-200 text-gray-500'"
              >
                {{ i }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Step Content -->
      <div class="max-w-3xl mx-auto">
        <Transition name="fade-slide" mode="out-in">
          <!-- Step 1: Room Type -->
          <div v-if="currentStep === 1" key="step1" class="text-center">
            <div class="mb-8">
              <i class="gg-home-alt text-6xl text-accent mb-4 inline-block"></i>
              <h2 class="font-serif text-4xl mb-4">What room are we transforming?</h2>
              <p class="text-gray-600">Choose the space you'd like to reimagine</p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <button
                v-for="room in roomTypes"
                :key="room.value"
                @click="selectRoomType(room.value)"
                class="p-6 bg-white border-2 hover:border-accent transition-all group"
                :class="formData.roomType === room.value ? 'border-accent' : 'border-gray-200'"
              >
                <i :class="[room.icon, 'text-3xl mb-3 block transition-colors', formData.roomType === room.value ? 'text-accent' : 'text-gray-400 group-hover:text-accent']"></i>
                <span class="font-medium">{{ room.label }}</span>
              </button>
            </div>
          </div>

          <!-- Step 2: Style -->
          <div v-else-if="currentStep === 2" key="step2" class="text-center">
            <div class="mb-8">
              <i class="gg-style text-6xl text-accent mb-4 inline-block"></i>
              <h2 class="font-serif text-4xl mb-4">Choose your dream style</h2>
              <p class="text-gray-600">Select the aesthetic that speaks to you</p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-h-96 overflow-y-auto">
              <button
                v-for="style in stylePresets"
                :key="style.value"
                @click="selectStyle(style.value)"
                class="p-4 bg-white border-2 hover:border-accent transition-all text-left"
                :class="formData.style === style.value ? 'border-accent' : 'border-gray-200'"
              >
                <span class="font-medium block mb-1">{{ style.label }}</span>
                <span class="text-xs text-gray-500">{{ style.description }}</span>
              </button>
            </div>
          </div>

          <!-- Step 3: Upload Photo -->
          <div v-else-if="currentStep === 3" key="step3" class="text-center">
            <div class="mb-8">
              <i class="gg-image text-6xl text-accent mb-4 inline-block"></i>
              <h2 class="font-serif text-4xl mb-4">Show us your current space</h2>
              <p class="text-gray-600">Upload a photo of the room you want to transform</p>
            </div>
            
            <div class="max-w-md mx-auto">
              <div v-if="!imagePreview" 
                @click="$refs.fileInput.click()"
                @dragover.prevent="dragOver = true"
                @dragleave.prevent="dragOver = false"
                @drop.prevent="handleDrop"
                class="border-2 border-dashed rounded-lg p-12 cursor-pointer transition-all"
                :class="dragOver ? 'border-accent bg-accent/5' : 'border-gray-400 hover:border-accent'"
              >
                <i class="gg-software-upload text-5xl text-gray-400 mb-4 inline-block"></i>
                <p class="text-gray-600 mb-2">Click to upload or drag & drop</p>
                <p class="text-sm text-gray-500">JPG, PNG up to 10MB</p>
                <input 
                  ref="fileInput"
                  type="file"
                  accept="image/*"
                  @change="handleFileSelect"
                  class="hidden"
                />
              </div>
              
              <div v-else class="relative">
                <img :src="imagePreview" class="w-full rounded-lg shadow-lg" />
                <button
                  @click="removeImage"
                  class="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                >
                  <i class="gg-close text-lg"></i>
                </button>
              </div>
            </div>

            <div v-if="imagePreview" class="mt-8">
              <button
                @click="nextStep"
                class="px-12 py-4 bg-accent text-white font-medium hover:bg-accent-dark transition-colors"
              >
                Continue
              </button>
            </div>
          </div>

          <!-- Step 4: Customization -->
          <div v-else-if="currentStep === 4" key="step4" class="text-center">
            <div class="mb-8">
              <i class="gg-options text-6xl text-accent mb-4 inline-block"></i>
              <h2 class="font-serif text-4xl mb-4">Any special requests?</h2>
              <p class="text-gray-600">Tell us about specific features or elements you'd like</p>
            </div>
            
            <div class="max-w-md mx-auto mb-8">
              <textarea
                v-model="formData.customPrompt"
                placeholder="e.g., Add a kitchen island, marble countertops, pendant lighting..."
                class="w-full p-4 border border-gray-300 rounded-lg focus:border-accent focus:outline-none resize-none"
                rows="4"
              ></textarea>
            </div>

            <div class="mb-8">
              <p class="text-sm text-gray-600 mb-4">How much should we change?</p>
              <div class="flex gap-4 justify-center">
                <button
                  v-for="level in transformLevels"
                  :key="level.value"
                  @click="formData.fidelity = level.value"
                  class="px-6 py-3 border-2 transition-all"
                  :class="formData.fidelity === level.value ? 'border-accent bg-accent text-white' : 'border-gray-300 hover:border-accent'"
                >
                  {{ level.label }}
                </button>
              </div>
            </div>

            <button
              @click="processRemodel"
              class="px-12 py-4 bg-accent text-white font-medium hover:bg-accent-dark transition-colors"
              :disabled="isProcessing"
            >
              <span v-if="!isProcessing">Transform My Space</span>
              <span v-else class="flex items-center gap-2">
                <i class="gg-spinner animate-spin"></i>
                Processing...
              </span>
            </button>
          </div>

          <!-- Step 5: Results -->
          <div v-else-if="currentStep === 5" key="step5" class="text-center">
            <div class="mb-8">
              <i class="gg-check-o text-6xl text-green-500 mb-4 inline-block"></i>
              <h2 class="font-serif text-4xl mb-4">Your transformation is ready!</h2>
              <p class="text-gray-600">Here's your reimagined space</p>
            </div>

            <div v-if="resultImage" class="mb-8">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div>
                  <p class="text-sm text-gray-600 mb-2">Before</p>
                  <img :src="imagePreview" class="w-full rounded-lg shadow-lg" />
                </div>
                <div>
                  <p class="text-sm text-gray-600 mb-2">After</p>
                  <img :src="resultImage" class="w-full rounded-lg shadow-lg" />
                </div>
              </div>
            </div>

            <div class="flex gap-4 justify-center">
              <button
                @click="downloadResult"
                class="px-8 py-3 bg-accent text-white font-medium hover:bg-accent-dark transition-colors"
              >
                <i class="gg-software-download mr-2"></i>
                Download Result
              </button>
              <button
                @click="startOver"
                class="px-8 py-3 border-2 border-accent text-accent font-medium hover:bg-accent hover:text-white transition-all"
              >
                Try Another Room
              </button>
            </div>

            <div class="mt-12 p-8 bg-gray-50 rounded-lg max-w-2xl mx-auto">
              <h3 class="font-serif text-2xl mb-4">Love what you see?</h3>
              <p class="text-gray-600 mb-6">
                Let's make this vision a reality. Our expert team can bring this design to life in your home.
              </p>
              <a
                href="#contact"
                @click="scrollToContact"
                class="inline-block px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </Transition>

        <!-- Navigation -->
        <div v-if="currentStep > 1 && currentStep < 5" class="flex justify-between mt-8 md:mt-8 fixed md:relative bottom-0 left-0 right-0 md:bottom-auto bg-white md:bg-transparent p-4 md:p-0 border-t md:border-0 z-10">
          <button
            @click="previousStep"
            class="px-6 py-3 md:py-2 text-gray-600 hover:text-accent transition-colors"
          >
            ← Back
          </button>
          <button
            v-if="canProceed && currentStep < 3"
            @click="nextStep"
            class="px-8 py-3 bg-accent text-white font-medium hover:bg-accent-dark transition-colors"
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const currentStep = ref(1)
const totalSteps = 5
const isProcessing = ref(false)
const imagePreview = ref(null)
const resultImage = ref(null)
const dragOver = ref(false)

const formData = ref({
  roomType: '',
  style: '',
  image: null,
  customPrompt: '',
  fidelity: 0.65
})

const roomTypes = [
  { value: 'kitchen', label: 'Kitchen', icon: 'gg-home-screen' },
  { value: 'bathroom', label: 'Bathroom', icon: 'gg-drop' },
  { value: 'livingRoom', label: 'Living Room', icon: 'gg-tv' },
  { value: 'bedroom', label: 'Bedroom', icon: 'gg-sleep' },
  { value: 'diningRoom', label: 'Dining Room', icon: 'gg-bowl' },
  { value: 'office', label: 'Office', icon: 'gg-work-alt' }
]

const stylePresets = [
  { value: 'modern', label: 'Modern', description: 'Clean lines & minimalism' },
  { value: 'traditional', label: 'Traditional', description: 'Classic & timeless' },
  { value: 'scandinavian', label: 'Scandinavian', description: 'Light & functional' },
  { value: 'industrial', label: 'Industrial', description: 'Raw & urban' },
  { value: 'farmhouse', label: 'Farmhouse', description: 'Rustic charm' },
  { value: 'minimalist', label: 'Minimalist', description: 'Less is more' },
  { value: 'contemporary', label: 'Contemporary', description: 'Current trends' },
  { value: 'mediterraneanm', label: 'Mediterranean', description: 'Warm & coastal' },
  { value: 'midcenturyModern', label: 'Mid-Century', description: '50s-60s revival' },
  { value: 'japandi', label: 'Japandi', description: 'Japanese-Scandinavian' },
  { value: 'bohemian', label: 'Bohemian', description: 'Eclectic & artistic' },
  { value: 'coastal', label: 'Coastal', description: 'Beach-inspired' }
]

const transformLevels = [
  { value: 0.35, label: 'Major Changes' },
  { value: 0.65, label: 'Balanced' },
  { value: 0.85, label: 'Subtle Updates' }
]

const canProceed = computed(() => {
  if (currentStep.value === 1) return formData.value.roomType
  if (currentStep.value === 2) return formData.value.style
  if (currentStep.value === 3) return formData.value.image
  return true
})

const selectRoomType = (type) => {
  formData.value.roomType = type
  setTimeout(() => nextStep(), 500)
}

const selectStyle = (style) => {
  formData.value.style = style
  setTimeout(() => nextStep(), 500)
}

const nextStep = () => {
  if (currentStep.value < totalSteps) {
    currentStep.value++
    saveToLocalStorage()
  }
}

const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const handleFileSelect = (event) => {
  const file = event.target.files[0]
  if (file) {
    processFile(file)
  }
}

const handleDrop = (event) => {
  dragOver.value = false
  const file = event.dataTransfer.files[0]
  if (file) {
    processFile(file)
  }
}

const processFile = (file) => {
  if (file.size > 10 * 1024 * 1024) {
    alert('File size must be less than 10MB')
    return
  }

  formData.value.image = file
  const reader = new FileReader()
  reader.onload = (e) => {
    imagePreview.value = e.target.result
    saveToLocalStorage()
  }
  reader.readAsDataURL(file)
}

const removeImage = () => {
  formData.value.image = null
  imagePreview.value = null
}

const processRemodel = async () => {
  isProcessing.value = true
  
  try {
    const formDataToSend = new FormData()
    formDataToSend.append('image', formData.value.image)
    formDataToSend.append('room_type', formData.value.roomType)
    formDataToSend.append('preset', formData.value.style)
    formDataToSend.append('fidelity', formData.value.fidelity)
    if (formData.value.customPrompt) {
      formDataToSend.append('prompt', formData.value.customPrompt)
    }
    
    const response = await fetch('https://api.reimage.io/api/v1/interior-remodel', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ab602d93d176e26686e63604dee644a3'
      },
      body: formDataToSend
    })

    if (response.ok) {
      const data = await response.json()
      // Poll for job completion
      await pollJobStatus(data.jobID)
    } else {
      throw new Error('API request failed')
    }
  } catch (error) {
    console.error('Error processing remodel:', error)
    // For demo purposes, show a placeholder result
    setTimeout(() => {
      resultImage.value = imagePreview.value // In production, this would be the actual result
      currentStep.value = 5
      isProcessing.value = false
    }, 3000)
  }
}

const pollJobStatus = async (jobId) => {
  // Implementation would poll the job status endpoint
  // For now, we'll simulate with a timeout
  setTimeout(() => {
    resultImage.value = imagePreview.value // Placeholder
    currentStep.value = 5
    isProcessing.value = false
    saveToLocalStorage()
  }, 3000)
}

const downloadResult = () => {
  const link = document.createElement('a')
  link.href = resultImage.value
  link.download = `remodeled-${formData.value.roomType}.jpg`
  link.click()
}

const startOver = () => {
  currentStep.value = 1
  formData.value = {
    roomType: '',
    style: '',
    image: null,
    customPrompt: '',
    fidelity: 0.65
  }
  imagePreview.value = null
  resultImage.value = null
  localStorage.removeItem('remodelWizard')
}

const scrollToContact = (e) => {
  e.preventDefault()
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const saveToLocalStorage = () => {
  const dataToSave = {
    currentStep: currentStep.value,
    formData: formData.value,
    imagePreview: imagePreview.value,
    resultImage: resultImage.value
  }
  localStorage.setItem('remodelWizard', JSON.stringify(dataToSave))
}

const loadFromLocalStorage = () => {
  const saved = localStorage.getItem('remodelWizard')
  if (saved) {
    const data = JSON.parse(saved)
    currentStep.value = data.currentStep
    formData.value = data.formData
    imagePreview.value = data.imagePreview
    resultImage.value = data.resultImage
  }
}

onMounted(() => {
  loadFromLocalStorage()
})
</script>

<style scoped>
@import url('https://unpkg.com/css.gg@2.0.0/icons/css/all.css');

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.gg-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>