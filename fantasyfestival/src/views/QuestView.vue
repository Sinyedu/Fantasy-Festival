<template>

  <body>
    <div class="centertext">
      <h1 class="text-7xl font-bold text-center">Fantasy Quest</h1>
      <p class="text-5xl font-bold text-center">Esbjerg 2024</p>
    </div>
    <div id="countdown">
      <CountDown />
    </div>
    <div class="tail">
      <img src="../assets/img/dragontail.svg" alt="Dragon Tail">
    </div>

    <div class="maintekst">
      <h1 class="deltag flex justify-center text-5xl mb-5 font-bold">Deltag i en magisk oplevelse</h1>
      <p class="brødtekst raleway-font text-3xl">Er du klar til at leve dig ind i en anden verden, en magisk <br> historie, hvor du
        er helten, der er på en “quest” for at <br> overvinde de onde magter og redde hele verden? Så gør <br>dig klar
        til Fantasy Quest Esbjerg.</p>
    </div>
    <div class="container-card">
      <div v-for="dayQuest in dayQuests" :key="dayQuest.id" class="day-card">
        <div class="portfolio-item">
          <div class="day-info">
            <h2 class="titletext">{{ dayQuest.title }}</h2>
            <img class="fillerimage bg-auto" :src="dayQuest.image" alt="">
            <p class="description raleway-font text-2xl">{{ dayQuest.description }}</p>
            <a href="#">
              <img class="buttonimage-day" :src="dayQuest.image2" alt="">
            </a>

            <div class="booknuknap-dag">
              <a href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4" target="_blank"><img class="" src="../assets/img/yellow buttentext.png" alt=""></a>
            </div>
          </div>
        </div>
      </div>
      <div v-for="questItem in questItems" :key="questItem.id" class="night-card">
        <div class="portfolio-item">
          <div class="night-info">
            <h2 class="titletext">{{ questItem.title }}</h2>
            <img class="fillerimage bg-auto" :src="questItem.image" alt="">
            <p class="description raleway-font text-2xl">{{ questItem.description }}</p>
            <a href="#">
              <img class="buttonimage-night" :src="questItem.image2" alt="">
            </a>
            <div class="booknuknap-night">
              <a href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4" target="_blank"><img class="" src="../assets/img/yellow buttentext.png" alt=""></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="booknuknap-aften">
      <a href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4" target="_blank"><img class=""  src="../assets/img/yellow buttentext.png" alt=""></a>
    </div> -->
    <!-- VIDEO PLAYER FOR THE FESTIVAL OR THE QUESTS -->
    <div class="video-container relative">
  <img class="absolute left-0 top-0 z-10 dragonhand" src="../assets/img/dragonlefthand.svg" alt="Dragon Left">
  <iframe id="videoFrame" class="responsive-iframe mx-auto flex justify-center" width="1200" height="720"
    src="https://www.youtube.com/embed/LHXuOTdFvNA" title="Peaky Blinders Reenactment" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  <img class="absolute right-0 top-0 z-10 dragonhand2" src="../assets/img/dragonrighthand.svg" alt="Dragon Right">
</div>


    <!-- Slider -->
    <div data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isAutoPlay": true,
    "autoPlayInterval": 3000
  }' class="relative w-full h-screen">
      <div class="hs-carousel relative overflow-hidden w-full h-full rounded-lg">
        <div class="hs-carousel-body absolute top-0 bottom-0 left-0 flex transition-transform duration-700">
          <div class="hs-carousel-slide flex-shrink-0 w-full h-full">
            <img class="pressfoto w-full h-full" src="../assets/img/pressefotos1.png" alt="First slide">
          </div>
          <div class="hs-carousel-slide flex-shrink-0 w-full h-full">
            <img class="pressfoto w-full h-full" src="../assets/img/pressefotos2.png" alt="Second slide">
          </div>
          <div class="hs-carousel-slide flex-shrink-0 w-full h-full">
            <img class="pressfoto w-full h-full" src="../assets/img/pressefotos3.png" alt="Third slide">
          </div>
        </div>
      </div>

      <button type="button"
        class="hs-carousel-prev absolute inset-y-0 left-0 flex justify-center items-center w-[64px] h-full text-white bg-gray-800 hover:bg-gray-600 rounded-l-lg">
        <span class="text-2xl" aria-hidden="true">
          <svg class="w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
          </svg>
        </span>
        <span class="sr-only">Previous</span>
      </button>
      <button type="button"
        class="hs-carousel-next absolute inset-y-0 right-0 flex justify-center items-center w-[64px] h-full text-white bg-gray-800 hover:bg-gray-600 rounded-r-lg">
        <span class="sr-only">Next</span>
        <span class="text-2xl" aria-hidden="true">
          <svg class="w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
