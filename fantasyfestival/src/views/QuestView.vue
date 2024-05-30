<template>

  <body>
    <div class="centertext">
      <h1 class="top-text text-7xl font-bold text-center">Fantasy Quest</h1>
      <p class="city-text text-5xl font-bold text-center">Esbjerg 2024</p>
    </div>
    <!-- Loading Countdown component -->
    <div id="countdown">
      <CountDown />
    </div>
    <div class="tail">
      <img src="../assets/img/dragontail.svg" alt="Dragon Tail" />
    </div>

    <div class="maintekst">
      <h1 class="deltag text-5xl mb-5 font-bold">
        Deltag i en magisk oplevelse
      </h1>
      <p class="brødtekst raleway-font text-3xl">
        Er du klar til at leve dig ind i en anden verden, en magisk historie,
        hvor du er helten, der er på en “quest” for at overvinde de onde magter
        og redde hele verden? Så gør dig klar til Fantasy Quest Esbjerg.
      </p>
    </div>
    <!-- Dynamically retrieved content from getDayQuest.js-->
    <div class="container-card">
      <div v-for="dayQuest in dayQuests" :key="dayQuest.id" class="day-card">
        <div class="dynamic-data">
          <div class="day-info">
            <h2 class="titletext">{{ dayQuest.title }}</h2>
            <img class="fillerimage bg-auto" :src="dayQuest.image" alt="" />
            <p class="description raleway-font text-2xl">
              {{ dayQuest.description }}
            </p>

            <a href="/familie">
              <img class="buttonimage-day" :src="dayQuest.image2" alt="" />
            </a>

            <div class="booking">
              <div class="booknuknap-dag">
                <a href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4" target="_blank">
                  <img class="ylwbutton" src="../assets/img/yellow buttentext.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Dynamically retrieved content from getQuest.js-->
      <div v-for="questItem in questItems" :key="questItem.id" class="night-card">
        <div class="dynamic-data">
          <div class="night-info">
            <h2 class="titletext">{{ questItem.title }}</h2>
            <img class="fillerimage bg-auto" :src="questItem.image" alt="" />
            <p class="description raleway-font text-2xl">
              {{ questItem.description }}
            </p>
            <a href="/aften">
              <img class="buttonimage-night" :src="questItem.image2" alt="" />
            </a>

            <div class="booking">
              <div class="booknuknap-night">
                <a href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4" target="_blank">
                  <img class="ylwbutton2" src="../assets/img/yellow buttentext.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- VIDEO PLAYER FOR THE FESTIVAL OR THE QUESTS -->
    <div class="video-container relative pb-[300px]">
      <FrontVideo />
    </div>


    <!-- Carousel -->
    <div class="presscarousel">
      <div data-hs-carousel='{
      "loadingClasses": "opacity-0",
      "isAutoPlay": true,
      "autoPlayInterval": 6000
    }' class="carouselbody relative h-screen">
        <div class="hs-carousel relative overflow-hidden w-full h-full rounded-lg">
          <div class="hs-carousel-body absolute top-0 bottom-0 left-0 flex transition-transform duration-700">
            <div class="hs-carousel-slide flex-shrink-0 h-full">
              <!-- Photos for the carousel -->
              <img class="pressfoto" src="../assets/img/musikanter.png" alt="First slide" />
            </div>
            <div class="hs-carousel-slide flex-shrink-0 w-full h-full">
              <img class="pressfoto" src="../assets/img/karaktere.png" alt="Second slide" />
            </div>
            <div class="hs-carousel-slide flex-shrink-0 w-full h-full">
              <img class="pressfoto" src="../assets/img/market.png" alt="Third slide" />
            </div>
          </div>
        </div>

        <button type="button"
          class="hs-carousel-prev absolute inset-y-0 left-0 flex justify-center items-center w-[64px] h-full text-white bg-gray-800 hover:bg-gray-600 rounded-l-lg">
          <span class="text-2xl" aria-hidden="true">
            <svg class="slide-arrow w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
            </svg>
          </span>
          <span class="sr-only">Previous</span>
        </button>
        <button type="button"
          class="hs-carousel-next absolute inset-y-0 right-0 flex justify-center items-center w-[64px] h-full text-white bg-gray-800 hover:bg-gray-600 rounded-r-lg">
          <span class="sr-only">Next</span>
          <span class="text-2xl" aria-hidden="true">
            <svg class="slide-arrow w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </button>

        <div class="hs-carousel-pagination flex justify-center absolute bottom-3 left-0 right-0 space-x-2">
          <span
            class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
          <span
            class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
          <span
            class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
        </div>
      </div>
    </div>
    <!-- END OF CAROUSEL!-->

    <!-- THIS IS THE FAQ SECTION USED WITH TAILWINDCSS -->
    <div id="faq" class="container w-full py-12">
      <div class="accordion-seg w-full">
        <div class="faqtekst">
          <h2 class="text-3xl align-start font-semibold mb-6 mt-28">
            Ofte stillede spørgsmål
          </h2>
        </div>
        <div class="accordion">
          <div class="accordion-item">
            <input type="checkbox" id="q1" class="accordion-toggle w-96" />
            <label for="q1" class="accordion-title raleway-font cursor-pointer rounded-lg">Hvor bestiller jeg
              billetter til disse Quests?
              <span class="text-2xl" aria-hidden="true">
                <svg class="arrow w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </label>
            <div class="accordion-content hidden rounded-lg">
              <p class="answer raleway-font text-bold">
                Det gør du
                <a class="text-bold underline" href="https://www.universe.com/explore?query=Fantasy%20Quest"
                  target="_blank">HER</a>
                  med linket, eller ved at trykke på knappen under hver Quest.
              </p>
            </div>
          </div>
          <div class="accordion-item">
            <input type="checkbox" id="q2" class="accordion-toggle" />
            <label for="q2" class="accordion-title raleway-font cursor-pointer rounded-lg">Er der en aldersbegrænsning?
              <span class="text-2xl" aria-hidden="true">
                <svg class="arrow w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </label>
            <div class="accordion-content hidden rounded-lg">
              <p class="answer raleway-font text-bold">
                På familie questen er der ingen aldersbegrænsning, men på aften questen er der et aldersforslag på 7+ som er i medfølge med enten forældre eller anden voksen.
              </p>
            </div>
          </div>
          <div class="accordion-item">
            <input type="checkbox" id="q3" class="accordion-toggle" />
            <label for="q3" class="accordion-title raleway-font cursor-pointer rounded-lg">Hvor lang tid tager disse to
              Quests?
              <span class="text-2xl" aria-hidden="true">
                <svg class="arrow w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </label>
            <div class="accordion-content hidden rounded-lg">
              <p class="answer raleway-font text-bold">
                Hver quest tager cirka en time og 15 minutter, alt efter hvor hurtig din gruppe er.
              </p>
            </div>
          </div>
          <div class="accordion-item">
            <input type="checkbox" id="q4" class="accordion-toggle" />
            <label for="q4" class="accordion-title raleway-font cursor-pointer rounded-lg">Kan jeg have mit kæledyr med
              rundt på Quest?
              <span class="text-2xl" aria-hidden="true">
                <svg class="arrow w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </label>
            <div class="accordion-content hidden rounded-lg">
              <p class="answer raleway-font text-bold">Ja, kæledyr er altid velkomne. Siden questen foregår udendørs, er der massere af plads til jeres kæledyr.</p>
            </div>
          </div>
          <div class="accordion-item">
            <input type="checkbox" id="q5" class="accordion-toggle" />
            <label for="q5" class="accordion-title raleway-font cursor-pointer rounded-lg">Kan jeg have min børn med?
              <span class="text-2xl" aria-hidden="true">
                <svg class="arrow w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </label>
            <div class="accordion-content hidden rounded-lg">
              <p class="answer raleway-font text-bold">Børn er altid velkomne til Fantasy Festival og Fantasy Quest. Vi har massere af forskellige ting og sjove karaktere til børnene.</p>
            </div>
          </div>
          <div class="accordion-item">
            <input type="checkbox" id="q6" class="accordion-toggle" />
            <label for="q6" class="accordion-title raleway-font cursor-pointer rounded-lg">Er disse Quests
              handicapvenlige?
              <span class="text-2xl" aria-hidden="true">
                <svg class="arrow w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </label>
            <div class="accordion-content hidden rounded-lg">
              <p class="answer raleway-font text-bold">Ja, vi prøver vores bedste hvert år at forbedre vores handicapvenlighed. For Fantasy Festivalen selv som foregår på Hovedbiblioteket, er der massere af remedier til at hjælpe jer i kørestole og andet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img class="arkivaren" src="../assets/img/Arkivaren_web.png" alt="Arkivaren" />
  </body>
