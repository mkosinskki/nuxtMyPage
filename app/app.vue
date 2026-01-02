<template>
  <div>
    <NuxtRouteAnnouncer />

    <AppNavbar />
    <Hero />
    <AboutMe />
    <Technologies />
    <Projects />
    <Education />
    <Contact />
    <AppFooter />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Marcin Kosiński - Frontend Developer | Portfolio',
  description: 'Cześć! Jestem Frontend Developerem z Białegostoku. Tworzę szybkie i nowoczesne strony w Vue.js, Nuxt 3 i Tailwind CSS. Zobacz moje projekty.',
  
  ogTitle: 'Marcin Kosiński - Frontend Developer',
  ogSiteName: 'Marcin Kosiński – Frontend Developer',
  ogDescription: 'Szukasz programisty Vue.js? Zobacz moje portfolio, projekty i umiejętności techniczne.',
  ogImage: 'https://www.marcinkosinski.dev/images/og-image.png',
  ogUrl: 'https://www.marcinkosinski.dev',
  ogType: 'website',
  ogLocale: 'pl_PL',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Marcin Kosiński - Portfolio',
  twitterDescription: 'Frontend Developer: Vue.js, Nuxt, Tailwind.',
  twitterImage: 'https://www.marcinkosinski.dev/images/og-image.png',

  keywords: 'Frontend Developer, Vue.js, Nuxt, Tailwind, Białystok, Programista, Tworzenie stron, Web Development',
  themeColor: '#1b4332'
})

useHead({
  htmlAttrs: { 
    lang: 'pl', 
    class: 'scroll-smooth scroll-pt-20' 
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'canonical', href: 'https://www.marcinkosinski.dev' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Marcin Kosiński",
        "jobTitle": "Frontend Developer",
        "url": "https://www.marcinkosinski.dev",
        "image": "https://www.marcinkosinski.dev/images/profile.jpg",
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Politechnika Białostocka"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Białystok",
          "addressCountry": "PL"
        },
        "description": "Frontend Developer i student informatyki z Białegostoku.",
        "sameAs": [
          "https://github.com/mkosinskki",
          "https://www.linkedin.com/in/marcin-kosiński-80825633a",
        ],
        "knowsAbout": ["Vue.js", "Nuxt", "JavaScript", "Tailwind CSS", "Git"],
      })
    }
  ]
})
</script>
