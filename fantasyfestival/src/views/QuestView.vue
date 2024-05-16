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
      <img src="../assets/img/dragontail.png" alt="Dragon Tail">
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
            <button class="button bg-blue-500 text-white rounded-full">Læs mere</button>
          </div>
        </div>
      </div>
    </div>
    <div class="relative">
      <img class="absolute left-0 top-0 z-10 dragonhand" src="../assets/img/dragonleft.png" alt="Dragon Left">
      <iframe id="youtubePlayer" width="1200" height="700" src="https://www.youtube.com/embed/LHXuOTdFvNA"
        title="Peaky Blinders Reenactment" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <img class="absolute right-0 top-0 z-10 dragonhand2" src="../assets/img/dragonright.png" alt="Dragon Right">
    </div>
    <div class="container mx-auto py-12">
      <div class="max-w-lg mx-auto">
        <h2 class="text-3xl font-semibold mb-6">Ofte stillede spørgsmål</h2>
        <div class="accordion">
          <div class="accordion-item">
            <div class="accordion-title cursor-pointer">Hvordan bestiller jeg billetter?</div>
            <div class="accordion-content hidden"><p class="text-bold text-white">Det gør du på <a class="text-bold underline" href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4" target="_blank">HER!</a></p></div>
          </div>
          <div class="accordion-item">
            <div class="accordion-title cursor-pointer">Er der en aldersbegrænsning på Aften Quest?</div>
            <div class="accordion-content hidden"><p class="text-bold text-white">Lige nu er aldersgrænsen 16+</p></div>
          </div>
          <div class="accordion-item">
            <div class="accordion-title cursor-pointer">Hvor lang tid tager disse to Quests?</div>
            <div class="accordion-content hidden"><p class="text-bold text-white">Hver deres Quest tager 2+ timer</p></div>
          </div>
          <div class="accordion-item">
            <div class="accordion-title cursor-pointer">Kan jeg have mit kæledyr med rundt på Quest?</div>
            <div class="accordion-content hidden"><p class="text-bold text-white">Ja!</p></div>
          </div>
          <div class="accordion-item">
            <div class="accordion-title cursor-pointer">Kan jeg have en barnevogn med?</div>
            <div class="accordion-content hidden"><p class="text-bold text-white">Ja, børn er altid velkommen! Vi ville dog vare imod Aften Questen</p></div>
          </div>
          <div class="accordion-item">
            <div class="accordion-title cursor-pointer">Er disse Quests handicapvenlige?</div>
            <div class="accordion-content hidden"><p class="text-bold text-white">Vores Quests er handicapvenlige og støttende for andre!</p></div>
          </div>
        </div>
      </div>
    </div>


  </main>
</template>
<script>
import anime from 'animejs';
export default {
  mounted() {
    const accordionTitles = document.querySelectorAll('.accordion-title');

    accordionTitles.forEach(title => {
      title.addEventListener('click', () => {
        const content = title.nextElementSibling;

        // Toggle visibility and animate height
        content.classList.toggle('hidden');
        anime({
          targets: content,
          height: content.classList.contains('hidden') ? 0 : 'auto',
          duration: 1200,
          easing: 'easeInOutQuad'
        });
      });
    });
  }
};
</script>
<script setup>
import { ref } from "vue";
import getQuestsItems from '@/modules/getQuest.js';

// Get questItems from the imported function
const { questItems } = getQuestsItems();
</script>

<style lang="scss" scoped>
.accordion-item {
  border-bottom: 1px solid #e5e7eb;
}

.accordion-title {
  padding: 1rem;
  background-color: #C1BBAD;
}

.accordion-content {
  padding: 1rem;
  background-color: #0f0044;
}

iframe {
  display: flex;
  position: relative;
  right: 20.8%;
  margin-top: 7%;
  scale: 1.1;
}

.relative {
  display: flex;
  justify-content: center;
}

.dragonhand {
  scale: .5;
  position: inherit;
}

.dragonhand2 {
  scale: .5;
}

.booknu {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-evenly;
  left: 15%;
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
  right: 5%;
  top: -26%;
  width: 100%;
  height: 100px;
  z-index: -1;
}

.centertext {
  text-align: center;
  margin-top: 15%;
}

.maintekst {
  margin-top: 30%;
}

</style>