<!-- END OF CAROUSEL!-->

    <!-- THIS IS THE FAQ SECTION USED WITH TAILWINDCSS -->
    <div class="container mx-auto py-12">
      <div class="mx-auto accordion-seg">
        <h2 class="text-3xl align-start font-semibold mb-6 mt-28">Ofte stillede spørgsmål</h2>
        <div class="accordion">
          <div class="accordion-item">
            <input type="checkbox" id="q1" class="accordion-toggle w-96">
            <label for="q1" class="accordion-title cursor-pointer rounded-lg">Hvordan bestiller jeg billetter?
              <span class="text-2xl" aria-hidden="true">
                <svg class="arrow w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </label>
            <div class="accordion-content hidden rounded-lg">
              <p class="answer raleway-font text-bold">Det gør du på <a class="text-bold underline"
                  href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4"
                  target="_blank">HER!</a></p>
            </div>
          </div>
          <div class="accordion-item">
            <input type="checkbox" id="q2" class="accordion-toggle">
            <label for="q2" class="accordion-title cursor-pointer rounded-lg">Er der en aldersbegrænsning på Aften Quest?
              <span class="text-2xl" aria-hidden="true">
                <svg class="arrow w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </label>
            <div class="accordion-content hidden rounded-lg">
              <p class="answer raleway-font text-bold ">Ja, aldersgrænsen er på 16+</p>
            </div>
          </div>
          <div class="accordion-item">
            <input type="checkbox" id="q3" class="accordion-toggle">
            <label for="q3" class="accordion-title cursor-pointer rounded-lg">Hvor lang tid tager disse to Quests?
              <span class="text-2xl" aria-hidden="true">
                <svg class="arrow w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </label>
            <div class="accordion-content hidden rounded-lg">
              <p class="answer raleway-font text-bold">Vores Quests tager en time og 15 minutter hver!</p>
            </div>
          </div>
          <div class="accordion-item">
            <input type="checkbox" id="q4" class="accordion-toggle">
            <label for="q4" class="accordion-title cursor-pointer rounded-lg">Kan jeg have min hund med rundt på Quest?
              <span class="text-2xl" aria-hidden="true">
                <svg class="arrow w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </label>
            <div class="accordion-content hidden rounded-lg">
              <p class="answer raleway-font text-bold">Ja, det kan du godt!</p>
            </div>
          </div>
          <div class="accordion-item">
            <input type="checkbox" id="q5" class="accordion-toggle">
            <label for="q5" class="accordion-title cursor-pointer rounded-lg">Kan jeg have en barnevogn med?
              <span class="text-2xl" aria-hidden="true">
                <svg class="arrow w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </label>
            <div class="accordion-content hidden rounded-lg">
              <p class="answer raleway-font text-bold">Ja, det kan du godt!</p>
            </div>
          </div>
          <div class="accordion-item">
            <input type="checkbox" id="q6" class="accordion-toggle">
            <label for="q6" class="accordion-title cursor-pointer rounded-lg">Er disse Quests handicapvenlige?
              <span class="text-2xl" aria-hidden="true">
                <svg class="arrow w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </label>
            <div class="accordion-content hidden rounded-lg">
              <p class="answer raleway-font text-bold">Ja, det er de!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img class="arkivaren" src="../assets/img/Arkivaren_web.png" alt="Arkivaren">
  </body>
