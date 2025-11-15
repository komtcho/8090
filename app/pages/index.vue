<template>
  <div class="bg-white">
    <!-- Top Banner -->
    <div class="bg-yellow-400 text-center py-3 px-4">
      <p class="text-black font-bold text-lg">🎮 شحن مجاني + خصم إضافي لفترة محدودة! 🎮</p>
    </div>

    <!-- Hero Section -->
    <section class="py-12 md:py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
      </div>
      
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Left: Product Image -->
          <div class="order-2 md:order-1">
            <div class="relative">
              <div class="absolute -inset-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              <div class="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition duration-500">
                <img src="/images/r36s/r36s-white.webp" alt="R36S Console"
                  class="w-full rounded-xl">
                <!-- Floating Badge -->
                <div class="absolute -top-4 -right-4 bg-red-600 text-white px-6 py-3 rounded-full font-extrabold text-xl shadow-xl animate-bounce">
                  خصم 43% 🔥
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Content -->
          <div class="order-1 md:order-2 text-center md:text-right">
            <!-- Main Headline -->
            <div class="mb-6">
              <span class="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-bold text-sm md:text-base mb-4">
                ✨ الأكثر مبيعاً في مصر
              </span>
              <h1 class="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4 leading-tight">
                استرجع ذكريات
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                  الطفولة
                </span>
              </h1>
              <p class="text-xl md:text-2xl lg:text-3xl text-gray-700 font-bold leading-relaxed">
                15,000+ لعبة كلاسيكية في جهاز واحد 🎮
              </p>
            </div>

            <!-- Key Benefits -->
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="bg-white/80 backdrop-blur p-4 rounded-xl shadow-lg">
                <div class="text-3xl mb-2">🎯</div>
                <p class="font-bold text-gray-900">لا يحتاج WiFi</p>
              </div>
              <div class="bg-white/80 backdrop-blur p-4 rounded-xl shadow-lg">
                <div class="text-3xl mb-2">⚡</div>
                <p class="font-bold text-gray-900">جاهز للعب فوراً</p>
              </div>
              <div class="bg-white/80 backdrop-blur p-4 rounded-xl shadow-lg">
                <div class="text-3xl mb-2">🔋</div>
                <p class="font-bold text-gray-900">بطارية 6 ساعات</p>
              </div>
              <div class="bg-white/80 backdrop-blur p-4 rounded-xl shadow-lg">
                <div class="text-3xl mb-2">✅</div>
                <p class="font-bold text-gray-900">ضمان 14 يوم</p>
              </div>
            </div>

            <!-- Price -->
            <div class="bg-white/90 backdrop-blur rounded-2xl p-6 mb-8 shadow-xl">
              <div class="flex items-center justify-center md:justify-end gap-4 mb-4">
                <span class="text-2xl md:text-3xl text-gray-400 line-through font-bold">{{ productPrices.original }} جنيه</span>
                <span class="text-4xl md:text-6xl font-black text-red-600">{{ productPrices.white }} جنيه</span>
              </div>
              <p class="text-lg text-gray-600 font-bold">وفر {{ productPrices.original - productPrices.white }} جنيه اليوم! 💰</p>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
              <a href="#order-form"
                class="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xl md:text-2xl font-extrabold py-5 px-12 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition duration-300">
                <span class="relative z-10">🛒 اطلب الآن</span>
                <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-full blur opacity-50 group-hover:opacity-75 transition"></div>
              </a>
              <a href="#buy"
                class="bg-white hover:bg-gray-50 text-gray-900 text-xl md:text-2xl font-bold py-5 px-12 rounded-full border-2 border-gray-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                📦 شاهد العروض
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Urgency & Social Proof Section -->
    <section class="py-8 px-4 bg-gradient-to-r from-red-600 to-orange-600">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-3 gap-6 text-center text-white">
          <div class="bg-white/10 backdrop-blur rounded-2xl p-6">
            <div class="text-4xl font-black mb-2">⏰ 48</div>
            <p class="text-lg font-bold">ساعة متبقية على العرض</p>
          </div>
          <div class="bg-white/10 backdrop-blur rounded-2xl p-6">
            <div class="text-4xl font-black mb-2">📦 87</div>
            <p class="text-lg font-bold">قطعة متبقية فقط</p>
          </div>
          <div class="bg-white/10 backdrop-blur rounded-2xl p-6">
            <div class="text-4xl font-black mb-2">🔥 {{ viewersCount }}</div>
            <p class="text-lg font-bold">شخص يشاهد الآن</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Boxes Section -->
    <section id="buy" class="py-12 px-4 bg-white">
      <div class="max-w-6xl mx-auto">
        <!-- Box 1 - Single Console -->
        <div
          class="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl shadow-2xl p-8 mb-8 border-4 border-yellow-400">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="/images/r36s/r36s-white.webp" alt="R36S White"
                class="w-full rounded-2xl shadow-xl">
            </div>
            <div class="text-center md:text-right">
              <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                جهاز R36S الأبيض
              </h2>
              <p class="text-xl text-gray-700 mb-6 leading-relaxed">
                اطلب جهاز R36S بتصميم الأبيض الأنيق، شاشة IPS عالية الجودة، آلاف الألعاب الكلاسيكية، بطارية تدوم لساعات
                طويلة. والشحن مجانًا!
              </p>
              <div class="mb-4">
                <span class="inline-block bg-red-600 text-white px-4 py-2 rounded-full font-bold text-lg">
                  خصم 43% 🔥
                </span>
              </div>
              <div class="flex items-center justify-center md:justify-end gap-4 mb-6">
                <span class="text-3xl text-gray-400 line-through font-bold">{{ productPrices.original }} جنيه</span>
                <span class="text-5xl font-extrabold text-red-600">{{ productPrices.white }} جنيه</span>
              </div>
              <a href="#order-form"
                class="inline-block bg-green-500 hover:bg-green-600 text-white text-2xl font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
                اطلب الآن 📱
              </a>
            </div>
          </div>
        </div>

        <!-- Box 2 - Black Console -->
        <div
          class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 mb-8 border-4 border-gray-600">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/images/r36s/r36s-balck.webp"
                alt="R36S Black" class="w-full rounded-2xl shadow-xl">
            </div>
            <div class="text-center md:text-right">
              <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-4">
                جهاز R36S الأسود
              </h2>
              <p class="text-xl text-gray-200 mb-6 leading-relaxed">
                اطلب جهاز R36S بتصميم الأسود الكلاسيكي، تجربة ألعاب ريترو مذهلة، شاشة واضحة، مريح في الاستخدام لساعات
                طويلة. والشحن مجانًا!
              </p>
              <div class="mb-4">
                <span class="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-lg">
                  خصم 43% 🔥
                </span>
              </div>
              <div class="flex items-center justify-center md:justify-end gap-4 mb-6">
                <span class="text-3xl text-gray-400 line-through font-bold">{{ productPrices.original }} جنيه</span>
                <span class="text-5xl font-extrabold text-yellow-400">{{ productPrices.black }} جنيه</span>
              </div>
              <a href="#order-form"
                class="inline-block bg-green-500 hover:bg-green-600 text-white text-2xl font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
                اطلب الآن 📱
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Notice Section -->
    <section class="py-8 px-4 bg-yellow-50 border-t-4 border-b-4 border-yellow-400">
      <div class="max-w-4xl mx-auto text-center">
        <p class="text-xl md:text-2xl font-bold text-gray-900">
          ⚠️ حرصًا على راحتك، يُرجى مراجعة طلبك عند الاستلام والتأكد من اكتماله وسلامته قبل مغادرة المندوب
        </p>
      </div>
    </section>

    <!-- Reviews Section -->
    <section class="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-4xl font-extrabold text-gray-900 mb-4">
          آراء عملائنا في R36S
        </h2>
        <p class="text-xl text-gray-600 mb-12">تجارب حقيقية من عملاء سعداء</p>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-2xl shadow-lg">
            <div class="text-yellow-400 text-3xl mb-3">⭐⭐⭐⭐⭐</div>
            <p class="text-gray-700 mb-4 text-lg">"جهاز رائع جداً! الشاشة واضحة والألعاب تعمل بسلاسة. يستحق كل قرش."</p>
            <p class="font-bold text-gray-900">- أحمد محمد</p>
          </div>
          <div class="bg-white p-6 rounded-2xl shadow-lg">
            <div class="text-yellow-400 text-3xl mb-3">⭐⭐⭐⭐⭐</div>
            <p class="text-gray-700 mb-4 text-lg">"البطارية تدوم طويل والجهاز مريح جداً. اشتريت اثنين واحد لي وواحد
              لأخويا!"</p>
            <p class="font-bold text-gray-900">- محمود علي</p>
          </div>
          <div class="bg-white p-6 rounded-2xl shadow-lg">
            <div class="text-yellow-400 text-3xl mb-3">⭐⭐⭐⭐⭐</div>
            <p class="text-gray-700 mb-4 text-lg">"أفضل استثمار! فيه آلاف الألعاب القديمة اللي كنت بحبها. ذكريات جميلة."
            </p>
            <p class="font-bold text-gray-900">- عمرو حسن</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 px-4 bg-white">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          أهم الأسئلة والإجابة عليها
        </h2>
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl shadow-md">
            <h3 class="text-xl font-bold text-gray-900 mb-2">كم عدد الألعاب الموجودة على الجهاز؟</h3>
            <p class="text-gray-700 text-lg">الجهاز يأتي مع آلاف الألعاب الكلاسيكية من أنظمة مختلفة، ويمكنك إضافة المزيد
              عبر كارت الذاكرة.</p>
          </div>
          <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl shadow-md">
            <h3 class="text-xl font-bold text-gray-900 mb-2">هل الشحن مجاني؟</h3>
            <p class="text-gray-700 text-lg">نعم! الشحن مجاني لجميع المحافظات والدفع عند الاستلام.</p>
          </div>
          <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl shadow-md">
            <h3 class="text-xl font-bold text-gray-900 mb-2">كم مدة البطارية؟</h3>
            <p class="text-gray-700 text-lg">البطارية 3000 مللي أمبير تدوم من 4 إلى 6 ساعات متواصلة من اللعب.</p>
          </div>
          <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl shadow-md">
            <h3 class="text-xl font-bold text-gray-900 mb-2">هل يمكن توصيله بالتلفزيون؟</h3>
            <p class="text-gray-700 text-lg">نعم! الجهاز يدعم خاصية HDMI للعب على شاشات كبيرة.</p>
          </div>
          <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl shadow-md">
            <h3 class="text-xl font-bold text-gray-900 mb-2">ما هي الألوان المتاحة؟</h3>
            <p class="text-gray-700 text-lg">متوفر باللون الأبيض والأسود الكلاسيكي.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Order Form Section -->
    <section id="order-form" class="py-16 px-4 bg-gradient-to-br from-orange-100 to-yellow-100 scroll-mt-4">
      <div class="max-w-3xl mx-auto">
        <div class="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-orange-400">
          <h2 class="text-4xl font-extrabold text-gray-900 mb-4 text-center">
            📝 اطلب الآن
          </h2>
          <p class="text-xl text-gray-600 mb-8 text-center">
            املأ البيانات وسيتم التواصل معك في أقرب وقت
          </p>
          <form class="space-y-6" action="https://forms.obelaw.com/f/NcEkg873" method="POST">
            <!-- Name -->
            <div>
              <label for="name" class="block text-right text-lg font-bold text-gray-900 mb-2">
                الاسم الكامل *
              </label>
              <input type="text" id="name" name="name" v-model="formData.name" required
                class="w-full px-4 py-3 text-right border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition text-lg"
                placeholder="أدخل اسمك الكامل">
            </div>

            <!-- Phone -->
            <div>
              <label for="phone" class="block text-right text-lg font-bold text-gray-900 mb-2">
                رقم الموبايل *
              </label>
              <input type="tel" id="phone" name="phone" v-model="formData.phone" required pattern="[0-9]{11}"
                class="w-full px-4 py-3 text-right border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition text-lg"
                placeholder="01xxxxxxxxx">
            </div>

            <!-- Address -->
            <div>
              <label for="address" class="block text-right text-lg font-bold text-gray-900 mb-2">
                العنوان بالتفصيل *
              </label>
              <textarea id="address" name="address" v-model="formData.address" required rows="3"
                class="w-full px-4 py-3 text-right border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition text-lg resize-none"
                placeholder="المحافظة، المدينة، الشارع، رقم المبنى"></textarea>
            </div>

            <!-- City/Governorate -->
            <div>
              <label for="city" class="block text-right text-lg font-bold text-gray-900 mb-2">
                المحافظة *
              </label>
              <select id="city" name="city" v-model="formData.city" required
                class="w-full px-4 py-3 text-right border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition text-lg">
                <option value="">اختر المحافظة</option>
                <option value="القاهرة">القاهرة</option>
                <option value="الجيزة">الجيزة</option>
                <option value="الإسكندرية">الإسكندرية</option>
                <option value="القليوبية">القليوبية</option>
                <option value="الدقهلية">الدقهلية</option>
                <option value="الشرقية">الشرقية</option>
                <option value="المنوفية">المنوفية</option>
                <option value="الغربية">الغربية</option>
                <option value="البحيرة">البحيرة</option>
                <option value="كفر الشيخ">كفر الشيخ</option>
                <option value="دمياط">دمياط</option>
                <option value="بورسعيد">بورسعيد</option>
                <option value="الإسماعيلية">الإسماعيلية</option>
                <option value="السويس">السويس</option>
                <option value="شمال سيناء">شمال سيناء</option>
                <option value="جنوب سيناء">جنوب سيناء</option>
                <option value="المنيا">المنيا</option>
                <option value="أسيوط">أسيوط</option>
                <option value="سوهاج">سوهاج</option>
                <option value="قنا">قنا</option>
                <option value="الأقصر">الأقصر</option>
                <option value="أسوان">أسوان</option>
                <option value="البحر الأحمر">البحر الأحمر</option>
                <option value="الوادي الجديد">الوادي الجديد</option>
                <option value="مطروح">مطروح</option>
                <option value="بني سويف">بني سويف</option>
                <option value="الفيوم">الفيوم</option>
              </select>
            </div>

            <!-- Product Selection -->
            <div>
              <label for="product" class="block text-right text-lg font-bold text-gray-900 mb-2">
                اختر المنتج *
              </label>
              <select id="product" name="product" v-model="formData.product" required @change="updatePrice"
                class="w-full px-4 py-3 text-right border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition text-lg">
                <option value="">اختر المنتج</option>
                <option value="white">جهاز R36S الأبيض - {{ productPrices.white }} جنيه</option>
                <option value="black">جهاز R36S الأسود - {{ productPrices.black }} جنيه</option>
              </select>
            </div>

            <!-- Quantity -->
            <div>
              <label for="quantity" class="block text-right text-lg font-bold text-gray-900 mb-2">
                الكمية *
              </label>
              <div class="flex items-center justify-end gap-4">
                <button type="button" @click="decreaseQuantity"
                  class="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold text-2xl w-12 h-12 rounded-lg transition">
                  -
                </button>
                <input type="number" id="quantity" name="quantity" v-model.number="formData.quantity" min="1" max="10"
                  required @input="updatePrice"
                  class="w-20 px-4 py-3 text-center border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition text-xl font-bold">
                <button type="button" @click="increaseQuantity"
                  class="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold text-2xl w-12 h-12 rounded-lg transition">
                  +
                </button>
              </div>
            </div>

            <!-- Total Price Display -->
            <div class="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-xl border-2 border-green-400">
              <div class="flex justify-between items-center">
                <span class="text-2xl font-extrabold text-gray-900">الإجمالي:</span>
                <span class="text-4xl font-extrabold text-green-600">{{ totalPrice }} جنيه</span>
              </div>
              <p class="text-center text-gray-600 mt-2">✓ الشحن مجاناً لجميع المحافظات</p>
            </div>

            <!-- Notes -->
            <div>
              <label for="notes" class="block text-right text-lg font-bold text-gray-900 mb-2">
                ملاحظات إضافية (اختياري)
              </label>
              <textarea id="notes" name="notes" v-model="formData.notes" rows="2"
                class="w-full px-4 py-3 text-right border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition text-lg resize-none"
                placeholder="أي ملاحظات أو طلبات خاصة"></textarea>
            </div>

            <!-- Hidden field for total price -->
            <input type="hidden" name="total_price" :value="totalPrice">

            <!-- Submit Button -->
            <button type="submit"
              class="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-2xl font-extrabold py-5 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition">
              ✅ تأكيد الطلب - الدفع عند الاستلام
            </button>

            <p class="text-center text-gray-600 text-sm">
              بالضغط على "تأكيد الطلب" فإنك توافق على الشروط والأحكام
            </p>
          </form>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-16 px-4 bg-gradient-to-br from-green-50 to-teal-50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          تواصل معنا
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <a href="https://www.instagram.com/" target="_blank"
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 text-center">
            <div class="text-5xl mb-4">📸</div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">انستجرام</h3>
            <p class="text-gray-600 mb-2">اضغط هنا للتواصل على انستجرام</p>
            <p class="text-pink-600 font-bold text-lg">Instagram</p>
          </a>
          <a href="https://www.facebook.com/" target="_blank"
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 text-center">
            <div class="text-5xl mb-4">👍</div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">فيسبوك</h3>
            <p class="text-gray-600 mb-2">اضغط هنا للتواصل على فيسبوك</p>
            <p class="text-blue-600 font-bold text-lg">Facebook</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8 px-4">
      <div class="max-w-6xl mx-auto text-center">
        <p class="text-xl mb-4">جميع الحقوق محفوظة. CONSOLE 8090 - 2025</p>
        <div class="flex justify-center gap-6 text-gray-400">
          <a href="#" class="hover:text-white transition">سياسة الخصوصية</a>
          <a href="#" class="hover:text-white transition">الشروط والأحكام</a>
          <a href="#" class="hover:text-white transition">سياسة الإرجاع</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
  import { ref, computed, onMounted } from 'vue'

  const formData = ref({
    name: '',
    phone: '',
    address: '',
    city: '',
    product: '',
    quantity: 1,
    notes: ''
  })

  const viewersCount = ref(342)

  const productPrices = {
    original: 3499,
    white: 1999,
    black: 1999
  }

  // Generate random viewer count between 280-450
  const updateViewersCount = () => {
    viewersCount.value = Math.floor(Math.random() * (450 - 280 + 1)) + 280
  }

  onMounted(() => {
    updateViewersCount()
    // Update viewers count every 8-15 seconds
    setInterval(() => {
      updateViewersCount()
    }, Math.floor(Math.random() * (15000 - 8000 + 1)) + 8000)
  })

  const productNames = {
    white: 'جهاز R36S الأبيض - 1999 جنيه',
    black: 'جهاز R36S الأسود - 1999 جنيه'
  }

  const totalPrice = computed(() => {
    if (!formData.value.product) return '0'
    const price = productPrices[formData.value.product]
    const total = price * formData.value.quantity
    return total.toLocaleString('ar-EG')
  })

  const updatePrice = () => {
    // This function is now handled by the computed property
    // but we keep it for the @change event binding
  }

  const increaseQuantity = () => {
    if (formData.value.quantity < 10) {
      formData.value.quantity++
    }
  }

  const decreaseQuantity = () => {
    if (formData.value.quantity > 1) {
      formData.value.quantity--
    }
  }

  const handleOrderSubmit = (event) => {
    // Allow native form submission to proceed
    event.target.submit()
  }
</script>