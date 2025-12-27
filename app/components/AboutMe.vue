<template>
  <section id="about-me" class="bg-cotton relative" aria-label="Sekcja o mnie">
    <div
      class="container mx-auto flex flex-col-reverse md:flex-row text-offWhite justify-center items-center min-h-[calc(100vh-72px)] px-10 py-10 space-y-10 md:px-12 md:space-y-0 md:space-x-10"
    >
      <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
        <div class="group mt-20 md:mt-0 relative">
          <img
            src="/images/profile.jpg"
            alt="Marcin Kosiński - Frontend Developer, student Politechniki Białostockiej"
            width="384"
            height="500"
            loading="lazy"
            class="w-60 h-auto md:w-96 group-hover:scale-105 duration-150 rounded-t-lg object-cover"
          />

          <NuxtLink 
            to="#contact" 
            title="Przejdź do kontaktu"
            class="block group-hover:scale-105 transition-transform duration-150"
          >
            <div
              class="bg-lightMint text-graphite py-4 rounded-b-lg text-center font-semibold transition-colors duration-150 group-hover:bg-forestGreen group-hover:text-offWhite group-hover:shadow-lg"
            >
              Skontaktuj się ze mną!
            </div>
          </NuxtLink>
        </div>
      </div>

      <div
        class="w-full md:w-1/2 items-center justify-center space-y-8 leading-9 text-lg md:text-xl font-semibold text-graphite mt-10 md:mt-0"
      >
        <article class="flex flex-col space-y-8 text-center md:max-w-xl md:text-justify">
          
          <h2 class="text-4xl md:text-5xl font-extrabold text-center md:text-left text-mediumGreen">
            Kod, który robi różnicę
          </h2>

          <p class="text-mediumGreen text-2xl md:text-3xl font-bold text-center md:text-left my-8">
            Cześć!
          </p>

          <p>
            Jestem studentem informatyki, aktualnie jestem na III roku studiów na 
            <strong class="font-semibold">Politechnice Białostockiej</strong>.
          </p>

          <p>
            Głęboko wierzę, że
            <span class="text-mediumGreen">najlepszą nauką jest praktyka.</span> Teoria jest
            istotna, wręcz niezbędna, ale moim największym celem jest przekuwanie jej w widoczne
            rezultaty.
          </p>

          <p>
            Fascynuje mnie proces tworzenia oprogramowania - od analizy problemu, przez projekt aż
            po realnie działający produkt. Aktualnie bardziej
            <strong class="text-mediumGreen font-semibold">Frontend Developer</strong>, ale docelowo chciałbym
            rozwijać się jako <strong class="text-mediumGreen font-semibold">Fullstack Developer</strong>.
          </p>

          <p>
            <span class="text-mediumGreen">W wolnym czasie</span>, uwielbiam uprawiać różnego
            rodzaju sporty: treningi siłowe, squash, jazda na rowerze i wiele więcej.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>