</template>
<script>
import CountDown from '../components/CountDown.vue';
export default {
  name: 'App',
  components: {
    CountDown
  }
};
</script>


<script setup>
import getQuestsItems from '@/modules/getQuest.js';
import getDayQuest from '@/modules/getDayQuest.js';


// Get questItems from the imported function
const { questItems } = getQuestsItems();
const { dayQuests } = getDayQuest();


document.addEventListener('DOMContentLoaded', function () {
  const carouselElement = document.querySelector('[data-hs-carousel]');
  const slides = carouselElement.querySelectorAll('.hs-carousel-slide');
  const prevButton = carouselElement.querySelector('.hs-carousel-prev');
  const nextButton = carouselElement.querySelector('.hs-carousel-next');
  const paginationDots = carouselElement.querySelectorAll('.hs-carousel-pagination span');
  const autoPlay = JSON.parse(carouselElement.dataset.hsCarousel).isAutoPlay;
  const autoPlayInterval = JSON.parse(carouselElement.dataset.hsCarousel).autoPlayInterval || 3000;
  let currentIndex = 0;
  let interval;

  function updateCarousel() {
    const carouselBody = carouselElement.querySelector('.hs-carousel-body');
    carouselBody.style.transform = `translateX(-${currentIndex * 100}%)`;

    paginationDots.forEach((dot, index) => {
      dot.classList.toggle('hs-carousel-active', index === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
  });

  paginationDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
    });
  });

  if (autoPlay) {
    interval = setInterval(() => {
      nextButton.click();
    }, autoPlayInterval);

    carouselElement.addEventListener('mouseenter', () => clearInterval(interval));
    carouselElement.addEventListener('mouseleave', () => {
      interval = setInterval(() => {
        nextButton.click();
      }, autoPlayInterval);
    });
  }

  updateCarousel();
});

</script>

<style lang="scss" scoped>
.answer{
  color: #083a35;
  font-weight: bold;
}

.brødtekst {
  display: flex;
  justify-content: center;
  
}

.deltag h1 {
  text-align: start;
}

.hidden {
  display: none;
}

.arrow{
  display: inline-block;
  transition: transform 0.3s;
  margin-top: 1%;
}

.accordion-seg{
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
}

.accordion-seg h2{
  display: flex;
  flex-direction: column;
  // align-items: center;
  width: 36%;
}

.accordion-toggle:checked + .accordion-title .arrow{
  transform: rotate(90deg);
}

.relative {
  position: relative;
}

.carousel {
  margin-top: 21%;
  z-index: 9999;
}

.hs-carousel-body {
  display: flex;
  width: 100%;
  transition: transform 2s ease-in-out;
  background-color: #ede6d6;
}

.hs-carousel-slide {
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
}

.pressfoto {
  object-fit: fit;
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
  background-color: blue;
  border-color: blue;
}


body {
  background-color: #ede6d6;
  font-family: RomanSD, sans-serif;
}

h2.text-3xl.font-semibold.mb-6.mt-32 {
  margin-top: 12.5rem;
}

.titletext {
  color: #EDE6D6;
  padding-top: 30%;
}


.description {
  color: #EDE6D6;
}

