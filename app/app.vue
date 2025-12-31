<template>
  <div>
    <NuxtRouteAnnouncer />

    <!-- <Navbar /> -->
    <Hero />
    <AboutMe />
    <Technologies />
    <Projects />
    <!-- <Education /> -->
    <Contact />
    <!-- <Footer /> -->
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: { lang: 'pl' },
  title: 'Marcin Kosiński - Frontend Developer | Portfolio',
  meta: [
    { name: 'description', content: 'Portfolio Marcina Kosińskiego...' },
    
    { name: 'keywords', content: 'Frontend Developer, Vue.js, Nuxt, Tailwind, Białystok, Programista, Tworzenie stron' },

    { property: 'article:tag', content: 'Frontend Development' },
    { property: 'article:tag', content: 'Vue.js' },
    { property: 'article:tag', content: 'Web Performance' },

    { property: 'og:title', content: 'Marcin Kosiński - Frontend Developer' },
    { property: 'og:description', content: 'Zobacz moje projekty i dowiedz się więcej o moim doświadczeniu.' },
    { property: 'og:image', content: 'https://www.marcinkosinski.dev/images/og-image.jpg' },
    { property: 'og:type', content: 'website' }
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
        "description": "Frontend Developer i student informatyki z Białegostoku.",
        "sameAs": [
          "https://github.com/mkosinskki",
          "https://www.linkedin.com/in/marcin-kosiński-80825633a",
        ],
        "knowsAbout": ["Vue.js", "Nuxt", "JavaScript", "Tailwind CSS"],
      })
    }
  ]
})
</script>
