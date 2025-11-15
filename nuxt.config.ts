// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'ar',
        dir: 'rtl'
      },
      title: 'R36S جهاز الألعاب الريترو | 15000+ لعبة - خصم 43% + شحن مجاني',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'اطلب جهاز R36S للألعاب الكلاسيكية الآن! 15000+ لعبة ريترو، بطارية 6 ساعات، شاشة IPS، خصم 43% (وفر 1500 جنيه)، شحن مجاني لكل المحافظات، دفع عند الاستلام. السعر 1999 جنيه فقط!' },
        { name: 'keywords', content: 'R36S, جهاز ألعاب ريترو, ألعاب كلاسيكية, أتاري, نينتندو, سيجا, ألعاب قديمة, console, retro gaming' },
        { name: 'author', content: 'CONSOLE 8090' },
        { name: 'robots', content: 'index, follow' },
        // Open Graph
        { property: 'og:type', content: 'product' },
        { property: 'og:title', content: 'R36S جهاز الألعاب الريترو - 15000+ لعبة كلاسيكية' },
        { property: 'og:description', content: 'استرجع ذكريات الطفولة مع جهاز R36S! خصم 43% + شحن مجاني. 1999 جنيه فقط بدلاً من 3499 جنيه' },
        { property: 'og:image', content: '/og_image.jpg' },
        { property: 'og:url', content: 'https://console8090.com' },
        { property: 'og:site_name', content: 'CONSOLE 8090' },
        { property: 'og:locale', content: 'ar_EG' },
        { property: 'product:price:amount', content: '1999' },
        { property: 'product:price:currency', content: 'EGP' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'R36S جهاز الألعاب الريترو - خصم 43%' },
        { name: 'twitter:description', content: '15000+ لعبة كلاسيكية في جهاز واحد. شحن مجاني + دفع عند الاستلام' },
        { name: 'twitter:image', content: '/og_image.jpg' }
      ],
      link: [
        { rel: 'canonical', href: 'https://console8090.com' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-46NDN5NLRM',
          async: true
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-46NDN5NLRM');
          `
        }
      ]
    }
  }
})
