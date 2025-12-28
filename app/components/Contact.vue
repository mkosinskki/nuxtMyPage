<template>
  <section id="contact" class="bg-cotton pt-12 pb-20 relative">
    <div
      class="flex flex-col container mx-auto max-w-6xl items-center space-y-8 px-3 md:px-44"
    >
      <h2
        class="text-4xl md:text-5xl font-extrabold text-center text-forestGreen"
      >
        Skontaktuj się ze mną
      </h2>

      <div
        class="flex flex-col w-full bg-mediumGreen rounded-xl p-5 md:p-10 shadow-xl"
      >
        <form @submit.prevent="submitForm" class="space-y-8" novalidate>
          <div class="flex flex-col">
            <label for="name" class="text-offWhite font-bold mb-2 text-lg"
              >Imię</label
            >
            <input
              id="name"
              v-model="form.name"
              @input="clearError('name')"
              type="text"
              placeholder="Wprowadź swoje imię"
              :class="[
                'bg-forestGreen text-offWhite placeholder-cotton/60 p-4 rounded-md focus:outline-none focus:ring-2 transition duration-150 border',
                errors.name
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-transparent focus:ring-lightMint',
              ]"
            />
            <div class="h-6 mt-1 flex items-center">
              <p
                class="text-red-400 text-sm font-semibold transition-opacity duration-300"
                :class="errors.name ? 'opacity-100' : 'opacity-0'"
              >
                {{ errors.name || "&nbsp;" }}
              </p>
            </div>
          </div>

          <div class="flex flex-col">
            <label for="email" class="text-offWhite font-bold mb-2 text-lg"
              >Email</label
            >
            <input
              id="email"
              v-model="form.email"
              @input="clearError('email')"
              type="email"
              placeholder="Wprowadź swój email"
              :class="[
                'bg-forestGreen text-offWhite placeholder-cotton/60 p-4 rounded-lg focus:outline-none focus:ring-2 transition duration-150 border',
                errors.email
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-transparent focus:ring-lightMint',
              ]"
            />
            <div class="h-6 mt-1 flex items-center">
              <p
                class="text-red-400 text-sm font-semibold transition-opacity duration-300"
                :class="errors.email ? 'opacity-100' : 'opacity-0'"
              >
                {{ errors.email || "&nbsp;" }}
              </p>
            </div>
          </div>

          <div class="flex flex-col">
            <label for="message" class="text-offWhite font-bold mb-2 text-lg"
              >Wiadomość</label
            >
            <textarea
              id="message"
              v-model="form.message"
              @input="clearError('message')"
              rows="5"
              placeholder="Wprowadź swoją wiadomość"
              :class="[
                'bg-forestGreen text-offWhite placeholder-cotton/60 p-4 rounded-lg resize-none focus:outline-none focus:ring-2 transition duration-150 border',
                errors.message
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-transparent focus:ring-lightMint',
              ]"
            ></textarea>
            <div class="flex justify-between items-start mt-1 h-6">
              <p
                class="text-red-400 text-sm font-semibold transition-opacity duration-300"
                :class="errors.message ? 'opacity-100' : 'opacity-0'"
              >
                {{ errors.message || "&nbsp;" }}
              </p>
              <span
                :class="
                  form.message.length <= 20 ? 'text-gray-400' : 'text-green-400'
                "
                class="text-xs ml-auto self-center transition-colors duration-300"
              >
                {{ form.message.length }} / 21+
              </span>
            </div>
          </div>

          <div class="flex flex-col items-center">
            <ClientOnly>
              <VueRecaptcha
                :sitekey="recaptchaSiteKey"
                size="normal"
                theme="dark"
                @verify="onCaptchaVerify"
                @expire="onCaptchaExpire"
                @fail="onCaptchaFail"
                ref="recaptchaInstance"
              />
            </ClientOnly>

            <div class="h-6 mt-1 flex items-center justify-center">
              <p
                class="text-red-400 text-sm font-semibold transition-opacity duration-300"
                :class="errors.captcha ? 'opacity-100' : 'opacity-0'"
              >
                {{ errors.captcha || "&nbsp;" }}
              </p>
            </div>
          </div>

          <div class="flex flex-col space-y-2">
            <div class="flex justify-center h-6 items-center">
              <p
                class="text-red-400 text-sm font-semibold transition-opacity duration-300 text-center"
                :class="errors.general ? 'opacity-100' : 'opacity-0'"
              >
                {{ errors.general || "&nbsp;" }}
              </p>
            </div>

            <button
              type="submit"
              :disabled="isLoading"
              class="w-full bg-lightMint hover:bg-forestGreen text-graphite hover:text-offWhite font-bold text-lg py-3 rounded-lg shadow-lg transition transform duration-150 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              :class="{ 'hover:scale-105': !isLoading }"
            >
              <span v-if="isLoading">Wysyłanie...</span>
              <span v-else>Wyślij wiadomość</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="translate-y-2 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="showSuccess"
          class="fixed z-50 flex items-center bg-white border-l-4 border-green-500 shadow-2xl rounded-lg p-4 pr-8 bottom-20 left-4 right-4 md:left-auto md:right-5 md:bottom-5 md:w-auto md:max-w-sm"
        >
          <div class="text-green-500 mr-3 shrink-0">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <div class="flex flex-col">
            <h4 class="font-bold text-graphite text-sm">Sukces!</h4>
            <p class="text-graphite/80 text-sm">
              Wiadomość została wysłana pomyślnie.
            </p>
          </div>
          <button
            @click="showSuccess = false"
            class="absolute top-2 right-2 text-graphite/60 hover:text-graphite p-1"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";
import emailjs from "@emailjs/browser";
import VueRecaptcha from "vue3-recaptcha2";

const form = reactive({ name: "", email: "", message: "" });
const errors = reactive({
  name: "",
  email: "",
  message: "",
  captcha: "",
  general: "",
});
const showSuccess = ref(false);
const isLoading = ref(false);

const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const captchaToken = ref(null);
const recaptchaInstance = ref(null);

const onCaptchaVerify = (token) => {
  captchaToken.value = token;
  errors.captcha = "";
};

const onCaptchaExpire = () => {
  captchaToken.value = null;
};

const clearError = (field) => {
  errors[field] = "";
};

const validateForm = () => {
  let isValid = true;
  if (!form.name || form.name.trim().length < 3) {
    errors.name = "Imię musi składać się z min. 3 znaków.";
    isValid = false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!form.email || !emailRegex.test(form.email)) {
    errors.email = "Podaj poprawny adres email.";
    isValid = false;
  }
  if (!form.message || form.message.trim().length <= 20) {
    errors.message = `Brakuje jeszcze ${
      21 - form.message.trim().length
    } znaków.`;
    isValid = false;
  }
  return isValid;
};

const submitForm = async () => {
  errors.general = "";

  if (!validateForm()) return;

  if (!captchaToken.value) {
    errors.captcha = "Potwierdź, że nie jesteś robotem!";
    return;
  }

  isLoading.value = true;

  try {
    const templateParams = {
      name: form.name,
      email: form.email,
      message: form.message,
      "g-recaptcha-response": captchaToken.value,
    };

    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    showSuccess.value = true;
    form.name = "";
    form.email = "";
    form.message = "";

    Object.keys(errors).forEach((key) => (errors[key] = ""));

    captchaToken.value = null;
    if (recaptchaInstance.value) {
      recaptchaInstance.value.reset();
    }

    setTimeout(() => {
      showSuccess.value = false;
    }, 4000);
  } catch (error) {
    console.error("Błąd wysyłania:", error);
    errors.general =
      "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.";
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped></style>