</template>
<script>
// Importing the components
import CountDown from "../components/CountDown.vue";
import FrontVideo from "../components/FrontVideo.vue";

export default {
  name: "App",
  components: {
    CountDown,
    FrontVideo,
  },
};
</script>

<script setup>
// Importing the dynamic content
import getQuestsItems from "@/modules/getQuest.js";
import getDayQuest from "@/modules/getDayQuest.js";

// Get questItems from the imported function
const { questItems } = getQuestsItems();
const { dayQuests } = getDayQuest();

document.addEventListener("DOMContentLoaded", function () {
  const carouselElement = document.querySelector("[data-hs-carousel]");
  const slides = carouselElement.querySelectorAll(".hs-carousel-slide");
  const prevButton = carouselElement.querySelector(".hs-carousel-prev");
  const nextButton = carouselElement.querySelector(".hs-carousel-next");
  const paginationDots = carouselElement.querySelectorAll(
    ".hs-carousel-pagination span"
  );
  const autoPlay = JSON.parse(carouselElement.dataset.hsCarousel).isAutoPlay;
  const autoPlayInterval =
    JSON.parse(carouselElement.dataset.hsCarousel).autoPlayInterval || 6000;
  let currentIndex = 0;
  let interval;

  function updateCarousel() {
    const carouselBody = carouselElement.querySelector(".hs-carousel-body");
    carouselBody.style.transform = `translateX(-${currentIndex * 100}%)`;

    paginationDots.forEach((dot, index) => {
      dot.classList.toggle("hs-carousel-active", index === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
  }

  prevButton.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
    updateCarousel();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
    updateCarousel();
  });

  paginationDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index);
    });
  });

  if (autoPlay) {
    interval = setInterval(() => {
      nextButton.click();
    }, autoPlayInterval);

    carouselElement.addEventListener("mouseenter", () =>
      clearInterval(interval)
    );
    carouselElement.addEventListener("mouseleave", () => {
      interval = setInterval(() => {
        nextButton.click();
      }, autoPlayInterval);
    });
  }

  updateCarousel();
});


