<template>
  <main>
    <div class="centertext">
      <h1 class="text-5xl font-bold text-center">Fantasy Quest Esbjerg<br>2024</h1>
    </div>

    <div class="countdown">
      <div class="placeholder-box"></div>
      <div class="placeholder-box"></div>
      <div class="placeholder-box"></div>
      <div class="placeholder-box"></div>
    </div>


    <div class="tail">
      <img src="../assets/img/dragontail.svg" alt="Dragon Tail">
    </div>
    <div class="maintekst">
      <p class="text-center text-2xl">Er du klar til at leve dig ind i en anden verden, en magisk <br> historie, hvor du
        er helten, der er på en “quest” for at <br> overvinde de onde magter og redde hele verden? Så gør <br>dig klar
        til Fantasy Quest Esbjerg.</p>
    </div>
    <div class="container-card">
      <div v-for="questItem in questItems" :key="questItem.id" class="card">
        <div class="portfolio-item">
          <div class="info">
            <h2 class="titletext">{{ questItem.title }}</h2>
            <img class="bg-auto" :src="questItem.image" alt="">
            <p class="description">{{ questItem.description }}</p>
            <div class="readmore">
            <a href=""><img src="../assets/img/papperbutten.svg" alt="Paper Button"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- VIDEO PLAYER FOR THE FESTIVAL OR THE QUESTS -->
    <div class="video-container relative">
      <img class="absolute left-0 top-0 z-10 dragonhand" src="../assets/img/dragonlefthand.svg" alt="Dragon Left">
      <iframe class="responsive-iframe mx-auto flex justify-center" width="1200" height="720"
        src="https://www.youtube.com/embed/LHXuOTdFvNA" title="Peaky Blinders Reenactment" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <img class="absolute right-0 top-0 z-10 dragonhand2" src="../assets/img/dragonrighthand.svg" alt="Dragon Right">
    </div>

    <!-- THIS IS THE FAQ SECTION USED WITH TAILWINDCSS -->
    <div class="container mx-auto py-12">
      <div class="max-w-lg mx-auto">
        <h2 class="text-3xl font-semibold mb-6 mt-32">Ofte stillede spørgsmål</h2>
        <div class="accordion">
          <div class="accordion-item">
            <input type="checkbox" id="q1" class="accordion-toggle">
            <label for="q1" class="accordion-title cursor-pointer">Hvordan bestiller jeg billetter?</label>
            <div class="accordion-content hidden">
              <p class="text-bold text-black">Det gør du på <a class="text-bold underline"
                  href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4"
                  target="_blank">HER!</a></p>
            </div>
          </div>
          <div class="accordion-item">
            <input type="checkbox" id="q2" class="accordion-toggle">
            <label for="q2" class="accordion-title cursor-pointer">Er der en aldersbegrænsning på Aften Quest?</label>
            <div class="accordion-content hidden">
              <p class="text-bold text-black">Ja, aldersgrænsen er på 16+</p>
            </div>
          </div>
          <div class="accordion-item">
            <input type="checkbox" id="q3" class="accordion-toggle">
            <label for="q3" class="accordion-title cursor-pointer">Hvor lang tid tager disse to Quests?</label>
            <div class="accordion-content hidden">
              <p class="text-bold text-black">Vores Quests tager en time og 15 minutter hver!</p>
            </div>
          </div>
          <div class="accordion-item">
            <input type="checkbox" id="q4" class="accordion-toggle">
            <label for="q4" class="accordion-title cursor-pointer">Kan jeg have min hund med rundt på Quest?</label>
            <div class="accordion-content hidden">
              <p class="text-bold text-black">Ja, det kan du godt!</p>
            </div>
          </div>
          <div class="accordion-item">
            <input type="checkbox" id="q5" class="accordion-toggle">
            <label for="q5" class="accordion-title cursor-pointer">Kan jeg have en barnevogn med?</label>
            <div class="accordion-content hidden">
              <p class="text-bold text-black">Ja, det kan du godt!</p>
            </div>
          </div>
          <div class="accordion-item">
            <input type="checkbox" id="q6" class="accordion-toggle">
            <label for="q6" class="accordion-title cursor-pointer">Er disse Quests handicapvenlige?</label>
            <div class="accordion-content hidden">
              <p class="text-bold text-black">Ja, det er de!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img class="arkivaren" src="../assets/img/Arkivaren_web.png" alt="Arkivaren">

  </main>
</template>
<script setup>
import { ref } from "vue";
import getQuestsItems from '@/modules/getQuest.js';

// Get questItems from the imported function
const { questItems } = getQuestsItems();
</script>

<style lang="scss" scoped>
h2.text-3xl.font-semibold.mb-6.mt-32 {
  margin-top: 12.5rem;
}


.readmore {
  display: flex;
  justify-content: center;
}

.booknutext {
  position: absolute;
  left: 48%;
  top: 35%;
  transform: translate(-50%, -50%);
  z-index: 10;

}


.arkivaren {
  position: absolute;
  scale: 0.2;
  left: 40%;
  top: 180%;
}

.accordion-toggle {
  display: none;
}

.accordion-title {
  display: block;
  padding: 1rem;
  background-color: #f3f4f6;
  border-bottom: 1px solid #e5e7eb;
  cursor: pointer;
}

.accordion-title:hover {
  background-color: #e5e7eb;
}

.accordion-content {
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.accordion-toggle:checked+.accordion-title {
  background-color: #e5e7eb;
}

.accordion-toggle:checked+.accordion-title+.accordion-content {
  display: block;
}


.video-container {
  position: relative;
  max-width: 80%;
  /* Adjust as needed */
  max-height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
}

.responsive-iframe {
  display: block;
  margin: 0 auto;
}

.dragonhand {
  position: absolute;
  left: -8%;
  top: -25%;
  z-index: 10;
  /* Ensure hands are above the video */
}

.dragonhand2 {
  position: absolute;
  right: -33%;
  top: -25%;
  z-index: 10;
  /* Ensure hands are above the video */
}

.booknuknap {
  scale: .5;
  width: 200%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-evenly;
  padding-bottom: 15%;
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
  /* Adjust margin as needed */
}

.placeholder-box {
  width: 100px;
  height: 100px;
  background-color: lightgray;
}

.bg-auto {
  overflow: hidden;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
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

.card {
  max-width: 500px;
  height: auto;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 25px rgba(12, 0, 80, 0.3);
}

.card img {
  width: 100%;
  height: 350px;
  object-fit: cover;
}

.card h2 {
  font-size: 2rem;
  text-align: center;
}

.card p {
  margin-left: 2%;
  max-width: 50%;
  text-align: left;
  margin-bottom: 1rem;
}

.tail {
  position: absolute;
  right: 6%;
  top: -26%;
  width: 100%;
  height: 100px;
  z-index: -1;
  scale: 1.1;
}

.centertext {
  text-align: center;
  margin-top: 15%;
}

.maintekst {
  margin-top: 30%;
}

@media (max-width: 1024px) {
  .container-card {
    flex-direction: column;
    justify-content: center;
  }

  .card {
    margin-bottom: 2rem;
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
}
</style>
