<template>
  <section id="projects" class="bg-cotton relative">
    <div
      class="flex flex-col px-5 container mx-auto max-w-6xl items-center justify-center space-y-18 pt-16 pb-12 md:pb-50 md:pt-6"
    >
      <div class="flex flex-col items-center justify-center md:items-end w-full">
        <h2 class="text-4xl md:text-5xl font-extrabold text-forestGreen">
          Moje projekty
        </h2>
        <p
          class="text-xl text-forestGreen/80 font-medium mt-2 text-center md:text-left"
        >
          Wybrane zrealizowane projekty.
        </p>
      </div>

      <div class="flex flex-col space-y-12 md:space-y-30">
        <article
          v-for="(project, index) in projects"
          :key="index"
          class="flex flex-col items-center justify-center gap-8 md:gap-20 w-full"
          :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
        >
          <div
            v-if="index !== 0"
            class="w-full h-1 bg-graphite/40 rounded-full md:hidden my-6"
            aria-hidden="true"
          ></div>

          <div
            class="flex flex-col justify-center md:w-1/2 space-y-6 text-center"
            :class="
              index % 2 === 0
                ? 'md:text-right md:items-end'
                : 'md:text-left md:items-start'
            "
          >
            <h3 class="text-2xl md:text-3xl font-extrabold text-forestGreen">
              {{ project.name }}
            </h3>

            <p class="text-lg text-graphite font-medium">
              {{ project.description }}
            </p>

            <a
              class="text-forestGreen font-bold hover:scale-105 duration-150 hover:text-mediumGreen inline-flex items-center gap-2"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              :title="`Zobacz projekt: ${project.name}`"
            >
              Zobacz projekt
            </a>

            <div
              class="flex flex-wrap gap-3 items-center justify-center pt-2"
              :class="index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'"
            >
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="bg-lightMint px-4 py-2 rounded-lg text-sm font-semibold text-graphite shadow-sm"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <div
            class="flex items-center justify-center relative w-full md:w-1/2 bg-gray-100 rounded-xl overflow-hidden shadow-lg aspect-video"
          >
            <NuxtImg
              v-if="project.photo"
              :src="project.photo"
              :alt="project.name"
              width="600"
              height="340"
              loading="lazy"
              format="webp"
              class="w-full h-full object-cover transform hover:scale-105 transition duration-200 ease-in-out"
            />

            <div v-else class="flex flex-col items-center text-gray-400 p-4">
              <span>Brak zdjęcia</span>
            </div>
          </div>
        </article>
      </div>

      <svg
        class="absolute -bottom-0.5 left-0 w-full h-20 md:h-80"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="#3a7d44"
          fill-opacity="1"
          d="M0,256L48,261.3C96,267,192,277,288,256C384,235,480,181,576,186.7C672,192,768,256,864,288C960,320,1056,320,1152,304C1248,288,1344,256,1392,240L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    name: 'Zara wedding',
    photo: '/images/zaraWedding.png', 
    description:
      'Prosty one page, stworzony dla rodzinnej firmy zajmującej się nagrywaniem ślubów oraz wesel.',
    technologies: ['Vue 3', 'Tailwind'],
    link: 'https://zara-wedding.pl/',
  },
  {
    name: 'Strona portfolio',
    photo: '/images/portfolio.png',
    description:
      'Celem stworzenia tej strony było zebranie moich dotychczasowych projektów, umiejętności i przedstawienie ich w formie innej niż PDF z wygenerowanym CV. Stworzona z wykorzystaniem tailwindcss z elementami vue.js.',
    technologies: ['Nuxt', 'Tailwind', 'EmailJS'],
    link: 'https://marcinkosinski.dev',
  },
]
</script>

<style scoped></style>