.readmore {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.arkivaren {
  position: absolute;
  scale: 0.2;
  left: 40%;
  top: 420%;
}

.accordion-item {
  // margin-bottom: 1rem;
  width: 100%;
  padding-bottom: 5%; 
}

.accordion-toggle {
  display: none;
}

.accordion-title {
  display: block;
  padding: 1rem;
  background-color: #C1BBAD;
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
  max-width: 80%;
  max-height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-top: 10%;
}

.responsive-iframe {
  display: block;
  margin: 0 auto;
  margin-bottom: 30%;
}

.dragonhand {
  position: absolute;
  left: -8%;
  top: -13%;
  z-index: 10;
  pointer-events: none;
}

.dragonhand2 {
  position: absolute;
  right: -33%;
  top: -13%;
  z-index: 10;
  pointer-events: none;
}

.booknuknap-dag {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  justify-content: space-between;
  padding-bottom: 15%;
  scale: .65;
  top: 45%;
}

.booknuknap-night {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  justify-content: space-between;
  padding-bottom: 15%;
  scale: .65;
  top: 50%;
}

.booknu2 {
  width: 25%;
  padding: 10px;
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

.day-info a{
  position: relative;
  display: flex;
  justify-content: center;
  width: auto;
  height: 150px;
  top: 9%;
}

.buttonimage-day {
  position: relative;
  width: 327.24px;
  height: 89.44px;
  scale: 1;
  top: 9%;
}

.night-info a{
  position: relative;
  display: flex;
  justify-content: center;
  width: auto;
  height: 150px;
  top: 15%;
}

.buttonimage-night {
  position: relative;
  width: 327.24px;
  height: 89.44px;
  scale: 1;
  top: 15%;
}

.button {
  padding: 10px;
  width: 70%;
  margin-top: 1rem;

}

.container-card {
  margin-top: 5%;
  margin-bottom: 5%;
  display: flex;
  justify-content: space-evenly;
}

.day-card{
  max-width: 450px;
  height: 1050px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 25px rgba(12, 0, 80, 0.3);
  background-color: #355C55;
  background-image: url("../assets/img/rammesol.svg");
  background-position: center;
  background-size: 380px 1080px;
  background-repeat: no-repeat;
  border-radius: 50px;
  margin-bottom: 20%;
}

.night-card {
  max-width: 450px;
  height: 1050px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 25px rgba(12, 0, 80, 0.3);
  background-color: #355C55;
  background-image: url("../assets/img/rammemoon.svg");
  background-position: center;
  background-size: 380px 1080px;
  background-repeat: no-repeat;
  border-radius: 50px;
  margin-bottom: 15%;
}

.fillerimage {
  width: 65%;
  height: 350px;
  object-fit: cover;
}

.readbutton {
  width: 100%;
  height: 150px;
}

.whtbutton {
  width: 100%;
  height: auto;
}

.day-card h2 {
  font-size: 2rem;
  text-align: center;
}

.day-card p {
  margin-left: 2%;
  margin-top: 5%;
  max-width: 70%;
  text-align: left;
  margin-bottom: 1rem;
}

.night-card h2 {
  font-size: 2rem;
  text-align: center;
}

.night-card p {
  margin-left: 2%;
  margin-top: 5%;
  max-width: 70%;
  text-align: left;
  margin-bottom: 1rem;
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
  color: #FECD08;
  text-shadow: #083a36 5px 5px 8px;
}

.centertext p {
  position: relative;
  text-align: center;
  z-index: 3;
  color: #FECD08;
  text-shadow: #083a36 5px 5px 8px;
}
.maintekst {
  margin-top: 30%;
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

@media (max-width: 1820px) {

  .dragonhand {
    display: none;
  }

  .dragonhand2 {
    display: none;
  }

}

@media (max-width: 1600px) {
  .dragonhand {
    display: none;
  }

  .dragonhand2 {
    display: none;
  }
}

@media (max-width: 1280px) {
  .container-card {
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
}

@media (max-width: 1024px) {
  .container-card {
    flex-direction: column;
    justify-content: center;
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
    top: -20%
  }

}

@media (max-width: 768px) {
  .container-card {
    flex-direction: column;
    justify-content: center;
  }

  .card {
    margin-bottom: 2rem;
  }

  .tail {
    top: -8%;
  }
}

@media (max-width: 640px) {
  .container-card {
    flex-direction: column;
    justify-content: center;
  }

  .card {
    margin-bottom: 2rem;
  }

  .tail {
    top: -4%;
    scale: 1.4;
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
    top: -4%;
    scale: 1.2;
  }
}
</style>