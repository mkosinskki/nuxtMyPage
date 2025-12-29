<template>
    <section id="hero" class="bg-forestGreen">
        <div class="relative flex flex-col min-h-screen justify-center pb-32 md:pb-72">
            <div
                class="container relative flex flex-col mx-auto px-5 space-y-10 md:flex-row md:space-y-0 md:space-x-40 md:px-16 justify-center">
                <div class="flex flex-col space-y-6 items-center pt-16 md:w-1/2 md:pt-20 md:items-start">
                    <h1 class="text-4xl lg:text-6xl font-extrabold text-center md:text-left text-cotton">
                        Cześć, jestem Marcin
                    </h1>

                    <p class="text-xl font-semibold text-lightMint text-center md:text-left md:max-w-md">
                        Jestem studentem informatyki. Tworzę nowoczesne i responsywne aplikacje webowe.
                    </p>

                    <div class="flex w-full md:w-auto gap-4 md:gap-12 my-8">

                        <a href="#about-me"
                            class="flex items-center justify-center flex-1 md:flex-none md:w-40 bg-lightMint px-2 py-3 rounded-lg text-center font-medium transition-all duration-150 hover:bg-mediumGreen hover:text-offWhite hover:-translate-y-0.5 hover:shadow-md">
                            O mnie
                        </a>

                        <a href="#projects"
                            class="flex items-center justify-center flex-1 md:flex-none md:w-40 bg-lightMint px-2 py-3 rounded-lg text-center font-medium transition-all duration-150 hover:bg-mediumGreen hover:text-offWhite hover:-translate-y-0.5 hover:shadow-md">
                            Projekty
                        </a>

                        <a href="#technologies"
                            class="flex items-center justify-center flex-1 md:flex-none md:w-40 bg-lightMint px-2 py-3 rounded-lg text-center font-medium transition-all duration-150 hover:bg-mediumGreen hover:text-offWhite hover:-translate-y-0.5 hover:shadow-md">
                            Tech stack
                        </a>
                    </div>
                </div>

                <div class="flex justify-center items-center md:pt-14">
                    <NuxtImg 
                        src="/images/papuzka.png" 
                        alt="Maskotka portfolio - Papuga" 
                        width="320" 
                        height="320"
                        format="webp"
                        class="w-60 h-auto md:w-80 drop-shadow-2xl animate-float"
                    />
                </div>
            </div>
            <svg class="absolute -bottom-0.5 left-0 w-full h-auto" width="1920" height="230" viewBox="0 0 1920 230"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 69.7185L80 48.4185C160 26.7185 320 -15.2815 480 5.71853C640 26.7185 800 112.719 960 133.719C1120 154.719 1280 112.719 1440 91.0185C1600 69.7185 1760 69.7185 1840 69.7185H1920V229.719H1840C1760 229.719 1600 229.719 1440 229.719C1280 229.719 1120 229.719 960 229.719C800 229.719 640 229.719 480 229.719C320 229.719 160 229.719 80 229.719H0V69.7185Z"
                    fill="#fdfdf5" />
            </svg>
        </div>
    </section>
</template>

<script setup></script>

<style scoped>
#hero {
    background-color: #1b4332;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%23fdfdf5' fill-opacity='0.03' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E");
    background-repeat: repeat;
    background-position: center;
    background-size: auto;
}
</style>