</script>

<style lang="scss" scoped>


.faqtekst {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-right: 20%;
}

a:hover .buttonimage-day,
a:hover .buttonimage-night {
  transform: scale(1.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

a:hover .ylwbutton {
  transform: scale(1.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

a:hover .ylwbutton2 {
  transform: scale(1.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.city-text {
  margin-top: 1%;
}

.ylwbutton {
  width: 100%;
  padding: 0 5% 0 5%;
  height: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.ylwbutton2 {
  width: 100%;
  padding: 0 5% 0 5%;
  height: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.answer {
  color: #083a35;
  font-weight: bold;
}

.brødtekst {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 47%;
  font-size: 1.7rem;
  // height: vh;
  // position: relative;
  // padding-right: 15%;
}

.deltag h1 {
  text-align: start;
}

.hidden {
  display: none;
}

.arrow {
  display: inline-block;
  transition: transform 0.3s;
}

.accordion {
  width: 45%;
}

.accordion-seg {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 5%;
}

.accordion-seg h2 {
  // font-size: 2.5rem;
  display: flex;
  justify-content: center;
  width: 75%;
}

.accordion-toggle:checked+.accordion-title .arrow {
  transform: rotate(90deg);
}

.relative {
  position: relative;
}

.presscarousel {
  display: flex;
  justify-content: center;
  align-items: center;
}

.carouselbody {
  width: 80%;
}

.hs-carousel-body {
  display: flex;
  width: 100%;
  transition: transform 2s ease-in-out;
}

.hs-carousel-slide {
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  justify-content: center;
}

.hs-carousel-prev,
.hs-carousel-next {
  background-color: #083a35;
  transition: 0.5s ease;
  // width: 100%;
  // height: 100%;
}

.hs-carousel-prev:hover,
.hs-carousel-next:hover {
  background-color: #355c55;
}

.pressfoto {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

.hs-carousel-pagination span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ede6d6;
  cursor: pointer;
  transition: background-color 0.3s;
}

.hs-carousel-pagination .hs-carousel-active {
  background-color: #6F9131;
  border-color: #6F9131;
}

body {
  background-color: #ede6d6;
  font-family: RomanSD, sans-serif;
}


.titletext {
  color: #ede6d6;
  padding-top: 35%;
  font-size: 3rem;
}

.description {
  color: #ede6d6;
}

.readmore {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.container {
  max-width: 100%;
}

.arkivaren {
  position: absolute;
  scale: 0.2;
  left: 40%;
  top: 380%;
}

.accordion-item {
  width: 100%;
  padding-bottom: 5%;
}

.accordion-toggle {
  display: none;
}

.accordion-title {
  display: block;
  padding: 1rem;
  background-color: #c1bbad;
  border-bottom: 1px solid #e5e7eb;
  cursor: pointer;
  width: 100%;
}

.accordion-title:hover {
  background-color: #c1bbad;
}

.accordion-content {
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.accordion-toggle:checked+.accordion-title {
  background-color: #b3ada0;
}

.accordion-toggle:checked+.accordion-title+.accordion-content {
  display: block;
  background-color: #dfd8c7;
}

.video-container {
  position: relative;
  max-height: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: -10%;
}

.responsive-iframe {
  display: block;
  margin: 0 auto;
  margin-bottom: 30%;
}

.booknuknap-dag {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center, space-between;
  position: relative;
  scale: 0.7;
  // top: 45%;
}

.booknuknap-night {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center, space-between;
  position: relative;
  scale: 0.7;
  top: 5%;
}

.countdown {
  display: flex;
  justify-content: center;
  gap: 5%;
  margin-top: 20px;
  z-index: 3;
}

.placeholder-box {
  width: 100px;
  height: 100px;
  background-color: lightgray;
  z-index: 3;
}

.night-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 500px;
  margin-bottom: 1rem;
}

.day-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 500px;
  margin-bottom: 1rem;
}

.day-info a {
  position: relative;
  display: flex;
  justify-content: center;
  width: auto;
  height: 150px;
  // top: 5%;
}

.buttonimage-day {
  position: relative;
  width: 65%;
  height: auto;
  scale: 0.8;
  margin-bottom: 1rem;
  top: 9%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.buttonimage-night {
  position: relative;
  width: 65%;
  height: auto;
  scale: 0.8;
  margin-bottom: 1rem;
  // top: 9%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.night-info a {
  position: relative;
  display: flex;
  justify-content: center;
  width: auto;
  height: 150px;
  top: 5%;
}

.button {
  padding: 10px;
  width: 70%;
  margin-top: 1rem;
}

.container-card {
  margin-top: 5%;
  display: flex;
  justify-content: space-evenly;
}

.day-card {
  max-width: 550px;
  height: 1150px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 25px rgba(12, 0, 80, 0.3);
  background-color: #355c55;
  background-image: url("../assets/img/rammesol.svg");
  background-position: center;
  background-size: 550px 1100px;
  background-repeat: no-repeat;
  border-radius: 50px;
  margin-bottom: 20%;
}

.night-card {
  max-width: 550px;
  height: 1150px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 25px rgba(12, 0, 80, 0.3);
  background-color: #355c55;
  background-image: url("../assets/img/rammemoon.svg");
  background-position: center;
  background-size: 550px 1100px;
  background-repeat: no-repeat;
  border-radius: 50px;
  margin-bottom: 15%;
}

.fillerimage {
  width: 65%;
  height: 100%;
  margin: 5% 0 5% 0;
  object-fit: cover;
}

.day-card h2 {
  font-size: 2.5rem;
  text-align: center;
  padding-top: 30%;
}

.day-card p {
  margin-top: 5%;
  max-width: 65%;
  font-size: 25px;
  text-align: left;
}

.night-card h2 {
  font-size: 2.5rem;
  padding-top: 30%;
  text-align: center;
}

.night-card p {
  // margin-left: 2%;
  margin-top: 5%;
  max-width: 65%;
  font-size: 25px;
  text-align: left;
}

.tail {
  position: absolute;
  right: 6%;
  top: -26%;
  width: 100%;
  height: 100px;
  z-index: 0;
  scale: 1.1;
}

.centertext h1 {
  position: relative;
  text-align: center;
  margin-top: 15%;
  z-index: 3;
  color: #fecd08;
  text-shadow: #083a36 3px 3px 8px;
}

.centertext p {
  position: relative;
  text-align: center;
  z-index: 3;
  color: #fecd08;
  text-shadow: #083a36 3px 3px 8px;
}

.maintekst {
  margin-top: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-colour-light);
  // width: 50%;
}

.card-frame {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 2%;
  overflow: hidden;
}

.card-frame img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  overflow: hidden;
}

@media (max-width: 1680px) {
  .arkivaren {
    display: none;
  }

  .hs-carousel-next,
  .hs-carousel-prev {
    display: none;
  }
}

@media (max-width: 1520px){
  .brødtekst{
    width: 59.5%;
  }

  .faqtekst{
    padding-right: 14%;
  }
}

@media (max-width: 1440px) {
  .deltag {
    width: 63.5%;
  }

  .brødtekst {
    width: 63.5%;
  }

  .container-card {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10%;
  }

  .day-card {
    height: 1050px;
    width: 500px;
    background-size: 500px 1000px;
  }

  .day-card h2 {
    font-size: 2.3rem;
    padding-top: 30%;
  }

  .day-card p {
    font-size: 22px;
  }

  .fillerimage {
    width: 65%;
  }

  .description {
    width: 65%;
    font-size: 22px;
  }

  .buttonimage-day {
    scale: 0.65;
    top: 0;
  }

  .day-info a {
    top: 1%;
  }

  .booknuknap-dag,
  .booknuknap-night {
    display: flex;
    flex: 1;
    align-items: center;
    // justify-content: center, space-between;
    position: relative;
    scale: 0.5;
    top: -45%;
  }

  .ylwbutton {
    padding: 0;
  }

  .deltag {
    width: 63.5%;
  }

  // Night card
  .brødtekst {
    width: 63.5%;
  }

  .night-card {
    height: 1050px;
    width: 500px;
    background-size: 500px 1000px;
    margin-bottom: 20%;
  }

  .night-card h2 {
    font-size: 2.3rem;
    padding-top: 30%;
  }

  .night-card p {
    font-size: 22px;
  }

  .fillerimage {
    width: 65%;
  }

  .description {
    width: 65%;
    font-size: 22px;
  }

  .buttonimage-night {
    scale: 0.65;
  }

  .night-info a {
    top: 9%;
  }

  .booknuknap-dag,
  .booknuknap-night {
    display: flex;
    flex: 1;
    align-items: center;
    // justify-content: center, space-between;
    position: relative;
    scale: 0.5;
    top: -40%;
  }

  .ylwbutton2 {
    position: relative;
    padding: 0;
    bottom: 0;
    top: 55%;
    scale: 1;
  }

  .pressfoto {
    height: 80%;
  }

  .video-container {
    padding-bottom: 50%;
  }

  .card {
    margin-bottom: 2rem;
  }

  .dragonhand {
    display: none;
  }

  .dragonhand2 {
    display: none;
  }

  .arkivaren {
    display: none;
  }

  .hs-carousel-pagination {
    display: none;
  }

  .faqtekst {
    display: flex;
    justify-content: center;
    padding-right: 12%;
    width: 100%;
  }

  .video-container {
    padding-bottom: 35%;
  }
}

@media (max-width: 1280px) {
  .container-card {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .pressfoto {
    height: 80%;
  }

  .video-container {
    padding-bottom: 50%;
  }

  .card {
    margin-bottom: 2rem;
  }

  .dragonhand {
    display: none;
  }

  .dragonhand2 {
    display: none;
  }

  .arkivaren {
    display: none;
  }
  .hs-carousel-pagination {
    display: none;
  }
}

@media (max-width: 1024px) {
  .container-card {
    flex-direction: column;
    justify-content: center;
    // height: 1200px;
  }

  .brødtekst {
    width: 89.5%;
  }

  .card {
    margin-bottom: 2rem;
  }

  .dragonhand {
    display: none;
  }

  .dragonhand2 {
    display: none;
  }

  .tail {
    top: -20%;
    scale: 1.1;
  }

  .accordion {
    width: 60%;
  }


  .hs-carousel-pagination {
    display: none;
  }

  .carouselbody {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .container-card {
    flex-direction: column;
    justify-content: center;
  }

  .fillerimage {
    width: 70%;
    height: 100%;
  }

  .night-card p {
    max-width: 70%;
  }

  .video-container {
    padding-bottom: 130%;
    padding-right: 15px;
    padding-left: 15px;
  }

  .presscarousel {
    height: 0;
  }

  .ylwbutton {
    position: relative;
    top: 40%;
    width: 100%;
    scale: 1;
  }

  .ylwbutton2 {
    position: relative;
    top: 40%;
    width: 100%;
    scale: 1;
  }

  .buttonimage-night {
    position: relative;
    top: -45%;
    display: flex;
    scale: 0.7;
  }

  .buttonimage-day {
    position: relative;
    display: flex;
    scale: 0.7;
  }

  .card {
    margin-bottom: 2rem;
  }

  .tail {
    top: -8%;
    scale: 1.5;
  }

  .deltag {
    width: 60%;
    font-size: 2.2rem;
    // font-weight: lighter;
    justify-content: center;
    text-align: start;
  }

  .maintekst {
    margin-top: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .brødtekst {
    width: 85%;
    font-size: 1.5rem;
    // font-weight: lighter;
    justify-content: center;
    text-align: start;
  }

  .day-card {
    height: 1100px;
    background-size: 400px 1100px;
  }

  .day-card p {
    font-size: 26px;
    // width: 55%;
    margin-top: 0%;
    max-width: 65%;
  }

  .night-card {
    height: 1100px;
    background-size: 400px 1100px;
  }

  .night-card p {
    font-size: 26px;
    margin-top: 0%;
  }

  .night-card h2 {
    font-size: 2rem;
    // padding-top: 5%
  }

  .titletext {
    font-size: 2.5rem;
    padding-top: 22%;
  }

  .day-card h2 {
    font-size: 2rem;
    // padding-top: 60%
  }

  .tail {
    // top: -9%;
    scale: 1.12;
  }

  .hs-carousel-prev {
    // width: 50px;
    // height: 50px;
    // top: 37.5%;
    display: none;
  }

  .hs-carousel-next {
    // width: 50px;
    // height: 50px;
    // top: 37.5%;
    display: none;
  }

  .accordion-seg h2 {
    width: 100%;
    max-width: 100%;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
  }

  .faqtekst {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .accordion {
    width: 65%;
  }
}

@media (max-width: 640px) {
  .centertext{
    padding-top: 5%;
  }

  .maintekst {
    margin-top: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .maintekst .deltag{
    font-size: 2rem;
    width: 85%;
  }

  .brødtekst{
    width: 85%;
    font-size: 1.5rem;
    padding-bottom: 10%;
  }

  .info{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }

  .card h1{
    padding-left: -15%;
  }

  .container-card {
    flex-direction: column;
    justify-content: center;
  }

  .card {
    margin-bottom: 2rem;
  }

  .day-card h2 {
    padding-top: 33%;
  }

  .fillerimage{
    width: 65%;
    // height: 100%;
  }

  .buttonimage-day{
    top: 5%;
  }

  .booknuknap-dag{
    top: 35%;
    scale: 0.8;
  }

  .night-card h2 {
    padding-top: 30%;
  }

  .night-card p {
    max-width: 65%;
  }

  .booknuknap-night {
    top: -40;
    scale: 0.8;
  }

  .buttonimage-night {
    top: -30%;
  }

  .tail {
    top: -9%;
    scale: 1.12;
  }

  .ylwbutton {
    scale: 0.8;
    top: -55%;
  }

  .ylwbutton2 {
    scale: 0.8;
  }

  .accordion {
    width: 100%;
  }

  .faqtekst{
    padding: 0;
  }

  .hs-carousel-prev {
    width: 20px;
    height: 20px;
    top: 11.8%;
  }

  .hs-carousel-next {
    width: 20px;
    height: 20px;
    top: 11.8%;
  }

  .slide-arrow {
    width: 20px;
    height: 20px;
  }

  .scrollbtn{
    display: none;
  }
}

@media (max-width: 480px) {
  .container-card {
    flex-direction: column;
    justify-content: center;
  }

  .card {
    margin-bottom: 2rem;
  }

  .tail {
    top: -5%;
    scale: 1.1;
  }
}

@media (max-width: 360px) {

  .accordion-title {
    font-size: 0.8rem;
  }

  .accordion-seg h2 {
    font-size: 1.5rem;
    text-align: center;
  }

  .deltag {
    font-size: 2rem;
    max-width: 95%;
  }

  .night-card {
    height: 900px;
    background-size: 365px 880px;
  }

  .day-card {
    height: 900px;
    background-size: 365px 880px;
  }

  .day-card h2 {
    font-size: 1.7rem;
  }

  .day-card p {
    font-size: 1.2rem;
    max-width: 58%;
  }

  .fillerimage {
    width: 58%;
    height: 100%;
  }

  .ylwbutton {
    top: -120%;
    scale: 0.55;
  }

  .ylwbutton2 {
   top: -5%;
    scale: 0.55;
  }

  .night-card h2 {
    font-size: 1.7rem;
  }

  .night-card p {
    font-size: 1.2rem;
    max-width: 58%;
  }

  .buttonimage-day {
    top: -20%;
    scale: 0.45;
  }

  .buttonimage-night {
    top: -33%;
    scale: 0.45;

  }

  .centertext h1 {
    font-size: 3.5rem;
    padding-top: 10%;
  }
}

@media (max-width: 270px) {
.centertext h1 {
  font-size: 2rem;
  padding-top: 10%;
}

.centertext p {
  font-size: 1.5rem;
  padding-top: 10%;
}
}
</style>
