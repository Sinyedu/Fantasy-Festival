<template>
  <main>
    <div class="centertext">
      <h1 class="text-5xl font-bold text-center">Fantasy Quest Esbjerg<br>2024</h1>
    </div>

    <div class="tail">
      <img src="../assets/img/dragontail.png" alt="Dragon Tail">
    </div>
    <div class="maintekst">
      <p class="text-center text-2xl">Er du klar til at leve dig ind i en anden verden, en magisk <br> historie, hvor du er helten, der er på en “quest” for at <br> overvinde de onde magter og redde hele verden? Så gør <br>dig klar til Fantasy Quest Esbjerg.</p>
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
  </main>
</template>

<script setup>
import { ref } from "vue";
import getQuestsItems from '@/modules/getQuest.js';

// Get questItems from the imported function
const { questItems } = getQuestsItems();
</script>


<style lang="scss" scoped>
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
  width: 70%;
  height: 300px;
  object-fit: cover;
}

.card h2 {
  font-size: 2rem;
  text-align: center;
}

.card p {
  margin-left: 2%;
  max-width: 30%;
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
