<template>
  <div class="bg-gradient-to-br from-green-50 to-teal-50 min-h-screen flex items-center justify-center px-4 py-16">
    <div class="max-w-2xl w-full">
      <div class="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border-4 border-green-400">
        <!-- Success Icon -->
        <div class="mb-6">
          <div class="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            شكراً لطلبك! 🎉
          </h1>
        </div>

        <!-- Success Message -->
        <div class="mb-8">
          <p class="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
            تم استلام طلبك بنجاح وسيتم التواصل معك في أقرب وقت
          </p>
          <p class="text-lg text-gray-600">
            رقم الطلب: <span class="font-bold text-green-600">#{{ orderNumber }}</span>
          </p>
        </div>

        <!-- Order Details Box -->
        <div class="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-2xl mb-8 border-2 border-green-300">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">📦 ماذا بعد؟</h2>
          <div class="space-y-3 text-right">
            <div class="flex items-start gap-3">
              <span class="text-2xl">✅</span>
              <p class="text-lg text-gray-700">سيتم التواصل معك خلال 24 ساعة لتأكيد الطلب</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">📦</span>
              <p class="text-lg text-gray-700">سيتم شحن طلبك خلال 2-3 أيام عمل</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">🚚</span>
              <p class="text-lg text-gray-700">الشحن مجاني لجميع المحافظات</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">💰</span>
              <p class="text-lg text-gray-700">الدفع عند الاستلام - لا توجد رسوم إضافية</p>
            </div>
          </div>
        </div>

        <!-- Important Notice -->
        <div class="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 mb-8">
          <div class="flex items-start gap-3">
            <span class="text-3xl">⚠️</span>
            <div class="text-right">
              <h3 class="text-xl font-bold text-gray-900 mb-2">تذكير مهم</h3>
              <p class="text-lg text-gray-700">
                يُرجى فحص المنتج جيداً عند الاستلام والتأكد من سلامته قبل مغادرة المندوب
              </p>
            </div>
          </div>
        </div>

        <!-- Contact Section -->
        <div class="mb-8">
          <p class="text-lg text-gray-600 mb-4">هل لديك أي استفسار؟</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/+201102540657" 
              target="_blank"
              class="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition"
            >
              <span>💬</span>
              <span>تواصل على واتساب</span>
            </a>
            <a 
              href="tel:+201102540657"
              class="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition"
            >
              <span>📱</span>
              <span>اتصل بنا</span>
            </a>
          </div>
        </div>

        <!-- Back to Home Button -->
        <div class="pt-6 border-t-2 border-gray-200">
          <NuxtLink 
            to="/"
            class="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white text-lg font-bold py-3 px-10 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition"
          >
            🏠 العودة للصفحة الرئيسية
          </NuxtLink>
        </div>
      </div>

      <!-- Social Proof -->
      <div class="mt-8 text-center">
        <p class="text-gray-600 mb-4">انضم لآلاف العملاء السعداء</p>
        <div class="flex justify-center gap-2 text-yellow-400 text-3xl">
          ⭐⭐⭐⭐⭐
        </div>
        <p class="text-gray-700 font-bold mt-2">تقييم 4.9/5 من أكثر من 5000 عميل</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Generate random order number
const orderNumber = ref('')

onMounted(() => {
  // Generate order number based on timestamp
  const timestamp = Date.now()
  orderNumber.value = `R36S${timestamp.toString().slice(-8)}`
})

// Set page meta
useHead({
  title: 'شكراً لطلبك - R36S Console',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>

<style scoped>
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}
</style>
