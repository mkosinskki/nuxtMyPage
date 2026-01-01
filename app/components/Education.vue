<template>
    <section id="education" class="relative pt-10 pb-28 md:pt-8 bg-mediumGreen overflow-hidden">
        <div class="relative container max-w-6xl mx-auto px-5 pb-0 md:pb-40">

            <div class="flex flex-col space-y-4 mb-24 text-center md:text-left">
                <h2 class="text-4xl md:text-5xl font-extrabold text-offWhite">Edukacja</h2>
                <p class="text-xl font-medium text-offWhite/80">Moja ścieżka naukowa i zdobyte certyfikaty.</p>
            </div>

            <ol class="relative space-y-24 md:space-y-12">

                <div class="absolute w-0.5 left-1/2 -translate-x-1/2 top-0 bottom-0 z-0 bg-linear-to-b from-transparent via-offWhite/90 to-transparent"
                    aria-hidden="true">
                </div>

                <li v-for="(edu, index) in educationList" :key="index"
                    class="relative flex flex-col md:flex-row-reverse md:even:flex-row items-center md:justify-between group z-10">

                    <div class="mb-6 md:mb-0 w-full md:w-5/12 flex flex-col items-center 
                                md:items-start md:text-left md:pl-6
                                md:group-even:items-end md:group-even:text-right md:group-even:pr-6 md:group-even:pl-0">
                        <div
                            class="px-1 md:px-0 w-full md:w-auto py-1 z-20 relative inline-flex flex-row justify-between items-center md:flex-col gap-1 md:text-inherit">
                            <time
                                class="text-3xl font-black text-offWhite leading-none text-left md:text-center">
                                {{ edu.year }}
                            </time>
                            <span
                                class="text-sm text-lightMint/90 font-bold uppercase tracking-widest text-right md:text-center">
                                {{ edu.type }}
                            </span>
                        </div>
                    </div>

                    <div class="hidden md:block absolute left-1/2 w-5 h-5 rounded-full border-3 border-lightMint bg-offWhite z-20 -translate-x-1/2 group-hover:scale-125 group-hover:bg-forestGreen transition-all duration-300 shadow-md"
                        aria-hidden="true">
                    </div>

                    <div class="w-full md:w-5/12 md:pr-4 md:group-even:pl-4 md:group-even:pr-0">
                        <article class="p-8 rounded-2xl bg-forestGreen shadow-lg group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden
                                    md:text-right md:group-even:text-left">

                            <div class="absolute top-0 h-full w-1.5 bg-offWhite group-hover:w-3 transition-all duration-300 
                                            right-0 md:group-even:right-auto md:group-even:left-0" aria-hidden="true">
                            </div>

                            <h3
                                class="text-xl font-bold text-offWhite/70 mb-2 group-hover:text-offWhite transition-colors">
                                {{ edu.title }}
                            </h3>

                            <div class="flex items-center gap-2 mb-4 text-lightMint font-semibold text-sm
                                            md:justify-end md:group-even:justify-start">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                                    </path>
                                </svg>
                                {{ edu.school }}
                            </div>

                            <p class="text-offWhite leading-relaxed text-sm">{{ edu.description }}</p>
                        </article>
                    </div>

                </li>
            </ol>
        </div>

        <svg class="absolute -bottom-0.5 left-0 w-full h-20 md:h-80" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
            <path fill="#fdfdf5" fill-opacity="1"
                d="M0,192L34.3,181.3C68.6,171,137,149,206,154.7C274.3,160,343,192,411,186.7C480,181,549,139,617,144C685.7,149,754,203,823,208C891.4,213,960,171,1029,160C1097.1,149,1166,171,1234,176C1302.9,181,1371,171,1406,165.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
            </path>
        </svg>

    </section>
</template>

<script setup>
const educationList = [
    {
        year: '2022 - Obecnie',
        type: 'Uczelnia Wyższa',
        title: 'Informatyka',
        school: 'Politechnika Białostocka',
        description: 'Aktualnie jestem w trakcie studiów inżynierskich na Politechnice Białostockiej.'
    },
    {
        year: '2025',
        type: 'Kurs',
        title: 'Vue.js',
        school: 'Udemy',
        description: 'Ukończenie kursu z Vue.js, autor - Maximilian Schwarzmüller.'
    },
    {
        year: '2025',
        type: 'Kurs',
        title: 'Tailwind',
        school: 'Udemy',
        description: 'Ukończenie kursu z Tailwindcss, autor - Brad Traversy.'
    },
]
</script>

<style scoped></style>