<script setup>
</script>

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
    <div :key="questItems" class="card">
        <div class="portfolio-item flex items-center">
          <div class="info mr-4">
          <img class="object-fill" :src="questItems.image" alt="">
            <h2 class="text-white">{{ questItems.title }}</h2>
            <p class="text-white">{{ questItems.description }}</p>
            <p :class="questItems.stack">{{ questItems.stack }}</p>
          </div>


        </div>
        <div class="projectlink" v-if="questItems.link">
          <a class="text-white font-bold" :href="questItems.link">LINK FOR THE PROJECT</a>
        </div>
        <div v-else>

        </div>
      </div>
  </main>
</template>

<script setup>
const { questItems } = getQuestsItems()
import getQuestsItems from '@/modules/getQuest.js'

</script>
<style lang="scss" scoped>
.card {
  width: 100%;
  max-width: 700px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 1rem auto;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  max-width: 100%;
  height: auto;
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
