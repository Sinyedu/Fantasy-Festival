
<template>
  <div class="herocontainer">
    <div class="hero">
      <img class="" src="../assets/img/dragonnight.png" alt="Dragen Gnist">      
    </div>
    <div class="hands">
      <img src="../assets/img/dragonhands.png" alt="Gnist's hænder">
    </div>
  </div>

  <div class="titlecontainer">
    <div class="centertext">
      <h1 class="font-bold text-3xl text-center"> Aften Questen!</h1>
    </div>
  </div>

  <div class="questcontainer">
    <div class="tagline">
      <h1 class="font-bold text-3xl">Er du til uhygge og svære gåder?</h1>
    </div>

    <div class="infotext">
      <p class="text-2xl">
        Når tusmørket begynder at sænke sig over Esbjerg, skrues sværhedsgraden i AftenQuesten op. 
        <br><br>
        Nu skal der virkelig tænkes kreativt og løses opgaver, der kræver både mod, samarbejde og snilde for at I kan gennemføre questen og redde Esbjerg.
        <br><br>
        Er du vild med at løse gåder og knække koder, så må du ikke snyde dig selv for denne ultimative oplevelse.
        <br><br>
        Vi sender dig og vennerne ud på jeres ultimative eventyr i Esbjergs gader og stræder. Her vil I blive nødt til at samarbejde og udtænke nye løsninger for at gennemføre AftenQuesten.
      </p>
    </div>
  </div>

  <div class="container-card">
    <div v-for="infoData in infoDatas" :key="infoData.id" class="card">
      <div class="info-data">
        <div class="info">
          <h2 class="titletext">{{ infoData.title }}</h2>
          <p class="date">{{ infoData.date }}</p>
          <p class="time">{{ infoData.time }}</p>
          <p class="location">{{ infoData.location }}</p>
          <p class="duration">{{ infoData.duration }}</p>
          <p class="ages">{{ infoData.ages }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import getInfosDatas from '@/modules/getInfo.js';
  const { infoDatas } = getInfosDatas();
</script>

<style lang="scss" scoped>
.herocontainer{
  display: flex;
  width: 100%;
  justify-content: center;
}

.hero{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.hands{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100vh;
  margin-top: 22%;
  z-index: 2;
}

.questcontainer{
  // display: flex;
  // justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
  padding: 0 5% 0 5%;
  margin-top: 12%;
}

.infotext{
  margin-top: 3%;
  width: 50%;
}

.container-card {
  margin-top: 5%;
  display: flex;
  justify-content: space-evenly;
}

.card {
  max-width: 500px;
  height: 100px;
  align-items: center; 
  justify-content: center;
  box-shadow: 0 0 25px rgba(12, 0, 80, 0.3);
}

.card h2 {
  font-size: 2rem;
  text-align: center;
}

.card p {
  margin-left: 2%;
  margin-top: 1rem;
  max-width: 95%;
  text-align: left;
}
</style>